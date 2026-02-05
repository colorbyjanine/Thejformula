import { NextRequest, NextResponse } from "next/server";

// Store requests in memory for now (in production, use a database)
const requests: Array<{
  id: string;
  name: string;
  contact: string;
  service: string;
  dates: string[];
  notes: string;
  timestamp: string;
  source: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, contact, service, date1, date2, date3, notes, timestamp, source } = body;

    // Create request object
    const bookingRequest = {
      id: `req_${Date.now()}`,
      name: name || "Unknown",
      contact: contact || "Not provided",
      service: service || "Not specified",
      dates: [date1, date2, date3].filter(Boolean),
      notes: notes || "",
      timestamp: timestamp || new Date().toISOString(),
      source: source || "website",
    };

    // Store the request
    requests.push(bookingRequest);

    // Format message for Telegram notification
    const telegramMessage = `
📅 NEW BOOKING REQUEST

👤 Name: ${bookingRequest.name}
📱 Contact: ${bookingRequest.contact}
💇 Service: ${bookingRequest.service}

📆 Preferred Dates:
${bookingRequest.dates.map((d, i) => `   ${i + 1}. ${d}`).join("\n")}

${bookingRequest.notes ? `📝 Notes: ${bookingRequest.notes}` : ""}

🔗 Source: ${bookingRequest.source}
⏰ ${new Date(bookingRequest.timestamp).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}
    `.trim();

    // Send to OpenClaw gateway for Telegram notification
    // This uses the OpenClaw message API to notify Janine
    const gatewayUrl = process.env.OPENCLAW_GATEWAY_URL || "http://localhost:3033";
    const gatewayToken = process.env.OPENCLAW_GATEWAY_TOKEN;

    if (gatewayToken) {
      try {
        await fetch(`${gatewayUrl}/api/message`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${gatewayToken}`,
          },
          body: JSON.stringify({
            action: "send",
            channel: "telegram",
            target: process.env.JANINE_TELEGRAM_ID || "8585187316",
            message: telegramMessage,
          }),
        });
        console.log("[Booking] Telegram notification sent");
      } catch (notifyError) {
        console.error("[Booking] Failed to send Telegram notification:", notifyError);
        // Don't fail the request if notification fails
      }
    }

    // Create notification in HQ
    try {
      const baseUrl = request.headers.get("host") || "localhost:3000";
      const protocol = baseUrl.includes("localhost") ? "http" : "https";
      await fetch(`${protocol}://${baseUrl}/api/hq/notifications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          title: "New Booking Request",
          body: `${bookingRequest.name} wants ${bookingRequest.service}`,
        }),
      });
    } catch (notifError) {
      console.error("[Booking] Failed to create notification:", notifError);
    }

    // Also log to console for debugging
    console.log("[Booking] New request received:", bookingRequest);

    return NextResponse.json({
      success: true,
      message: "Booking request received",
      requestId: bookingRequest.id,
    });
  } catch (error) {
    console.error("[Booking] API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process booking request" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Protected endpoint - requires API key
  const apiKey = request.headers.get("x-api-key");
  const validKey = "5134b002a6d5a155361206ae9289700d420f1929ee4bb0a1177032fd58e61d03";
  
  // Allow requests from janine-hq.vercel.app (same origin) or with valid API key
  const origin = request.headers.get("origin") || "";
  const isFromHQ = origin.includes("janine-hq.vercel.app");
  
  if (!isFromHQ && apiKey !== validKey) {
    return NextResponse.json({
      status: "Booking API active",
      recentRequests: [], // Don't expose data without auth
    });
  }
  
  return NextResponse.json({
    status: "Booking API active",
    recentRequests: requests.slice(-10),
  });
}

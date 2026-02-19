import { NextRequest, NextResponse } from "next/server";

// Use Vercel KV if available, otherwise fallback to memory (will lose data on cold start)
// For production, set up Vercel KV: https://vercel.com/docs/storage/vercel-kv

let memoryRequests: any[] = [];

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
      status: "pending",
    };

    // Store in memory (will persist during warm function instances)
    memoryRequests.push(bookingRequest);
    // Keep only last 100 requests
    if (memoryRequests.length > 100) {
      memoryRequests = memoryRequests.slice(-100);
    }

    // Format message for notification
    const telegramMessage = `
📅 NEW BOOKING REQUEST

👤 Name: ${bookingRequest.name}
📱 Contact: ${bookingRequest.contact}
💇 Service: ${bookingRequest.service}

📆 Preferred Dates:
${bookingRequest.dates.map((d: string, i: number) => `   ${i + 1}. ${d}`).join("\n")}

${bookingRequest.notes ? `📝 Notes: ${bookingRequest.notes}` : ""}

🔗 Source: ${bookingRequest.source}
⏰ ${new Date(bookingRequest.timestamp).toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}
    `.trim();

    // Try to send notification via multiple methods
    
    // Method 1: Try to send via my server webhook (if available)
    try {
      // This webhook endpoint can be called from anywhere
      await fetch("https://thejformula.com/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          message: telegramMessage,
          booking: bookingRequest,
        }),
      });
    } catch (e) {
      console.log("[Booking] Notify endpoint not available");
    }

    // Method 2: Store for later retrieval by HQ
    console.log("[Booking] ✅ Request saved:", bookingRequest.id);
    console.log("[Booking] Message:", telegramMessage);

    return NextResponse.json({
      success: true,
      message: "Booking request received! Janine will get back to you soon.",
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
  // Allow CORS for HQ dashboard
  const origin = request.headers.get("origin") || "";
  
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-api-key",
  };

  // Check for API key for sensitive operations
  const apiKey = request.headers.get("x-api-key");
  const validKey = process.env.HQ_API_KEY || "5134b002a6d5a155361206ae9289700d420f1929ee4bb0a1177032fd58e61d03";
  
  // Allow from HQ or with API key
  const isFromHQ = origin.includes("janine-hq");
  const isAuthorized = isFromHQ || apiKey === validKey;
  
  if (!isAuthorized) {
    return NextResponse.json({
      success: true,
      requests: [],
      total: 0,
      message: "No requests available",
    }, { headers });
  }
  
  // Return newest first
  const sortedRequests = [...memoryRequests].reverse();
  
  return NextResponse.json({
    success: true,
    requests: sortedRequests,
    // Also include as recentRequests for backward compatibility
    recentRequests: sortedRequests,
    total: memoryRequests.length,
    pending: memoryRequests.filter(r => r.status === "pending").length,
  }, { headers });
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-api-key",
    },
  });
}

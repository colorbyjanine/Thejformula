import { NextRequest, NextResponse } from "next/server";

// Webhook URL for Janine HQ (appointment notifications)
const HQ_WEBHOOK = "https://janine-hq.vercel.app/api/appointments";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, userName, userContact, timestamp } = body;

    // Generate a helpful auto-reply based on common questions
    let reply = "Thanks for your message! I'll make sure Janine sees this and we'll get back to you soon. 🤍";

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much")) {
      reply = "Great question! Pricing depends on your hair's current state and the look you're going for. For an accurate quote, it's best to book a consultation or send a photo of your hair. Would you like to book?";
    } else if (lowerMessage.includes("available") || lowerMessage.includes("appointment") || lowerMessage.includes("book")) {
      reply = "I'd love to help you book! You can check Janine's availability and book directly here: vagaro.com/volumeiiisalon — or let me know what day works for you and I'll check for you!";
    } else if (lowerMessage.includes("balayage")) {
      reply = "Balayage is one of Janine's specialties! 🎨 It typically takes 2-4 hours depending on your hair length and desired result. Want to book a consultation to discuss your perfect look?";
    } else if (lowerMessage.includes("color correction")) {
      reply = "Color corrections are Janine's expertise! These require a consultation first so she can assess your hair and create a game plan. It's usually a longer appointment (3-6 hours). Want me to help you book a consultation?";
    } else if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("address")) {
      reply = "Janine works at Volume III Salon! You can find the full address and directions when you book through Vagaro: vagaro.com/volumeiiisalon";
    } else if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
      reply = "Hey there! 👋 Thanks for reaching out. Are you looking to book an appointment, or do you have questions I can help with?";
    }

    // Send to Janine HQ as appointment request (if it looks like a booking inquiry)
    const isAppointmentRelated = lowerMessage.includes("book") || 
                                  lowerMessage.includes("appointment") || 
                                  lowerMessage.includes("available") ||
                                  lowerMessage.includes("consultation") ||
                                  lowerMessage.includes("schedule") ||
                                  userContact; // If they provided contact info, it's likely serious

    if (isAppointmentRelated || userContact) {
      try {
        await fetch(HQ_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: userName || "Website Visitor",
            email: userContact || "",
            message: message,
            source: "thejformula.com/chat",
            timestamp: timestamp || new Date().toISOString()
          })
        });
        console.log("[Chat] Sent appointment request to HQ");
      } catch (webhookError) {
        console.error("[Chat] Failed to notify HQ:", webhookError);
        // Don't fail the user's request if webhook fails
      }
    }

    return NextResponse.json({ 
      success: true, 
      reply,
      messageId: `msg_${Date.now()}`
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process message" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: "Chat API active",
    message: "POST messages to this endpoint" 
  });
}

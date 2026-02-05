import { NextRequest, NextResponse } from "next/server";

// In-memory message store (in production, use a database)
const messages: Array<{
  id: string;
  text: string;
  sender: "user" | "jane";
  timestamp: string;
  processed: boolean;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    // Store user message
    const userMessage = {
      id: `msg_${Date.now()}`,
      text: message,
      sender: "user" as const,
      timestamp: new Date().toISOString(),
      processed: false,
    };
    messages.push(userMessage);

    // Generate smart auto-reply based on intent
    let reply = "Got it! I'll take care of that and let you know when it's done. ✨";
    const lowerMessage = message.toLowerCase();

    // Calendar/appointment commands
    if (lowerMessage.includes("add") && (lowerMessage.includes("appointment") || lowerMessage.includes("calendar"))) {
      reply = "📅 Adding that to your calendar now! I'll send you a confirmation once it's set.";
    } 
    // Reminder commands
    else if (lowerMessage.includes("remind")) {
      reply = "⏰ Reminder set! I'll ping you when it's time.";
    }
    // Question patterns
    else if (lowerMessage.includes("?") || lowerMessage.startsWith("what") || lowerMessage.startsWith("how") || lowerMessage.startsWith("when")) {
      reply = "Let me check on that for you... I'll have an answer shortly! 🔍";
    }
    // Booking related
    else if (lowerMessage.includes("booking") || lowerMessage.includes("appointment")) {
      reply = "📋 I see the booking requests! Head to the Bookings bubble to review and approve them.";
    }
    // Stock/investing
    else if (lowerMessage.includes("stock") || lowerMessage.includes("invest") || lowerMessage.includes("market")) {
      reply = "📈 I'll pull up the latest market info for you. Check the Invest bubble or I can send details here!";
    }
    // Greetings
    else if (lowerMessage.includes("hey jane") || lowerMessage.includes("hi jane") || lowerMessage.includes("hello")) {
      reply = "Hey Janine! 👋 What can I help you with today?";
    }
    // Thank you
    else if (lowerMessage.includes("thank")) {
      reply = "You're welcome! 💫 Let me know if you need anything else!";
    }

    // Store Jane's reply
    const janeMessage = {
      id: `msg_${Date.now() + 1}`,
      text: reply,
      sender: "jane" as const,
      timestamp: new Date().toISOString(),
      processed: true,
    };
    messages.push(janeMessage);

    // Also notify OpenClaw gateway about the message (for real processing)
    // This allows the actual Jane AI to see and respond
    try {
      const webhookPayload = {
        type: "hq_chat",
        from: "Janine",
        message: message,
        timestamp: userMessage.timestamp,
        messageId: userMessage.id,
      };
      
      // Log for now - in production this would hit OpenClaw
      console.log("[HQ Chat] New message from Janine:", webhookPayload);
    } catch (err) {
      console.error("[HQ Chat] Failed to notify gateway:", err);
    }

    return NextResponse.json({
      success: true,
      reply,
      messageId: userMessage.id,
    });
  } catch (error) {
    console.error("[HQ Chat] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process message" },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch message history
export async function GET() {
  return NextResponse.json({
    messages: messages.slice(-50), // Last 50 messages
    unprocessed: messages.filter(m => !m.processed && m.sender === "user").length,
  });
}

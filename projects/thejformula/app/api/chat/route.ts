import { NextRequest, NextResponse } from "next/server";
import { addRequest, isDbConfigured } from "@/lib/db";

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

    // Save to persistent database if configured
    if (isDbConfigured()) {
      try {
        const savedRequest = await addRequest({
          type: 'chat',
          name: userName || 'Website Visitor',
          email: userContact || undefined,
          message: message,
          source: 'thejformula.com/chat',
        });
        console.log('[Chat] Saved to database:', savedRequest.id);
      } catch (dbError) {
        console.error('[Chat] Database save failed:', dbError);
        // Don't fail the user's request if DB fails
      }
    } else {
      console.log('[Chat] Database not configured - message not persisted');
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
    dbConfigured: isDbConfigured(),
    message: "POST messages to this endpoint" 
  });
}

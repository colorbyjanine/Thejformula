import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const MESSAGES_FILE = path.join(process.cwd(), "chat-messages.json");

interface ChatMessage {
  id: string;
  message: string;
  userName: string;
  userContact: string;
  timestamp: string;
  replied: boolean;
}

async function getMessages(): Promise<ChatMessage[]> {
  try {
    const data = await fs.readFile(MESSAGES_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveMessages(messages: ChatMessage[]): Promise<void> {
  await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, userName, userContact, timestamp } = body;

    // Save the message
    const messages = await getMessages();
    const newMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      message,
      userName,
      userContact,
      timestamp,
      replied: false,
    };
    messages.push(newMessage);
    await saveMessages(messages);

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

    return NextResponse.json({ 
      success: true, 
      reply,
      messageId: newMessage.id 
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
  try {
    const messages = await getMessages();
    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to get messages" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

// In-memory notification store
const notifications: Array<{
  id: string;
  type: "booking" | "reminder" | "alert" | "message";
  title: string;
  body: string;
  timestamp: string;
  read: boolean;
}> = [];

// POST - Add a new notification
export async function POST(request: NextRequest) {
  try {
    const { type, title, body } = await request.json();

    const notification = {
      id: `notif_${Date.now()}`,
      type: type || "alert",
      title: title || "Notification",
      body: body || "",
      timestamp: new Date().toISOString(),
      read: false,
    };

    notifications.unshift(notification); // Add to front

    // Keep only last 100 notifications
    if (notifications.length > 100) {
      notifications.pop();
    }

    console.log("[HQ Notifications] New notification:", notification);

    return NextResponse.json({
      success: true,
      notification,
    });
  } catch (error) {
    console.error("[HQ Notifications] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create notification" },
      { status: 500 }
    );
  }
}

// GET - Fetch notifications
export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const unreadOnly = url.searchParams.get("unread") === "true";

  const result = unreadOnly 
    ? notifications.filter(n => !n.read)
    : notifications;

  return NextResponse.json({
    notifications: result.slice(0, 50),
    unreadCount: notifications.filter(n => !n.read).length,
  });
}

// PATCH - Mark notifications as read
export async function PATCH(request: NextRequest) {
  try {
    const { ids, markAllRead } = await request.json();

    if (markAllRead) {
      notifications.forEach(n => n.read = true);
    } else if (ids && Array.isArray(ids)) {
      notifications.forEach(n => {
        if (ids.includes(n.id)) n.read = true;
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to update notifications" },
      { status: 500 }
    );
  }
}

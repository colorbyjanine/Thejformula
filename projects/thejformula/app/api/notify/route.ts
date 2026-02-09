import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

// Store notifications in a local file that I (Jane) can check
const NOTIFICATIONS_FILE = '/tmp/jformula-notifications.json';

type Notification = {
  id: string;
  type: 'chat' | 'booking' | 'contact';
  name: string;
  email?: string;
  phone?: string;
  message: string;
  source: string;
  timestamp: string;
  read: boolean;
};

async function getNotifications(): Promise<Notification[]> {
  try {
    const data = await fs.readFile(NOTIFICATIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function saveNotifications(notifications: Notification[]) {
  await fs.writeFile(NOTIFICATIONS_FILE, JSON.stringify(notifications, null, 2));
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

// GET - Retrieve all notifications (for Jane to check)
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  
  // Simple auth check
  if (authHeader !== 'Bearer jane-check-2026') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const notifications = await getNotifications();
  const unread = notifications.filter(n => !n.read);
  
  return NextResponse.json({ 
    total: notifications.length,
    unread: unread.length,
    notifications: notifications.slice(-50) // Last 50
  }, { headers: corsHeaders });
}

// POST - Add a new notification
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, name, email, phone, message, source } = body;

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Name and message required' },
        { status: 400, headers: corsHeaders }
      );
    }

    const notification: Notification = {
      id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: type || 'contact',
      name,
      email: email || '',
      phone: phone || '',
      message,
      source: source || 'thejformula.com',
      timestamp: new Date().toISOString(),
      read: false,
    };

    const notifications = await getNotifications();
    notifications.push(notification);
    
    // Keep last 100 notifications
    const trimmed = notifications.slice(-100);
    await saveNotifications(trimmed);

    console.log('[NOTIFY] New notification:', notification.id, notification.type, notification.name);

    return NextResponse.json(
      { success: true, id: notification.id },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error('[NOTIFY] Error:', error);
    return NextResponse.json(
      { error: 'Failed to save notification' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// PATCH - Mark notifications as read
export async function PATCH(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== 'Bearer jane-check-2026') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { ids } = await request.json();
    
    const notifications = await getNotifications();
    let marked = 0;
    
    for (const notification of notifications) {
      if (ids.includes(notification.id) || ids.includes('all')) {
        notification.read = true;
        marked++;
      }
    }
    
    await saveNotifications(notifications);

    return NextResponse.json(
      { success: true, marked },
      { headers: corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update notifications' },
      { status: 500, headers: corsHeaders }
    );
  }
}

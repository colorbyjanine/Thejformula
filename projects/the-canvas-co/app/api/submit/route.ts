import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '8585187316';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, answers, timestamp } = body;

    // Format the submission for Telegram
    const message = formatSubmission(type, answers, timestamp);

    // Send to Telegram
    if (TELEGRAM_BOT_TOKEN) {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });
    } else {
      console.log('No Telegram token - would send:', message);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}

function formatSubmission(type: string, answers: Record<string, unknown>, timestamp: string): string {
  const typeLabels: Record<string, string> = {
    creator: '📱 Content Creator',
    ecommerce: '🛒 E-Commerce',
    beauty: '💇‍♀️ Beauty & Wellness',
    service: '💼 Service Provider',
    restaurant: '🍽️ Restaurant & Food',
    creative: '🎨 Creative & Artist',
    coach: '🎓 Coach & Educator',
    fitness: '💪 Fitness & Health',
    realestate: '🏠 Real Estate',
  };

  // Key fields to highlight at the top
  const keyFields = ['name', 'business_name', 'businessName', 'your_name', 'email', 'phone'];
  
  let msg = `🎨 <b>NEW CANVAS CO LEAD!</b>\n\n`;
  msg += `<b>Type:</b> ${typeLabels[type] || type}\n`;
  msg += `<b>Time:</b> ${new Date(timestamp).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}\n\n`;

  // Extract and display key contact info first
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `<b>📋 CONTACT INFO</b>\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  
  for (const key of keyFields) {
    if (answers[key]) {
      const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      msg += `<b>${label}:</b> ${answers[key]}\n`;
    }
  }

  // Display all other answers
  msg += `\n━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `<b>📝 QUESTIONNAIRE</b>\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;

  for (const [key, value] of Object.entries(answers)) {
    if (keyFields.includes(key)) continue; // Already shown above
    if (value === null || value === undefined || value === '') continue;
    
    const label = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    if (Array.isArray(value)) {
      if (value.length > 0) {
        msg += `\n<b>${label}:</b>\n`;
        value.forEach(v => {
          msg += `  • ${v}\n`;
        });
      }
    } else if (typeof value === 'boolean') {
      msg += `<b>${label}:</b> ${value ? '✅ Yes' : '❌ No'}\n`;
    } else {
      msg += `<b>${label}:</b> ${value}\n`;
    }
  }

  msg += `\n━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 <b>Follow up within 24hrs!</b>`;

  return msg;
}

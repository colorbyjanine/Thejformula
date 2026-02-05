"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Types
interface Notification {
  id: string;
  type: "booking" | "reminder" | "alert" | "message";
  title: string;
  body: string;
  time: Date;
  read: boolean;
}

interface UpcomingEvent {
  id: string;
  type: "appointment" | "reminder" | "deadline" | "market";
  title: string;
  subtitle?: string;
  date: Date;
  icon: string;
}

interface BookingRequest {
  id: string;
  name: string;
  contact: string;
  service: string;
  dates: string[];
  notes: string;
  timestamp: Date;
  status: "pending" | "approved" | "rejected";
}

// App Bubble Component
function AppBubble({ 
  icon, 
  label, 
  badge, 
  onClick,
  color = "bg-white"
}: { 
  icon: string; 
  label: string; 
  badge?: number;
  onClick: () => void;
  color?: string;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group"
    >
      <div className={`relative w-16 h-16 md:w-20 md:h-20 ${color} rounded-[22px] shadow-lg flex items-center justify-center text-2xl md:text-3xl group-hover:scale-105 group-hover:shadow-xl transition-all duration-200`}>
        {icon}
        {badge && badge > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
            {badge > 9 ? "9+" : badge}
          </span>
        )}
      </div>
      <span className="text-xs md:text-sm text-[#3D3935]/70 font-medium">{label}</span>
    </button>
  );
}

// Chat Message Component
function ChatMessage({ text, sender, time }: { text: string; sender: "user" | "jane"; time: Date }) {
  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] p-3 rounded-2xl ${
        sender === "user" 
          ? "bg-[#3D3935] text-white rounded-br-sm" 
          : "bg-white text-[#3D3935] rounded-bl-sm shadow-md"
      }`}>
        <p className="text-sm">{text}</p>
        <p className={`text-[10px] mt-1 ${sender === "user" ? "text-white/50" : "text-[#9A9086]"}`}>
          {time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
        </p>
      </div>
    </div>
  );
}

export default function JanineHQ() {
  const [activeView, setActiveView] = useState<string | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "booking",
      title: "New Booking Request",
      body: "Sarah M. wants to book a balayage",
      time: new Date(),
      read: false,
    },
  ]);
  const [chatMessages, setChatMessages] = useState<Array<{ text: string; sender: "user" | "jane"; time: Date }>>([
    { text: "Hey Janine! 👋 What can I help you with?", sender: "jane", time: new Date() },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isJaneTyping, setIsJaneTyping] = useState(false);
  const [bookingRequests, setBookingRequests] = useState<BookingRequest[]>([]);
  const [upcomingEvents] = useState<UpcomingEvent[]>([
    { id: "1", type: "appointment", title: "Balayage - Sarah M.", subtitle: "Volume III Salon", date: new Date(Date.now() + 86400000), icon: "💇" },
    { id: "2", type: "deadline", title: "Law class assignment", subtitle: "Constitutional Law", date: new Date(Date.now() + 172800000), icon: "📚" },
    { id: "3", type: "market", title: "PWR Earnings Report", subtitle: "After market close", date: new Date(Date.now() + 432000000), icon: "📈" },
  ]);

  // Greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  // Fetch booking requests
  useEffect(() => {
    fetch("/api/booking-request")
      .then(res => res.json())
      .then(data => {
        if (data.recentRequests) {
          setBookingRequests(data.recentRequests.map((r: any) => ({
            ...r,
            timestamp: new Date(r.timestamp),
            status: "pending",
          })));
        }
      })
      .catch(console.error);
  }, []);

  // Send chat message
  const sendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = { text: chatInput, sender: "user" as const, time: new Date() };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput("");
    setIsJaneTyping(true);

    try {
      const response = await fetch("/api/hq/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: chatInput }),
      });
      const data = await response.json();
      
      setTimeout(() => {
        setIsJaneTyping(false);
        setChatMessages(prev => [...prev, { 
          text: data.reply || "Got it! I'll take care of that. ✨", 
          sender: "jane", 
          time: new Date() 
        }]);
      }, 1000);
    } catch {
      setIsJaneTyping(false);
      setChatMessages(prev => [...prev, { 
        text: "I got your message! I'll process this and get back to you. 💫", 
        sender: "jane", 
        time: new Date() 
      }]);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const pendingBookings = bookingRequests.filter(b => b.status === "pending").length;

  // Main Dashboard View
  const renderDashboard = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#E8DDD4]">
              <Image src="/janine.jpg" alt="Janine" width={48} height={48} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm text-[#9A9086]">{getGreeting()},</p>
              <h1 className="text-xl font-semibold text-[#3D3935]">Janine ✨</h1>
            </div>
          </div>
          <button 
            onClick={() => setActiveView("notifications")}
            className="relative p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="text-xl">🔔</span>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* App Grid */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-md mx-auto">
          <AppBubble icon="📅" label="Calendar" onClick={() => setActiveView("calendar")} />
          <AppBubble icon="💬" label="Chat" onClick={() => setActiveView("chat")} color="bg-[#3D3935] text-white" />
          <AppBubble icon="📋" label="Bookings" badge={pendingBookings} onClick={() => setActiveView("bookings")} />
          <AppBubble icon="💰" label="Shop" onClick={() => window.open("/shop", "_blank")} />
          <AppBubble icon="📊" label="Stats" onClick={() => setActiveView("stats")} />
          <AppBubble icon="💇" label="Formulas" onClick={() => window.open("/formulas", "_blank")} />
          <AppBubble icon="📈" label="Invest" onClick={() => setActiveView("invest")} />
          <AppBubble icon="⚙️" label="Settings" onClick={() => setActiveView("settings")} />
        </div>
      </div>

      {/* Upcoming Section */}
      <div className="flex-1 px-6 pb-6">
        <div className="bg-white rounded-3xl p-5 shadow-lg h-full">
          <h2 className="text-sm font-semibold text-[#9A9086] uppercase tracking-wider mb-4">Coming Up</h2>
          <div className="space-y-3">
            {upcomingEvents.map(event => (
              <div key={event.id} className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-2xl">
                <span className="text-2xl">{event.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#3D3935] truncate">{event.title}</p>
                  {event.subtitle && <p className="text-xs text-[#9A9086] truncate">{event.subtitle}</p>}
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-[#3D3935]">
                    {event.date.toLocaleDateString([], { month: "short", day: "numeric" })}
                  </p>
                  <p className="text-[10px] text-[#9A9086]">
                    {event.date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Chat View
  const renderChat = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-[#E8DDD4] flex items-center gap-3">
        <button onClick={() => setActiveView(null)} className="p-2 hover:bg-[#E8DDD4] rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="w-10 h-10 bg-[#3D3935] rounded-full flex items-center justify-center text-white text-lg">✨</div>
        <div>
          <h2 className="font-semibold text-[#3D3935]">Jane</h2>
          <p className="text-xs text-green-500">Online</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {chatMessages.map((msg, i) => (
          <ChatMessage key={i} {...msg} />
        ))}
        {isJaneTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-md">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-[#E8DDD4]">
        <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Hey Jane, can you..."
            className="flex-1 p-3 bg-white rounded-full border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935]"
          />
          <button type="submit" className="w-12 h-12 bg-[#3D3935] text-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );

  // Bookings View
  const renderBookings = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-[#E8DDD4] flex items-center gap-3">
        <button onClick={() => setActiveView(null)} className="p-2 hover:bg-[#E8DDD4] rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="font-semibold text-[#3D3935]">Booking Requests</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {bookingRequests.length === 0 ? (
          <div className="text-center py-12">
            <span className="text-4xl mb-4 block">📋</span>
            <p className="text-[#9A9086]">No booking requests yet</p>
            <p className="text-sm text-[#9A9086]/70 mt-1">They'll appear here when someone submits</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookingRequests.map(booking => (
              <div key={booking.id} className="bg-white rounded-2xl p-4 shadow-md">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-[#3D3935]">{booking.name}</h3>
                    <p className="text-sm text-[#9A9086]">{booking.contact}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    booking.status === "pending" ? "bg-yellow-100 text-yellow-700" :
                    booking.status === "approved" ? "bg-green-100 text-green-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {booking.status}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#3D3935] mb-1">💇 {booking.service}</p>
                <p className="text-xs text-[#9A9086] mb-2">
                  📅 {booking.dates.join(" | ")}
                </p>
                {booking.notes && (
                  <p className="text-xs text-[#9A9086] bg-[#FAF7F2] p-2 rounded-lg mb-3">{booking.notes}</p>
                )}
                {booking.status === "pending" && (
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-[#3D3935] text-white text-sm rounded-lg hover:bg-[#2D2925]">
                      ✓ Approve
                    </button>
                    <button className="flex-1 py-2 bg-[#E8DDD4] text-[#3D3935] text-sm rounded-lg hover:bg-[#D4C5B5]">
                      ✗ Decline
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Calendar View
  const renderCalendar = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-[#E8DDD4] flex items-center gap-3">
        <button onClick={() => setActiveView(null)} className="p-2 hover:bg-[#E8DDD4] rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="font-semibold text-[#3D3935]">Calendar</h2>
      </div>
      <div className="flex-1 p-4">
        <div className="bg-white rounded-2xl p-4 shadow-md text-center">
          <p className="text-[#9A9086] mb-4">📅 Calendar integration coming soon!</p>
          <p className="text-sm text-[#9A9086]/70">For now, tell me in chat:<br/>"Add appointment Feb 15 for Lisa, balayage"</p>
        </div>
      </div>
    </div>
  );

  // Notifications View
  const renderNotifications = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-[#E8DDD4] flex items-center gap-3">
        <button onClick={() => setActiveView(null)} className="p-2 hover:bg-[#E8DDD4] rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="font-semibold text-[#3D3935]">Notifications</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {notifications.length === 0 ? (
          <div className="text-center py-12">
            <span className="text-4xl mb-4 block">🔔</span>
            <p className="text-[#9A9086]">All caught up!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {notifications.map(notif => (
              <div key={notif.id} className={`p-4 rounded-2xl ${notif.read ? "bg-white" : "bg-blue-50"} shadow-md`}>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">
                    {notif.type === "booking" ? "📋" : notif.type === "message" ? "💬" : "🔔"}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#3D3935]">{notif.title}</h3>
                    <p className="text-sm text-[#9A9086]">{notif.body}</p>
                    <p className="text-xs text-[#9A9086]/70 mt-1">
                      {notif.time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Generic "Coming Soon" View
  const renderComingSoon = (title: string) => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-[#E8DDD4] flex items-center gap-3">
        <button onClick={() => setActiveView(null)} className="p-2 hover:bg-[#E8DDD4] rounded-full">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="font-semibold text-[#3D3935]">{title}</h2>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <span className="text-6xl mb-4 block">🚧</span>
          <h3 className="text-xl font-semibold text-[#3D3935] mb-2">Coming Soon!</h3>
          <p className="text-[#9A9086]">I'm building this for you. Check back soon!</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-[#E8DDD4]">
      <div className="max-w-md mx-auto min-h-screen">
        {activeView === null && renderDashboard()}
        {activeView === "chat" && renderChat()}
        {activeView === "bookings" && renderBookings()}
        {activeView === "calendar" && renderCalendar()}
        {activeView === "notifications" && renderNotifications()}
        {activeView === "stats" && renderComingSoon("Stats")}
        {activeView === "invest" && renderComingSoon("Investments")}
        {activeView === "settings" && renderComingSoon("Settings")}
      </div>
    </div>
  );
}

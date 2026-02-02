"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Jane, Janine's assistant at The J Formula. I'm here to help you with booking, pricing, questions about services — whatever you need! How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [userContact, setUserContact] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactSaved, setContactSaved] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          userName: userName || "Instagram Visitor",
          userContact: userContact || "Not provided yet",
          timestamp: new Date().toISOString(),
          source: "instagram-link",
        }),
      });

      const data = await response.json();

      setTimeout(() => {
        setIsTyping(false);
        const botMessage: Message = {
          id: messages.length + 2,
          text: data.reply || "Thanks for your message! I'll make sure Janine sees this. 🤍",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);

        // After second user message, prompt for contact if not saved
        if (!contactSaved && messages.length >= 2) {
          setTimeout(() => {
            setShowContactForm(true);
          }, 1500);
        }
      }, 1000);
    } catch (error) {
      setIsTyping(false);
      const botMessage: Message = {
        id: messages.length + 2,
        text: "Thanks for reaching out! Your message has been received. We'll get back to you soon! 🤍",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  const handleContactSubmit = async () => {
    if (userContact.trim()) {
      setShowContactForm(false);
      setContactSaved(true);

      // Save contact info
      await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `[Contact Info] Name: ${userName || "Not provided"}, Contact: ${userContact}`,
          userName: userName || "Instagram Visitor",
          userContact: userContact,
          timestamp: new Date().toISOString(),
          source: "instagram-link",
        }),
      });

      const botMessage: Message = {
        id: messages.length + 1,
        text: `Perfect! I've saved your contact info. I'll reach out to ${userContact} if I need to follow up. Now, what else can I help you with? 😊`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-[#E8DDD4] flex flex-col">
      {/* Header */}
      <div className="bg-[#3D3935] text-white p-4 shadow-lg">
        <div className="max-w-lg mx-auto flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#B5A191]">
            <Image
              src="/janine.jpg"
              alt="The J Formula"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-semibold">The J Formula</h1>
            <p className="text-sm text-[#B5A191]">Chat with Jane • Janine's Assistant</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 max-w-lg mx-auto w-full">
        <div className="space-y-4 pb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl ${
                  message.sender === "user"
                    ? "bg-[#3D3935] text-white rounded-br-sm"
                    : "bg-white text-[#3D3935] rounded-bl-sm shadow-md"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white text-[#3D3935] p-4 rounded-2xl rounded-bl-sm shadow-md">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Contact Form Popup */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-lg font-semibold text-[#3D3935] mb-2">Stay Connected 💫</h3>
            <p className="text-sm text-[#9A9086] mb-4">
              Drop your info so I can reach out about appointments or follow up on your questions!
            </p>
            <input
              type="text"
              placeholder="Your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 mb-3 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935]"
            />
            <input
              type="text"
              placeholder="Phone number or email"
              value={userContact}
              onChange={(e) => setUserContact(e.target.value)}
              className="w-full p-3 mb-4 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935]"
            />
            <div className="flex gap-3">
              <button
                onClick={handleContactSubmit}
                className="flex-1 bg-[#3D3935] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#9A9086] transition-colors"
              >
                Save & Continue
              </button>
              <button
                onClick={() => setShowContactForm(false)}
                className="px-4 py-3 text-[#9A9086] text-sm hover:text-[#3D3935]"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-[#E8DDD4] p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(inputValue);
          }}
          className="max-w-lg mx-auto flex gap-3"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-4 rounded-full border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935] bg-[#FAF7F2]"
          />
          <button
            type="submit"
            className="w-12 h-12 bg-[#3D3935] text-white rounded-full flex items-center justify-center hover:bg-[#9A9086] transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>
        <p className="text-center text-xs text-[#9A9086] mt-3">
          Powered by <a href="/" className="underline">The J Formula</a>
        </p>
      </div>
    </div>
  );
}

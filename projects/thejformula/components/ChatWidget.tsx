"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Jane, Janine's assistant. How can I help you today? I can answer questions about services, pricing, or help you book an appointment!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [userName, setUserName] = useState("");
  const [userContact, setUserContact] = useState("");
  const [step, setStep] = useState<"chat" | "contact">("chat");
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

    // Send to our API
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text.trim(),
          userName: userName || "Website Visitor",
          userContact: userContact || "Not provided",
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      // Add bot response
      setTimeout(() => {
        setIsTyping(false);
        const botMessage: Message = {
          id: messages.length + 2,
          text: data.reply || "Thanks for your message! Janine or I will get back to you soon. 🤍",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);

        // After first message, ask for contact info
        if (!userContact && messages.length === 1) {
          setTimeout(() => {
            setStep("contact");
          }, 1000);
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

  const handleContactSubmit = () => {
    if (userContact.trim()) {
      setStep("chat");
      const botMessage: Message = {
        id: messages.length + 1,
        text: `Perfect, I've got your info! I'll reach out to ${userContact} if needed. Is there anything else you'd like to know?`,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);

      // Save contact info
      fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `[Contact Info Saved] Name: ${userName}, Contact: ${userContact}`,
          userName: userName || "Website Visitor",
          userContact: userContact,
          timestamp: new Date().toISOString(),
        }),
      });
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#3D3935] text-white rounded-full shadow-lg hover:bg-[#9A9086] transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-[#E8DDD4]">
          {/* Header */}
          <div className="bg-[#3D3935] text-white p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#9A9086] rounded-full flex items-center justify-center text-sm font-medium">
                J
              </div>
              <div>
                <h3 className="font-medium">Jane</h3>
                <p className="text-xs text-[#D4C5B5]">Janine's Assistant • Online</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF7F2]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-[#3D3935] text-white rounded-br-sm"
                      : "bg-white text-[#3D3935] rounded-bl-sm shadow-sm"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-[#3D3935] p-3 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-[#9A9086] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Contact Form */}
          {step === "contact" && (
            <div className="p-4 bg-[#E8DDD4] border-t border-[#D4C5B5]">
              <p className="text-sm text-[#3D3935] mb-3">Quick! Drop your contact so we can reach you:</p>
              <input
                type="text"
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2 mb-2 rounded-lg border border-[#D4C5B5] text-sm focus:outline-none focus:border-[#3D3935]"
              />
              <input
                type="text"
                placeholder="Phone or email"
                value={userContact}
                onChange={(e) => setUserContact(e.target.value)}
                className="w-full p-2 mb-2 rounded-lg border border-[#D4C5B5] text-sm focus:outline-none focus:border-[#3D3935]"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleContactSubmit}
                  className="flex-1 bg-[#3D3935] text-white py-2 rounded-lg text-sm hover:bg-[#9A9086] transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={() => setStep("chat")}
                  className="px-4 py-2 text-[#9A9086] text-sm hover:text-[#3D3935]"
                >
                  Skip
                </button>
              </div>
            </div>
          )}

          {/* Input */}
          {step === "chat" && (
            <div className="p-4 bg-white border-t border-[#E8DDD4]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(inputValue);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-3 rounded-full border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935]"
                />
                <button
                  type="submit"
                  className="w-10 h-10 bg-[#3D3935] text-white rounded-full flex items-center justify-center hover:bg-[#9A9086] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

const SERVICES = [
  "Balayage",
  "Full Color",
  "Color Correction",
  "Highlights",
  "Gloss / Toner",
  "Haircut & Style",
  "Consultation",
  "Other (describe below)",
];

export default function BookingRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: "",
    date1: "",
    date2: "",
    date3: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.contact || !formData.service || !formData.date1) {
      setError("Please fill in your name, contact info, service, and at least one preferred date.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "thejformula.com/chat",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or DM @colorbyjanine on Instagram.");
      }
    } catch {
      setError("Connection error. Please try again or DM @colorbyjanine on Instagram.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-[#E8DDD4] flex flex-col items-center justify-center p-6">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-xl text-center">
          <div className="w-20 h-20 bg-[#3D3935] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-[#3D3935] mb-3">Request Received! 🎉</h2>
          <p className="text-[#9A9086] mb-6">
            Janine will review your request and get back to you soon to confirm your appointment.
          </p>
          <a
            href="/"
            className="inline-block bg-[#3D3935] text-white px-8 py-3 rounded-full font-medium hover:bg-[#9A9086] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-[#E8DDD4]">
      {/* Header */}
      <div className="bg-[#3D3935] text-white p-6 shadow-lg">
        <div className="max-w-lg mx-auto flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#B5A191]">
            <Image
              src="/janine.jpg"
              alt="Janine"
              width={56}
              height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold">Book with Janine</h1>
            <p className="text-sm text-[#B5A191]">The J Formula • @colorbyjanine</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-lg mx-auto p-6">
        <div className="bg-white rounded-3xl p-6 shadow-xl">
          <h2 className="text-lg font-semibold text-[#3D3935] mb-2">Request an Appointment</h2>
          <p className="text-sm text-[#9A9086] mb-6">
            Fill out the form below and I'll get back to you to confirm your booking!
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[#3D3935] mb-2">Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Jane Doe"
                className="w-full p-4 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935] bg-[#FAF7F2]"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block text-sm font-medium text-[#3D3935] mb-2">Phone or Email *</label>
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="(555) 123-4567 or email@example.com"
                className="w-full p-4 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935] bg-[#FAF7F2]"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-sm font-medium text-[#3D3935] mb-2">Service *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full p-4 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935] bg-[#FAF7F2] appearance-none"
              >
                <option value="">Select a service...</option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Dates */}
            <div>
              <label className="block text-sm font-medium text-[#3D3935] mb-2">
                Preferred Dates & Times
              </label>
              <p className="text-xs text-[#9A9086] mb-3">
                Give me a few options that work for you (at least one required)
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  value={formData.date1}
                  onChange={(e) => setFormData({ ...formData, date1: e.target.value })}
                  placeholder="Option 1: e.g. Saturday Feb 15, afternoon *"
                  className="w-full p-4 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935] bg-[#FAF7F2]"
                />
                <input
                  type="text"
                  value={formData.date2}
                  onChange={(e) => setFormData({ ...formData, date2: e.target.value })}
                  placeholder="Option 2 (optional)"
                  className="w-full p-4 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935] bg-[#FAF7F2]"
                />
                <input
                  type="text"
                  value={formData.date3}
                  onChange={(e) => setFormData({ ...formData, date3: e.target.value })}
                  placeholder="Option 3 (optional)"
                  className="w-full p-4 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935] bg-[#FAF7F2]"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-[#3D3935] mb-2">
                Anything else I should know?
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Tell me about your hair goals, current color, inspiration photos, etc."
                rows={4}
                className="w-full p-4 rounded-xl border border-[#E8DDD4] text-sm focus:outline-none focus:border-[#3D3935] bg-[#FAF7F2] resize-none"
              />
            </div>

            {/* Error */}
            {error && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#3D3935] text-white py-4 rounded-full font-medium hover:bg-[#9A9086] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? "Sending..." : "Send Request ✨"}
            </button>
          </form>

          <p className="text-center text-xs text-[#9A9086] mt-6">
            Or DM me directly:{" "}
            <a
              href="https://instagram.com/colorbyjanine"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#3D3935]"
            >
              @colorbyjanine
            </a>
          </p>
        </div>

        {/* Back link */}
        <div className="text-center mt-6">
          <a href="/" className="text-sm text-[#9A9086] hover:text-[#3D3935]">
            ← Back to The J Formula
          </a>
        </div>
      </div>
    </div>
  );
}

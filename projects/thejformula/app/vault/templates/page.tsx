"use client";

import Link from "next/link";
import { useState } from "react";

const templates = [
  {
    id: "booth-rental",
    name: "California Booth Rental Agreement",
    description: "AB-5 compliant contract for salon owners renting chairs to independent stylists.",
    icon: "🪑",
    pages: "8 pages",
    href: "/vault/templates/booth-rental",
  },
  {
    id: "client-waiver",
    name: "Client Waiver & Consent Form",
    description: "Comprehensive intake form with health questionnaire and California liability waiver.",
    icon: "✍️",
    pages: "4 pages",
    href: "/vault/templates/client-waiver",
  },
  {
    id: "independent-contractor",
    name: "Independent Contractor Agreement",
    description: "California Labor Code §2750.3 compliant contract for hiring stylists.",
    icon: "📋",
    pages: "7 pages",
    href: "/vault/templates/independent-contractor",
  },
  {
    id: "photo-release",
    name: "Photo & Social Media Release",
    description: "Permission form for using client photos on Instagram, TikTok, and marketing.",
    icon: "📸",
    pages: "2 pages",
    href: "/vault/templates/photo-release",
  },
  {
    id: "cancellation-policy",
    name: "Cancellation & No-Show Policy",
    description: "Professional policy with deposit requirements and ready-to-use messages.",
    icon: "📅",
    pages: "3 pages",
    href: "/vault/templates/cancellation-policy",
  },
  {
    id: "classification-checklist",
    name: "Employee vs Contractor Checklist",
    description: "IRS and California ABC Test checklist to determine proper worker status.",
    icon: "✅",
    pages: "4 pages",
    href: "/vault/templates/classification-checklist",
  },
];

export default function TemplatesPage() {
  const [accessGranted, setAccessGranted] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState("");

  const handleAccessCheck = () => {
    // Simple access code check - in production this would verify purchase
    if (accessCode.toLowerCase() === "vault2026" || accessCode.toLowerCase() === "purchased") {
      setAccessGranted(true);
      setError("");
      // Store in localStorage so they don't have to re-enter
      localStorage.setItem("vaultAccess", "true");
    } else {
      setError("Invalid access code. Please purchase the vault to get your code.");
    }
  };

  // Check localStorage on mount
  if (typeof window !== "undefined" && !accessGranted) {
    const stored = localStorage.getItem("vaultAccess");
    if (stored === "true") {
      setAccessGranted(true);
    }
  }

  return (
    <div className="min-h-screen pt-24 bg-[#FAF7F2]">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <Link href="/vault" className="text-sm text-[#9A9086] hover:text-[#3D3935] mb-4 inline-block">
            ← Back to Vault
          </Link>
          <h1 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
            Your Legal Templates
          </h1>
          <p className="text-[#9A9086] max-w-xl mx-auto">
            Click any template to view, print, or save as PDF. All templates are California-compliant and ready to use.
          </p>
        </div>

        {!accessGranted ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-[#3D3935] mb-4 text-center">
              🔐 Enter Your Access Code
            </h2>
            <p className="text-sm text-[#9A9086] mb-6 text-center">
              Your access code was sent to your email after purchase.
            </p>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Enter access code..."
              className="w-full px-4 py-3 border border-[#E8DDD4] rounded-lg mb-4 focus:outline-none focus:border-[#3D3935]"
            />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <button
              onClick={handleAccessCheck}
              className="w-full py-3 bg-[#3D3935] text-white rounded-lg hover:bg-[#4A4540] transition mb-4"
            >
              Access Templates
            </button>
            <div className="text-center">
              <p className="text-sm text-[#9A9086] mb-2">Don't have access yet?</p>
              <Link 
                href="/vault" 
                className="text-[#3D3935] font-semibold hover:underline"
              >
                Purchase the Complete Vault — $97
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {templates.map((template) => (
              <Link
                key={template.id}
                href={template.href}
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{template.icon}</span>
                  <span className="text-xs bg-[#E8DDD4] px-2 py-1 rounded">{template.pages}</span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2 group-hover:text-[#9CAF88] transition">
                  {template.name}
                </h3>
                <p className="text-sm text-[#9A9086] mb-4">
                  {template.description}
                </p>
                <div className="flex items-center text-sm text-[#3D3935] font-semibold">
                  View & Print →
                </div>
              </Link>
            ))}
          </div>
        )}

        {accessGranted && (
          <div className="mt-12 text-center">
            <p className="text-sm text-[#9A9086] mb-4">
              💡 Tip: Click "Print / Save as PDF" on any template to download it
            </p>
            <Link 
              href="/vault" 
              className="text-[#3D3935] hover:underline"
            >
              ← Back to Vault Overview
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

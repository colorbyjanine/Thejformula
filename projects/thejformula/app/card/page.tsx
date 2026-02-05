"use client";

import { useEffect, useState } from "react";

export default function DigitalCard() {
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  
  const contactInfo = {
    name: "Janine Fernandez",
    title: "Hair Color Specialist",
    email: "colorbyjanine@gmail.com",
    website: "https://thejformula.com",
    instagram: "colorbyjanine",
    address: "2911 N. Glenoaks Blvd., Burbank, CA 91505",
    salon: "Volume III Salon",
  };

  useEffect(() => {
    // Generate QR code for this page
    const pageUrl = encodeURIComponent("https://thejformula.com/card");
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${pageUrl}&bgcolor=FAF7F2&color=3D3935`);
  }, []);

  // Generate vCard for download
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Fernandez;Janine;;;
FN:Janine Fernandez
TITLE:Hair Color Specialist
ORG:Volume III Salon
EMAIL:colorbyjanine@gmail.com
URL:https://thejformula.com
ADR:;;2911 N. Glenoaks Blvd.;Burbank;CA;91505;USA
X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/colorbyjanine
NOTE:15 years of hair color expertise. Book at thejformula.com
END:VCARD`;

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Janine-Fernandez.vcf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#3D3935] to-[#5A534D] p-8 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#E8967A] to-[#D4826A] flex items-center justify-center text-white text-3xl font-semibold shadow-lg">
              J
            </div>
            <h1 className="text-2xl font-[family-name:var(--font-cormorant)] text-white mb-1">
              {contactInfo.name}
            </h1>
            <p className="text-white/70 text-sm">{contactInfo.title}</p>
            <p className="text-white/50 text-xs mt-1">{contactInfo.salon}</p>
          </div>

          {/* Links */}
          <div className="p-6 space-y-3">
            {/* Website */}
            <a
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-xl hover:bg-[#E8DDD4] transition-colors"
            >
              <span className="text-2xl">🌐</span>
              <div>
                <p className="text-sm font-medium text-[#3D3935]">Website</p>
                <p className="text-xs text-[#9A9086]">thejformula.com</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={`https://instagram.com/${contactInfo.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-xl hover:bg-[#E8DDD4] transition-colors"
            >
              <span className="text-2xl">📸</span>
              <div>
                <p className="text-sm font-medium text-[#3D3935]">Instagram</p>
                <p className="text-xs text-[#9A9086]">@{contactInfo.instagram}</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-xl hover:bg-[#E8DDD4] transition-colors"
            >
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-sm font-medium text-[#3D3935]">Email</p>
                <p className="text-xs text-[#9A9086]">{contactInfo.email}</p>
              </div>
            </a>

            {/* Book */}
            <a
              href="https://thejformula.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-xl hover:bg-[#E8DDD4] transition-colors"
            >
              <span className="text-2xl">📅</span>
              <div>
                <p className="text-sm font-medium text-[#3D3935]">Book Appointment</p>
                <p className="text-xs text-[#9A9086]">Schedule online</p>
              </div>
            </a>

            {/* Location */}
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-xl hover:bg-[#E8DDD4] transition-colors"
            >
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm font-medium text-[#3D3935]">Location</p>
                <p className="text-xs text-[#9A9086]">{contactInfo.address}</p>
              </div>
            </a>

            {/* Shop */}
            <a
              href="https://thejformula.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#FAF7F2] rounded-xl hover:bg-[#E8DDD4] transition-colors"
            >
              <span className="text-2xl">🛍️</span>
              <div>
                <p className="text-sm font-medium text-[#3D3935]">Shop My Picks</p>
                <p className="text-xs text-[#9A9086]">Hair products I love</p>
              </div>
            </a>
          </div>

          {/* Save Contact Button */}
          <div className="px-6 pb-6">
            <button
              onClick={downloadVCard}
              className="w-full bg-[#3D3935] text-white py-4 rounded-xl font-medium hover:bg-[#5A534D] transition-colors"
            >
              Save to Contacts
            </button>
          </div>

          {/* QR Code */}
          <div className="border-t border-[#E8DDD4] p-6 text-center">
            <p className="text-xs text-[#9A9086] mb-3">Scan to share</p>
            {qrCodeUrl && (
              <img 
                src={qrCodeUrl} 
                alt="QR Code" 
                className="mx-auto rounded-lg"
                width={150}
                height={150}
              />
            )}
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-[#9A9086] mt-6">
          The J Formula © 2026
        </p>
      </div>
    </div>
  );
}

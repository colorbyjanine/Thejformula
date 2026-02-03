"use client";

import { useEffect } from "react";

export default function PhotoReleaseTemplate() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media print {
        body { background: white !important; }
        .no-print { display: none !important; }
        .print-content { padding: 0 !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Print Header */}
      <div className="no-print bg-[#3D3935] text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <span className="font-semibold">Photo & Social Media Release Form</span>
        <div className="flex gap-4">
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-white text-[#3D3935] rounded hover:bg-gray-100 transition"
          >
            🖨️ Print / Save as PDF
          </button>
          <a href="/vault/templates" className="px-4 py-2 border border-white rounded hover:bg-white/10 transition">
            ← Back to Templates
          </a>
        </div>
      </div>

      {/* Template Content */}
      <div className="print-content max-w-4xl mx-auto p-8 md:p-12 text-[#333] leading-relaxed">
        <div className="text-center mb-8 border-b-2 border-[#3D3935] pb-6">
          <h1 className="text-3xl font-bold mb-2">PHOTO & SOCIAL MEDIA RELEASE FORM</h1>
          <p className="text-sm text-gray-600">The J Formula Legal Vault • California-Compliant Template</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">CLIENT INFORMATION</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <p>Full Name: <span className="border-b border-black inline-block w-full"></span></p>
          <p>Date: <span className="border-b border-black inline-block w-full"></span></p>
          <p>Phone: <span className="border-b border-black inline-block w-full"></span></p>
          <p>Email: <span className="border-b border-black inline-block w-full"></span></p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">AUTHORIZATION & RELEASE</h2>
        <p className="mb-4">I, the undersigned, hereby grant permission to:</p>
        <div className="border p-4 mb-6 bg-gray-50">
          <p className="mb-2">Business Name: <span className="border-b border-black inline-block w-64"></span></p>
          <p className="mb-2">Instagram: @<span className="border-b border-black inline-block w-48"></span></p>
          <p className="mb-2">TikTok: @<span className="border-b border-black inline-block w-48"></span></p>
          <p>Other: <span className="border-b border-black inline-block w-64"></span></p>
        </div>

        <p className="mb-4">to use photographs, videos, and/or digital images of me and my hair ("Images") for the following purposes:</p>

        <h3 className="font-bold mb-2">SOCIAL MEDIA (check all that apply):</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
          <p>☐ Instagram posts & stories</p>
          <p>☐ TikTok videos</p>
          <p>☐ Facebook posts</p>
          <p>☐ Pinterest</p>
          <p>☐ YouTube</p>
          <p>☐ Other: <span className="border-b border-black inline-block w-20"></span></p>
        </div>

        <h3 className="font-bold mb-2">MARKETING MATERIALS (check all that apply):</h3>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <p>☐ Website/portfolio</p>
          <p>☐ Printed materials (flyers, brochures)</p>
          <p>☐ Online advertisements</p>
          <p>☐ Email marketing</p>
          <p>☐ Before/after galleries</p>
          <p>☐ Competition entries</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">IMAGE SPECIFICATIONS</h2>
        
        <h3 className="font-bold mb-2">What may be shown in images:</h3>
        <p className="mb-1">☐ Hair only (face not visible)</p>
        <p className="mb-1">☐ Hair and partial face (profile, back of head)</p>
        <p className="mb-6">☐ Full face and hair</p>

        <h3 className="font-bold mb-2">Tagging Permission:</h3>
        <p className="mb-1">☐ You MAY tag my social media: @<span className="border-b border-black inline-block w-32"></span></p>
        <p className="mb-6">☐ Please do NOT tag me</p>

        <h3 className="font-bold mb-2">Name Usage:</h3>
        <p className="mb-1">☐ You may use my first name only</p>
        <p className="mb-1">☐ You may use my full name</p>
        <p className="mb-6">☐ Please do NOT use my name</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">TERMS & CONDITIONS</h2>
        <p className="mb-4">I understand and agree that:</p>
        <p className="mb-2">1. <strong>No Compensation:</strong> I will not receive payment for the use of my Images.</p>
        <p className="mb-2">2. <strong>Ownership:</strong> All Images remain the property of the stylist/business.</p>
        <p className="mb-2">3. <strong>Editing:</strong> Images may be edited, cropped, or filtered as appropriate.</p>
        <p className="mb-2">4. <strong>No Approval Required:</strong> I waive any right to inspect or approve the finished Images.</p>
        <p className="mb-2">5. <strong>Perpetual License:</strong> This release is valid indefinitely unless I revoke it in writing.</p>
        <p className="mb-6">6. <strong>Third-Party Use:</strong> Images will not be sold but may appear in promoted posts.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">REVOCATION</h2>
        <p className="mb-4">I understand that I may revoke this release at any time by providing written notice. However, revocation is not retroactive and images already published may remain.</p>
        <p className="mb-6">To revoke, send written notice to: <span className="border-b border-black inline-block w-64"></span></p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">RELEASE OF LIABILITY</h2>
        <p className="mb-6">I release the stylist/business from any claims, damages, or liability arising from the use of my Images as authorized above, including claims of defamation, invasion of privacy, or right of publicity.</p>

        {/* Signatures */}
        <div className="border-t-2 border-[#3D3935] pt-8 mt-12">
          <h2 className="text-xl font-bold mb-6">SIGNATURES</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border p-6">
              <h3 className="font-bold mb-4">CLIENT SIGNATURE:</h3>
              <p className="mb-6">Signature: <span className="border-b border-black inline-block w-48"></span></p>
              <p className="mb-6">Date: <span className="border-b border-black inline-block w-32"></span></p>
              <p>Printed Name: <span className="border-b border-black inline-block w-48"></span></p>
            </div>
            <div className="border p-6">
              <h3 className="font-bold mb-4">STYLIST SIGNATURE:</h3>
              <p className="mb-6">Signature: <span className="border-b border-black inline-block w-48"></span></p>
              <p className="mb-6">Date: <span className="border-b border-black inline-block w-32"></span></p>
              <p>Printed Name: <span className="border-b border-black inline-block w-48"></span></p>
            </div>
          </div>

          <div className="border p-6 bg-gray-50">
            <h3 className="font-bold mb-4">IF CLIENT IS UNDER 18 - PARENT/GUARDIAN CONSENT:</h3>
            <p className="mb-4 text-sm">I am the parent/legal guardian and grant permission on behalf of my minor child.</p>
            <p className="mb-4">Parent/Guardian Signature: <span className="border-b border-black inline-block w-48"></span> Date: <span className="border-b border-black inline-block w-24"></span></p>
            <p>Printed Name: <span className="border-b border-black inline-block w-48"></span> Relationship: <span className="border-b border-black inline-block w-32"></span></p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          <p className="mb-2"><strong>DISCLAIMER:</strong> This template is for informational purposes only.</p>
          <p>© The J Formula | thejformula.com/vault</p>
        </div>
      </div>
    </div>
  );
}

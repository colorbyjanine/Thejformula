"use client";

import { useEffect } from "react";

export default function BoothRentalTemplate() {
  useEffect(() => {
    // Add print-specific styles
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
      {/* Print/Download Header */}
      <div className="no-print bg-[#3D3935] text-white py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <span className="font-semibold">California Booth Rental Agreement</span>
        <div className="flex gap-4">
          <button 
            onClick={() => window.print()}
            className="px-4 py-2 bg-white text-[#3D3935] rounded hover:bg-gray-100 transition"
          >
            🖨️ Print / Save as PDF
          </button>
          <a href="/vault" className="px-4 py-2 border border-white rounded hover:bg-white/10 transition">
            ← Back to Vault
          </a>
        </div>
      </div>

      {/* Template Content */}
      <div className="print-content max-w-4xl mx-auto p-8 md:p-12 text-[#333] leading-relaxed">
        <div className="text-center mb-8 border-b-2 border-[#3D3935] pb-6">
          <h1 className="text-3xl font-bold mb-2">CALIFORNIA BOOTH RENTAL AGREEMENT</h1>
          <p className="text-sm text-gray-600">The J Formula Legal Vault • California-Compliant Template</p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="text-sm"><strong>⚠️ California AB-5 Compliance Notice:</strong> This agreement is designed for licensed barbers, cosmetologists, estheticians, and electrologists who qualify for the independent contractor exemption under California Labor Code §2750.3. As of January 1, 2025, licensed manicurists are NOT eligible for booth rental and must be classified as employees.</p>
        </div>

        <p className="mb-6">This Booth Rental Agreement ("Agreement") is entered into as of <span className="border-b border-black inline-block w-48"></span> ("Effective Date")</p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="border p-4">
            <h3 className="font-bold mb-3 text-lg border-b pb-2">SALON OWNER/LESSOR:</h3>
            <p className="mb-2">Name: <span className="border-b border-black inline-block w-full"></span></p>
            <p className="mb-2">Business Name: <span className="border-b border-black inline-block w-full"></span></p>
            <p className="mb-2">CA Establishment License #: <span className="border-b border-black inline-block w-full"></span></p>
            <p className="mb-2">Address: <span className="border-b border-black inline-block w-full"></span></p>
            <p className="mb-2">Phone: <span className="border-b border-black inline-block w-32"></span> Email: <span className="border-b border-black inline-block w-32"></span></p>
          </div>
          <div className="border p-4">
            <h3 className="font-bold mb-3 text-lg border-b pb-2">BOOTH RENTER/LESSEE:</h3>
            <p className="mb-2">Name: <span className="border-b border-black inline-block w-full"></span></p>
            <p className="mb-2">Business Name (DBA): <span className="border-b border-black inline-block w-full"></span></p>
            <p className="mb-2">Address: <span className="border-b border-black inline-block w-full"></span></p>
            <p className="mb-2">Phone: <span className="border-b border-black inline-block w-32"></span> Email: <span className="border-b border-black inline-block w-32"></span></p>
          </div>
        </div>

        <div className="border p-4 mb-8 bg-gray-50">
          <h3 className="font-bold mb-3">CALIFORNIA LICENSE INFORMATION (Required):</h3>
          <p className="mb-2">License Type: ☐ Cosmetologist  ☐ Barber  ☐ Esthetician  ☐ Electrologist</p>
          <p className="mb-2">California License Number: <span className="border-b border-black inline-block w-48"></span></p>
          <p>License Expiration Date: <span className="border-b border-black inline-block w-48"></span></p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">1. PREMISES</h2>
        <p className="mb-4">Salon Owner agrees to rent to Booth Renter the following space:</p>
        <p className="mb-2">☐ Styling Station #<span className="border-b border-black inline-block w-16"></span></p>
        <p className="mb-2">☐ Private Suite #<span className="border-b border-black inline-block w-16"></span></p>
        <p className="mb-4">☐ Designated Area: <span className="border-b border-black inline-block w-64"></span></p>
        <p className="mb-6">Located at: <span className="border-b border-black inline-block w-full"></span></p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">2. TERM</h2>
        <p className="mb-2">This Agreement shall commence on <span className="border-b border-black inline-block w-32"></span> and continue:</p>
        <p className="mb-2">☐ Month-to-month basis</p>
        <p className="mb-2">☐ Fixed term of <span className="border-b border-black inline-block w-16"></span> months, ending on <span className="border-b border-black inline-block w-32"></span></p>
        <p className="mb-6">Notice to Terminate: <span className="border-b border-black inline-block w-16"></span> days written notice required by either party</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">3. RENT & PAYMENT</h2>
        <p className="mb-2">Monthly Rent: $<span className="border-b border-black inline-block w-24"></span></p>
        <p className="mb-2">Due Date: <span className="border-b border-black inline-block w-16"></span> day of each month</p>
        <p className="mb-2">Security Deposit: $<span className="border-b border-black inline-block w-24"></span></p>
        <p className="mb-2">Late Fee: $<span className="border-b border-black inline-block w-16"></span> if not received within <span className="border-b border-black inline-block w-8"></span> days</p>
        <p className="mb-6">Payment Method: ☐ Check  ☐ Electronic Transfer  ☐ Other: <span className="border-b border-black inline-block w-32"></span></p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">4. INCLUDED IN RENT</h2>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <p>☐ Use of licensed establishment space</p>
          <p>☐ Water and electricity</p>
          <p>☐ Heating and air conditioning</p>
          <p>☐ Waiting area for clients</p>
          <p>☐ Shared restroom facilities</p>
          <p>☐ Wi-Fi access</p>
          <p>☐ Basic cleaning of common areas</p>
          <p>☐ Parking availability</p>
          <p>☐ Shampoo bowl access</p>
          <p>☐ Other: <span className="border-b border-black inline-block w-32"></span></p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">5. BOOTH RENTER'S RESPONSIBILITIES</h2>
        <h3 className="font-bold mb-2">Licensing & Compliance:</h3>
        <p className="mb-1">☐ Maintaining valid California cosmetology/barber license</p>
        <p className="mb-1">☐ Displaying license at workstation as required by CA Board</p>
        <p className="mb-1">☐ Complying with all California Board of Barbering and Cosmetology regulations</p>
        <p className="mb-4">☐ Obtaining city/county business license (if required)</p>

        <h3 className="font-bold mb-2">Insurance:</h3>
        <p className="mb-1">☐ Professional liability insurance (minimum $1,000,000 per occurrence)</p>
        <p className="mb-4">☐ General liability insurance (minimum $1,000,000 per occurrence)</p>

        <h3 className="font-bold mb-2">Business Operations:</h3>
        <p className="mb-1">☐ All professional products and supplies</p>
        <p className="mb-1">☐ All tools and equipment</p>
        <p className="mb-1">☐ Marketing and business promotion</p>
        <p className="mb-1">☐ Scheduling and booking own clients</p>
        <p className="mb-1">☐ Collecting payment from own clients</p>
        <p className="mb-1">☐ Setting own service prices</p>
        <p className="mb-6">☐ Managing own client records</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">6. INDEPENDENT CONTRACTOR STATUS</h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-sm"><strong>California AB-5 Exemption Requirements:</strong> To maintain independent contractor status, Booth Renter must set their own rates, set their own hours, be free from control and direction, maintain their own clientele, and have freedom to contract with other businesses.</p>
        </div>
        
        <p className="mb-4">Booth Renter expressly acknowledges and agrees that:</p>
        <p className="mb-2">a) Booth Renter is an <strong>INDEPENDENT CONTRACTOR</strong> and NOT an employee of Salon Owner.</p>
        <p className="mb-2">b) Booth Renter has sole control over schedule, rates, methods, clients, and other engagements.</p>
        <p className="mb-2">c) Salon Owner will NOT withhold taxes, provide workers' comp, unemployment insurance, health insurance, or any employee benefits.</p>
        <p className="mb-6">d) Booth Renter is responsible for all federal, state, and local taxes including self-employment tax.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">7. INSURANCE REQUIREMENTS</h2>
        <p className="mb-2">Booth Renter shall maintain:</p>
        <p className="mb-2">• Professional Liability Insurance: Minimum $<span className="border-b border-black inline-block w-24"></span> per occurrence</p>
        <p className="mb-4">• General Liability Insurance: Minimum $<span className="border-b border-black inline-block w-24"></span> per occurrence</p>
        <p className="mb-6">☐ Proof of insurance must be provided upon signing  ☐ Salon Owner named as additional insured</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">8. HOURS OF OPERATION</h2>
        <p className="mb-2">Salon Facility Hours: <span className="border-b border-black inline-block w-64"></span></p>
        <p className="mb-2">Booth Renter Access: ☐ During business hours only  ☐ 24/7 with key/code  ☐ Extended hours: <span className="border-b border-black inline-block w-32"></span></p>
        <p className="mb-6 italic text-sm">Booth Renter sets their OWN schedule within available facility hours. Salon Owner does NOT require minimum hours.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">9. CLIENT OWNERSHIP</h2>
        <p className="mb-2">☐ Booth Renter's clients are Booth Renter's own property</p>
        <p className="mb-2">☐ Booth Renter may take client list and contact information upon departure</p>
        <p className="mb-6">☐ No non-compete restrictions apply (per California Business and Professions Code §16600)</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">10. TERMINATION</h2>
        <p className="mb-2">By Either Party: <span className="border-b border-black inline-block w-16"></span> days written notice required</p>
        <p className="mb-4">Immediate termination permitted if: license suspended/revoked, Board violations, illegal activity, material breach, or failure to pay rent for <span className="border-b border-black inline-block w-8"></span> consecutive days.</p>
        <p className="mb-6">Security deposit returned within 21 days per California Civil Code §1950.5.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">11. GOVERNING LAW & DISPUTE RESOLUTION</h2>
        <p className="mb-2">This Agreement shall be governed by California law.</p>
        <p className="mb-6">Any disputes shall be resolved in <span className="border-b border-black inline-block w-32"></span> County, California.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">12. ENTIRE AGREEMENT</h2>
        <p className="mb-8">This Agreement constitutes the entire agreement between the parties. Any modifications must be in writing and signed by both parties.</p>

        {/* Signatures */}
        <div className="border-t-2 border-[#3D3935] pt-8 mt-12">
          <h2 className="text-xl font-bold mb-6">SIGNATURES</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border p-6">
              <h3 className="font-bold mb-4">SALON OWNER/LESSOR:</h3>
              <p className="mb-6">Signature: <span className="border-b border-black inline-block w-48"></span></p>
              <p className="mb-6">Date: <span className="border-b border-black inline-block w-32"></span></p>
              <p>Printed Name: <span className="border-b border-black inline-block w-48"></span></p>
            </div>
            <div className="border p-6">
              <h3 className="font-bold mb-4">BOOTH RENTER/LESSEE:</h3>
              <p className="mb-6">Signature: <span className="border-b border-black inline-block w-48"></span></p>
              <p className="mb-6">Date: <span className="border-b border-black inline-block w-32"></span></p>
              <p className="mb-6">Printed Name: <span className="border-b border-black inline-block w-48"></span></p>
              <p>CA License #: <span className="border-b border-black inline-block w-32"></span></p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          <p className="mb-2"><strong>DISCLAIMER:</strong> This template is provided for informational purposes only and does not constitute legal advice.</p>
          <p className="mb-2">Consult with a California-licensed attorney before using. Laws change frequently.</p>
          <p>© The J Formula | thejformula.com/vault</p>
        </div>
      </div>
    </div>
  );
}

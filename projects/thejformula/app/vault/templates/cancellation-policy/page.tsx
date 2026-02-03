"use client";

import { useEffect } from "react";

export default function CancellationPolicyTemplate() {
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
        <span className="font-semibold">Cancellation & No-Show Policy</span>
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
          <h1 className="text-3xl font-bold mb-2">CANCELLATION & NO-SHOW POLICY</h1>
          <p className="text-sm text-gray-600">The J Formula Legal Vault • Professional Template</p>
        </div>

        <div className="border p-4 mb-8 bg-gray-50">
          <p className="mb-2">Business Name: <span className="border-b border-black inline-block w-64"></span></p>
          <p>Effective Date: <span className="border-b border-black inline-block w-32"></span></p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">OUR POLICY</h2>
        <p className="mb-6">We understand that life happens and schedules change. However, when you book an appointment, that time is reserved exclusively for you. Late cancellations and no-shows affect our ability to serve other clients and impact our livelihood. This policy ensures fairness for all clients.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">DEFINITIONS</h2>
        <p className="mb-2"><strong>Cancellation:</strong> Notifying us that you cannot attend your scheduled appointment.</p>
        <p className="mb-2"><strong>Late Cancellation:</strong> Cancellation made within the required notice period.</p>
        <p className="mb-2"><strong>No-Show:</strong> Failure to arrive for your appointment without any notification.</p>
        <p className="mb-6"><strong>Deposit:</strong> Payment required at booking to secure your appointment.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">CANCELLATION NOTICE REQUIREMENTS</h2>
        <div className="border p-4 mb-6">
          <p className="mb-2"><strong>Standard Services</strong> (cuts, styling, basic color):</p>
          <p className="mb-4">Minimum notice required: ☐ 24 hours ☐ 48 hours ☐ <span className="border-b border-black inline-block w-16"></span> hours</p>
          <p className="mb-2"><strong>Extended Services</strong> (color corrections, extensions, bridal):</p>
          <p>Minimum notice required: ☐ 48 hours ☐ 72 hours ☐ <span className="border-b border-black inline-block w-16"></span> hours</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">DEPOSIT REQUIREMENTS</h2>
        <h3 className="font-bold mb-2">Appointments Requiring Deposits:</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p>☐ All appointments</p>
          <p>☐ New clients only</p>
          <p>☐ Services over $<span className="border-b border-black inline-block w-16"></span></p>
          <p>☐ Services over <span className="border-b border-black inline-block w-8"></span> hours</p>
          <p>☐ Extensions & specialty services</p>
          <p>☐ Bridal & special events</p>
          <p>☐ Color corrections</p>
          <p>☐ Saturday appointments</p>
        </div>
        <p className="mb-2"><strong>Deposit Amount:</strong></p>
        <p className="mb-2">☐ Flat fee: $<span className="border-b border-black inline-block w-16"></span></p>
        <p className="mb-6">☐ Percentage of service: <span className="border-b border-black inline-block w-8"></span>%</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">CANCELLATION FEES</h2>
        
        <h3 className="font-bold mb-2">With Adequate Notice (outside notice period):</h3>
        <p className="mb-1">☐ No fee — deposit refunded or applied to rescheduled appointment</p>
        <p className="mb-6">☐ Rescheduling fee: $<span className="border-b border-black inline-block w-16"></span></p>

        <h3 className="font-bold mb-2">Late Cancellation (within notice period):</h3>
        <p className="mb-1">☐ Forfeit deposit</p>
        <p className="mb-1">☐ Charged <span className="border-b border-black inline-block w-8"></span>% of scheduled service(s)</p>
        <p className="mb-6">☐ Flat fee: $<span className="border-b border-black inline-block w-16"></span></p>

        <h3 className="font-bold mb-2">No-Show:</h3>
        <p className="mb-1">☐ Forfeit deposit</p>
        <p className="mb-1">☐ Charged 100% of scheduled service(s)</p>
        <p className="mb-1">☐ Required to prepay for future bookings</p>
        <p className="mb-6">☐ Other: <span className="border-b border-black inline-block w-48"></span></p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">EXCEPTIONS</h2>
        <p className="mb-4">The following may be considered for waived fees at our discretion:</p>
        <ul className="list-disc list-inside mb-6">
          <li>Medical emergencies (with documentation if requested)</li>
          <li>Death in immediate family</li>
          <li>Severe weather/natural disasters</li>
          <li>Car accident day of appointment</li>
          <li>Other circumstances at stylist's discretion</li>
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">LATE ARRIVALS</h2>
        <p className="mb-2">Grace Period: <span className="border-b border-black inline-block w-8"></span> minutes</p>
        <p className="mb-2">After Grace Period:</p>
        <p className="mb-1">☐ Appointment shortened to remaining time (full price applies)</p>
        <p className="mb-1">☐ Appointment cancelled and treated as late cancellation</p>
        <p className="mb-6">☐ Rescheduled at stylist's discretion</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">HOW TO CANCEL OR RESCHEDULE</h2>
        <p className="mb-4">Please contact us as soon as you know you need to cancel or reschedule:</p>
        <p className="mb-2">☐ Phone/Text: <span className="border-b border-black inline-block w-48"></span></p>
        <p className="mb-2">☐ Email: <span className="border-b border-black inline-block w-48"></span></p>
        <p className="mb-2">☐ Online Booking System: <span className="border-b border-black inline-block w-48"></span></p>
        <p className="mb-6">☐ DM on Instagram: @<span className="border-b border-black inline-block w-32"></span></p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">READY-TO-USE MESSAGES</h2>
        
        <div className="bg-blue-50 border p-4 mb-4">
          <h3 className="font-bold mb-2">📱 Booking Confirmation:</h3>
          <p className="text-sm italic">"Hi [Name]! Your appointment is confirmed for [Date] at [Time] for [Service]. As a reminder, we require [X] hours notice for cancellations. Late cancellations and no-shows are subject to fees. Reply YES to confirm. See you soon!"</p>
        </div>

        <div className="bg-green-50 border p-4 mb-4">
          <h3 className="font-bold mb-2">📱 Reminder (24-48 hours before):</h3>
          <p className="text-sm italic">"Reminder: Your appointment is tomorrow, [Date] at [Time]. Need to reschedule? Please let us know ASAP to avoid cancellation fees. See you soon!"</p>
        </div>

        <div className="bg-yellow-50 border p-4 mb-6">
          <h3 className="font-bold mb-2">📱 No-Show Follow-Up:</h3>
          <p className="text-sm italic">"Hi [Name], we missed you at your [Time] appointment today. Per our policy, a [fee/deposit forfeit] will apply. Please contact us to rebook when you're ready. We hope everything is okay!"</p>
        </div>

        {/* Client Acknowledgment */}
        <div className="border-t-2 border-[#3D3935] pt-8 mt-12">
          <h2 className="text-xl font-bold mb-4">CLIENT ACKNOWLEDGMENT</h2>
          <p className="mb-6">I have read and understand this Cancellation & No-Show Policy. I agree to provide adequate notice if I need to cancel or reschedule, and I understand the fees associated with late cancellations and no-shows.</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">Client Signature: <span className="border-b border-black inline-block w-48"></span></p>
              <p className="mb-4">Date: <span className="border-b border-black inline-block w-32"></span></p>
              <p>Printed Name: <span className="border-b border-black inline-block w-48"></span></p>
            </div>
            <div>
              <p className="mb-4 font-semibold">Credit Card Authorization (if applicable):</p>
              <p className="text-sm mb-4">I authorize charges to my card on file for late cancellation and no-show fees as outlined in this policy.</p>
              <p className="mb-4">Signature: <span className="border-b border-black inline-block w-48"></span></p>
              <p>Last 4 Digits: <span className="border-b border-black inline-block w-16"></span></p>
            </div>
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

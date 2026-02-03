"use client";

import { useEffect } from "react";

export default function ClientWaiverTemplate() {
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
        <span className="font-semibold">California Client Waiver & Consent Form</span>
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
          <h1 className="text-3xl font-bold mb-2">CLIENT CONSULTATION, CONSENT & LIABILITY WAIVER</h1>
          <p className="text-sm text-gray-600">The J Formula Legal Vault • California-Compliant Template</p>
        </div>

        <div className="border p-4 mb-8 bg-gray-50">
          <h3 className="font-bold mb-2">SERVICE PROVIDER:</h3>
          <p className="mb-1">Business Name: <span className="border-b border-black inline-block w-64"></span></p>
          <p className="mb-1">Stylist Name: <span className="border-b border-black inline-block w-64"></span></p>
          <p>California License #: <span className="border-b border-black inline-block w-48"></span></p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">SECTION 1: CLIENT INFORMATION</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <p>Full Legal Name: <span className="border-b border-black inline-block w-full"></span></p>
          <p>Preferred Name: <span className="border-b border-black inline-block w-full"></span></p>
          <p>Date of Birth: <span className="border-b border-black inline-block w-32"></span> Age: <span className="border-b border-black inline-block w-16"></span></p>
          <p>Phone: <span className="border-b border-black inline-block w-48"></span></p>
          <p>Email: <span className="border-b border-black inline-block w-full"></span></p>
          <p>Address: <span className="border-b border-black inline-block w-full"></span></p>
          <p>Emergency Contact: <span className="border-b border-black inline-block w-48"></span></p>
          <p>Emergency Phone: <span className="border-b border-black inline-block w-32"></span></p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">SECTION 2: HEALTH & ALLERGY QUESTIONNAIRE</h2>
        
        <h3 className="font-bold mb-2">Allergies & Sensitivities:</h3>
        <p className="mb-2">Do you have any known allergies? ☐ Yes ☐ No</p>
        <p className="mb-4">If yes, please list: <span className="border-b border-black inline-block w-full"></span></p>
        
        <p className="mb-2">Have you ever had an allergic reaction to hair products? ☐ Yes ☐ No</p>
        <p className="mb-4">If yes, describe: <span className="border-b border-black inline-block w-full"></span></p>

        <p className="mb-2 font-semibold">Are you allergic or sensitive to any of the following?</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
          <p>☐ PPD (found in hair color)</p>
          <p>☐ Ammonia</p>
          <p>☐ Peroxide/Developer</p>
          <p>☐ Latex/Rubber</p>
          <p>☐ Fragrances</p>
          <p>☐ Sulfates</p>
          <p>☐ Formaldehyde</p>
          <p>☐ Nickel</p>
          <p>☐ Essential oils</p>
          <p>☐ None known</p>
        </div>

        <h3 className="font-bold mb-2">Medical Conditions:</h3>
        <p className="mb-2">Do you have any of the following?</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
          <p>☐ Sensitive scalp</p>
          <p>☐ Psoriasis</p>
          <p>☐ Eczema/dermatitis</p>
          <p>☐ Alopecia</p>
          <p>☐ Thyroid disorder</p>
          <p>☐ Autoimmune condition</p>
          <p>☐ Cancer treatment</p>
          <p>☐ Diabetes</p>
          <p>☐ Open wounds on scalp</p>
          <p>☐ None of the above</p>
        </div>

        <p className="mb-4">Are you currently pregnant or nursing? ☐ Yes ☐ No ☐ Possibly</p>

        <h3 className="font-bold mb-2">Medications:</h3>
        <p className="mb-2">Are you currently taking any medications? ☐ Yes ☐ No</p>
        <p className="mb-4">If yes, please list: <span className="border-b border-black inline-block w-full"></span></p>
        <p className="mb-6">Have you taken Accutane in the past 12 months? ☐ Yes ☐ No</p>

        <h3 className="font-bold mb-2">Hair History:</h3>
        <p className="mb-2">What color services have you had in the past 2 years?</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <p>☐ Professional hair color</p>
          <p>☐ Professional highlights</p>
          <p>☐ Balayage</p>
          <p>☐ Color correction</p>
          <p>☐ Bleach/Lightener</p>
          <p>☐ Box dye (Brand: <span className="border-b border-black inline-block w-24"></span>)</p>
          <p>☐ Henna/vegetable dye</p>
          <p>☐ None - virgin hair</p>
        </div>
        <p className="mb-4">When was your last color service? <span className="border-b border-black inline-block w-32"></span></p>

        <p className="mb-2">What chemical treatments have you had?</p>
        <div className="grid grid-cols-2 gap-2 mb-6">
          <p>☐ Relaxer/Straightener</p>
          <p>☐ Keratin treatment</p>
          <p>☐ Permanent wave</p>
          <p>☐ None</p>
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">SECTION 3: SERVICE ACKNOWLEDGMENTS</h2>
        
        <p className="mb-4 font-semibold">For ALL Services, I understand and acknowledge:</p>
        <p className="mb-1">☐ I have answered all questions truthfully and completely</p>
        <p className="mb-1">☐ Results depend on my hair's condition, history, and natural characteristics</p>
        <p className="mb-1">☐ Photos are for reference; exact replication cannot be guaranteed</p>
        <p className="mb-4">☐ I will follow all aftercare instructions provided</p>

        <p className="mb-4 font-semibold">For Color Services:</p>
        <p className="mb-1">☐ Results may vary based on natural pigment and previous color</p>
        <p className="mb-1">☐ Achieving desired color may require multiple sessions</p>
        <p className="mb-1">☐ Lightening carries risk of damage or breakage</p>
        <p className="mb-6">☐ A patch test has been recommended OR I decline a patch test (see below)</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">SECTION 4: PATCH TEST ACKNOWLEDGMENT</h2>
        <p className="mb-2">☐ A patch test was performed on <span className="border-b border-black inline-block w-32"></span></p>
        <p className="mb-2">   Result: ☐ No reaction ☐ Reaction observed (service declined)</p>
        <p className="mb-6">☐ <strong>I DECLINE a patch test.</strong> I understand allergic reactions can occur even with products I've used before. I accept full responsibility for this decision.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">SECTION 5: ASSUMPTION OF RISK & LIABILITY WAIVER</h2>
        
        <div className="bg-gray-50 border p-4 mb-4">
          <p className="mb-4">I acknowledge that cosmetology services involve inherent risks including but not limited to: allergic reactions, hair damage or breakage, scalp irritation, and results different from expectations.</p>
          <p className="font-bold">I VOLUNTARILY ASSUME ALL RISKS associated with the services I receive.</p>
        </div>

        <h3 className="font-bold mb-2">Release of Liability:</h3>
        <p className="mb-4">I, the undersigned, hereby release, waive, and discharge the service provider/business from any and all claims, liabilities, demands, and damages that may arise from the services provided.</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <h3 className="font-bold mb-2">California Civil Code §1542 Waiver:</h3>
          <p className="text-sm italic mb-2">I expressly waive and relinquish all rights and benefits under California Civil Code Section 1542, which provides:</p>
          <p className="text-sm italic">"A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party."</p>
        </div>

        <p className="mb-6">This waiver does NOT release the service provider from liability for gross negligence or willful misconduct.</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">SECTION 6: PHOTO CONSENT</h2>
        <p className="mb-2">☐ I consent to before/after photos for stylist's records only</p>
        <p className="mb-2">☐ I consent to photos being shared on social media</p>
        <p className="mb-6">☐ I do NOT consent to any photos</p>

        <h2 className="text-xl font-bold mt-8 mb-4 border-b-2 border-[#3D3935] pb-2">SECTION 7: TODAY'S SERVICES</h2>
        <p className="mb-2">Services Requested: <span className="border-b border-black inline-block w-full"></span></p>
        <p className="mb-2"><span className="border-b border-black inline-block w-full"></span></p>
        <p className="mb-2">Estimated Time: <span className="border-b border-black inline-block w-32"></span></p>
        <p className="mb-6">Estimated Cost: $<span className="border-b border-black inline-block w-32"></span> (Final price may vary)</p>

        {/* Signatures */}
        <div className="border-t-2 border-[#3D3935] pt-8 mt-12">
          <h2 className="text-xl font-bold mb-4">CONSENT & SIGNATURES</h2>
          
          <p className="mb-6">By signing below, I certify that I have provided accurate information, understand the risks, and consent to receive the services listed above. I am at least 18 years of age OR have parent/guardian consent below.</p>
          
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
              <p>CA License #: <span className="border-b border-black inline-block w-32"></span></p>
            </div>
          </div>

          <div className="border p-6 bg-gray-50">
            <h3 className="font-bold mb-4">IF CLIENT IS UNDER 18 - PARENT/GUARDIAN CONSENT:</h3>
            <p className="mb-4 text-sm">I am the parent/legal guardian of the above-named minor. I have read this entire form, understand its contents, and consent to the services and release of liability on behalf of my minor child.</p>
            <p className="mb-4">Parent/Guardian Signature: <span className="border-b border-black inline-block w-48"></span> Date: <span className="border-b border-black inline-block w-24"></span></p>
            <p className="mb-2">Printed Name: <span className="border-b border-black inline-block w-48"></span></p>
            <p>Relationship: <span className="border-b border-black inline-block w-32"></span> Phone: <span className="border-b border-black inline-block w-32"></span></p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-500">
          <p className="mb-2"><strong>DISCLAIMER:</strong> This template is for informational purposes only and does not constitute legal advice.</p>
          <p>© The J Formula | thejformula.com/vault</p>
        </div>
      </div>
    </div>
  );
}

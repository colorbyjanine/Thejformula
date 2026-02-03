import Link from "next/link";

const templates = [
  {
    name: "Booth Rental Agreement",
    description: "Comprehensive contract for salon owners renting chairs/stations to independent stylists. Covers rent, independent contractor status, insurance, termination, and more.",
    icon: "🪑",
  },
  {
    name: "Client Liability Waiver & Consent",
    description: "Protect yourself with health questionnaires, service acknowledgments, assumption of risk, and liability release. Essential for color, chemical services, and extensions.",
    icon: "✍️",
  },
  {
    name: "Photo & Social Media Release",
    description: "Get proper permission to use client photos on Instagram, TikTok, your website, and marketing materials. Customizable permissions and revocation terms.",
    icon: "📸",
  },
  {
    name: "Independent Contractor Agreement",
    description: "Properly classify and document your relationship with stylists. Covers compensation, insurance, non-compete, confidentiality, and IRS compliance.",
    icon: "📋",
  },
  {
    name: "Cancellation & No-Show Policy",
    description: "Stop losing money to flaky clients. Professional policy template with deposit requirements, fee schedules, and ready-to-use confirmation messages.",
    icon: "📅",
  },
  {
    name: "Employee vs Contractor Checklist",
    description: "The IRS is cracking down on misclassification. This detailed checklist helps you determine proper worker status and avoid costly penalties.",
    icon: "✅",
  },
];

const bonuses = [
  "Video walkthrough explaining each template",
  "Quarterly updates as laws change",
  "State-specific guidance notes",
  "Fillable PDF versions",
  "Email support for questions",
];

export default function Vault() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            For Beauty Professionals
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            The Stylist Legal Vault
          </h1>
          <p className="text-xl text-[#3D3935]/80 max-w-3xl mx-auto mb-8">
            Professional legal templates created by a 15-year stylist who's also in law school. 
            Protect your business, your clients, and yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ✓ Instant Download
            </span>
            <span className="px-4 py-2 bg-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ✓ Editable Templates
            </span>
            <span className="px-4 py-2 bg-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ✓ Created by a Stylist
            </span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-[#3D3935] text-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] mb-8">
              Are You Protected?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="p-6 bg-[#4A4540] rounded-lg">
                <p className="text-[#D4C5B5] mb-2">😰 Without proper contracts...</p>
                <p className="text-[#FAF7F2]">
                  A booth renter dispute could cost you thousands in legal fees
                </p>
              </div>
              <div className="p-6 bg-[#4A4540] rounded-lg">
                <p className="text-[#D4C5B5] mb-2">😰 Without liability waivers...</p>
                <p className="text-[#FAF7F2]">
                  One allergic reaction or unhappy client could mean a lawsuit
                </p>
              </div>
              <div className="p-6 bg-[#4A4540] rounded-lg">
                <p className="text-[#D4C5B5] mb-2">😰 Without photo releases...</p>
                <p className="text-[#FAF7F2]">
                  Your Instagram portfolio could be taken down overnight
                </p>
              </div>
              <div className="p-6 bg-[#4A4540] rounded-lg">
                <p className="text-[#D4C5B5] mb-2">😰 Without proper classification...</p>
                <p className="text-[#FAF7F2]">
                  The IRS could hit you with back taxes and penalties
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
              What's Inside
            </p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
              6 Essential Legal Templates
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {templates.map((template) => (
              <div 
                key={template.name}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{template.icon}</span>
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                  {template.name}
                </h3>
                <p className="text-[#3D3935]/70 text-sm">
                  {template.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
              Plus
            </p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8">
              Bonus Resources
            </h2>
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/50 rounded-lg"
                >
                  <span className="text-2xl">🎁</span>
                  <span className="text-[#3D3935]">{bonus}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Creator */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-[#E8DDD4] rounded-full flex items-center justify-center text-6xl">
                💇‍♀️
              </div>
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-2">
                  Created By
                </p>
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  Janine Fernandez
                </h3>
                <p className="text-[#3D3935]/80">
                  15 years behind the chair. Color specialist. Extension expert. 
                  Salon owner. And now, law school student. I've seen every contract 
                  disaster, every client dispute, every IRS audit nightmare in this 
                  industry. These templates are what I wish I had when I started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-[#3D3935] text-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-[#B5A191] mb-4">
              Choose Your Option
            </p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)]">
              Get Protected Today
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Single Template */}
            <div className="p-8 bg-[#4A4540] rounded-lg">
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] mb-2">
                Single Template
              </h3>
              <p className="text-[#B5A191] mb-6">
                Just need one? Pick the template you need most.
              </p>
              <div className="mb-6">
                <span className="text-5xl font-[family-name:var(--font-cormorant)]">$27</span>
                <span className="text-[#B5A191]"> / template</span>
              </div>
              <ul className="space-y-3 mb-8 text-[#B5A191]">
                <li>✓ Instant download</li>
                <li>✓ Editable format</li>
                <li>✓ Lifetime access</li>
                <li className="text-[#6B6560]">✗ No bonuses</li>
                <li className="text-[#6B6560]">✗ No updates</li>
              </ul>
              <a 
                href="#" 
                className="block w-full py-3 text-center border border-[#FAF7F2] rounded-lg hover:bg-[#FAF7F2] hover:text-[#3D3935] transition-colors"
              >
                Choose Template
              </a>
            </div>

            {/* Full Bundle */}
            <div className="p-8 bg-[#FAF7F2] text-[#3D3935] rounded-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#9CAF88] text-white text-sm rounded-full">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] mb-2">
                Complete Vault
              </h3>
              <p className="text-[#9A9086] mb-6">
                Everything you need to protect your business.
              </p>
              <div className="mb-6">
                <span className="text-5xl font-[family-name:var(--font-cormorant)]">$97</span>
                <span className="text-[#9A9086]"> one-time</span>
              </div>
              <ul className="space-y-3 mb-8 text-[#3D3935]/80">
                <li>✓ All 6 templates</li>
                <li>✓ Instant download</li>
                <li>✓ Editable formats</li>
                <li>✓ Lifetime access</li>
                <li>✓ All bonus resources</li>
                <li>✓ Free updates for life</li>
              </ul>
              <a 
                href="#" 
                className="block w-full py-3 text-center bg-[#3D3935] text-[#FAF7F2] rounded-lg hover:bg-[#4A4540] transition-colors"
              >
                Get the Complete Vault
              </a>
              <p className="text-center text-sm text-[#9A9086] mt-4">
                Save $65 vs. buying individually
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] text-center mb-12">
              Common Questions
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  Are these templates legally binding?
                </h3>
                <p className="text-[#3D3935]/70">
                  These templates are professionally drafted starting points. For maximum protection, 
                  we recommend having an attorney in your state review them. Laws vary by state, 
                  and a local attorney can ensure compliance with your specific jurisdiction.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  Can I edit the templates?
                </h3>
                <p className="text-[#3D3935]/70">
                  Yes! All templates come in editable formats so you can customize them 
                  with your business name, specific terms, and state requirements.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  What if laws change?
                </h3>
                <p className="text-[#3D3935]/70">
                  Complete Vault customers get free updates for life. When significant 
                  legal changes affect beauty professionals, we'll update the templates 
                  and notify you.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-[#3D3935]/70">
                  Due to the digital nature of these products, we cannot offer refunds 
                  once the files are downloaded. Please review what's included before purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Stop Operating Without Protection
          </h2>
          <p className="text-[#3D3935]/80 max-w-2xl mx-auto mb-8">
            One bad contract. One unhappy client. One IRS audit. Any of these could cost 
            you thousands — or your entire business. For less than the cost of one color service, 
            protect everything you've built.
          </p>
          <a 
            href="#" 
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get the Complete Vault — $97
          </a>
          <p className="text-sm text-[#9A9086] mt-4">
            Instant access. Download immediately.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#FAF7F2]">
        <div className="container mx-auto">
          <p className="text-xs text-[#9A9086] text-center max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> The templates provided are for informational purposes only 
            and do not constitute legal advice. The J Formula is not a law firm, and using these 
            templates does not create an attorney-client relationship. Laws vary by state and 
            jurisdiction. We recommend consulting with a licensed attorney in your state before 
            using any legal documents. These templates are starting points and may need to be 
            modified for your specific situation.
          </p>
        </div>
      </section>
    </div>
  );
}

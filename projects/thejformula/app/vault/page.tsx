import Link from "next/link";

const templates = [
  {
    name: "California Booth Rental Agreement",
    description: "AB-5 compliant contract for salon owners renting chairs to independent stylists. Covers independent contractor status, insurance requirements, California Board compliance, and termination terms.",
    icon: "🪑",
    highlight: "AB-5 Compliant",
  },
  {
    name: "Client Waiver & Consent Form",
    description: "Comprehensive intake form with health questionnaire, allergy disclosure, service acknowledgments, patch test documentation, and California Civil Code §1542 liability waiver.",
    icon: "✍️",
    highlight: "CA Civil Code",
  },
  {
    name: "Photo & Social Media Release",
    description: "Get proper permission for Instagram, TikTok, and marketing. Includes California-specific privacy rights, revocation terms, and minor consent forms.",
    icon: "📸",
    highlight: "Privacy Rights",
  },
  {
    name: "Independent Contractor Agreement",
    description: "California Labor Code §2750.3 compliant contract. Properly classifies beauty professionals, covers taxes, insurance, confidentiality, and the AB-5 exemption criteria.",
    icon: "📋",
    highlight: "Labor Code Compliant",
  },
  {
    name: "Cancellation & No-Show Policy",
    description: "Professional policy with deposit requirements, fee schedules, and ready-to-use client messages. Includes California consumer protection considerations.",
    icon: "📅",
    highlight: "Ready to Use",
  },
  {
    name: "Employee vs Contractor Checklist",
    description: "Detailed IRS and California ABC Test checklist to determine proper worker classification. Avoid costly misclassification penalties and EDD audits.",
    icon: "✅",
    highlight: "Avoid Audits",
  },
];

const features = [
  {
    title: "Written for California",
    description: "Every template addresses California-specific laws including AB-5, Civil Code, and Board of Barbering and Cosmetology requirements.",
    icon: "🐻",
  },
  {
    title: "Created by Industry Insiders",
    description: "Built by a 15-year stylist who's also in law school. We know the real situations you face behind the chair.",
    icon: "💇‍♀️",
  },
  {
    title: "Easy to Customize",
    description: "Fill-in-the-blank format. Just add your business info and you're protected. No legal degree required.",
    icon: "✏️",
  },
  {
    title: "Instant Access",
    description: "Download immediately after purchase. Start using them today to protect your business.",
    icon: "⚡",
  },
];

const testimonialPlaceholders = [
  {
    quote: "I've been doing hair for 8 years without proper contracts. These templates finally gave me peace of mind.",
    name: "Coming Soon",
    role: "Salon Owner",
  },
  {
    quote: "The booth rental agreement saved me during a dispute with a renter. Worth every penny.",
    name: "Coming Soon", 
    role: "Salon Owner",
  },
];

export default function Vault() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-[#9CAF88] text-white text-sm rounded-full mb-6">
            🐻 California-Specific Templates
          </div>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            The Stylist Legal Vault
          </h1>
          <p className="text-xl text-[#3D3935]/80 max-w-3xl mx-auto mb-8">
            Professional legal templates for California beauty professionals. 
            AB-5 compliant. Board-ready. Created by a stylist, for stylists.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ✓ California AB-5 Compliant
            </span>
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ✓ Instant Download
            </span>
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ✓ Editable Templates
            </span>
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ✓ Created by a Stylist
            </span>
          </div>
          <a 
            href="https://thejformula.gumroad.com/l/stylist-legal-vault" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-lg px-8 py-4"
          >
            Get the Complete Vault — $97
          </a>
          <p className="text-sm text-[#9A9086] mt-3">
            One-time purchase. Lifetime access. Free updates.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-[#3D3935] text-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] mb-4 text-center">
              California Has the Strictest Laws in the Country
            </h2>
            <p className="text-[#B5A191] text-center mb-10 max-w-2xl mx-auto">
              AB-5, EDD audits, Board inspections... one mistake can cost you thousands. Are you protected?
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#4A4540] rounded-lg">
                <p className="text-[#FF6B6B] font-semibold mb-2">😰 Without proper contracts...</p>
                <p className="text-[#FAF7F2]">
                  A booth renter could claim they're an employee. EDD penalties can reach $25,000+ per worker.
                </p>
              </div>
              <div className="p-6 bg-[#4A4540] rounded-lg">
                <p className="text-[#FF6B6B] font-semibold mb-2">😰 Without liability waivers...</p>
                <p className="text-[#FAF7F2]">
                  One allergic reaction or unhappy client could mean a lawsuit. California courts are plaintiff-friendly.
                </p>
              </div>
              <div className="p-6 bg-[#4A4540] rounded-lg">
                <p className="text-[#FF6B6B] font-semibold mb-2">😰 Without photo releases...</p>
                <p className="text-[#FAF7F2]">
                  California has strong privacy rights. Your Instagram portfolio could be a legal liability.
                </p>
              </div>
              <div className="p-6 bg-[#4A4540] rounded-lg">
                <p className="text-[#FF6B6B] font-semibold mb-2">😰 Without proper classification...</p>
                <p className="text-[#FAF7F2]">
                  The ABC Test is strict. Misclassification means back taxes, penalties, and possible criminal charges.
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
              6 California-Compliant Templates
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {templates.map((template) => (
              <div 
                key={template.name}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
              >
                <div className="absolute -top-2 -right-2 px-2 py-1 bg-[#9CAF88] text-white text-xs rounded">
                  {template.highlight}
                </div>
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

      {/* Features */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
              Why These Templates?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-[#3D3935] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#3D3935]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] text-center mb-10">
              Everything You Get
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl">📄</span>
                <div>
                  <h3 className="font-semibold text-[#3D3935]">6 Complete Legal Templates</h3>
                  <p className="text-sm text-[#3D3935]/70">Professionally written, California-specific, ready to use</p>
                </div>
                <span className="text-[#3D3935]/50 ml-auto">$162 value</span>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl">📝</span>
                <div>
                  <h3 className="font-semibold text-[#3D3935]">Editable Word & PDF Formats</h3>
                  <p className="text-sm text-[#3D3935]/70">Easy to customize with your business details</p>
                </div>
                <span className="text-[#3D3935]/50 ml-auto">Included</span>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl">🎥</span>
                <div>
                  <h3 className="font-semibold text-[#3D3935]">Video Walkthrough Guide</h3>
                  <p className="text-sm text-[#3D3935]/70">Learn how to fill out and use each template</p>
                </div>
                <span className="text-[#3D3935]/50 ml-auto">$47 value</span>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl">🔄</span>
                <div>
                  <h3 className="font-semibold text-[#3D3935]">Free Lifetime Updates</h3>
                  <p className="text-sm text-[#3D3935]/70">When California laws change, you get updated templates</p>
                </div>
                <span className="text-[#3D3935]/50 ml-auto">Priceless</span>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <span className="text-2xl">📧</span>
                <div>
                  <h3 className="font-semibold text-[#3D3935]">Email Support</h3>
                  <p className="text-sm text-[#3D3935]/70">Questions? We're here to help</p>
                </div>
                <span className="text-[#3D3935]/50 ml-auto">Included</span>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#3D3935] rounded-lg text-center">
              <p className="text-[#B5A191] text-sm mb-2">Total Value: $209+</p>
              <p className="text-4xl font-[family-name:var(--font-cormorant)] text-[#FAF7F2] mb-4">
                Your Price: $97
              </p>
              <a 
                href="https://thejformula.gumroad.com/l/stylist-legal-vault" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#FAF7F2] text-[#3D3935] rounded-lg hover:bg-[#E8DDD4] transition-colors font-semibold"
              >
                Get Instant Access
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Creator */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-40 h-40 bg-[#3D3935] rounded-full flex items-center justify-center text-5xl flex-shrink-0">
                💇‍♀️
              </div>
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-2">
                  Created By
                </p>
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  Janine Fernandez
                </h3>
                <p className="text-[#3D3935]/80 mb-4">
                  15 years behind the chair in California. Color specialist. Extension expert. 
                  Salon owner. And now, law school student.
                </p>
                <p className="text-[#3D3935]/80">
                  I've seen every contract disaster, every EDD audit, every client dispute in this industry. 
                  These templates are what I wish I had when I started — and what I now know you need to 
                  protect yourself in California's complex legal landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  Are these templates only for California?
                </h3>
                <p className="text-[#3D3935]/70">
                  These templates are specifically written for California law, including AB-5, California Civil Code, 
                  and CA Board of Barbering and Cosmetology requirements. If you're in another state, some provisions 
                  may not apply or may need modification.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  Are these templates legally binding?
                </h3>
                <p className="text-[#3D3935]/70">
                  These templates are professionally drafted starting points designed to be legally enforceable. 
                  However, we always recommend having a California attorney review documents for your specific situation. 
                  Laws change, and an attorney can ensure full compliance.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  Can I edit the templates?
                </h3>
                <p className="text-[#3D3935]/70">
                  Yes! All templates come in editable Word format so you can customize them with your business name, 
                  specific terms, and any modifications needed for your situation.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  What if California laws change?
                </h3>
                <p className="text-[#3D3935]/70">
                  You get free updates for life! When significant legal changes affect California beauty professionals, 
                  we'll update the templates and send you the new versions at no extra charge.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  I'm a manicurist. Can I use the booth rental agreement?
                </h3>
                <p className="text-[#3D3935]/70">
                  Important: As of January 1, 2025, California no longer allows manicurists to work as independent 
                  contractors/booth renters. Manicurists must be classified as employees. The independent contractor 
                  templates are for cosmetologists, barbers, estheticians, and electrologists only.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-[#3D3935] mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-[#3D3935]/70">
                  Due to the digital nature of these products, we cannot offer refunds once the files are downloaded. 
                  Please review everything on this page before purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-[#3D3935] text-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] mb-6">
            Protect Your California Business Today
          </h2>
          <p className="text-[#B5A191] max-w-2xl mx-auto mb-8">
            One lawsuit. One EDD audit. One misclassification claim. Any of these could cost you 
            everything you've built. For less than the cost of one balayage, get the protection you need.
          </p>
          <a 
            href="https://thejformula.gumroad.com/l/stylist-legal-vault" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg px-10 py-4 bg-[#FAF7F2] text-[#3D3935] rounded-lg hover:bg-[#E8DDD4] transition-colors font-semibold"
          >
            Get the Complete Vault — $97
          </a>
          <p className="text-sm text-[#B5A191] mt-4">
            Instant download. Start protecting your business in minutes.
          </p>
          <div className="flex justify-center gap-6 mt-8 text-sm text-[#B5A191]">
            <span>✓ Secure Payment</span>
            <span>✓ Instant Access</span>
            <span>✓ Lifetime Updates</span>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#FAF7F2]">
        <div className="container mx-auto">
          <p className="text-xs text-[#9A9086] text-center max-w-3xl mx-auto">
            <strong>Legal Disclaimer:</strong> The templates provided by The J Formula are for informational purposes only 
            and do not constitute legal advice. The J Formula is not a law firm, and purchasing or using these 
            templates does not create an attorney-client relationship. These templates are designed for use in 
            California and address California-specific laws as of the publication date. Laws change frequently. 
            We strongly recommend consulting with a licensed California attorney before using any legal documents 
            for your specific situation. While we strive to keep templates current, we cannot guarantee they reflect 
            the most recent legal developments.
          </p>
        </div>
      </section>
    </div>
  );
}

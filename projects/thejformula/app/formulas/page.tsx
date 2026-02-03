import Link from "next/link";

const lockedFormulas = [
  {
    name: "Creamy Vanilla Platinum",
    description: "Cool-leaning cream blonde with body that never reads grey",
    tags: ["Blonde", "Cool Tones", "Level 10"],
  },
  {
    name: "Toasted Honey Bronde",
    description: "Multi-tonal warm blonde that shifts in different light",
    tags: ["Bronde", "Warm Tones", "Dimensional"],
  },
  {
    name: "Smoky Mushroom Melt",
    description: "Moody, editorial cool with alive dimension",
    tags: ["Brunette", "Cool Tones", "Editorial"],
  },
  {
    name: "Iced Espresso Brunette",
    description: "Cool, expensive brunette — cold brew, not hot chocolate",
    tags: ["Brunette", "Cool Tones", "Rich"],
  },
  {
    name: "Rose Gold Champagne",
    description: "Blush champagne that reads 'Is that her natural color?'",
    tags: ["Rose Gold", "Fashion Color", "Warm Tones"],
  },
  {
    name: "Sun-Drenched Bronze",
    description: "Liquid bronze that catches light like metal",
    tags: ["Bronze", "Warm Tones", "Dimensional"],
  },
  {
    name: "Gunmetal Ash",
    description: "Deliberately smoked shadow root melting into clean, airy blonde",
    tags: ["Signature", "Ash", "Editorial"],
    isSignature: true,
  },
  {
    name: "Golden Hour Velvet",
    description: "Rich warm blonde with violet sophistication underneath",
    tags: ["Signature", "Warm Blonde", "Dimensional"],
    isSignature: true,
  },
  {
    name: "Violet Frost",
    description: "Editorial mahogany shadow dissolving into lavender-platinum",
    tags: ["Signature", "Fashion Color", "Editorial"],
    isSignature: true,
  },
  {
    name: "Soft Platinum",
    description: "Your-hair-but-platinum — wearable, not severe",
    tags: ["Signature", "Platinum", "Wearable"],
    isSignature: true,
  },
  {
    name: "Espresso Silk",
    description: "Brunette sorcery — single-level dimension that makes brown look expensive",
    tags: ["Signature", "Brunette", "Luxury"],
    isSignature: true,
  },
  {
    name: "Amethyst Frost",
    description: "Fashion-forward lavender-platinum without fully committing",
    tags: ["Signature", "Fashion Color", "Violet"],
    isSignature: true,
  },
];

export default function Formulas() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2] texture-overlay">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            For Professionals Only
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            The Formula Vault
          </h1>
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto mb-8">
            15 years of experimentation, refined into formulas that work. 
            Built on color theory. Salon tested. Dimension focused.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              🎨 12 Signature Formulas
            </span>
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              📚 Color Theory Explained
            </span>
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ⚡ Instant Download
            </span>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-12 bg-[#3D3935]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-white mb-4">
            Unlock All Formulas
          </h2>
          <p className="text-[#B5A191] mb-6 max-w-xl mx-auto">
            Get instant access to every formula with full color theory breakdowns, 
            mixing ratios, and application notes.
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white px-8 py-4 text-lg hover:bg-[#8a9d78] transition-colors"
          >
            Get Full Access — $27
          </a>
          <p className="text-[#9A9086] text-sm mt-4">One-time payment • Instant PDF download • Lifetime access</p>
        </div>
      </section>

      {/* Locked Formula Grid */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              What's Inside
            </h2>
            <p className="text-[#9A9086]">
              Preview the formulas — unlock to see full mixing ratios & color theory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lockedFormulas.map((formula, index) => (
              <div 
                key={index}
                className="relative bg-[#FAF7F2] border border-[#E8DDD4] p-6 group hover:shadow-lg transition-shadow"
              >
                {/* Lock overlay */}
                <div className="absolute inset-0 bg-[#FAF7F2]/80 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href="https://payhip.com/b/tNTmd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3D3935] text-white px-6 py-3 flex items-center gap-2 hover:bg-[#2a2724] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Unlock Formula
                  </a>
                </div>

                {/* Formula preview */}
                {formula.isSignature && (
                  <span className="absolute top-4 right-4 text-xs bg-[#9CAF88] text-white px-2 py-1 rounded">
                    SIGNATURE
                  </span>
                )}
                
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E8DDD4] rounded-full flex items-center justify-center text-lg">
                    🔒
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935]">
                      {formula.name}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-[#9A9086] mb-4">
                  {formula.description}
                </p>

                {/* Blurred formula preview */}
                <div className="bg-[#E8DDD4]/50 p-4 rounded blur-[6px] select-none">
                  <p className="text-xs text-[#3D3935]">
                    Melt: ●●● + ●●● (●:●)<br/>
                    Ends: ●●● + ●●● + ●●●<br/>
                    Processing: ●● minutes
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {formula.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-[#E8DDD4] text-[#3D3935] px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl">🎨</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2">12 Signature Formulas</h3>
                <p className="text-sm text-[#9A9086]">From icy platinum to rich brunette, each formula is salon-tested and client-approved.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🧪</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2">Color Theory Breakdowns</h3>
                <p className="text-sm text-[#9A9086]">Understand WHY each formula works — the undertones, the science, the art.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📐</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2">Exact Mixing Ratios</h3>
                <p className="text-sm text-[#9A9086]">No guessing. Precise ratios for consistent, repeatable results.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2">Application Tips</h3>
                <p className="text-sm text-[#9A9086]">Pro techniques from 15 years behind the chair.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#3D3935]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-white mb-4">
            Ready to Elevate Your Color Game?
          </h2>
          <p className="text-[#B5A191] mb-8 max-w-xl mx-auto">
            Join hundreds of stylists who've unlocked the formula vault.
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white px-10 py-4 text-xl hover:bg-[#8a9d78] transition-colors"
          >
            Unlock All Formulas — $27
          </a>
          <p className="text-[#9A9086] text-sm mt-6">
            ✓ Instant download &nbsp;&nbsp; ✓ Lifetime access &nbsp;&nbsp; ✓ PDF format
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
            Questions?
          </h2>
          
          <div className="space-y-6">
            <div className="border-b border-[#E8DDD4] pb-4">
              <h3 className="font-semibold text-[#3D3935] mb-2">What format is the guide?</h3>
              <p className="text-sm text-[#9A9086]">PDF format — works on any device, easy to reference behind the chair.</p>
            </div>
            <div className="border-b border-[#E8DDD4] pb-4">
              <h3 className="font-semibold text-[#3D3935] mb-2">Are these Shades EQ formulas?</h3>
              <p className="text-sm text-[#9A9086]">Yes! All formulas are built around Redken Shades EQ with full color theory explanations.</p>
            </div>
            <div className="border-b border-[#E8DDD4] pb-4">
              <h3 className="font-semibold text-[#3D3935] mb-2">Will there be updates?</h3>
              <p className="text-sm text-[#9A9086]">Future formula drops are in the works! Purchasers get first access to new releases.</p>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold text-[#3D3935] mb-2">Can I get a refund?</h3>
              <p className="text-sm text-[#9A9086]">Due to the digital nature of the product, all sales are final. But we're confident you'll love it!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

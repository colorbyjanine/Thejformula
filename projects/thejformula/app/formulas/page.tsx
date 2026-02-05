import Link from "next/link";

const formulas = [
  {
    name: "Creamy Vanilla Platinum",
    description: "Cool-leaning cream blonde with body that never reads grey",
    tags: ["Blonde", "Cool Tones", "Level 10"],
    signature: false,
  },
  {
    name: "Toasted Honey Bronde",
    description: "Multi-tonal warm blonde that shifts in different light",
    tags: ["Bronde", "Warm Tones", "Dimensional"],
    signature: false,
  },
  {
    name: "Smoky Mushroom Melt",
    description: "Moody, editorial cool with alive dimension",
    tags: ["Brunette", "Cool Tones", "Editorial"],
    signature: false,
  },
  {
    name: "Iced Espresso Brunette",
    description: "Cool, expensive brunette — cold brew, not hot chocolate",
    tags: ["Brunette", "Cool Tones", "Rich"],
    signature: false,
  },
  {
    name: "Rose Gold Champagne",
    description: "Blush champagne that reads 'Is that her natural color?'",
    tags: ["Rose Gold", "Fashion Color", "Warm Tones"],
    signature: false,
  },
  {
    name: "Sun-Drenched Bronze",
    description: "Liquid bronze that catches light like metal",
    tags: ["Bronze", "Warm Tones", "Dimensional"],
    signature: false,
  },
  {
    name: "Gunmetal Ash",
    description: "Deliberately smoked shadow root melting into clean, airy blonde",
    tags: ["Signature", "Ash", "Editorial"],
    signature: true,
  },
  {
    name: "Golden Hour Velvet",
    description: "Rich warm blonde with violet sophistication underneath",
    tags: ["Signature", "Warm Blonde", "Dimensional"],
    signature: true,
  },
  {
    name: "Violet Frost",
    description: "Editorial mahogany shadow dissolving into lavender-platinum",
    tags: ["Signature", "Fashion Color", "Editorial"],
    signature: true,
  },
  {
    name: "Soft Platinum",
    description: "Your-hair-but-platinum — wearable, not severe",
    tags: ["Signature", "Platinum", "Wearable"],
    signature: true,
  },
  {
    name: "Espresso Silk",
    description: "Brunette sorcery — single-level dimension that makes brown look expensive",
    tags: ["Signature", "Brunette", "Luxury"],
    signature: true,
  },
  {
    name: "Amethyst Frost",
    description: "Fashion-forward lavender-platinum without fully committing",
    tags: ["Signature", "Fashion Color", "Violet"],
    signature: true,
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
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            The Formula Vault
          </h1>
          <p className="text-base md:text-lg text-[#9A9086] max-w-2xl mx-auto mb-8 px-4">
            15 years of experimentation, refined into formulas that work. 
            Built on color theory. Salon tested. Dimension focused.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8 px-4">
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-[#E8DDD4] rounded-full text-xs md:text-sm text-[#3D3935]">
              🎨 12 Signature Formulas
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-[#E8DDD4] rounded-full text-xs md:text-sm text-[#3D3935]">
              📚 Color Theory Explained
            </span>
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white border border-[#E8DDD4] rounded-full text-xs md:text-sm text-[#3D3935]">
              ⚡ Instant Download
            </span>
          </div>
        </div>
      </section>

      {/* Unlock CTA */}
      <section className="py-12 bg-[#3D3935]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-white mb-4">
            Unlock All Formulas
          </h2>
          <p className="text-[#B5A191] mb-6 max-w-xl mx-auto text-sm md:text-base">
            Get instant access to every formula with full color theory breakdowns, mixing ratios, and application notes.
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl hover:bg-[#8a9d78] transition-colors"
          >
            Get Full Access — $27
          </a>
          <p className="text-[#9A9086] text-xs md:text-sm mt-4">
            One-time payment • Instant PDF download • Lifetime access
          </p>
        </div>
      </section>

      {/* Formula Cards - 2 COLUMN GRID */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              What's Inside
            </h2>
            <p className="text-[#9A9086] text-sm md:text-base">
              Preview the formulas — unlock to see full mixing ratios & color theory
            </p>
          </div>

          {/* 2-COLUMN GRID ON MOBILE */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {formulas.map((formula, index) => (
              <a 
                key={index}
                href="https://payhip.com/b/tNTmd"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-[#E8DDD4] p-3 md:p-6 hover:shadow-lg transition-shadow group"
              >
                {/* Lock + Signature Badge */}
                <div className="flex items-center justify-between mb-2 md:mb-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#C4B5A0] flex items-center justify-center">
                    <span className="text-white text-sm md:text-base">🔒</span>
                  </div>
                  {formula.signature && (
                    <span className="text-[8px] md:text-[10px] bg-[#3D3935] text-white px-1.5 py-0.5 md:px-2 md:py-1 uppercase tracking-wider">
                      Signature
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-1 md:mb-2 leading-tight">
                  {formula.name}
                </h3>

                {/* Description */}
                <p className="text-[10px] md:text-sm text-[#9A9086] mb-3 md:mb-4 line-clamp-2">
                  {formula.description}
                </p>

                {/* Blurred Formula Preview */}
                <div className="bg-[#FAF7F2] p-2 md:p-3 rounded mb-3 md:mb-4 select-none">
                  <p className="text-[10px] md:text-xs text-[#9A9086] blur-[4px] font-mono leading-relaxed">
                    Melt: ●●● + ●●● (●:●)<br/>
                    Ends: ●●● + ●●● + ●●●<br/>
                    Processing: ●● minutes
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {formula.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-[8px] md:text-xs bg-[#FAF7F2] text-[#3D3935] px-1.5 py-0.5 md:px-2 md:py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="flex gap-4">
              <div className="text-2xl">🎨</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2 text-sm md:text-base">12 Signature Formulas</h3>
                <p className="text-xs md:text-sm text-[#9A9086]">From icy platinum to rich brunette, each formula is salon-tested and client-approved.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🧪</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2 text-sm md:text-base">Color Theory Breakdowns</h3>
                <p className="text-xs md:text-sm text-[#9A9086]">Understand WHY each formula works — the undertones, the science, the art.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📐</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2 text-sm md:text-base">Exact Mixing Ratios</h3>
                <p className="text-xs md:text-sm text-[#9A9086]">No guessing. Precise ratios for consistent, repeatable results.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💡</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2 text-sm md:text-base">Application Tips</h3>
                <p className="text-xs md:text-sm text-[#9A9086]">Pro techniques from 15 years behind the chair.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-[#3D3935]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-4xl font-[family-name:var(--font-cormorant)] text-white mb-4">
            Ready to Elevate Your Color Game?
          </h2>
          <p className="text-[#B5A191] mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base">
            Join hundreds of stylists who've unlocked the formula vault.
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl hover:bg-[#8a9d78] transition-colors"
          >
            Unlock All Formulas — $27
          </a>
          <p className="text-[#9A9086] text-xs md:text-sm mt-4 md:mt-6">
            ✓ Instant download &nbsp;&nbsp; ✓ Lifetime access &nbsp;&nbsp; ✓ PDF format
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-2xl px-4">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6 md:mb-8 text-center">
            Questions?
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            <div className="border-b border-[#E8DDD4] pb-4">
              <h3 className="font-semibold text-[#3D3935] mb-2 text-sm md:text-base">What format is the guide?</h3>
              <p className="text-xs md:text-sm text-[#9A9086]">PDF format — works on any device, easy to reference behind the chair.</p>
            </div>
            <div className="border-b border-[#E8DDD4] pb-4">
              <h3 className="font-semibold text-[#3D3935] mb-2 text-sm md:text-base">Are these Shades EQ formulas?</h3>
              <p className="text-xs md:text-sm text-[#9A9086]">Yes! All formulas are built around Redken Shades EQ with full color theory explanations.</p>
            </div>
            <div className="border-b border-[#E8DDD4] pb-4">
              <h3 className="font-semibold text-[#3D3935] mb-2 text-sm md:text-base">Will there be updates?</h3>
              <p className="text-xs md:text-sm text-[#9A9086]">Future formula drops are in the works! Purchasers get first access to new releases.</p>
            </div>
            <div className="pb-4">
              <h3 className="font-semibold text-[#3D3935] mb-2 text-sm md:text-base">Can I get a refund?</h3>
              <p className="text-xs md:text-sm text-[#9A9086]">Due to the digital nature of the product, all sales are final. But we're confident you'll love it!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

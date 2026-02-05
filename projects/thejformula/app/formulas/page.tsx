import Link from "next/link";

// 5 FREE visible formulas
const freeFormulas = [
  {
    name: "Creamy Vanilla Platinum",
    description: "Cool-leaning cream blonde with body that never reads grey",
    formula: "9V + 9P + Clear (1:1:½) on damp hair",
    timing: "20 minutes",
    tags: ["Blonde", "Cool Tones", "Level 10"],
  },
  {
    name: "Toasted Honey Bronde",
    description: "Multi-tonal warm blonde that shifts in different light",
    formula: "8WG + 7GB + Gold Kicker (2:1:drop)",
    timing: "20 minutes",
    tags: ["Bronde", "Warm Tones", "Dimensional"],
  },
  {
    name: "Smoky Mushroom Melt",
    description: "Moody, editorial cool with alive dimension",
    formula: "6T + 7NB + Ash Kicker (1:1:¼)",
    timing: "20 minutes",
    tags: ["Brunette", "Cool Tones", "Editorial"],
  },
  {
    name: "Iced Espresso Brunette",
    description: "Cool, expensive brunette — cold brew, not hot chocolate",
    formula: "4N + 5NB + Clear (2:1:½)",
    timing: "20 minutes",
    tags: ["Brunette", "Cool Tones", "Rich"],
  },
  {
    name: "Rose Gold Champagne",
    description: "Blush champagne that reads 'Is that her natural color?'",
    formula: "9RB + 9P + Clear (1:1:1)",
    timing: "15-20 minutes",
    tags: ["Rose Gold", "Fashion Color", "Warm Tones"],
  },
];

// Locked formulas (blurred preview)
const lockedFormulas = [
  { name: "Sun-Drenched Bronze", description: "Liquid bronze that catches light like metal", tags: ["Bronze", "Warm", "Dimensional"] },
  { name: "Gunmetal Ash", description: "Smoked shadow root melting into clean blonde", tags: ["Signature", "Ash", "Editorial"] },
  { name: "Golden Hour Velvet", description: "Rich warm blonde with violet sophistication", tags: ["Signature", "Warm Blonde"] },
  { name: "Violet Frost", description: "Mahogany shadow dissolving into lavender-platinum", tags: ["Signature", "Fashion"] },
  { name: "Soft Platinum", description: "Your-hair-but-platinum — wearable, not severe", tags: ["Signature", "Platinum"] },
  { name: "Espresso Silk", description: "Single-level dimension that makes brown expensive", tags: ["Signature", "Brunette"] },
  { name: "Amethyst Frost", description: "Fashion-forward lavender without fully committing", tags: ["Signature", "Violet"] },
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
            15 years behind the chair, refined into formulas that work. 
            5 free to try — unlock the full vault for more.
          </p>
        </div>
      </section>

      {/* FREE FORMULAS */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#9CAF88] text-white text-sm px-4 py-1 rounded-full mb-4">
              FREE — NO CATCH
            </span>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
              5 Formulas On Me
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {freeFormulas.map((formula, index) => (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-[#E8DDD4] p-4 md:p-5 rounded-lg"
              >
                {/* FREE Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#9CAF88] flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </span>
                  <span className="text-[10px] md:text-xs text-[#9CAF88] font-semibold uppercase">Free</span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2 leading-tight">
                  {formula.name}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-[#9A9086] mb-3">
                  {formula.description}
                </p>

                {/* VISIBLE Formula */}
                <div className="bg-white p-3 rounded border border-[#E8DDD4] mb-3">
                  <p className="text-xs md:text-sm font-mono text-[#3D3935] leading-relaxed">
                    <span className="text-[#9A9086]">Formula:</span> {formula.formula}<br/>
                    <span className="text-[#9A9086]">Time:</span> {formula.timing}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {formula.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] md:text-[10px] bg-white text-[#3D3935] px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNLOCK CTA */}
      <section className="py-12 bg-[#3D3935]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-white mb-4">
            Want More?
          </h2>
          <p className="text-[#B5A191] mb-6 max-w-xl mx-auto">
            Unlock the full vault — 12+ signature formulas with color theory breakdowns.
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white px-8 py-3 md:px-10 md:py-4 text-lg md:text-xl hover:bg-[#8a9d78] transition-colors rounded-full"
          >
            🔓 Unlock All — $27
          </a>
        </div>
      </section>

      {/* LOCKED FORMULAS PREVIEW */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
              More Inside the Vault
            </h2>
            <p className="text-sm text-[#9A9086]">Preview what's waiting</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {lockedFormulas.map((formula, index) => (
              <a 
                key={index}
                href="https://payhip.com/b/tNTmd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E8DDD4] p-4 md:p-5 rounded-lg group hover:shadow-lg transition-all"
              >
                {/* Lock Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#C4B5A0] flex items-center justify-center group-hover:bg-[#9CAF88] transition-colors">
                    <span className="text-white text-sm">🔒</span>
                  </span>
                  {formula.tags.includes("Signature") && (
                    <span className="text-[9px] bg-[#3D3935] text-white px-2 py-0.5 uppercase">Signature</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2 leading-tight">
                  {formula.name}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm text-[#9A9086] mb-3">
                  {formula.description}
                </p>

                {/* BLURRED Formula */}
                <div className="bg-[#FAF7F2] p-3 rounded mb-3 select-none">
                  <p className="text-xs font-mono text-[#9A9086] blur-[5px] leading-relaxed">
                    Formula: ●●● + ●●● (●:●)<br/>
                    Time: ●● minutes
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {formula.tags.filter(t => t !== "Signature").map((tag, i) => (
                    <span key={i} className="text-[9px] md:text-[10px] bg-[#FAF7F2] text-[#3D3935] px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Unlock text on hover */}
                <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-[#9CAF88] font-medium">Tap to Unlock →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-[#3D3935]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-white mb-4">
            Ready for the Full Vault?
          </h2>
          <p className="text-[#B5A191] mb-6">
            One-time payment • Instant PDF • Lifetime access
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#3D3935] px-8 py-3 md:px-10 md:py-4 text-lg hover:bg-[#FAF7F2] transition-colors rounded-full font-medium"
          >
            Get All Formulas — $27
          </a>
        </div>
      </section>
    </div>
  );
}

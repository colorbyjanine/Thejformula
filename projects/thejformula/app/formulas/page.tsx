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
  {
    name: "Sun-Drenched Bronze",
    description: "Liquid bronze that catches light like metal",
    formula: "7CG + 8GI + Gold Kicker (1:1:drop)",
    timing: "20 minutes",
    tags: ["Bronze", "Warm Tones", "Dimensional"],
  },
];

// Locked formulas (blurred preview)
const lockedFormulas = [
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
      {/* Hero - Compact */}
      <section className="pt-24 pb-6 bg-[#FAF7F2]">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
            The Formula Vault
          </h1>
          <p className="text-sm md:text-base text-[#9A9086] max-w-xl mx-auto">
            15 years behind the chair, refined into formulas that work.
          </p>
        </div>
      </section>

      {/* FORMULAS GRID */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
            {freeFormulas.map((formula, index) => (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-[#E8DDD4] p-3 md:p-4 rounded-lg"
              >
                {/* Title */}
                <h3 className="text-sm md:text-base font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-1 leading-tight">
                  {formula.name}
                </h3>

                {/* Description */}
                <p className="text-[11px] md:text-xs text-[#9A9086] mb-2 line-clamp-2">
                  {formula.description}
                </p>

                {/* VISIBLE Formula */}
                <div className="bg-white p-2 md:p-3 rounded border border-[#E8DDD4] mb-2">
                  <p className="text-[10px] md:text-xs font-mono text-[#3D3935] leading-relaxed">
                    {formula.formula}<br/>
                    <span className="text-[#9A9086]">{formula.timing}</span>
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {formula.tags.map((tag, i) => (
                    <span key={i} className="text-[8px] md:text-[10px] bg-white text-[#3D3935] px-1.5 py-0.5 rounded">
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
      <section className="py-8 bg-[#3D3935]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-xl md:text-2xl font-[family-name:var(--font-cormorant)] text-white mb-3">
            Want More?
          </h2>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white px-6 py-2.5 md:px-8 md:py-3 text-base md:text-lg hover:bg-[#8a9d78] transition-colors rounded-full"
          >
            🔓 Unlock All — $27
          </a>
        </div>
      </section>

      {/* LOCKED FORMULAS PREVIEW */}
      <section className="py-8 bg-[#FAF7F2]">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4 text-center">
            More In the Vault
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
            {lockedFormulas.map((formula, index) => (
              <a 
                key={index}
                href="https://payhip.com/b/tNTmd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#E8DDD4] p-3 md:p-4 rounded-lg group hover:shadow-lg transition-all"
              >
                {/* Lock + Title Row */}
                <div className="flex items-start gap-2 mb-2">
                  <span className="w-7 h-7 rounded-full bg-[#C4B5A0] flex items-center justify-center shrink-0 group-hover:bg-[#9CAF88] transition-colors">
                    <span className="text-white text-xs">🔒</span>
                  </span>
                  <h3 className="text-sm md:text-base font-[family-name:var(--font-cormorant)] text-[#3D3935] leading-tight">
                    {formula.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[11px] md:text-xs text-[#9A9086] mb-2 line-clamp-2">
                  {formula.description}
                </p>

                {/* BLURRED Formula */}
                <div className="bg-[#FAF7F2] p-2 rounded mb-2 select-none">
                  <p className="text-[10px] font-mono text-[#9A9086] blur-[4px] leading-relaxed">
                    ●●● + ●●● (●:●) • ●● min
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {formula.tags.filter(t => t !== "Signature").map((tag, i) => (
                    <span key={i} className="text-[8px] md:text-[10px] bg-[#FAF7F2] text-[#3D3935] px-1.5 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-8 bg-[#3D3935]">
        <div className="container mx-auto text-center px-4">
          <p className="text-[#B5A191] text-sm mb-3">
            One-time • Instant PDF • Lifetime access
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#3D3935] px-6 py-2.5 text-base hover:bg-[#FAF7F2] transition-colors rounded-full font-medium"
          >
            Get All Formulas — $27
          </a>
        </div>
      </section>
    </div>
  );
}

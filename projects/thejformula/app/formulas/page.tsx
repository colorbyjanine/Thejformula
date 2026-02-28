import Link from "next/link";

// ALL formulas - now public and uniform!
const allFormulas = [
  {
    name: "Creamy Vanilla Platinum",
    description: "Cool-leaning cream blonde with body that never reads grey",
    formula: "9V + 9P + Clear (1:1:½) on damp hair",
    timing: "20 minutes",
  },
  {
    name: "Toasted Honey Bronde",
    description: "Multi-tonal warm blonde that shifts in different light",
    formula: "8WG + 7GB + Gold Kicker (2:1:drop)",
    timing: "20 minutes",
  },
  {
    name: "Smoky Mushroom Melt",
    description: "Moody, editorial cool with alive dimension",
    formula: "6T + 7NB + Ash Kicker (1:1:¼)",
    timing: "20 minutes",
  },
  {
    name: "Iced Espresso Brunette",
    description: "Cool, expensive brunette — cold brew, not hot chocolate",
    formula: "4N + 5NB + Clear (2:1:½)",
    timing: "20 minutes",
  },
  {
    name: "Rose Gold Champagne",
    description: "Blush champagne that reads 'Is that her natural color?'",
    formula: "9RB + 9P + Clear (1:1:1)",
    timing: "15-20 minutes",
  },
  {
    name: "Sun-Drenched Bronze",
    description: "Liquid bronze that catches light like metal",
    formula: "7CG + 8GI + Gold Kicker (1:1:drop)",
    timing: "20 minutes",
  },
  {
    name: "Gunmetal Ash",
    description: "Smoked shadow root melting into clean blonde",
    formula: "7T + 8V + Ash Kicker (2:1:drop)",
    timing: "20 minutes",
  },
  {
    name: "Golden Hour Velvet",
    description: "Rich warm blonde with violet sophistication",
    formula: "8WG + 9V + Gold Kicker (2:1:touch)",
    timing: "20 minutes",
  },
  {
    name: "Violet Frost",
    description: "Mahogany shadow dissolving into lavender-platinum",
    formula: "9P + 9V + Clear (1:1:1)",
    timing: "15-20 minutes",
  },
  {
    name: "Soft Platinum",
    description: "Your-hair-but-platinum — wearable, not severe",
    formula: "9P + Clear + Violet Kicker (1:2:drop)",
    timing: "15 minutes",
  },
  {
    name: "Espresso Silk",
    description: "Single-level dimension that makes brown expensive",
    formula: "5N + 5NB + Clear (1:1:½)",
    timing: "20 minutes",
  },
  {
    name: "Amethyst Frost",
    description: "Fashion-forward lavender without fully committing",
    formula: "9V + 9P + Violet Kicker (1:1:drop)",
    timing: "15-20 minutes",
  },
];

export default function Formulas() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="pt-24 pb-6 bg-[#FAF7F2]">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
            The Formula Vault
          </h1>
          <p className="text-sm md:text-base text-[#9A9086] max-w-xl mx-auto">
            15 years behind the chair, refined into formulas that work. All Shades EQ.
          </p>
        </div>
      </section>

      {/* ALL FORMULAS GRID - Simple uniform cards */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
            {allFormulas.map((formula, index) => (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-[#E8DDD4] p-3 md:p-4 rounded-lg"
              >
                <h3 className="text-sm md:text-base font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-1 leading-tight">
                  {formula.name}
                </h3>
                <p className="text-[11px] md:text-xs text-[#9A9086] mb-2 line-clamp-2">
                  {formula.description}
                </p>
                <div className="bg-white p-2 md:p-3 rounded border border-[#E8DDD4]">
                  <p className="text-[10px] md:text-xs font-mono text-[#3D3935] leading-relaxed">
                    {formula.formula}<br/>
                    <span className="text-[#9A9086]">{formula.timing}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-8 bg-[#FAF7F2]">
        <div className="container mx-auto text-center px-4">
          <p className="text-[#9A9086] text-sm mb-4">
            Questions? DM me on Instagram
          </p>
          <a 
            href="https://instagram.com/colorbyjanine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#3D3935] text-white px-6 py-2.5 text-base hover:bg-[#5A534D] transition-colors rounded-full"
          >
            @colorbyjanine
          </a>
        </div>
      </section>
    </div>
  );
}

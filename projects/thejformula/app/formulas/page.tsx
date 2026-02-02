import Link from "next/link";

const colorTheoryFormulas = [
  {
    name: "Creamy Vanilla Platinum",
    description: "Cool-leaning cream blonde with body that never reads grey",
    melt: "7NB + 8VB (equal parts)",
    ends: "10WG + 10GI + 10AA (equal parts)",
    explanation: "The melt uses NB's blue undertone to intercept orange at level 7 while VB introduces violet-blue higher up to fight yellow. At the ends, 10WG pushes vanilla warmth, 10GI adds champagne beige, and 10AA's green base pulls back excess warmth.",
    tags: ["Blonde", "Cool Tones", "Level 10"],
  },
  {
    name: "Toasted Honey Bronde",
    description: "Multi-tonal warm blonde that shifts in different light",
    melt: "6N + 7NB (2:1)",
    ends: "9WG + 9G + 9GI (equal parts)",
    explanation: "6N is the neutral anchor while 7NB keeps the shadow zone from going coppery. Three different warm blonde expressions layer at the ends — 9WG reads buttery, 9G brings sunlight, 9GI prevents brassiness.",
    tags: ["Bronde", "Warm Tones", "Dimensional"],
  },
  {
    name: "Smoky Mushroom Melt",
    description: "Moody, editorial cool with alive dimension",
    melt: "5N + 6VB (equal parts)",
    ends: "8T + 8VB + 8GI (2:1:½)",
    explanation: "5N gives true mid-depth neutral. The ends use 8T titanium for steel-silver smoke, 8VB ensures no warmth breaks through, and the small hit of 8GI keeps the mushroom alive and three-dimensional.",
    tags: ["Brunette", "Cool Tones", "Editorial"],
  },
  {
    name: "Iced Espresso Brunette",
    description: "Cool, expensive brunette — cold brew, not hot chocolate",
    melt: "4N + 5NB (equal parts)",
    ends: "7AA + 7VB + 7NB (2:1:1)",
    explanation: "4N builds rich dark-chocolate base. 7AA leads because its green base cancels warm copper-red tones at level 7. 7VB handles orange, 7NB balances so you don't skew too green or violet.",
    tags: ["Brunette", "Cool Tones", "Rich"],
  },
  {
    name: "Rose Gold Champagne",
    description: "Blush champagne that reads 'Is that her natural color?'",
    melt: "6N + 7RB (2:1)",
    ends: "9RB + 9P + 9GI (equal parts)",
    explanation: "7RB weaves in red-brown for warm mauve shadow. At the ends, 9RB delivers soft rose-copper, 9P pastelizes the rose, 9GI transforms pink into champagne territory.",
    tags: ["Rose Gold", "Fashion Color", "Warm Tones"],
  },
  {
    name: "Sun-Drenched Bronze",
    description: "Liquid bronze that catches light like metal",
    melt: "5NB + 6CB (equal parts)",
    ends: "8C + 8G + 8WG (2:1:1)",
    explanation: "Cool base against warm ends creates powerful dimension. 8C deposits liquid bronze, 8G pushes toward honey, 8WG softens and butters the whole thing.",
    tags: ["Bronze", "Warm Tones", "Dimensional"],
  },
];

const signatureFormulas = [
  {
    name: "Gunmetal Ash",
    description: "Deliberately smoked shadow root melting into clean, airy blonde",
    root: "6N + 6T",
    ends: "8VB + 9N",
    explanation: "Titanium at level 6 deposits smoky, metallic coolness that reads deliberately placed. Creates graphite-to-platinum gradient that looks intentional and modern.",
    tags: ["Signature", "Ash", "Editorial"],
    isSignature: true,
  },
  {
    name: "Golden Hour Velvet",
    description: "Rich warm blonde with violet sophistication underneath",
    base: "7NB + 7G",
    ends: "8VG + 9GI + 8WG",
    explanation: "8VG is the star — violet-gold carries warmth but violet's refinement. This separates it from just another warm blonde. The VG creates dimensional, three-dimensional warmth.",
    tags: ["Signature", "Warm Blonde", "Dimensional"],
    isSignature: true,
  },
  {
    name: "Violet Frost",
    description: "Editorial mahogany shadow dissolving into lavender-platinum",
    base: "7M + 9N",
    ends: "10P + 10T + 10NB",
    explanation: "7M creates plummy, wine-stained shadow. The ends are pure ice: P sheers the deposit, T adds steel, NB keeps yellow eliminated. The contrast is what makes this editorial.",
    tags: ["Signature", "Fashion Color", "Editorial"],
    isSignature: true,
  },
  {
    name: "Soft Platinum",
    description: "Your-hair-but-platinum — wearable, not severe",
    base: "7NB + 6N",
    ends: "10NB + 9NW + 10P",
    explanation: "The secret is 9NW: that whisper of natural warmth makes platinum wearable versus severe. Pure cool at level 10 can read grey; NW softens without warming.",
    tags: ["Signature", "Platinum", "Wearable"],
    isSignature: true,
  },
  {
    name: "Espresso Silk",
    description: "Brunette sorcery — single-level dimension that makes brown look expensive",
    base: "5N + 5NB",
    ends: "5NW + 6NB + 6GI",
    explanation: "This is how you make brown hair look expensive. Tonal shift without level change — light bouncing between cool and warm within a narrow band creates internal reflectivity.",
    tags: ["Signature", "Brunette", "Luxury"],
    isSignature: true,
  },
  {
    name: "Amethyst Frost",
    description: "Fashion-forward lavender-platinum without fully committing",
    base: "9M + 7N",
    ends: "10VV + 10N + 10P",
    explanation: "10VV is double violet — true lavender-lilac at level 10. 10N grounds it, 10P sheers it out. For the client who wants purple-platinum space without full fashion color commitment.",
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
            For Professionals
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            The Formulas
          </h1>
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto mb-8">
            15 years of experimentation, refined into formulas that work. 
            Built on color theory. Salon tested. Dimension focused.
          </p>
          <div className="inline-block bg-[#E8DDD4] px-6 py-3">
            <p className="text-sm text-[#3D3935]">
              🎨 Curated by Janine • Shades EQ Formulas
            </p>
          </div>
        </div>
      </section>

      {/* Color Theory Section */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              Color Theory Formulas
            </h2>
            <p className="text-[#9A9086] max-w-xl mx-auto">
              Every formula built on one principle: complementary pigments create neutralization, 
              partial complementary combinations create dimension.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {colorTheoryFormulas.map((formula, index) => (
              <div key={index} className="bg-white p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {formula.tags.map((tag) => (
                    <span key={tag} className="text-xs tracking-widest uppercase text-[#9A9086] bg-[#FAF7F2] px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                  {formula.name}
                </h3>
                <p className="text-[#9A9086] mb-6 italic">
                  {formula.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex gap-4">
                    <span className="text-xs tracking-widest uppercase text-[#9A9086] w-16">Melt</span>
                    <span className="text-[#3D3935] font-mono text-sm">{formula.melt}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xs tracking-widest uppercase text-[#9A9086] w-16">Ends</span>
                    <span className="text-[#3D3935] font-mono text-sm">{formula.ends}</span>
                  </div>
                </div>
                
                <p className="text-sm text-[#9A9086] leading-relaxed border-t border-[#E8DDD4] pt-4">
                  {formula.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Formulas */}
      <section className="section bg-[#3D3935] text-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-[#B5A191] mb-4">
              ✦ Janine's Signatures ✦
            </p>
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] mb-4">
              Signature Formulas
            </h2>
            <p className="text-[#B5A191] max-w-xl mx-auto">
              My personal favorites. These are the formulas clients fly in for.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signatureFormulas.map((formula, index) => (
              <div key={index} className="bg-[#2A2826] p-6 border border-[#B5A191]/20">
                <div className="flex flex-wrap gap-2 mb-4">
                  {formula.tags.map((tag) => (
                    <span key={tag} className="text-xs tracking-widest uppercase text-[#B5A191]/70 border border-[#B5A191]/30 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#FAF7F2] mb-2">
                  {formula.name}
                </h3>
                <p className="text-[#B5A191] mb-4 text-sm italic">
                  {formula.description}
                </p>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex gap-3">
                    <span className="text-xs tracking-widest uppercase text-[#B5A191]/70 w-14">Base</span>
                    <span className="text-[#FAF7F2] font-mono">{formula.base || formula.root}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs tracking-widest uppercase text-[#B5A191]/70 w-14">Ends</span>
                    <span className="text-[#FAF7F2] font-mono">{formula.ends}</span>
                  </div>
                </div>
                
                <p className="text-xs text-[#B5A191]/80 leading-relaxed border-t border-[#B5A191]/20 pt-4">
                  {formula.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Wheel Reference */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              Shades EQ Tone Reference
            </h2>
            <p className="text-[#9A9086]">
              Understanding the letter codes is what turns formula building from guesswork into architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { code: "N", name: "Neutral", desc: "Clean, balanced depth" },
              { code: "NB", name: "Neutral Blue", desc: "Neutralizes orange" },
              { code: "NW", name: "Natural Warm", desc: "Soft, sun-kissed warmth" },
              { code: "G", name: "Gold", desc: "Pure gold, direct sunlight" },
              { code: "GI", name: "Gold Iridescent", desc: "Champagne beige" },
              { code: "WG", name: "Warm Gold", desc: "Buttery, rich gold" },
              { code: "VG", name: "Violet Gold", desc: "Warm surface, cool underneath" },
              { code: "VB", name: "Violet Blue", desc: "Cancels orange + yellow" },
              { code: "V", name: "Violet", desc: "Opposes yellow" },
              { code: "T", name: "Titanium", desc: "Steel-silver metallic" },
              { code: "AA", name: "Double Ash", desc: "Green base, opposes red" },
              { code: "RB", name: "Red Brown", desc: "Cinnamon, rose, mauve" },
            ].map((tone) => (
              <div key={tone.code} className="bg-white p-4 text-center">
                <span className="text-2xl font-mono text-[#3D3935] block mb-1">{tone.code}</span>
                <span className="text-sm font-medium text-[#3D3935] block">{tone.name}</span>
                <span className="text-xs text-[#9A9086]">{tone.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Questions About a Formula?
          </h2>
          <p className="text-[#9A9086] max-w-xl mx-auto mb-8">
            DM me on Instagram — I love talking color theory and helping stylists 
            figure out the perfect formula for their clients.
          </p>
          <a 
            href="https://instagram.com/colorbyjanine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            @colorbyjanine
          </a>
        </div>
      </section>
    </div>
  );
}

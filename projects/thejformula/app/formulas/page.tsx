import Link from "next/link";

const colorTheoryFormulas = [
  {
    name: "Creamy Vanilla Platinum",
    description: "Cool-leaning cream blonde with body that never reads grey",
    melt: "7NB + 8VB (equal parts)",
    ends: "10WG + 10GI + Clear (equal parts)",
    explanation: "The melt uses NB's red-violet undertone to add warmth and depth at level 7 while VB introduces blue-green to fight orange. At the ends, 10WG pushes vanilla warmth with its yellow-orange base, 10GI's blue-gold iridescence adds champagne dimension, and Clear sheers it out to prevent over-deposit.",
    tags: ["Blonde", "Cool Tones", "Level 10"],
  },
  {
    name: "Toasted Honey Bronde",
    description: "Multi-tonal warm blonde that shifts in different light",
    melt: "6N + 7NB (2:1)",
    ends: "9WG + 9GI + 9P (equal parts)",
    explanation: "6N is the neutral anchor with its blue undertone. 7NB adds red-violet warmth to the shadow zone. Three different expressions layer at the ends — 9WG reads buttery (yellow-orange), 9GI brings champagne beige (blue-gold iridescence), 9P's gold-violet balance adds luminosity.",
    tags: ["Bronde", "Warm Tones", "Dimensional"],
  },
  {
    name: "Smoky Mushroom Melt",
    description: "Moody, editorial cool with alive dimension",
    melt: "5N + 6M (equal parts)",
    ends: "8T + 8NA + 8GI (2:1:½)",
    explanation: "5N gives true mid-depth neutral with its blue base. 6M's blue-mahogany undertone creates earthy, muted tones without going ashy. The ends use 8T titanium (silver-blue, the coolest in the line) for steel-silver smoke, 8NA's blue-violet cancels brass, and 8GI keeps the mushroom alive with dimensional blue-gold iridescence.",
    tags: ["Brunette", "Cool Tones", "Editorial"],
  },
  {
    name: "Iced Espresso Brunette",
    description: "Cool, expensive brunette — cold brew, not hot chocolate",
    melt: "4N + 5NB (equal parts)",
    ends: "7NA + 7M + 7NB (2:1:1)",
    explanation: "4N builds rich dark-chocolate base with its blue undertone. 7NA leads with blue-violet to cancel both orange and yellow. 7M's blue-mahogany neutralizes red without going ashy, 7NB's red-violet balances for natural-looking depth.",
    tags: ["Brunette", "Cool Tones", "Rich"],
  },
  {
    name: "Rose Gold Champagne",
    description: "Blush champagne that reads 'Is that her natural color?'",
    melt: "6NB + 7RB (2:1)",
    ends: "9RB + 9P + 9GI (equal parts)",
    explanation: "NB's red-violet creates warm foundation. 7RB weaves in red-brown for warm mauve shadow. At the ends, 9RB delivers soft rose-copper (red-brown undertone), 9P's gold-violet creates luminous cool warmth, 9GI's blue-gold transforms it into champagne territory.",
    tags: ["Rose Gold", "Fashion Color", "Warm Tones"],
  },
  {
    name: "Sun-Drenched Bronze",
    description: "Liquid bronze that catches light like metal",
    melt: "5NB + 6CB (equal parts)",
    ends: "8C + 8WG + 8GG (2:1:1)",
    explanation: "NB's red-violet undertone creates dimension against warm ends. 8C (pure copper, no background) deposits vibrant orange. 8WG's yellow-orange pushes toward honey-butter. 8GG's pure gold on brown-to-tan background softens the whole thing into wearable bronze.",
    tags: ["Bronze", "Warm Tones", "Dimensional"],
  },
];

const signatureFormulas = [
  {
    name: "Gunmetal Ash",
    description: "Deliberately smoked shadow root melting into clean, airy blonde",
    root: "6N + 6T",
    ends: "8NA + 9GI",
    explanation: "Titanium at level 6 is silver-blue — the coolest series in the entire line. Creates graphite-to-platinum gradient. 8NA's blue-violet cancels brass at the transition. 9GI's blue-gold iridescence keeps ends luminous, not flat.",
    tags: ["Signature", "Ash", "Editorial"],
    isSignature: true,
  },
  {
    name: "Golden Hour Velvet",
    description: "Rich warm blonde with violet sophistication underneath",
    base: "7NB + 7GG",
    ends: "8VG + 9GI + 8WG",
    explanation: "NB's red-violet undertone creates depth. GG is pure gold on brown-tan background. 8VG is the star — violet-gold with no background creates multi-dimensional warmth that separates it from basic brass. GI's blue-gold keeps it champagne.",
    tags: ["Signature", "Warm Blonde", "Dimensional"],
    isSignature: true,
  },
  {
    name: "Violet Frost",
    description: "Editorial mahogany shadow dissolving into lavender-platinum",
    base: "7M + 8NA",
    ends: "10P + 10T + 10NB",
    explanation: "7M's blue-mahogany creates plummy, wine-stained shadow. 8NA bridges with blue-violet. The ends are pure ice: P's gold-violet sheers the deposit, T's silver-blue adds steel, NB's red-violet keeps it from going grey. The contrast is editorial.",
    tags: ["Signature", "Fashion Color", "Editorial"],
    isSignature: true,
  },
  {
    name: "Soft Platinum",
    description: "Your-hair-but-platinum — wearable, not severe",
    base: "7NB + 6N",
    ends: "10NB + 9NW + 10P",
    explanation: "The secret is 9NW: Natural Warm has gold undertone on brown-tan background — that whisper of warmth makes platinum wearable versus severe. Pure cool at level 10 can read grey; NW softens without going brassy. NB's red-violet keeps yellow eliminated.",
    tags: ["Signature", "Platinum", "Wearable"],
    isSignature: true,
  },
  {
    name: "Espresso Silk",
    description: "Brunette sorcery — single-level dimension that makes brown look expensive",
    base: "5N + 5NB",
    ends: "5NW + 6NB + 6GI",
    explanation: "This is how you make brown hair look expensive. N's blue undertone plays against NB's red-violet. NW's gold adds warmth, GI's blue-gold iridescence adds reflectivity. Tonal shift without level change — light bouncing between cool and warm creates internal dimension.",
    tags: ["Signature", "Brunette", "Luxury"],
    isSignature: true,
  },
  {
    name: "Amethyst Frost",
    description: "Fashion-forward lavender-platinum without fully committing",
    base: "9M + 7N",
    ends: "10VV + 10N + 10P",
    explanation: "10VV is double violet with NO background — pure violet pigment for true lavender-lilac at level 10. Heavy-hitting yellow cancellation. 10N's blue undertone grounds it, 10P's gold-violet sheers it out. For the client who wants purple-platinum without full fashion commitment.",
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

      {/* Color Theory Basics */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              Understanding the Three Backgrounds
            </h2>
            <p className="text-[#9A9086]">
              Every Shades EQ shade has a background foundation. Understanding this is key to formulating.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-[#2c3e50] to-[#4a6a8a] text-white p-6 rounded-lg">
              <h3 className="text-xl font-[family-name:var(--font-cormorant)] mb-3">⬛ Black to Gray</h3>
              <p className="text-sm opacity-90 mb-3">Cool foundation that diminishes warmth. Cancels orange and yellow.</p>
              <p className="text-xs opacity-70">Series: T, N, NA, B, ABn, V, VB, M, GI, Gn, G, AG</p>
            </div>
            <div className="bg-gradient-to-br from-[#8B6914] to-[#c49b47] text-white p-6 rounded-lg">
              <h3 className="text-xl font-[family-name:var(--font-cormorant)] mb-3">🟫 Brown to Tan</h3>
              <p className="text-sm opacity-90 mb-3">Balanced, natural foundation. Great for gray coverage. Enhances warmth naturally.</p>
              <p className="text-xs opacity-70">Series: NB, NW, WG, GG, GN, GB, GRo, P, NCh, CB, RB</p>
            </div>
            <div className="bg-gradient-to-br from-[#e74c8b] via-[#f39c12] to-[#9b59b6] text-white p-6 rounded-lg">
              <h3 className="text-xl font-[family-name:var(--font-cormorant)] mb-3">🌈 No Background</h3>
              <p className="text-sm opacity-90 mb-3">Most vibrant, true-to-tone results. Pure reflect with no dilution.</p>
              <p className="text-xs opacity-70">Series: AA, C, CC, CR, R, RR, RV, VV, VG, VRo</p>
            </div>
          </div>

          <div className="bg-[#eef6ff] border-l-4 border-[#3498db] p-6 rounded-r-lg">
            <p className="text-[#2471a3] font-medium mb-2">💡 Key Principle</p>
            <p className="text-[#555] text-sm">
              To neutralize unwanted tone, use its opposite on the color wheel: 
              <strong> Violet cancels Yellow</strong>, <strong>Blue cancels Orange</strong>, <strong>Green cancels Red</strong>.
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

      {/* Accurate Tone Reference */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              Shades EQ Tone Reference
            </h2>
            <p className="text-[#9A9086]">
              Understanding the letter codes is what turns formula building from guesswork into architecture.
            </p>
          </div>
          
          {/* Cool Series */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#2c3e50] mb-4 border-l-4 border-[#3498db] pl-3">
              ❄️ Cool Series — Black to Gray Background
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { code: "T", name: "Titanium", undertone: "Silver / Blue", desc: "Coolest in the line. Icy silver." },
                { code: "N", name: "Natural", undertone: "Blue", desc: "Cool neutral. Tones yellow." },
                { code: "NA", name: "Natural Ash", undertone: "Blue / Violet", desc: "Cancels orange AND yellow." },
                { code: "V", name: "Violet", undertone: "Blue / Violet", desc: "Cancels yellow. Watch for green on orange." },
                { code: "VB", name: "Violet Blue", undertone: "Blue / Green", desc: "Cool blonde. Can go green on yellow." },
                { code: "M", name: "Matte", undertone: "Blue / Mahogany", desc: "Neutralizes red without ash." },
                { code: "GI", name: "Gold Iridescent", undertone: "Blue / Gold", desc: "Champagne beige. Blonde favorite." },
                { code: "G", name: "Gold", undertone: "Green / Yellow", desc: "GREEN-gold, not warm gold!" },
              ].map((tone) => (
                <div key={tone.code} className="bg-white p-4 border-l-2 border-[#2c3e50]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-mono font-bold text-[#2c3e50]">{tone.code}</span>
                    <span className="text-xs text-[#9A9086]">{tone.name}</span>
                  </div>
                  <p className="text-xs font-medium text-[#3498db] mb-1">{tone.undertone}</p>
                  <p className="text-xs text-[#9A9086]">{tone.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warm Series */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#8B6914] mb-4 border-l-4 border-[#e67e22] pl-3">
              🔥 Neutral & Warm Series — Brown to Tan Background
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { code: "NB", name: "Neutral Brown", undertone: "Red / Violet", desc: "TRUE natural. Must use for gray coverage." },
                { code: "NW", name: "Natural Warm", undertone: "Gold", desc: "Warmth with restraint." },
                { code: "WG", name: "Warm Gold", undertone: "Yellow / Orange", desc: "Perfect for tinting back to brown." },
                { code: "GG", name: "Gold Gold", undertone: "Gold (Pure)", desc: "Intense warmth. Double gold." },
                { code: "P", name: "Pearl", undertone: "Gold / Violet", desc: "Luminous. Never goes flat." },
                { code: "CB", name: "Copper Brown", undertone: "Red / Orange", desc: "Rustic red-brown." },
                { code: "RB", name: "Red Brown", undertone: "Red / Brown", desc: "Rose, cinnamon, mauve." },
                { code: "GRo", name: "Gold Rosé", undertone: "Gold / Rosé", desc: "Rose-gold blonde." },
              ].map((tone) => (
                <div key={tone.code} className="bg-white p-4 border-l-2 border-[#8B6914]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-mono font-bold text-[#8B6914]">{tone.code}</span>
                    <span className="text-xs text-[#9A9086]">{tone.name}</span>
                  </div>
                  <p className="text-xs font-medium text-[#e67e22] mb-1">{tone.undertone}</p>
                  <p className="text-xs text-[#9A9086]">{tone.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Vibrant Series */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[#c0392b] mb-4 border-l-4 border-[#e74c3c] pl-3">
              💥 Vibrant Series — No Background
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { code: "AA", name: "Double Copper", undertone: "Orange / Orange", desc: "Vibrant copper. NOT ash!" },
                { code: "C", name: "Copper", undertone: "Orange", desc: "Pure copper. Bright." },
                { code: "CC", name: "Copper Copper", undertone: "Orange / Red", desc: "Intensely pigmented copper-red." },
                { code: "R", name: "Red", undertone: "Red", desc: "Pure red. Very vibrant." },
                { code: "RV", name: "Red Violet", undertone: "Red / Violet", desc: "Plum and berry tones." },
                { code: "VV", name: "Violet Violet", undertone: "Violet", desc: "Heavy-hitting violet. Lavender toner." },
                { code: "VG", name: "Violet Gold", undertone: "Violet / Gold", desc: "Multi-dimensional beige." },
                { code: "VRo", name: "Violet Rosé", undertone: "Violet / Rosé", desc: "Soft rosy-violet." },
              ].map((tone) => (
                <div key={tone.code} className="bg-white p-4 border-l-2 border-[#c0392b]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-mono font-bold text-[#c0392b]">{tone.code}</span>
                    <span className="text-xs text-[#9A9086]">{tone.name}</span>
                  </div>
                  <p className="text-xs font-medium text-[#e74c3c] mb-1">{tone.undertone}</p>
                  <p className="text-xs text-[#9A9086]">{tone.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Cancellation Reference */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-[#3D3935] mb-4">🗺️ Quick Cancellation Reference</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#7b2d8e]"></span>
                <span><strong>Violet</strong> cancels <strong>Yellow</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#4a69bd]"></span>
                <span><strong>Blue</strong> cancels <strong>Orange</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#27ae60]"></span>
                <span><strong>Green</strong> cancels <strong>Red</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#4a69bd] to-[#7b2d8e]"></span>
                <span><strong>Blue/Violet</strong> cancels <strong>Yellow-Orange</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#2e86c1] to-[#27ae60]"></span>
                <span><strong>Blue/Green</strong> cancels <strong>Red-Orange</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#7b2d8e] to-[#e63946]"></span>
                <span><strong>Red/Violet</strong> cancels <strong>Yellow-Green</strong></span>
              </div>
            </div>
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

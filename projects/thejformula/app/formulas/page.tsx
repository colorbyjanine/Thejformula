import Link from "next/link";

// 5 FREE preview formulas - fully visible
const freeFormulas = [
  {
    name: "Vanilla Cream Blonde",
    category: "Blonde",
    description: "Cool-toned cream blonde that never reads grey or ashy",
    formula: "6N + 9V + Clear (1:1:½)",
    timing: "20 minutes",
    tip: "Perfect for neutralizing brass on level 8+ blondes",
  },
  {
    name: "Caramel Drizzle",
    category: "Bronde",
    description: "Warm, sun-kissed dimension that melts seamlessly",
    formula: "7GB + 8WG + Gold Kicker (2:1:¼)",
    timing: "20 minutes",
    tip: "Best applied as a glaze over balayage",
  },
  {
    name: "Espresso Shot",
    category: "Brunette",
    description: "Rich, glossy brunette with red undertone control",
    formula: "4N + 5RV + Ash Kicker (2:1:drop)",
    timing: "20 minutes",
    tip: "Neutralizes unwanted warmth while adding dimension",
  },
  {
    name: "Champagne Toast",
    category: "Blonde",
    description: "Beige-pink champagne with wearable warmth",
    formula: "9P + 9RB + Clear (1:½:1)",
    timing: "15-20 minutes",
    tip: "Sheer application for lived-in rose gold",
  },
  {
    name: "Mushroom Melt",
    category: "Brunette",
    description: "Cool, ashy brunette with that editorial mushroom tone",
    formula: "6T + 7NB + Ash Kicker (1:1:¼)",
    timing: "20 minutes",
    tip: "Pre-tone any warmth before applying",
  },
];

// 55 Locked formula previews
const lockedFormulas = [
  { name: "Iced Platinum", category: "Platinum", description: "Ultra-cool white blonde without going lavender" },
  { name: "Smoky Quartz", category: "Brunette", description: "Grey-brown crystal clarity with cool undertones" },
  { name: "Honey Butter", category: "Blonde", description: "Warm, buttery blonde with golden dimension" },
  { name: "Rose Gold Drip", category: "Fashion", description: "Wearable pink-gold that fades beautifully" },
  { name: "Toasted Almond", category: "Bronde", description: "Neutral-warm bronde perfection" },
  { name: "Silver Fox", category: "Grey Blend", description: "Seamless grey coverage that looks natural" },
  { name: "Cinnamon Swirl", category: "Red", description: "Spiced copper with brunette depth" },
  { name: "Arctic Blonde", category: "Platinum", description: "Ice queen platinum without the damage" },
  { name: "Toffee Apple", category: "Bronde", description: "Red-toned bronde for fall vibes" },
  { name: "Pearl Drops", category: "Blonde", description: "Pearlescent blonde with violet undertones" },
  { name: "Cognac Kiss", category: "Red", description: "Deep auburn with sophisticated warmth" },
  { name: "Shadow Root Melt", category: "Technique", description: "Seamless root-to-ends color melt" },
  { name: "Golden Hour", category: "Blonde", description: "That magic sunset blonde glow" },
  { name: "Velvet Espresso", category: "Brunette", description: "Luxuriously rich, single-process brunette" },
  { name: "Dusty Rose", category: "Fashion", description: "Muted mauve-pink that reads expensive" },
  { name: "Beach Bronze", category: "Bronde", description: "California surfer girl bronze" },
  { name: "Charcoal Smoke", category: "Grey Blend", description: "Editorial grey-brown for bold clients" },
  { name: "Butterscotch", category: "Blonde", description: "Warm caramel-blonde sweetness" },
  { name: "Merlot Magic", category: "Red", description: "Wine-stained brunette sophistication" },
  { name: "Icy Lavender", category: "Fashion", description: "Pale purple-grey for platinum bases" },
  { name: "Chestnut Glow", category: "Brunette", description: "Warm, dimensional chestnut brown" },
  { name: "Sandstorm", category: "Blonde", description: "Neutral sandy blonde perfection" },
  { name: "Copper Penny", category: "Red", description: "Bright, shiny copper that pops" },
  { name: "Pewter Mist", category: "Grey Blend", description: "Soft grey blend for transitioning clients" },
  { name: "Hazelnut Cream", category: "Bronde", description: "Creamy hazel tones with depth" },
  { name: "Violet Crush", category: "Fashion", description: "Deep purple with brunette base" },
  { name: "Caramel Macchiato", category: "Bronde", description: "Coffee house inspired warmth" },
  { name: "Strawberry Milk", category: "Fashion", description: "Soft pink for blondes" },
  { name: "Onyx Shine", category: "Brunette", description: "Blue-black with mirror shine" },
  { name: "Vanilla Bean", category: "Blonde", description: "Creamy, warm blonde neutral" },
  { name: "Autumn Leaf", category: "Red", description: "Orange-copper fall foliage tones" },
  { name: "Moonstone", category: "Grey Blend", description: "Iridescent grey-blonde shimmer" },
  { name: "Dark Chocolate", category: "Brunette", description: "Rich cocoa without red tones" },
  { name: "Peach Bellini", category: "Fashion", description: "Soft coral-peach for summer" },
  { name: "Platinum Ice", category: "Platinum", description: "The coldest, cleanest platinum" },
  { name: "Maple Syrup", category: "Bronde", description: "Warm amber-brown sweetness" },
  { name: "Steel Grey", category: "Grey Blend", description: "Industrial cool grey coverage" },
  { name: "Brick Red", category: "Red", description: "Earthy, terracotta red tones" },
  { name: "Cotton Candy", category: "Fashion", description: "Pastel pink fantasy color" },
  { name: "Walnut Stain", category: "Brunette", description: "Deep, rich walnut brown" },
  { name: "Apricot Glow", category: "Red", description: "Soft peachy-copper warmth" },
  { name: "Gunmetal", category: "Grey Blend", description: "Dark metallic grey blend" },
  { name: "Lemon Drop", category: "Blonde", description: "Bright, sunny yellow-blonde" },
  { name: "Mulberry Wine", category: "Red", description: "Deep berry-red sophistication" },
  { name: "Sage Mist", category: "Fashion", description: "Muted green-grey editorial" },
  { name: "Mocha Latte", category: "Bronde", description: "Coffee-inspired neutral bronde" },
  { name: "Pink Champagne", category: "Fashion", description: "Bubbly rose-gold blonde" },
  { name: "Jet Black", category: "Brunette", description: "True black with blue undertones" },
  { name: "Coral Reef", category: "Fashion", description: "Vivid coral-orange fashion shade" },
  { name: "Truffle", category: "Brunette", description: "Luxurious deep brown with dimension" },
  { name: "Baby Pink", category: "Fashion", description: "Delicate pastel pink perfection" },
  { name: "Auburn Fire", category: "Red", description: "Classic auburn with fire undertones" },
  { name: "Snow White", category: "Platinum", description: "Pure white platinum blonde" },
  { name: "Root Shadow Blend", category: "Technique", description: "Natural-looking root transition" },
  { name: "Color Melt Master", category: "Technique", description: "Seamless multi-tone blending" },
];

// Signature formulas (included in vault)
const signatureFormulas = [
  { name: "The Janine Blonde", category: "Signature", description: "My go-to dimensional blonde formula" },
  { name: "Studio Brunette", category: "Signature", description: "The brunette that books repeat clients" },
  { name: "Red Carpet Ready", category: "Signature", description: "Special occasion color that photographs perfectly" },
  { name: "Natural Enhancer", category: "Signature", description: "When they want 'my color but better'" },
  { name: "Grey Blending Secret", category: "Signature", description: "The grey coverage formula clients rave about" },
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
              🎁 5 Free Formulas
            </span>
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              🔓 60+ in the Vault
            </span>
            <span className="px-4 py-2 bg-white border border-[#E8DDD4] rounded-full text-sm text-[#3D3935]">
              ⚡ Instant Download
            </span>
          </div>
        </div>
      </section>

      {/* FREE FORMULAS SECTION */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#9CAF88] text-white text-sm px-4 py-1 rounded-full mb-4">
              FREE PREVIEW
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              5 Formulas on Me
            </h2>
            <p className="text-[#9A9086] max-w-xl mx-auto">
              Try these out behind the chair. When you're ready for more, the vault is waiting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {freeFormulas.map((formula, index) => (
              <div 
                key={index}
                className="bg-[#FAF7F2] border border-[#E8DDD4] p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-[#9CAF88] text-white px-2 py-1 rounded">
                    {formula.category}
                  </span>
                  <span className="text-xs text-[#9CAF88] font-medium">FREE</span>
                </div>
                
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                  {formula.name}
                </h3>
                
                <p className="text-sm text-[#9A9086] mb-4">
                  {formula.description}
                </p>

                {/* Visible formula */}
                <div className="bg-white p-4 rounded border border-[#E8DDD4] mb-3">
                  <p className="text-sm font-mono text-[#3D3935] mb-2">
                    <span className="text-[#9A9086]">Formula:</span> {formula.formula}
                  </p>
                  <p className="text-sm font-mono text-[#3D3935]">
                    <span className="text-[#9A9086]">Timing:</span> {formula.timing}
                  </p>
                </div>

                <p className="text-xs text-[#9CAF88] italic">
                  💡 {formula.tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNLOCK THE VAULT CTA */}
      <section className="py-16 bg-[#3D3935]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-white mb-4">
            Unlock the Full Vault
          </h2>
          <p className="text-[#B5A191] mb-2 max-w-xl mx-auto">
            Get instant access to <span className="text-white font-semibold">60+ formulas</span> with full mixing ratios, 
            color theory breakdowns, and application tips.
          </p>
          <p className="text-[#9A9086] mb-8">
            One-time payment • Instant PDF download • Lifetime access
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white px-10 py-4 text-xl hover:bg-[#8a9d78] transition-colors"
          >
            🔓 Unlock All Formulas — $27
          </a>
        </div>
      </section>

      {/* LOCKED FORMULAS PREVIEW */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              55 More Formulas Inside
            </h2>
            <p className="text-[#9A9086]">
              Preview what's waiting for you in the vault
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {lockedFormulas.map((formula, index) => (
              <div 
                key={index}
                className="relative bg-white border border-[#E8DDD4] p-4 group hover:shadow-md transition-all cursor-pointer"
                onClick={() => window.open("https://payhip.com/b/tNTmd", "_blank")}
              >
                {/* Lock icon */}
                <div className="absolute top-2 right-2 text-[#E8DDD4] group-hover:text-[#9CAF88] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1C8.676 1 6 3.676 6 7v2H4v14h16V9h-2V7c0-3.324-2.676-6-6-6zm0 2c2.276 0 4 1.724 4 4v2H8V7c0-2.276 1.724-4 4-4zm0 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                  </svg>
                </div>

                <span className="text-[10px] text-[#9A9086] uppercase tracking-wide">
                  {formula.category}
                </span>
                
                <h3 className="text-sm font-[family-name:var(--font-cormorant)] text-[#3D3935] mt-1 mb-2 leading-tight">
                  {formula.name}
                </h3>
                
                <p className="text-xs text-[#9A9086] line-clamp-2">
                  {formula.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#3D3935]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-medium flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Unlock
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE FORMULAS TEASER */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#3D3935] text-white text-xs px-3 py-1 rounded-full mb-4">
              VAULT EXCLUSIVE
            </span>
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              + 5 Signature Formulas
            </h2>
            <p className="text-[#9A9086]">
              My personal go-to formulas that keep clients coming back
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {signatureFormulas.map((formula, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#3D3935] to-[#5A534D] p-5 text-center"
              >
                <span className="text-2xl mb-2 block">⭐</span>
                <h3 className="text-white font-[family-name:var(--font-cormorant)] text-lg mb-2">
                  {formula.name}
                </h3>
                <p className="text-[#B5A191] text-xs">
                  {formula.description}
                </p>
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
              What's In the Vault
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl">🎨</div>
              <div>
                <h3 className="font-semibold text-[#3D3935] mb-2">60+ Complete Formulas</h3>
                <p className="text-sm text-[#9A9086]">From icy platinum to rich brunette, every formula is salon-tested and client-approved.</p>
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
                <h3 className="font-semibold text-[#3D3935] mb-2">Pro Application Tips</h3>
                <p className="text-sm text-[#9A9086]">Techniques from 15 years behind the chair to nail each formula.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#3D3935]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-white mb-4">
            Ready to Fill Your Formula Book?
          </h2>
          <p className="text-[#B5A191] mb-8 max-w-xl mx-auto">
            Join hundreds of stylists who've unlocked the vault.
          </p>
          <a 
            href="https://payhip.com/b/tNTmd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#9CAF88] text-white px-10 py-4 text-xl hover:bg-[#8a9d78] transition-colors"
          >
            🔓 Get the Full Vault — $27
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
              <h3 className="font-semibold text-[#3D3935] mb-2">How many formulas total?</h3>
              <p className="text-sm text-[#9A9086]">60+ formulas covering blondes, brunettes, reds, grey blending, fashion colors, and signature techniques.</p>
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

import Link from "next/link";

const AFFILIATE_TAG = "thejformula-20";

// Brand colors for visual variety
const brandStyles: Record<string, { bg: string; text: string; accent: string }> = {
  "K18": { bg: "from-[#F5E6D3] to-[#E8D4C0]", text: "#8B6914", accent: "#B8860B" },
  "Olaplex": { bg: "from-[#FDF5E6] to-[#FAE5D3]", text: "#C4956A", accent: "#D4A574" },
  "Redken": { bg: "from-[#2C2C2C] to-[#1A1A1A]", text: "#FFFFFF", accent: "#E63946" },
  "Amika": { bg: "from-[#FFE4EC] to-[#FFD4E5]", text: "#FF69B4", accent: "#FF1493" },
  "Kenra": { bg: "from-[#E8E8E8] to-[#D4D4D4]", text: "#333333", accent: "#666666" },
  "UNITE": { bg: "from-[#1C1C1C] to-[#2D2D2D]", text: "#D4AF37", accent: "#FFD700" },
  "Nutrafol": { bg: "from-[#2D5016] to-[#1E3B0D]", text: "#FFFFFF", accent: "#90EE90" },
  "Sports Research": { bg: "from-[#1E3A5F] to-[#152D4A]", text: "#FFFFFF", accent: "#4169E1" },
  "Vital Proteins": { bg: "from-[#E6F3F7] to-[#D4EBF2]", text: "#0077B6", accent: "#00A8E8" },
  "Nordic Naturals": { bg: "from-[#B8D4E8] to-[#A0C4DC]", text: "#1E5F8A", accent: "#2E8BC0" },
  "Nature Made": { bg: "from-[#FFF8DC] to-[#F5E6C4]", text: "#DAA520", accent: "#FFD700" },
  "iRestore": { bg: "from-[#E8E8E8] to-[#CCCCCC]", text: "#E63946", accent: "#FF4D5A" },
  "Revian": { bg: "from-[#1A1A2E] to-[#16213E]", text: "#FFFFFF", accent: "#E94560" },
  "Kérastase": { bg: "from-[#1C1C1C] to-[#2A2A2A]", text: "#D4AF37", accent: "#FFD700" },
  "Dyson": { bg: "from-[#F5F5F5] to-[#E8E8E8]", text: "#CC0066", accent: "#FF0080" },
  "Kitsch": { bg: "from-[#FFF0F5] to-[#FFE4E9]", text: "#DB7093", accent: "#FF69B4" },
  "CeraVe": { bg: "from-[#E8F4F8] to-[#D4EBF0]", text: "#1E5F74", accent: "#2E8BC0" },
  "La Roche-Posay": { bg: "from-[#E6F0F5] to-[#D4E5ED]", text: "#1E4D6B", accent: "#2E7D9E" },
  "PAVOI": { bg: "from-[#FDF5E6] to-[#F5E6D3]", text: "#B8860B", accent: "#DAA520" },
  "NOKMIT": { bg: "from-[#F5E6D3] to-[#E8D4C0]", text: "#B8860B", accent: "#DAA520" },
  "SHASH": { bg: "from-[#D4C4A8] to-[#C4B498]", text: "#5C4A32", accent: "#8B7355" },
  "Ellen Evyse": { bg: "from-[#FFF5EE] to-[#FFE4D6]", text: "#CD853F", accent: "#DEB887" },
  "Olivia Garden": { bg: "from-[#98D8C8] to-[#7CC4B4]", text: "#2F5D50", accent: "#3D7A6A" },
  "Fohufo": { bg: "from-[#FFE4EC] to-[#FFD4E5]", text: "#C71585", accent: "#FF1493" },
  "JIRIS": { bg: "from-[#FDF5E6] to-[#F5E6D3]", text: "#B8860B", accent: "#DAA520" },
  "French": { bg: "from-[#F5F0EB] to-[#E8E0D8]", text: "#6B5B4F", accent: "#8B7355" },
  "default": { bg: "from-[#FAF7F2] to-[#E8DDD4]", text: "#3D3935", accent: "#9A9086" },
};

// Extract brand from product name
function getBrand(name: string): string {
  const brands = Object.keys(brandStyles).filter(b => b !== "default");
  for (const brand of brands) {
    if (name.toLowerCase().includes(brand.toLowerCase())) {
      return brand;
    }
  }
  // Try to get first word as brand
  return name.split(" ")[0];
}

function getShortName(name: string, brand: string): string {
  // Remove brand from name and clean up
  let short = name.replace(new RegExp(brand, "i"), "").trim();
  // Remove common prefixes
  short = short.replace(/^(No\.\s*\d+\s*)?/, "").trim();
  // Limit length
  if (short.length > 40) {
    short = short.substring(0, 40) + "...";
  }
  return short || name;
}

const hairProducts = [
  {
    name: "K18 Leave-In Molecular Repair Hair Mask",
    description: "The game-changer for damaged hair. 4 minutes, no rinse, actual repair at the molecular level.",
    amazonId: "B0961ZS96M",
    price: "$29",
  },
  {
    name: "Olaplex No. 3 Hair Perfector",
    description: "The at-home treatment that actually works. Use weekly to strengthen bonds and repair damage.",
    amazonId: "B00SNM5US4",
    price: "$30",
  },
  {
    name: "Redken Acidic Bonding Concentrate Leave-In",
    description: "Strengthens weak bonds and adds incredible shine. A must for color-treated hair.",
    amazonId: "B08P67N41H",
    price: "$36",
  },
  {
    name: "Amika Un.Done Volume & Texture Spray",
    description: "Effortless, lived-in texture without crunchiness. My secret for that 'I woke up like this' look.",
    amazonId: "B00MF80PEQ",
    price: "$29",
  },
  {
    name: "Kenra Volume Mousse 25",
    description: "Firm hold without the crunch. Perfect for volume that lasts all day.",
    amazonId: "B001T6O6R0",
    price: "$22",
  },
  {
    name: "Redken All Soft Shampoo & Conditioner Set",
    description: "For dry or brittle hair. Intense softness and shine with argan oil. A salon favorite.",
    amazonId: "B094F6TRCF",
    price: "$52",
  },
  {
    name: "Redken One United Leave-In Treatment",
    description: "25 benefits in one bottle. Heat protection, detangling, strengthening — does it all.",
    amazonId: "B013IL9XC8",
    price: "$31",
  },
  {
    name: "UNITE 7SECONDS Detangler Leave-In",
    description: "Instant detangling magic. Lightweight, protects from heat & UV. Amazing for extensions too.",
    amazonId: "B00UYBSZ52",
    price: "$35",
  },
];

const supplements = [
  {
    name: "Nutrafol Women",
    description: "The hair growth supplement with actual clinical studies behind it. Takes 3-6 months to see results.",
    amazonId: "B01NGTV7PQ",
    price: "$88",
  },
  {
    name: "Sports Research Biotin",
    description: "High-quality biotin with coconut oil for better absorption. 5,000 mcg.",
    amazonId: "B00JGCBGZQ",
    price: "$15",
  },
  {
    name: "Vital Proteins Collagen Peptides",
    description: "I put this in my coffee every morning. Great for hair, skin, and nails.",
    amazonId: "B00K6JUG4K",
    price: "$27",
  },
  {
    name: "Nordic Naturals Omega-3",
    description: "Clean fish oil that doesn't taste fishy. Supports scalp health and hair shine.",
    amazonId: "B002CQU55G",
    price: "$28",
  },
  {
    name: "Nature Made Vitamin D3",
    description: "Most people are deficient. Essential for hair follicle health.",
    amazonId: "B004GW1X9G",
    price: "$12",
  },
];

const redLightDevices = [
  {
    name: "iRestore Laser Hair Growth System",
    description: "FDA-cleared helmet for hair regrowth. 25 minutes, every other day.",
    amazonId: "B01MREN0NX",
    price: "$695",
  },
  {
    name: "Revian Red Light Therapy Cap",
    description: "Higher-end option with clinical backing. 10 minutes daily.",
    amazonId: "B09F3X8V5N",
    price: "$995",
  },
];

const luxuryHaircare = [
  {
    name: "Kérastase Nutritive 8H Magic Night Serum",
    description: "Overnight treatment for dry hair. Wake up with soft, shiny, frizz-free hair. Game changer.",
    amazonId: "B0BZZJWGPQ",
    price: "$62",
  },
  {
    name: "Kérastase Nutritive Masquintense Mask",
    description: "Deep nourishing mask for dry hair. Leaves hair irresistibly soft and silky. Worth the splurge.",
    amazonId: "B0BZZK3R5S",
    price: "$65",
  },
  {
    name: "Kérastase Elixir Ultime Hair Oil",
    description: "Lightweight oil for insane shine. Controls frizz up to 96 hours. Heat protection up to 450°F.",
    amazonId: "B0D2LV7DHF",
    price: "$62",
  },
];

const toolsAccessories = [
  {
    name: "SHASH German Boar Bristle Brush",
    description: "Handmade in Germany since 1869. Gently detangles, no pulling. Smooths and conditions naturally.",
    amazonId: "B07YXC5C26",
    price: "$40",
  },
  {
    name: "Ellen Evyse Boar Bristle Brush",
    description: "Soft bristles for smoothing & detangling. Reduces breakage, adds shine. Comes with cute hair ties!",
    amazonId: "B0DTHGXTSK",
    price: "$16",
  },
  {
    name: "Olivia Garden NanoThermic Round Brush",
    description: "The blowout brush pros use. Ceramic + ion technology. Eliminates frizz, adds shine. Volume for days.",
    amazonId: "B003IX7AIQ",
    price: "$35",
  },
  {
    name: "Dyson Supersonic Hair Dryer",
    description: "The holy grail. No heat damage, crazy fast drying, salon results at home. Worth every penny.",
    amazonId: "B0B4T6RTZ2",
    price: "$430",
  },
  {
    name: "Kitsch Satin Heatless Curlers",
    description: "Sleep in these, wake up with gorgeous curls. Satin is gentle on hair. Zero heat damage.",
    amazonId: "B0CHN56HTC",
    price: "$20",
  },
  {
    name: "Fohufo Initial Letter Claw Clip",
    description: "Cute personalized claw clip with your initial. Glittery, strong grip, perfect for thick hair.",
    amazonId: "B0F636T849",
    price: "$10",
  },
  {
    name: "JIRIS Gold Metal Hair Cuffs",
    description: "Elevate any ponytail instantly. Chic gold geometric cuffs. Gets compliments every time.",
    amazonId: "B0DRY5VBDX",
    price: "$9",
  },
  {
    name: "French Flat Claw Clips (6 pack)",
    description: "So comfy you can sleep in them. Strong hold, no slip. Works for thick or thin hair.",
    amazonId: "B0FMP1ZGJN",
    price: "$12",
  },
  {
    name: "Kitsch Pillow Satin Scrunchies",
    description: "Like a tiny cloud for your hair. No creases, no damage, no frizz. Sleep in them!",
    amazonId: "B0FPPV8V5Q",
    price: "$14",
  },
  {
    name: "Kitsch Ultra-Petite Satin Scrunchies",
    description: "Mini scrunchies, max softness. Perfect for smaller ponytails or kids. 6 pack.",
    amazonId: "B0BJS1NVKM",
    price: "$9",
  },
];

const skincare = [
  {
    name: "CeraVe Hydrating Cleanser",
    description: "Gentle, effective, affordable. I recommend this to everyone.",
    amazonId: "B01MSSDEPK",
    price: "$16",
  },
  {
    name: "La Roche-Posay Anthelios Sunscreen",
    description: "Protects your skin AND helps your scalp. Don't skip the SPF.",
    amazonId: "B004W55086",
    price: "$36",
  },
];

const jewelry = [
  {
    name: "PAVOI 14K Gold Plated Eternity Ring",
    description: "Dainty stackable ring that looks way more expensive than it is. Perfect for everyday.",
    amazonId: "B07BGXMF1Q",
    price: "$14",
  },
  {
    name: "NOKMIT 14K Gold Chunky Statement Ring",
    description: "That trendy chunky gold look without the price tag. So cute stacked or alone.",
    amazonId: "B09XDVPNJS",
    price: "$13",
  },
  {
    name: "PAVOI 14K Gold Wavy Ring",
    description: "Unique wavy design that catches the light. Gets compliments every time.",
    amazonId: "B08RDML4VV",
    price: "$16",
  },
  {
    name: "PAVOI Gold Chunky Open Twist Ring",
    description: "Bold, modern, adjustable. The statement piece your hand needs.",
    amazonId: "B08RDN9L9Z",
    price: "$14",
  },
  {
    name: "Gold Stackable Rings Set",
    description: "Why pick one? Get a set of dainty stackables and mix & match.",
    amazonId: "B0BKWD6D1V",
    price: "$15",
  },
];

function ProductCard({ product }: { product: { name: string; description: string; amazonId: string; price: string } }) {
  const affiliateLink = `https://www.amazon.com/dp/${product.amazonId}?tag=${AFFILIATE_TAG}`;
  const brand = getBrand(product.name);
  const shortName = getShortName(product.name, brand);
  const style = brandStyles[brand] || brandStyles["default"];
  
  return (
    <a 
      href={affiliateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-44 md:w-52 group block overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`aspect-square relative overflow-hidden bg-gradient-to-br ${style.bg}`}>
        {/* Brand name in large script font */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <span 
            className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] italic font-semibold leading-tight"
            style={{ color: style.text }}
          >
            {brand}
          </span>
          <span 
            className="text-[10px] md:text-xs mt-2 uppercase tracking-wider leading-tight max-w-full px-2 opacity-80"
            style={{ color: style.text }}
          >
            {shortName}
          </span>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
          <span 
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-5 py-2.5 text-xs tracking-widest uppercase font-medium rounded-full border-2 border-white text-white"
          >
            Shop Now
          </span>
        </div>
      </div>
      
      {/* Price tag */}
      <div className="bg-white p-3 flex items-center justify-between">
        <span className="text-[#3D3935] font-semibold text-lg">{product.price}</span>
        <span className="text-[#9A9086] text-xs">→</span>
      </div>
    </a>
  );
}

function ProductRow({ title, products }: { title: string; products: { name: string; description: string; amazonId: string; price: string }[] }) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-5 px-4">
        {title}
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {products.map((product) => (
          <ProductCard key={product.amazonId} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2] texture-overlay">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            Curated Picks
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Shop My Favorites
          </h1>
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto">
            Everything here is something I actually use, love, and would recommend to a friend. 
            No random sponsorships — just real recommendations.
          </p>
        </div>
      </section>

      {/* All Products - Horizontal Scrolling Rows */}
      <section className="py-12 bg-[#FAF7F2]">
        <ProductRow title="Hair Treatments & Styling" products={hairProducts} />
        <ProductRow title="Luxury Haircare" products={luxuryHaircare} />
        <ProductRow title="Tools & Accessories" products={toolsAccessories} />
        <ProductRow title="Vitamins & Supplements" products={supplements} />
        <ProductRow title="Skin & Beauty" products={skincare} />
        <ProductRow title="Red Light Therapy" products={redLightDevices} />
        <ProductRow title="Cute Jewelry Finds" products={jewelry} />
      </section>

      {/* Affiliate Disclaimer */}
      <section className="bg-[#3D3935] py-12">
        <div className="container mx-auto text-center">
          <p className="text-[#B5A191] text-sm max-w-2xl mx-auto">
            <strong className="text-[#FAF7F2]">Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. 
            This means I may earn a small commission when you buy through my links, at no extra cost to you. 
            I only recommend products I genuinely use and love.
          </p>
        </div>
      </section>

      {/* Request */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Looking for Something Specific?
          </h2>
          <p className="text-[#9A9086] max-w-xl mx-auto mb-8">
            Can't find what you need? DM me on Instagram and I'll point you in the right direction.
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

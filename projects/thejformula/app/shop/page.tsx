import Link from "next/link";

const AFFILIATE_TAG = "thejformula-20";

const hairProducts = [
  {
    name: "Olaplex No. 3 Hair Perfector",
    description: "The at-home treatment that actually works. Use weekly to strengthen bonds and repair damage.",
    amazonId: "B00SNM5US4",
    price: "$30",
  },
  {
    name: "Redken Color Extend Magnetics Shampoo",
    description: "My go-to for color-treated hair. Sulfate-free and keeps color vibrant longer.",
    amazonId: "B07GNBCY2Z",
    price: "$26",
  },
  {
    name: "Redken Color Extend Magnetics Conditioner",
    description: "Pair with the shampoo for maximum color protection and softness.",
    amazonId: "B07GNBKX7Z",
    price: "$26",
  },
  {
    name: "Moroccan Oil Treatment",
    description: "A little goes a long way. Adds shine, tames frizz, and smells incredible.",
    amazonId: "B001AO0WCG",
    price: "$48",
  },
  {
    name: "T3 Cura Hair Dryer",
    description: "The upgrade your hair deserves. Gentle heat, fast drying, less damage.",
    amazonId: "B079JL12XL",
    price: "$235",
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

function ProductCard({ product }: { product: { name: string; description: string; amazonId: string; price: string } }) {
  const affiliateLink = `https://www.amazon.com/dp/${product.amazonId}?tag=${AFFILIATE_TAG}`;
  
  return (
    <div className="bg-white p-6 group hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-[#FAF7F2] mb-4 flex items-center justify-center">
        <span className="text-6xl text-[#D4C5B5]">✦</span>
      </div>
      <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
        {product.name}
      </h3>
      <p className="text-sm text-[#9A9086] mb-4">
        {product.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[#3D3935] font-medium">{product.price}</span>
        <a 
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm tracking-widest uppercase text-[#9A9086] hover:text-[#3D3935] transition-colors"
        >
          Shop →
        </a>
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

      {/* Hair Products */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
            Hair Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hairProducts.map((product) => (
              <ProductCard key={product.amazonId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Supplements */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
            Vitamins & Supplements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplements.map((product) => (
              <ProductCard key={product.amazonId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Red Light Devices */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
            Red Light Therapy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {redLightDevices.map((product) => (
              <ProductCard key={product.amazonId} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Skincare */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
            Skin & Beauty
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {skincare.map((product) => (
              <ProductCard key={product.amazonId} product={product} />
            ))}
          </div>
        </div>
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

import Link from "next/link";

const AFFILIATE_TAG = "thejformula-20";

const styleBoards = [
  {
    title: "Summer Blonde Era",
    description: "Sun-kissed vibes, linen textures, golden hour everything",
    season: "Summer 2026",
    color: "linear-gradient(135deg, #F5E6D3 0%, #E8D4B8 50%, #D4C5B5 100%)",
    products: [
      { name: "Linen Beach Pants", amazonId: "B0C1X2Y3Z4", price: "$45" },
      { name: "Oversized Sunglasses", amazonId: "B0C2X3Y4Z5", price: "$28" },
      { name: "Gold Layered Necklaces", amazonId: "B0C3X4Y5Z6", price: "$22" },
    ],
  },
  {
    title: "Rich Brunette Energy",
    description: "Cozy neutrals, leather accents, espresso tones",
    season: "Fall/Winter",
    color: "linear-gradient(135deg, #8B7355 0%, #6B5344 50%, #4A3728 100%)",
    products: [
      { name: "Oversized Knit Sweater", amazonId: "B0C4X5Y6Z7", price: "$55" },
      { name: "Leather Tote Bag", amazonId: "B0C5X6Y7Z8", price: "$89" },
      { name: "Gold Hoop Earrings", amazonId: "B0C6X7Y8Z9", price: "$18" },
    ],
  },
  {
    title: "Ash Blonde Minimalist",
    description: "Clean lines, cool tones, Scandinavian simplicity",
    season: "Year Round",
    color: "linear-gradient(135deg, #D4D4D4 0%, #B8B5B0 50%, #9A9086 100%)",
    products: [
      { name: "White Button-Down", amazonId: "B0C7X8Y9Z0", price: "$38" },
      { name: "Silver Cuff Bracelet", amazonId: "B0C8X9Y0Z1", price: "$24" },
      { name: "Minimalist Watch", amazonId: "B0C9X0Y1Z2", price: "$65" },
    ],
  },
];

const homeVibes = [
  {
    title: "Salon-Worthy Bathroom",
    description: "Create that spa feeling at home",
    items: [
      { name: "Bamboo Organizer Set", amazonId: "B0D1X2Y3Z4", price: "$35" },
      { name: "Turkish Cotton Towels", amazonId: "B0D2X3Y4Z5", price: "$48" },
      { name: "Eucalyptus Candle", amazonId: "B0D3X4Y5Z6", price: "$28" },
      { name: "LED Vanity Mirror", amazonId: "B0D4X5Y6Z7", price: "$79" },
    ],
  },
  {
    title: "Cozy Corner Setup",
    description: "Where you scroll Pinterest and plan your next hair appointment",
    items: [
      { name: "Chunky Knit Throw", amazonId: "B0D5X6Y7Z8", price: "$45" },
      { name: "Velvet Accent Pillow", amazonId: "B0D6X7Y8Z9", price: "$22" },
      { name: "Gold Table Lamp", amazonId: "B0D7X8Y9Z0", price: "$58" },
      { name: "Coffee Table Books", amazonId: "B0D8X9Y0Z1", price: "$35" },
    ],
  },
];

export default function Style() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2] texture-overlay">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            Vision Boards
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Style & Lifestyle
          </h1>
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto">
            Your hair is just one part of your vibe. Here's what I'm loving — 
            fashion, home, and everything that makes you feel put-together.
          </p>
        </div>
      </section>

      {/* Style Boards */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-12 text-center">
            Hair + Style Mood Boards
          </h2>
          
          <div className="space-y-16">
            {styleBoards.map((board, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Color Swatch / Placeholder for Product Photos */}
                <div 
                  className={`relative aspect-[4/5] overflow-hidden flex items-center justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  style={{ background: board.color }}
                >
                  <div className="text-center text-white/80">
                    <span className="text-6xl">✦</span>
                    <p className="text-sm tracking-widest uppercase mt-4 opacity-70">Product photos coming soon</p>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1">
                    <span className="text-xs tracking-widest uppercase text-[#3D3935]">{board.season}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
                    {board.title}
                  </h3>
                  <p className="text-[#9A9086] mb-8 text-lg">
                    {board.description}
                  </p>
                  
                  <div className="space-y-4">
                    <p className="text-sm tracking-widest uppercase text-[#9A9086]">Complete the Look</p>
                    {board.products.map((product, i) => (
                      <a
                        key={i}
                        href={`https://www.amazon.com/dp/${product.amazonId}?tag=${AFFILIATE_TAG}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white hover:shadow-md transition-shadow"
                      >
                        <span className="text-[#3D3935]">{product.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-[#9A9086]">{product.price}</span>
                          <span className="text-xs tracking-widest uppercase text-[#9A9086]">Shop →</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Vibes */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
              Home
            </p>
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
              Create Your Vibe at Home
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {homeVibes.map((vibe, index) => (
              <div key={index} className="bg-white p-8">
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                  {vibe.title}
                </h3>
                <p className="text-[#9A9086] mb-6">
                  {vibe.description}
                </p>
                
                <div className="space-y-3">
                  {vibe.items.map((item, i) => (
                    <a
                      key={i}
                      href={`https://www.amazon.com/dp/${item.amazonId}?tag=${AFFILIATE_TAG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[#FAF7F2] hover:bg-[#E8DDD4] transition-colors"
                    >
                      <span className="text-[#3D3935] text-sm">{item.name}</span>
                      <span className="text-[#9A9086] text-sm">{item.price}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Trends */}
      <section className="section bg-[#3D3935] text-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#B5A191] mb-4">
            Coming Soon
          </p>
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] mb-6">
            Seasonal Trend Reports
          </h2>
          <p className="text-[#B5A191] max-w-xl mx-auto mb-8">
            Each season I'll drop a new style guide — the hair colors, the fashion trends, 
            the whole mood. Sign up to get notified.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-transparent border border-[#B5A191]/50 text-[#FAF7F2] placeholder-[#B5A191] focus:outline-none focus:border-[#FAF7F2]"
            />
            <button type="submit" className="btn-primary bg-[#FAF7F2] text-[#3D3935] hover:bg-[#D4C5B5]">
              Notify Me
            </button>
          </form>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#FAF7F2] py-8 border-t border-[#D4C5B5]/30">
        <div className="container mx-auto text-center">
          <p className="text-sm text-[#9A9086]">
            As an Amazon Associate I earn from qualifying purchases. 
            I only share products I genuinely love.
          </p>
        </div>
      </section>
    </div>
  );
}

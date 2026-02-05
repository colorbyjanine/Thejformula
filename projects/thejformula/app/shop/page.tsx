"use client";

import { useState } from "react";
import Link from "next/link";

const AFFILIATE_TAG = "thejformula-20";

// Product data organized by lifestyle category
const collections = {
  hair: {
    title: "Hair Essentials",
    subtitle: "Salon-grade products I actually use",
    emoji: "💇",
    color: "from-[#E8967A] to-[#D4826A]",
    products: [
      { name: "K18 Leave-In Molecular Repair Mask", amazonId: "B0961ZS96M", price: "$29", tag: "Holy Grail" },
      { name: "Olaplex No. 3 Hair Perfector", amazonId: "B00SNM5US4", price: "$30", tag: "Repair" },
      { name: "Redken Acidic Bonding Leave-In", amazonId: "B08P67N41H", price: "$36", tag: "Strength" },
      { name: "UNITE 7SECONDS Detangler", amazonId: "B00UYBSZ52", price: "$35", tag: "Detangle" },
      { name: "Kérastase Elixir Ultime Oil", amazonId: "B0D2LV7DHF", price: "$62", tag: "Luxury" },
      { name: "Amika Un.Done Texture Spray", amazonId: "B07H3CZHLG", price: "$29", tag: "Texture" },
      { name: "Redken One United 25-in-1", amazonId: "B013IL9XC8", price: "$31", tag: "Multi-Use" },
      { name: "Kérastase Night Serum", amazonId: "B0BZZJWGPQ", price: "$62", tag: "Overnight" },
    ],
  },
  wellness: {
    title: "Self Care & Wellness",
    subtitle: "Beauty from the inside out",
    emoji: "✨",
    color: "from-[#9CAF88] to-[#7A9968]",
    products: [
      { name: "Nutrafol Women Hair Growth", amazonId: "B00LU4CZP8", price: "$88", tag: "Hair Growth" },
      { name: "MaryRuth's Liquid Multivitamin", amazonId: "B0CGKVHHCY", price: "$75", tag: "Bestseller" },
      { name: "Vital Proteins Collagen", amazonId: "B00K6JUG4K", price: "$27", tag: "Daily" },
      { name: "Thorne Biotin 8mg", amazonId: "B0797CG5R8", price: "$28", tag: "Hair & Nails" },
      { name: "Thorne Vitamin D + K2", amazonId: "B0038NF8MG", price: "$34", tag: "Essential" },
      { name: "Thorne Super EPA Omega-3", amazonId: "B0018CJ17W", price: "$41", tag: "Scalp Health" },
      { name: "CeraVe Hydrating Cleanser", amazonId: "B01MSSDEPK", price: "$16", tag: "Skincare" },
      { name: "La Roche-Posay SPF 50", amazonId: "B002CML1VG", price: "$35", tag: "Sun Care" },
    ],
  },
  tools: {
    title: "Tools & Styling",
    subtitle: "Professional results at home",
    emoji: "🪮",
    color: "from-[#3D3935] to-[#5A534D]",
    products: [
      { name: "Dyson Airwrap Complete", amazonId: "B0B61XH5YT", price: "$599", tag: "Investment" },
      { name: "TYMO Auto Curling Iron", amazonId: "B0DP542W7G", price: "$50", tag: "Easy Waves" },
      { name: "SHASH Boar Bristle Brush", amazonId: "B07YXC5C26", price: "$40", tag: "German Made" },
      { name: "Olivia Garden Round Brush", amazonId: "B000N8DMJK", price: "$25", tag: "Blowout" },
      { name: "Kitsch Satin Pillowcase", amazonId: "B07JN1TSKS", price: "$19", tag: "Sleep Care" },
      { name: "Kitsch Claw Clips Set", amazonId: "B0B1BQKHFZ", price: "$14", tag: "Trending" },
      { name: "iRestore Laser Hair System", amazonId: "B01MREN0NX", price: "$695", tag: "Growth Tech" },
      { name: "Rechargeable Nail Drill", amazonId: "B0BDH4FB7Q", price: "$30", tag: "Nail Care" },
    ],
  },
  home: {
    title: "Home & Organization",
    subtitle: "Aesthetic essentials for your space",
    emoji: "🏠",
    color: "from-[#C4B5A0] to-[#A89880]",
    products: [
      { name: "Vtopmart Clear Containers Set", amazonId: "B08DXG5VGC", price: "$35", tag: "Pantry Goals" },
      { name: "StorageWorks Woven Baskets", amazonId: "B0BWMWZ6JL", price: "$30", tag: "Storage" },
      { name: "ZOBER Velvet Hangers 50pk", amazonId: "B00FXNAAW2", price: "$26", tag: "Closet" },
      { name: "Woodure Acacia Cutting Board", amazonId: "B0BDHNFK5Q", price: "$40", tag: "Kitchen" },
      { name: "Glass Spray Bottles Set", amazonId: "B07KGDXFL4", price: "$15", tag: "Aesthetic" },
      { name: "Linen Storage Bins", amazonId: "B08DHYM1G1", price: "$28", tag: "Organize" },
      { name: "Gold Drawer Pulls 10pk", amazonId: "B08FMWFMRP", price: "$18", tag: "Hardware" },
      { name: "Marble Tray Organizer", amazonId: "B07PQXQVBN", price: "$25", tag: "Vanity" },
    ],
  },
  style: {
    title: "Style & Accessories",
    subtitle: "Everyday pieces I love",
    emoji: "👗",
    color: "from-[#D4826A] to-[#C47262]",
    products: [
      { name: "PAVOI 14K Gold Huggie Hoops", amazonId: "B0CBVSY69K", price: "$25", tag: "Everyday" },
      { name: "FANCIME Pearl Drop Earrings", amazonId: "B0B7QFMS4V", price: "$45", tag: "Elegant" },
      { name: "Gold Layered Necklace Set", amazonId: "B08T1ZWK7L", price: "$16", tag: "Layering" },
      { name: "Chouyatou Linen Blazer", amazonId: "B0C2TQWZ5T", price: "$50", tag: "Chic" },
      { name: "OFEEFAN Ribbed Tank Tops", amazonId: "B0B3RNH9D8", price: "$25", tag: "Basics" },
      { name: "Wide Leg Linen Pants", amazonId: "B0C8M7C7X2", price: "$35", tag: "Comfy" },
      { name: "Straw Tote Beach Bag", amazonId: "B0BY9KQN2M", price: "$30", tag: "Summer" },
      { name: "Gold Chain Belt", amazonId: "B08NWLMB3J", price: "$15", tag: "Accessory" },
    ],
  },
};

type CollectionKey = keyof typeof collections;

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState<CollectionKey | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-3">
            Shop My Picks
          </p>
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
            Things I Actually Use ✨
          </h1>
          <p className="text-[#9A9086] max-w-xl mx-auto">
            Curated favorites from my daily routine — hair care, wellness, home, and style. 
            Tap to shop.
          </p>
        </div>
      </section>

      {/* Category Cards - LTK Style Grid */}
      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {(Object.keys(collections) as CollectionKey[]).map((key) => {
            const cat = collections[key];
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(activeCategory === key ? null : key)}
                className={`relative overflow-hidden rounded-2xl p-5 md:p-6 text-left transition-all duration-300 ${
                  activeCategory === key 
                    ? "ring-2 ring-[#3D3935] scale-[1.02]" 
                    : "hover:scale-[1.02]"
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
                <div className="relative z-10">
                  <span className="text-3xl md:text-4xl block mb-2">{cat.emoji}</span>
                  <h3 className="text-white font-semibold text-sm md:text-base leading-tight">
                    {cat.title}
                  </h3>
                  <p className="text-white/70 text-[10px] md:text-xs mt-1 hidden md:block">
                    {cat.products.length} picks
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Category Products */}
      {activeCategory && (
        <section className="px-4 pb-12 animate-fadeIn">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
                  {collections[activeCategory].title}
                </h2>
                <p className="text-sm text-[#9A9086]">{collections[activeCategory].subtitle}</p>
              </div>
              <button 
                onClick={() => setActiveCategory(null)}
                className="text-sm text-[#9A9086] hover:text-[#3D3935] flex items-center gap-1"
              >
                Close
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {collections[activeCategory].products.map((product, idx) => (
                <a
                  key={idx}
                  href={`https://amazon.com/dp/${product.amazonId}?tag=${AFFILIATE_TAG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-200"
                >
                  {/* Product Image Placeholder */}
                  <div className="aspect-square bg-gradient-to-br from-[#E8DDD4] to-[#D8CEC5] rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${product.amazonId}&Format=_SL250_&ID=AsinImage&tag=${AFFILIATE_TAG}`}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Tag */}
                  {product.tag && (
                    <span className="inline-block text-[10px] bg-[#FAF7F2] text-[#9A9086] px-2 py-0.5 rounded-full mb-2">
                      {product.tag}
                    </span>
                  )}
                  
                  {/* Name & Price */}
                  <h3 className="text-sm font-medium text-[#3D3935] leading-tight mb-1 line-clamp-2 group-hover:text-[#E8967A] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#3D3935]">{product.price}</p>
                  
                  {/* Shop Button */}
                  <div className="mt-3 text-center">
                    <span className="inline-block text-xs bg-[#3D3935] text-white px-4 py-2 rounded-full group-hover:bg-[#E8967A] transition-colors">
                      Shop Now
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Products View (when no category selected) */}
      {!activeCategory && (
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-[#9A9086] mb-8">
              👆 Tap a category above to explore
            </p>

            {/* Featured Picks */}
            <div className="mb-12">
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6 text-center">
                ⭐ Top Picks Right Now
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  collections.hair.products[0],
                  collections.wellness.products[0],
                  collections.tools.products[1],
                  collections.style.products[0],
                ].map((product, idx) => (
                  <a
                    key={idx}
                    href={`https://amazon.com/dp/${product.amazonId}?tag=${AFFILIATE_TAG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-xl p-4 hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square bg-gradient-to-br from-[#E8DDD4] to-[#D8CEC5] rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${product.amazonId}&Format=_SL250_&ID=AsinImage&tag=${AFFILIATE_TAG}`}
                        alt={product.name}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <span className="inline-block text-[10px] bg-[#E8967A]/20 text-[#E8967A] px-2 py-0.5 rounded-full mb-2">
                      {product.tag}
                    </span>
                    <h3 className="text-sm font-medium text-[#3D3935] leading-tight mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#3D3935]">{product.price}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-2xl p-6 text-center">
              <h3 className="font-semibold text-[#3D3935] mb-3">More Ways to Shop</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <a 
                  href="https://amazon.com/shop/influencer-XXXXXX" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#FAF7F2] rounded-full text-sm text-[#3D3935] hover:bg-[#E8DDD4] transition-colors"
                >
                  🛒 Amazon Storefront
                </a>
                <a 
                  href="#" 
                  className="px-4 py-2 bg-[#FAF7F2] rounded-full text-sm text-[#3D3935] hover:bg-[#E8DDD4] transition-colors"
                >
                  ❤️ LTK Shop
                </a>
                <Link 
                  href="/formulas"
                  className="px-4 py-2 bg-[#FAF7F2] rounded-full text-sm text-[#3D3935] hover:bg-[#E8DDD4] transition-colors"
                >
                  💇 Formula Vault
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Affiliate Disclosure */}
      <section className="px-4 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#9A9086]">
            As an Amazon Associate, I earn from qualifying purchases. 
            These are products I personally use and recommend — your support helps me continue creating content! 💕
          </p>
        </div>
      </section>

      {/* Add some CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

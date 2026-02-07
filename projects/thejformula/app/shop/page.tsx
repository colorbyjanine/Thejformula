"use client";

import { useState } from "react";
import Link from "next/link";

const AFFILIATE_TAG = "thejformula-20";

// VERIFIED products only - Janine approved
const collections = {
  hair: {
    title: "Hair Essentials",
    subtitle: "Salon-grade products I actually use",
    emoji: "💇",
    color: "from-[#E8967A] to-[#D4826A]",
    products: [
      { name: "K18 Leave-In Molecular Repair Mask", amazonId: "B0961ZS96M", price: "$29", tag: "Holy Grail" },
      { name: "Olaplex No. 3 Hair Perfector", amazonId: "B00SNM5US4", price: "$30", tag: "Repair" },
      { name: "Olaplex No. 4D Dry Shampoo", amazonId: "B0BTWR89FV", price: "$30", tag: "Fresh" },
      { name: "Briogeo Scalp Revival Dry Shampoo", amazonId: "B06XNPXM53", price: "$26", tag: "Scalp" },
      { name: "Briogeo Don't Despair Repair Shampoo", amazonId: "B07JW5YG8H", price: "$69", tag: "Repair" },
      { name: "Briogeo Destined For Density Shampoo + Conditioner Set", amazonId: "B0DLCC25XZ", price: "$54", tag: "Thickening" },
      { name: "Oribe Gold Lust Dry Shampoo", amazonId: "B01LATG0X0", price: "$26", tag: "Luxe" },
      { name: "Redken Acidic Bonding Leave-In", amazonId: "B08P67N41H", price: "$36", tag: "Strength" },
      { name: "UNITE 7SECONDS Detangler", amazonId: "B00UYBSZ52", price: "$35", tag: "Detangle" },
      { name: "Amika Un.Done Texture Spray", amazonId: "B07H3CZHLG", price: "$29", tag: "Texture" },
      { name: "Redken One United 25-in-1", amazonId: "B013IL9XC8", price: "$31", tag: "Multi-Use" },
    ],
  },
  wellness: {
    title: "Self Care & Wellness",
    subtitle: "Beauty from the inside out",
    emoji: "✨",
    color: "from-[#9CAF88] to-[#7A9968]",
    products: [
      { name: "Salt & Stone Body Cream – Bergamot & Hinoki", amazonId: "B0FJVNQDFQ", price: "$42", tag: "Luxe" },
      { name: "ELEMIS Frangipani Monoi Body Oil", amazonId: "B00L9XRVM2", price: "$49", tag: "Luxe" },
      { name: "Yoken Vitamin E Oil 16oz", amazonId: "B0DXBPBDH6", price: "$15", tag: "Skin" },
      { name: "Medicube Collagen Wrapping Mask", amazonId: "B0BRMYHMS5", price: "$19", tag: "K-Beauty" },
      { name: "Nutrafol Women Hair Growth", amazonId: "B00LU4CZP8", price: "$88", tag: "Hair Growth" },
      { name: "Vital Proteins Collagen", amazonId: "B00K6JUG4K", price: "$27", tag: "Daily" },
      { name: "Thorne Biotin 8mg", amazonId: "B0797CG5R8", price: "$28", tag: "Hair & Nails" },
      { name: "Thorne Vitamin D + K2", amazonId: "B0038NF8MG", price: "$34", tag: "Essential" },
    ],
  },
  tools: {
    title: "Tools & Styling",
    subtitle: "Professional results at home",
    emoji: "🪮",
    color: "from-[#3D3935] to-[#5A534D]",
    products: [
      { name: "Dyson Airwrap Complete", amazonId: "B0B61XH5YT", price: "$599", tag: "Investment" },
      { name: "BaBylissPRO Nano Titanium 1\" Curling Iron", amazonId: "B0047WX5B8", price: "$60", tag: "Pro" },
      { name: "BaBylissPRO Nano Titanium 1.25\" Curling Iron", amazonId: "B0047WYSRI", price: "$65", tag: "Pro" },
      { name: "SHASH Boar Bristle Brush", amazonId: "B07YXC5C26", price: "$40", tag: "German Made" },
      { name: "Olivia Garden Round Brush", amazonId: "B000N8DMJK", price: "$25", tag: "Blowout" },
      { name: "Velvet Hangers 50pk", amazonId: "B00FXNAAW2", price: "$26", tag: "Closet" },
      { name: "SUPERONE 99W Retractable Car Charger", amazonId: "B0D2C73TLR", price: "$25", tag: "Travel" },
    ],
  },
  fashion: {
    title: "Style Picks",
    subtitle: "Closet favorites",
    emoji: "👗",
    color: "from-[#C4A484] to-[#A68B6A]",
    products: [
      { name: "Milumia Striped Oversized Cardigan", amazonId: "B0G2M9ZMPP", price: "$36", tag: "Cozy" },
      { name: "ViewJoy Retro Oval Sunglasses 2-Pack", amazonId: "B0F8HWPP54", price: "$17", tag: "Y2K" },
      { name: "DLOODA Pleated Tennis Skirt with Pockets", amazonId: "B0DSSDPFY5", price: "$25", tag: "Athletic" },
      { name: "ABOCIW Athletic Tennis Dress", amazonId: "B0DDXWTR5K", price: "$40", tag: "Athletic" },
      { name: "Trendy Queen 2-Piece Lounge Set", amazonId: "B0DXBYDK56", price: "$35", tag: "Travel" },
      { name: "Ceoon Pilates Grip Socks 3-Pack", amazonId: "B0CZ384SXK", price: "$12", tag: "Pilates" },
      { name: "ANRABESS Rib Knit Slim Fit Top", amazonId: "B0DDGXNQTY", price: "$25", tag: "Basic" },
      { name: "MICIFA Mesh Ballet Flats", amazonId: "B0D46DGX6M", price: "$50", tag: "Chic" },
      { name: "Lhamo Latso Satin Bow Flats", amazonId: "B0FR3PX9C7", price: "$46", tag: "Elegant" },
      { name: "GTBINGGO Square Toe Mary Jane Flats", amazonId: "B0FNDQD8NR", price: "$40", tag: "Classic" },
      { name: "THESHY Square Toe Slide Sandals", amazonId: "B0DBTN139J", price: "$35", tag: "Summer" },
      { name: "Veja Volley Canvas Sneakers", amazonId: "B0DVVC8BSQ", price: "$115", tag: "Sustainable" },
      { name: "Veja Campo Bold Sneakers", amazonId: "B082X7X2RD", price: "$175", tag: "Sustainable" },
      { name: "Veja Campo Sneakers White/Khaki", amazonId: "B08JZ4YZHF", price: "$165", tag: "Sustainable" },
    ],
  },
  home: {
    title: "Home & Kitchen",
    subtitle: "Elevated everyday essentials",
    emoji: "🏠",
    color: "from-[#8B7355] to-[#6B5344]",
    products: [
      { name: "Fiery Chef Bamboo Cutting Board Set of 4", amazonId: "B0DK9KYBBQ", price: "$30", tag: "Kitchen" },
      { name: "KITEISCAT Glass Salad Bowl Set with Acacia Base", amazonId: "B0BZ8C6JM5", price: "$40", tag: "Hosting" },
      { name: "Mulberry Silk Pillowcases 2-Pack", amazonId: "B0D1VMFWYN", price: "$20", tag: "Beauty Sleep" },
      { name: "XXL Electric Warming Tray 32x18", amazonId: "B0D8SDKSQJ", price: "$70", tag: "Hosting" },
    ],
  },
  kids: {
    title: "Kids & Family",
    subtitle: "Mom-approved picks",
    emoji: "👶",
    color: "from-[#E8A598] to-[#D4826A]",
    products: [
      { name: "ROBUD Wooden Play Kitchen Set", amazonId: "B0D97FQQDX", price: "$150", tag: "Gift" },
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
            Curated favorites from my daily routine — products I personally use and recommend. 
            Tap to shop.
          </p>
        </div>
      </section>

      {/* Category Cards - LTK Style Grid */}
      <section className="px-4 pb-8">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-3 md:gap-4">
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
                  <p className="text-white/70 text-[10px] md:text-xs mt-1">
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
          <div className="max-w-4xl mx-auto">
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
                Close ✕
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {collections[activeCategory].products.map((product, idx) => (
                <a
                  key={idx}
                  href={`https://amazon.com/dp/${product.amazonId}?tag=${AFFILIATE_TAG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-200"
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-gradient-to-br from-[#E8DDD4] to-[#D8CEC5] rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${product.amazonId}&Format=_SL250_&ID=AsinImage&tag=${AFFILIATE_TAG}`}
                      alt={product.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Tag */}
                  <span className="inline-block text-[10px] bg-[#FAF7F2] text-[#9A9086] px-2 py-0.5 rounded-full mb-2">
                    {product.tag}
                  </span>
                  
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

      {/* Default View - Featured Products */}
      {!activeCategory && (
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-[#9A9086] mb-8">
              👆 Tap a category to explore
            </p>

            {/* Top Picks */}
            <div className="mb-12">
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6 text-center">
                ⭐ My Top Picks
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  collections.hair.products[0], // K18
                  collections.wellness.products[0], // Nutrafol
                  collections.hair.products[1], // Olaplex
                  collections.wellness.products[1], // Collagen
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
          </div>
        </section>
      )}

      {/* Affiliate Disclosure */}
      <section className="px-4 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#9A9086]">
            As an Amazon Associate, I earn from qualifying purchases. 
            These are products I personally use and recommend! 💕
          </p>
        </div>
      </section>

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

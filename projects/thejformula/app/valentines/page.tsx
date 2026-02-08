"use client";

import Link from "next/link";

const AFFILIATE_TAG = "thejformula-20";

const giftGuide = {
  forHer: [
    { name: "K18 Leave-In Molecular Repair Mask", amazonId: "B0961ZS96M", price: "$29", why: "The holy grail for damaged hair" },
    { name: "ELEMIS Frangipani Monoi Body Oil", amazonId: "B00L9XRVM2", price: "$49", why: "Luxury spa vibes at home" },
    { name: "Dyson Airwrap Complete", amazonId: "B0B61XH5YT", price: "$599", why: "The ultimate hair tool upgrade" },
    { name: "Mulberry Silk Pillowcases 2-Pack", amazonId: "B0D1VMFWYN", price: "$20", why: "Beauty sleep essentials" },
    { name: "Salt & Stone Body Cream", amazonId: "B0FJVNQDFQ", price: "$42", why: "Smells incredible, feels amazing" },
  ],
  selfCare: [
    { name: "Nutrafol Women Hair Growth", amazonId: "B00LU4CZP8", price: "$88", why: "Invest in yourself" },
    { name: "Vital Proteins Collagen", amazonId: "B00K6JUG4K", price: "$27", why: "Glow from within" },
    { name: "Medicube Collagen Mask", amazonId: "B0BRMYHMS5", price: "$19", why: "K-beauty secret" },
    { name: "iRestore Laser Hair Growth Cap", amazonId: "B07M5X4D3P", price: "$799", why: "Serious hair goals" },
  ],
  dateNight: [
    { name: "ABYOVRT Backless Maxi Dress", amazonId: "B0C5CKRWGR", price: "$40", why: "Show-stopping entrance" },
    { name: "ViewJoy Retro Oval Sunglasses", amazonId: "B0F8HWPP54", price: "$17", why: "Chic accessory" },
    { name: "Lhamo Latso Satin Bow Flats", amazonId: "B0FR3PX9C7", price: "$46", why: "Elegant & comfortable" },
    { name: "BaBylissPRO Curling Iron", amazonId: "B0047WX5B8", price: "$60", why: "Salon-worthy curls at home" },
  ],
  under30: [
    { name: "K18 Leave-In Mask", amazonId: "B0961ZS96M", price: "$29", why: "Repairs like magic" },
    { name: "Ceoon Pilates Grip Socks", amazonId: "B0CZ384SXK", price: "$12", why: "Cute & practical" },
    { name: "ViewJoy Sunglasses 2-Pack", amazonId: "B0F8HWPP54", price: "$17", why: "Y2K vibes" },
    { name: "ANRABESS Rib Knit Top", amazonId: "B0DDGXNQTY", price: "$25", why: "Wardrobe staple" },
    { name: "Amika Texture Spray", amazonId: "B07H3CZHLG", price: "$29", why: "Effortless waves" },
  ],
};

export default function ValentinesGuide() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6F6] to-[#FAF7F2]">
      {/* Hero */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#E8967A] mb-3">
            💕 Gift Guide 2026
          </p>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
            Valentine's Day Picks
          </h1>
          <p className="text-[#9A9086] max-w-xl mx-auto text-lg">
            Whether you're treating yourself or someone special, 
            these are my favorite gifts for the season of love.
          </p>
        </div>
      </section>

      {/* Gift Categories */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* For Her */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🎁</span>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
                Luxe Gifts For Her
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {giftGuide.forHer.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://amazon.com/dp/${item.amazonId}?tag=${AFFILIATE_TAG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-5 hover:shadow-xl transition-all flex gap-4"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#F5F0EB] to-[#E8E0D8] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`/api/amazon-image?asin=${item.amazonId}`}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#3D3935] group-hover:text-[#E8967A] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#9A9086] mt-1">{item.why}</p>
                    <p className="text-lg font-semibold text-[#E8967A] mt-2">{item.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Self Care */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">✨</span>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
                Self-Love Essentials
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {giftGuide.selfCare.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://amazon.com/dp/${item.amazonId}?tag=${AFFILIATE_TAG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-5 hover:shadow-xl transition-all flex gap-4"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#F5F0EB] to-[#E8E0D8] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`/api/amazon-image?asin=${item.amazonId}`}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#3D3935] group-hover:text-[#E8967A] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#9A9086] mt-1">{item.why}</p>
                    <p className="text-lg font-semibold text-[#E8967A] mt-2">{item.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Date Night */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💃</span>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
                Date Night Ready
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {giftGuide.dateNight.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://amazon.com/dp/${item.amazonId}?tag=${AFFILIATE_TAG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl p-5 hover:shadow-xl transition-all flex gap-4"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#F5F0EB] to-[#E8E0D8] rounded-xl flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`/api/amazon-image?asin=${item.amazonId}`}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-[#3D3935] group-hover:text-[#E8967A] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#9A9086] mt-1">{item.why}</p>
                    <p className="text-lg font-semibold text-[#E8967A] mt-2">{item.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Under $30 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">💰</span>
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
                Under $30
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {giftGuide.under30.map((item, idx) => (
                <a
                  key={idx}
                  href={`https://amazon.com/dp/${item.amazonId}?tag=${AFFILIATE_TAG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-xl p-4 hover:shadow-lg transition-all text-center"
                >
                  <div className="w-full aspect-square bg-gradient-to-br from-[#F5F0EB] to-[#E8E0D8] rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`/api/amazon-image?asin=${item.amazonId}`}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-[#3D3935] group-hover:text-[#E8967A] transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-lg font-semibold text-[#E8967A] mt-1">{item.price}</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-[#E8967A]/20 to-[#D4826A]/20 rounded-3xl p-8">
          <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
            Want the perfect Valentine's hair?
          </h3>
          <p className="text-[#9A9086] mb-6">
            Book your appointment and let's create something beautiful together 💕
          </p>
          <Link
            href="/book"
            className="inline-block bg-[#E8967A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#D4826A] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="px-4 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#9A9086]">
            As an Amazon Associate, I earn from qualifying purchases. 
            These are products I personally love and recommend! 💕
          </p>
        </div>
      </section>
    </div>
  );
}

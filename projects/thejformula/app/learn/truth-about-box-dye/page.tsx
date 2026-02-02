import Link from "next/link";
import Image from "next/image";

export default function BoxDyeTruth() {
  return (
    <div className="min-h-screen pt-24">
      <article className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest uppercase text-[#9A9086]">Education</span>
              <span className="text-xs text-[#D4C5B5]">•</span>
              <span className="text-xs text-[#9A9086]">10 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
              The Truth About Box Dye: What Actually Happens to Your Hair
            </h1>
            <p className="text-xl text-[#9A9086] leading-relaxed">
              No judgment here — just the facts you deserve to know before you reach for that $12 box at the drugstore.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] mb-12 overflow-hidden">
            <Image
              src="/work-dimensional-brunette.jpg"
              alt="Hair coloring products"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[#3D3935]/80">
              
              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  Let's Get One Thing Straight
                </h2>
                <p className="leading-relaxed mb-4">
                  I'm not here to shame anyone who's used box dye. Most of us have — myself included, 
                  back in the day. Life happens. Budgets are real. Sometimes you need a quick fix.
                </p>
                <p className="leading-relaxed">
                  But I do think you deserve to understand what's actually happening chemically when 
                  you use box dye versus salon color. Knowledge is power, and this knowledge might 
                  save you from a very expensive color correction down the road.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  The One-Size-Fits-All Problem
                </h2>
                <p className="leading-relaxed mb-4">
                  Here's the fundamental issue: box dye is formulated to work on "everyone." But hair 
                  isn't one-size-fits-all. Your hair has a specific:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>Natural level (how dark or light)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>Underlying pigment (what warm tones live beneath)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>Porosity (how it absorbs and holds color)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>Texture and density</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>History (previous color, heat damage, chemical treatments)</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  A professional colorist assesses ALL of this before choosing a formula. Box dye? 
                  It's the same formula whether you're a natural level 3 or level 8, virgin hair or 
                  previously colored, fine or coarse.
                </p>
              </div>

              <div className="bg-[#E8DDD4] p-6 rounded-sm">
                <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
                  The Developer Difference
                </h3>
                <p className="text-[#3D3935]/70 text-sm mb-3">
                  Box dyes typically contain 20 or 30 volume developer — enough to lift AND deposit 
                  color. Professional colorists choose developer strength based on what your specific 
                  hair needs:
                </p>
                <ul className="text-[#3D3935]/70 text-sm space-y-1">
                  <li>• 5-10 volume for deposit only (toners, glosses)</li>
                  <li>• 20 volume for 1-2 levels of lift</li>
                  <li>• 30 volume for 2-3 levels of lift</li>
                  <li>• 40 volume for maximum lift (rarely on the scalp)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  What's Actually In That Box
                </h2>
                <p className="leading-relaxed mb-4">
                  Box dyes often contain metallic salts and other additives that professional color 
                  doesn't. Why does this matter?
                </p>
                <p className="leading-relaxed mb-4">
                  <strong>Metallic salts build up over time.</strong> They coat the hair shaft and 
                  can react unpredictably with professional color or lightener later. This is why 
                  stylists always ask about your color history — and why honesty matters. That buildup 
                  can cause:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>Uneven color results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>Unexpected color turns (green, anyone?)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>Breakage when lightening</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">•</span>
                    <span>A much longer (and more expensive) color correction process</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  The "Black Box" Trap
                </h2>
                <p className="leading-relaxed mb-4">
                  Dark box dyes are especially problematic. That rich, opaque black or dark brown 
                  looks great at first, but:
                </p>
                <p className="leading-relaxed mb-4">
                  Those color molecules are LARGE and they penetrate DEEP. Getting them out requires 
                  aggressive lightening that damages hair. I've seen clients need 3-4 sessions over 
                  several months to safely remove box black.
                </p>
                <p className="leading-relaxed">
                  If you ever want to go lighter, that $12 box could cost you $500+ in corrections — 
                  plus the health of your hair.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  When Box Dye Might Be Okay
                </h2>
                <p className="leading-relaxed mb-4">
                  I'll be real: there are situations where box dye is lower risk:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span>Going darker (not lighter) on virgin hair</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span>Temporary or semi-permanent formulas (no developer)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span>Root touch-ups between salon visits (same color family)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span>You have zero plans to change your color later</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3D3935] text-[#FAF7F2] p-8 -mx-4 md:mx-0">
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] mb-3">
                  The Bottom Line
                </h3>
                <p className="text-[#B5A191]">
                  Box dye isn't evil — it's just limited. It can't see your hair, assess your needs, 
                  or adjust its formula. When things go wrong, they can go very wrong. If you're 
                  committed to box dye, stick to semi-permanent, go darker not lighter, and tell 
                  your stylist the truth when you eventually sit in their chair.
                </p>
              </div>

            </div>
          </div>

          {/* Author */}
          <div className="mt-12 pt-8 border-t border-[#D4C5B5]/30 flex items-center gap-4">
            <Image
              src="/janine.jpg"
              alt="Janine"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-[#3D3935]">Janine</p>
              <p className="text-sm text-[#9A9086]">Hair Color Specialist • 15 years experience</p>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-8">
            <Link href="/learn" className="elegant-link text-sm tracking-widest uppercase text-[#3D3935]">
              ← Back to Learn
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

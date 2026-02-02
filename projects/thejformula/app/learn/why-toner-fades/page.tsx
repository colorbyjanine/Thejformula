import Link from "next/link";
import Image from "next/image";

export default function WhyTonerFades() {
  return (
    <div className="min-h-screen pt-24">
      <article className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest uppercase text-[#9A9086]">Color Science</span>
              <span className="text-xs text-[#D4C5B5]">•</span>
              <span className="text-xs text-[#9A9086]">8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
              Why Your Toner Fades So Fast (And What You Can Do About It)
            </h1>
            <p className="text-xl text-[#9A9086] leading-relaxed">
              You leave the salon with perfect, dreamy tone — and two weeks later, it's gone. 
              Here's the science behind toner longevity and how to make yours last.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] mb-12 overflow-hidden">
            <Image
              src="/article-toner.jpg"
              alt="Beautiful toned hair"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[#3D3935]/80">
              
              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  First, Let's Talk About What Toner Actually Is
                </h2>
                <p className="leading-relaxed mb-4">
                  Toner isn't magic — it's chemistry. When your stylist applies toner, they're depositing 
                  semi-permanent or demi-permanent color pigments into your hair's cuticle layer. These 
                  pigments sit in the outer portion of the hair shaft, which is exactly why they wash out 
                  faster than permanent color that penetrates deeper.
                </p>
                <p className="leading-relaxed">
                  Think of it like this: permanent color moves into your hair's "house" and unpacks. 
                  Toner just visits — it sits on the porch. And porches are exposed to the elements.
                </p>
              </div>

              <div className="bg-[#E8DDD4] p-6 rounded-sm">
                <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
                  The Science Bit
                </h3>
                <p className="text-[#3D3935]/70 text-sm">
                  Toners typically use lower volumes of developer (usually 5-10 volume) which means 
                  the cuticle opens just slightly to accept pigment. This gentler process = less 
                  damage but also less permanence.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  The Top 5 Reasons Your Toner Fades Fast
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      1. Hot Water Is Your Toner's Enemy
                    </h3>
                    <p className="leading-relaxed">
                      Hot water opens the hair cuticle. Open cuticle = pigment escapes. Every steamy 
                      shower is literally washing your toner down the drain. I know cold showers aren't 
                      fun, but lukewarm water on your hair makes a massive difference.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      2. Your Shampoo Is Too Harsh
                    </h3>
                    <p className="leading-relaxed">
                      Sulfates are powerful cleansers — too powerful for color-treated hair. They strip 
                      oil AND pigment. Switch to a sulfate-free, color-safe shampoo. Yes, it matters. 
                      Yes, it's worth the investment.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      3. You're Washing Too Often
                    </h3>
                    <p className="leading-relaxed">
                      Every wash fades your toner. If you're washing daily, you're speeding up the fade 
                      dramatically. Train your hair to go 2-3 days between washes. Dry shampoo is your 
                      friend. Your toner (and your hair health) will thank you.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      4. Sun Exposure
                    </h3>
                    <p className="leading-relaxed">
                      UV rays break down color molecules. If you're spending time in the sun without 
                      protection, your toner is fading faster. Wear a hat, use UV-protective products, 
                      or accept the fade.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      5. Your Hair's Porosity
                    </h3>
                    <p className="leading-relaxed">
                      Here's the truth: some hair just doesn't hold toner as well. Highly porous hair 
                      (often from previous damage, bleaching, or natural texture) absorbs toner quickly 
                      but also releases it quickly. It's not your stylist's fault — it's physics.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  How to Make Your Toner Last Longer
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Wait 48 hours</strong> after your appointment before washing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Use lukewarm or cool water</strong> — never hot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Sulfate-free shampoo only</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Wash less frequently</strong> — 2-3x per week max</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Use a color-depositing mask</strong> between appointments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Protect from sun</strong> with hats or UV sprays</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3D3935] text-[#FAF7F2] p-8 -mx-4 md:mx-0">
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] mb-3">
                  The Bottom Line
                </h3>
                <p className="text-[#B5A191]">
                  Toner fading isn't a flaw — it's the nature of the product. But with the right 
                  habits, you can stretch that fresh-from-the-salon tone from 2 weeks to 4-6 weeks. 
                  It's all about protecting what your stylist created.
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

import Link from "next/link";
import Image from "next/image";

export default function VitaminsForHair() {
  return (
    <div className="min-h-screen pt-24">
      <article className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest uppercase text-[#9A9086]">Hair Health</span>
              <span className="text-xs text-[#D4C5B5]">•</span>
              <span className="text-xs text-[#9A9086]">9 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
              Top 10 Vitamins & Supplements for Hair Growth
            </h1>
            <p className="text-xl text-[#9A9086] leading-relaxed">
              What actually works, what's overhyped, and what I personally take for healthy hair.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] mb-12 overflow-hidden">
            <Image
              src="/article-vitamins.jpg"
              alt="Vitamins and supplements for healthy hair"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[#3D3935]/80">
              
              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  The Truth About Hair Supplements
                </h2>
                <p className="leading-relaxed mb-4">
                  Let's be real: no supplement will give you Rapunzel hair overnight. Hair grows 
                  about half an inch per month, and that's determined largely by genetics. BUT — 
                  the right nutrients can ensure your hair grows at its optimal rate, stays strong, 
                  and doesn't break before it reaches the length you want.
                </p>
                <p className="leading-relaxed">
                  Think of supplements as supporting your hair's potential, not creating miracles. 
                  If you're deficient in key nutrients, supplementing can make a visible difference. 
                  If you're already well-nourished, you might not see dramatic changes.
                </p>
              </div>

              <div className="bg-[#E8DDD4] p-6 rounded-sm">
                <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
                  Before You Start
                </h3>
                <p className="text-[#3D3935]/70 text-sm">
                  Always check with your doctor before starting supplements, especially if you're 
                  on medications or have health conditions. More isn't always better — some vitamins 
                  can be harmful in excess.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  The Top 10
                </h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      1. Biotin (Vitamin B7)
                    </h3>
                    <p className="leading-relaxed mb-2">
                      The most famous hair supplement — and it does have merit. Biotin supports keratin 
                      production, which is the protein your hair is made of. Deficiency causes brittle 
                      hair and hair loss.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> 2,500-5,000 mcg daily | <strong>Note:</strong> Can affect lab tests — tell your doctor
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      2. Vitamin D
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Vitamin D plays a role in creating new hair follicles. Low levels are linked to 
                      alopecia and thinning. Most people are deficient, especially if you live somewhere 
                      without much sun.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> 1,000-4,000 IU daily | <strong>Best absorbed:</strong> With fatty food
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      3. Iron
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Iron deficiency is one of the most common causes of hair loss in women. Iron 
                      helps red blood cells carry oxygen to your hair follicles. Without enough, 
                      follicles can go dormant.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> Get tested first — only supplement if deficient | <strong>Take with:</strong> Vitamin C for absorption
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      4. Zinc
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Zinc supports hair tissue growth and repair. It also keeps the oil glands around 
                      follicles working properly. Deficiency can cause hair loss that reverses once 
                      levels are restored.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> 8-11 mg daily | <strong>Warning:</strong> Too much zinc can cause copper deficiency
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      5. Omega-3 Fatty Acids
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Omega-3s nourish hair follicles, add luster, and support scalp health. They're 
                      anti-inflammatory, which matters because inflammation can disrupt hair growth.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> 1,000-2,000 mg daily | <strong>Sources:</strong> Fish oil, algae oil for vegans
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      6. Vitamin E
                    </h3>
                    <p className="leading-relaxed mb-2">
                      An antioxidant that supports scalp circulation and reduces oxidative stress on 
                      follicles. Studies show it can improve hair growth in people with hair loss.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> 15 mg daily | <strong>Also great:</strong> Applied topically to scalp
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      7. Collagen
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Collagen provides amino acids used to build hair protein. It also supports the 
                      dermis where follicles are rooted. As we age, collagen production drops — 
                      supplementing may help.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> 5-15 grams daily | <strong>Tip:</strong> Marine collagen is most bioavailable
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      8. Vitamin A
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Vitamin A helps skin glands produce sebum, which moisturizes the scalp and keeps 
                      hair healthy. But be careful — too much vitamin A can actually cause hair loss.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> 700-900 mcg daily | <strong>Warning:</strong> Don't exceed upper limit
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      9. B-Complex Vitamins
                    </h3>
                    <p className="leading-relaxed mb-2">
                      Beyond biotin, other B vitamins (B12, folate, B6) support red blood cell 
                      production and oxygen delivery to the scalp. A full B-complex covers your bases.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> Follow label on B-complex | <strong>Especially important:</strong> For vegetarians/vegans
                    </p>
                  </div>

                  <div className="border-l-4 border-[#D4C5B5] pl-6">
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      10. Saw Palmetto
                    </h3>
                    <p className="leading-relaxed mb-2">
                      This one's more targeted: saw palmetto may block DHT, the hormone linked to 
                      pattern hair loss. Studies are mixed but promising, especially for genetic 
                      thinning.
                    </p>
                    <p className="text-sm text-[#9A9086]">
                      <strong>Dose:</strong> 160-320 mg daily | <strong>Best for:</strong> Androgenetic alopecia
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#3D3935] text-[#FAF7F2] p-8 -mx-4 md:mx-0">
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] mb-3">
                  What I Take
                </h3>
                <p className="text-[#B5A191] mb-4">
                  Personally, I take a B-complex (includes biotin), vitamin D, omega-3s, and collagen 
                  peptides in my coffee. I've noticed stronger nails and healthier hair since being 
                  consistent. But remember — consistency is key. You won't see results for 3-6 months.
                </p>
                <p className="text-[#B5A191] text-sm">
                  Check out my Shop page for links to the specific products I use and recommend.
                </p>
              </div>

            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-12 p-6 bg-[#E8DDD4]/50 border border-[#D4C5B5]/30 text-sm text-[#9A9086]">
            <p className="font-medium text-[#3D3935] mb-2">Disclaimer</p>
            <p className="leading-relaxed">
              The information provided on this website is for general informational and educational purposes only 
              and is not intended as, nor should it be considered, medical advice. I am not a doctor, nurse, 
              licensed nutritionist, or healthcare professional. Always consult with a qualified healthcare 
              provider before starting any new supplement, treatment, or health regimen. Individual results may 
              vary. Never disregard professional medical advice or delay seeking it because of something you 
              have read on this website. Use of any information provided is solely at your own risk.
            </p>
          </div>

          {/* Author */}
          <div className="mt-8 pt-8 border-t border-[#D4C5B5]/30 flex items-center gap-4">
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

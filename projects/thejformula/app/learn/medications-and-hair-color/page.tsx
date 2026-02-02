import Link from "next/link";
import Image from "next/image";

export default function MedicationsHairColor() {
  return (
    <div className="min-h-screen pt-24">
      <article className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest uppercase text-[#9A9086]">Education</span>
              <span className="text-xs text-[#D4C5B5]">•</span>
              <span className="text-xs text-[#9A9086]">7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
              How Medications Can Mess With Your Hair Color
            </h1>
            <p className="text-xl text-[#9A9086] leading-relaxed">
              That new prescription might be affecting more than you realize — including how your hair holds color.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] mb-12 overflow-hidden">
            <Image
              src="/article-meds.jpg"
              alt="Wellness and medications"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[#3D3935]/80">
              
              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  The Connection Most People Don't Know About
                </h2>
                <p className="leading-relaxed mb-4">
                  Here's something they don't tell you at the pharmacy: what you put IN your body 
                  affects what happens ON your body — including your hair. Medications can alter 
                  hair texture, growth patterns, and yes, how color processes and holds.
                </p>
                <p className="leading-relaxed">
                  This is why I always ask clients about medications during consultations. It's not 
                  being nosy — it's being thorough. A medication change can explain why your color 
                  suddenly isn't behaving the way it used to.
                </p>
              </div>

              <div className="bg-[#E8DDD4] p-6 rounded-sm">
                <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
                  Important Note
                </h3>
                <p className="text-[#3D3935]/70 text-sm">
                  I'm a hair colorist, not a doctor. Never stop or change medications because of 
                  hair concerns without talking to your healthcare provider. This information is 
                  to help you understand potential connections — not medical advice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  Medications That Can Affect Hair Color
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      Thyroid Medications
                    </h3>
                    <p className="leading-relaxed">
                      Both hypothyroidism and hyperthyroidism affect hair texture and porosity. When 
                      thyroid levels are off, hair often becomes more porous, dry, and brittle — which 
                      means color absorbs unevenly and fades faster. Once thyroid levels stabilize, 
                      hair health typically improves.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      Hormone Treatments & Birth Control
                    </h3>
                    <p className="leading-relaxed">
                      Hormonal changes affect everything about hair — growth rate, texture, oiliness, 
                      and how it holds color. Starting or stopping birth control, HRT, or other hormone 
                      treatments can shift your hair's behavior. You might notice color processing 
                      differently or fading faster during these transitions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      Blood Pressure Medications
                    </h3>
                    <p className="leading-relaxed">
                      Some blood pressure medications can affect hair texture and occasionally trigger 
                      changes in natural pigmentation. Beta-blockers, in particular, have been linked 
                      to hair texture changes in some people.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      Antidepressants & Anti-Anxiety Medications
                    </h3>
                    <p className="leading-relaxed">
                      SSRIs and other psychiatric medications can affect hair in various ways. Some 
                      people experience texture changes, increased dryness, or shifts in how their 
                      scalp produces oil — all of which can impact color results.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      Chemotherapy
                    </h3>
                    <p className="leading-relaxed">
                      This is a big one. Chemo attacks rapidly dividing cells — including hair follicles. 
                      Hair that regrows after chemo is often completely different: different texture, 
                      different curl pattern, sometimes even different natural color. If you're coloring 
                      post-chemo hair, it's a whole new ballgame. Go slow and gentle.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      Accutane (Isotretinoin)
                    </h3>
                    <p className="leading-relaxed">
                      This acne medication dramatically reduces oil production — everywhere, including 
                      your scalp. Dry hair is more porous, which means color can grab unevenly or fade 
                      faster. Most dermatologists recommend avoiding chemical services during Accutane 
                      treatment.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  What You Can Do
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Tell your stylist</strong> about medication changes — we can adjust our approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Do a strand test</strong> if you're unsure how your hair will react</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Be patient</strong> during transitions — your hair may need time to stabilize</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Increase conditioning</strong> if medications are drying out your hair</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Consider gentler services</strong> like glosses over permanent color during unstable periods</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3D3935] text-[#FAF7F2] p-8 -mx-4 md:mx-0">
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] mb-3">
                  The Bottom Line
                </h3>
                <p className="text-[#B5A191]">
                  Your body is a system, and everything is connected. Medications that help one 
                  thing might affect another — including your hair. The more information your 
                  stylist has, the better results we can achieve. Don't be embarrassed to share; 
                  we've heard it all, and we just want to help your hair look its best.
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
              or healthcare professional. Always consult with a qualified healthcare provider regarding any 
              medications and their effects. Never disregard professional medical advice or delay seeking it 
              because of something you have read on this website. Use of any information provided is solely 
              at your own risk.
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

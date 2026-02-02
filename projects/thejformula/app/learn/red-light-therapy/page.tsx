import Link from "next/link";
import Image from "next/image";

export default function RedLightTherapy() {
  return (
    <div className="min-h-screen pt-24">
      <article className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs tracking-widest uppercase text-[#9A9086]">Hair Health</span>
              <span className="text-xs text-[#D4C5B5]">•</span>
              <span className="text-xs text-[#9A9086]">8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
              Red Light Therapy for Hair Growth: What the Studies Actually Say
            </h1>
            <p className="text-xl text-[#9A9086] leading-relaxed">
              Is this the future of hair restoration or just another wellness trend? Let's look at the science.
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-[#3D3935]/80">
              
              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  What Is Red Light Therapy?
                </h2>
                <p className="leading-relaxed mb-4">
                  Red light therapy (RLT), also called low-level laser therapy (LLLT) or 
                  photobiomodulation, uses specific wavelengths of red and near-infrared light 
                  (typically 630-670nm and 810-850nm) to stimulate cellular activity.
                </p>
                <p className="leading-relaxed">
                  The theory: these wavelengths penetrate the skin and are absorbed by mitochondria 
                  (the "powerhouses" of cells), which boosts ATP production (cellular energy) and 
                  stimulates various beneficial processes — including, potentially, hair growth.
                </p>
              </div>

              <div className="bg-[#E8DDD4] p-6 rounded-sm">
                <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
                  How It's Supposed to Work for Hair
                </h3>
                <ul className="text-[#3D3935]/70 text-sm space-y-2">
                  <li>• Increases blood flow to hair follicles</li>
                  <li>• Stimulates follicles in the resting (telogen) phase to enter growth (anagen) phase</li>
                  <li>• Extends the growth phase duration</li>
                  <li>• Reduces inflammation around follicles</li>
                  <li>• May increase hair shaft thickness</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  What the Research Shows
                </h2>
                <p className="leading-relaxed mb-4">
                  Unlike many wellness trends, red light therapy for hair actually has legitimate 
                  scientific research behind it. Here's what the studies say:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      The Promising Evidence
                    </h3>
                    <p className="leading-relaxed mb-4">
                      A 2014 meta-analysis published in <em>Lasers in Surgery and Medicine</em> reviewed 
                      11 studies and found that LLLT significantly improved hair count in both men and 
                      women with androgenetic alopecia (pattern hair loss) compared to placebo devices.
                    </p>
                    <p className="leading-relaxed mb-4">
                      A 2017 study in the <em>Journal of Cosmetic and Laser Therapy</em> showed a 39% 
                      increase in hair growth after 16 weeks of red light treatment.
                    </p>
                    <p className="leading-relaxed">
                      Multiple FDA-cleared devices exist specifically for hair growth, meaning they've 
                      met the threshold for demonstrated safety and efficacy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      The Caveats
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-[#D4C5B5] mt-1">•</span>
                        <span>Most studies are small (under 100 participants)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#D4C5B5] mt-1">•</span>
                        <span>Study duration is typically short (16-26 weeks)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#D4C5B5] mt-1">•</span>
                        <span>Results vary significantly between individuals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#D4C5B5] mt-1">•</span>
                        <span>Won't regrow hair where follicles are completely dead</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#D4C5B5] mt-1">•</span>
                        <span>Requires consistent, long-term use</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  Who It Works Best For
                </h2>
                <p className="leading-relaxed mb-4">
                  Red light therapy seems most effective for:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span>Early-stage hair thinning (when follicles are weakened but not dead)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span>Androgenetic alopecia (male and female pattern loss)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span>Those looking to thicken existing hair, not regrow bald spots</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span>People who can commit to consistent use (3-5x per week)</span>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  It's probably NOT going to work for complete baldness, scarring alopecia, or hair 
                  loss from medication/illness that's still ongoing.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  Types of Devices
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      Laser Caps/Helmets
                    </h3>
                    <p className="leading-relaxed">
                      Wearable devices you put on your head for 10-30 minutes several times per week. 
                      Hands-free and convenient. FDA-cleared options range from $200-$3,000+.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      Handheld Devices
                    </h3>
                    <p className="leading-relaxed">
                      Comb or brush-style devices you move across your scalp. More affordable but 
                      require more active effort and time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                      In-Office Treatments
                    </h3>
                    <p className="leading-relaxed">
                      Stronger devices used by dermatologists or hair restoration clinics. More 
                      powerful but expensive and requires appointments.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                  What to Look For
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>FDA clearance</strong> — ensures basic safety and efficacy standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Wavelength 630-670nm</strong> for red light (the proven range)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Adequate power</strong> — cheap devices often lack sufficient energy output</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#D4C5B5] mt-1">✓</span>
                    <span><strong>Good coverage</strong> — enough diodes to treat your affected area</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#3D3935] text-[#FAF7F2] p-8 -mx-4 md:mx-0">
                <h3 className="text-xl font-[family-name:var(--font-cormorant)] mb-3">
                  My Take
                </h3>
                <p className="text-[#B5A191] mb-4">
                  Red light therapy isn't snake oil — there's real science here. But it's also not 
                  a miracle cure. Think of it as one tool in your hair health toolkit, best combined 
                  with good nutrition, proper hair care, and addressing any underlying health issues.
                </p>
                <p className="text-[#B5A191]">
                  If you're experiencing thinning and want to try everything, it's worth considering. 
                  Give it at least 4-6 months of consistent use before judging results. And always 
                  see a dermatologist to rule out treatable causes of hair loss first.
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

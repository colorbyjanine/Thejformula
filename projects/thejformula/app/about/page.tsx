import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <div className="max-w-sm mx-auto space-y-6">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4C5B5]" />
                  <Image
                    src="/janine.jpg"
                    alt="Janine"
                    width={400}
                    height={500}
                    className="relative w-full h-auto object-cover"
                  />
                </div>
                <Image
                  src="/janine-working.jpg"
                  alt="Janine working behind the chair"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
                About Me
              </p>
              <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
                Hi, I'm Janine
              </h1>
              <div className="space-y-6 text-[#3D3935]/80 leading-relaxed">
                <p>
                  For 15 years, I've been obsessed with one thing: helping people feel 
                  absolutely incredible in their hair. What started as a passion has become 
                  my life's work — understanding color at a molecular level, perfecting 
                  formulas that actually work, and sharing that knowledge with everyone 
                  who wants to learn.
                </p>
                <p>
                  I'm also a wife, a mom of three, and currently pursuing law school 
                  (because apparently I don't believe in free time). But no matter how 
                  busy life gets, the chair is where I come alive.
                </p>
                <p>
                  <strong>The J Formula</strong> is the culmination of everything I've learned. 
                  It's for the client who wants to understand why their color does what it does. 
                  It's for the stylist who's tired of guessing and ready for precision. 
                  It's the formula — literally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-[#E8DDD4] texture-overlay">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4 text-center">
              My Philosophy
            </p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-12 text-center">
              What I Believe
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-4xl font-[family-name:var(--font-cormorant)] text-[#D4C5B5]">01</span>
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                    Education Over Everything
                  </h3>
                  <p className="text-[#3D3935]/70">
                    When you understand your hair, you can care for it. I don't just do your color — 
                    I teach you why and how.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-4xl font-[family-name:var(--font-cormorant)] text-[#D4C5B5]">02</span>
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                    Formulas Are Science
                  </h3>
                  <p className="text-[#3D3935]/70">
                    Beautiful color isn't an accident. It's chemistry, timing, and precision. 
                    I've spent years perfecting these formulas so you don't have to guess.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-4xl font-[family-name:var(--font-cormorant)] text-[#D4C5B5]">03</span>
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                    Community Elevates
                  </h3>
                  <p className="text-[#3D3935]/70">
                    The best stylists share what they know. I'm not here to gatekeep — 
                    I'm here to help every stylist level up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#3D3935] text-[#FAF7F2] text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] mb-6">
            Let's Work Together
          </h2>
          <p className="text-[#B5A191] max-w-xl mx-auto mb-8">
            Whether you want to book an appointment or explore my formulas, 
            I'd love to connect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-primary bg-[#FAF7F2] text-[#3D3935] hover:bg-[#D4C5B5]">
              Book Appointment
            </Link>
            <Link href="/formulas" className="btn-secondary border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#3D3935]">
              View Formulas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

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
                  For 15 years, I've stood behind the chair transforming the way women see 
                  themselves. Color and extensions — that's where my heart lives. There's an 
                  artistry in formulating the perfect shade, in understanding tone and depth 
                  and dimension the way a painter understands light. I'm obsessed with color 
                  theory, with the chemistry of it, with that moment a client sees her reflection 
                  and finally looks like the version of herself she's been carrying in her head.
                </p>
                <p>
                  But I was never meant to stay in one lane. I'm drawn to anything that lets me 
                  create — clothing, jewelry, interior design. Beauty, to me, is a lifestyle. 
                  It's intentional. It's curated. And while building all of that, I quietly 
                  worked toward something nobody saw coming: law school. No announcements, 
                  no countdowns — just head down, hands busy, let the results do the talking.
                </p>
                <p>
                  I live by a simple philosophy: <strong>execution over excuses.</strong> Comfort 
                  zones don't grow empires. I've opened three businesses, mastered my craft, and 
                  earned my way into law school while raising three children — because I don't 
                  believe success is a finish line. There's always a next level.
                </p>
                <p>
                  Everything I pour myself into is a brick in something bigger. I'm building a 
                  legacy for my children — not just financial, but a standard. I want them to 
                  grow up watching their mother create, evolve, and refuse to stop reaching.
                </p>
                <p className="italic text-[#9A9086]">
                  Stay disciplined. Stay hungry. Build in silence and let the results speak.
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
                    Execution Over Excuses
                  </h3>
                  <p className="text-[#3D3935]/70">
                    Talking about your dreams doesn't build them. You have to show up on 
                    the days when motivation disappears and let discipline carry you through.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-4xl font-[family-name:var(--font-cormorant)] text-[#D4C5B5]">02</span>
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                    Mastery Is the Standard
                  </h3>
                  <p className="text-[#3D3935]/70">
                    Beautiful color isn't an accident — it's chemistry, timing, and 15 years 
                    of obsession. I've spent a decade perfecting formulas so you don't have to guess.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <span className="text-4xl font-[family-name:var(--font-cormorant)] text-[#D4C5B5]">03</span>
                <div>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                    Build Your Own Table
                  </h3>
                  <p className="text-[#3D3935]/70">
                    You don't wait for opportunities — you make them. You don't beg for a seat 
                    at someone's table. You build your own.
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

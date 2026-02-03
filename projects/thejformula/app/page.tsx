import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative texture-overlay bg-[#FAF7F2] pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-fade-in">
              <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
                Hair Color Expert • Est. 2011
              </p>
              <h1 className="text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] text-[#3D3935] leading-tight mb-6">
                The Art of
                <br />
                <span className="italic">Beautiful</span> Color
              </h1>
              <p className="text-lg text-[#9A9086] max-w-md mb-8 leading-relaxed">
                15 years of expertise distilled into every formula. 
                Education for those who want to learn. 
                Formulas for those who create.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/book" className="btn-primary">
                  Book With Me
                </Link>
                <Link href="/shop" className="btn-primary bg-[#3D3935] text-[#FAF7F2] hover:bg-[#2D2925]">
                  Shop My Picks
                </Link>
                <Link href="/formulas" className="btn-secondary">
                  Explore Formulas
                </Link>
              </div>
              <div className="mt-6">
                <a 
                  href="https://instagram.com/colorbyjanine" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#9A9086] hover:text-[#3D3935] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @colorbyjanine
                </a>
              </div>
            </div>

            {/* Image - Slightly Smaller */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-full max-w-sm mx-auto">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-full h-full border border-[#D4C5B5] rounded-[180px_180px_0_0]" />
                <div className="relative overflow-hidden rounded-[180px_180px_0_0]">
                  <Image
                    src="/janine.jpg"
                    alt="Janine - Hair Color Expert"
                    width={400}
                    height={520}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#D4C5B5] rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#D4C5B5] rounded-full" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section bg-[#E8DDD4] texture-overlay">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
              Nice to Meet You
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
              I'm Janine
            </h2>
            <p className="text-lg text-[#3D3935]/80 leading-relaxed mb-8">
              A hair color specialist with 15 years behind the chair, a passion for education, 
              and a belief that every person deserves to feel confident in their color. 
              I created The J Formula to share everything I've learned — 
              with clients who want to understand their hair, and stylists who want to perfect their craft.
            </p>
            <Link href="/about" className="btn-secondary">
              My Story
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
              What I Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
              For Everyone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Clients */}
            <div className="group bg-white p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#E8DDD4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4C5B5] transition-colors">
                <svg className="w-8 h-8 text-[#3D3935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                Learn
              </h3>
              <p className="text-[#9A9086] mb-6">
                Hair education for everyone. Understand your hair type, learn maintenance tips, 
                and discover what's really going on with your color.
              </p>
              <Link href="/learn" className="elegant-link text-sm tracking-widest uppercase text-[#3D3935]">
                Start Learning →
              </Link>
            </div>

            {/* Card 2 - Professionals */}
            <div className="group bg-white p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#E8DDD4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4C5B5] transition-colors">
                <svg className="w-8 h-8 text-[#3D3935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                Pro Formulas
              </h3>
              <p className="text-[#9A9086] mb-6">
                For licensed stylists. My custom toner formulas, mixing ratios, and the exact 
                combinations I use to achieve specific results.
              </p>
              <Link href="/formulas" className="elegant-link text-sm tracking-widest uppercase text-[#3D3935]">
                View Formulas →
              </Link>
            </div>

            {/* Card 3 - Booking */}
            <div className="group bg-white p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-[#E8DDD4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#D4C5B5] transition-colors">
                <svg className="w-8 h-8 text-[#3D3935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
                Book
              </h3>
              <p className="text-[#9A9086] mb-6">
                Ready to sit in my chair? Book your appointment and let's create 
                something beautiful together.
              </p>
              <Link href="/book" className="elegant-link text-sm tracking-widest uppercase text-[#3D3935]">
                Book Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section bg-[#3D3935] text-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[#B5A191] mb-4">
              My Work
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)]">
              Recent Transformations
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/work-blonde-balayage.jpg",
              "/work-brunette-balayage.jpg",
              "/work-ash-blonde.jpg",
              "/work-face-framing.jpg",
            ].map((src, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden group cursor-pointer">
                <Image
                  src={src}
                  alt="Hair transformation"
                  width={300}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-secondary border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#3D3935]">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Shop My Favorites */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#E8DDD4] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-2">
                  Curated by Janine
                </p>
                <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
                  Shop My Favorites
                </h2>
                <p className="text-[#9A9086] max-w-md">
                  The products I actually use and love — from hair essentials to lifestyle picks. 
                  No random sponsorships, just real recommendations.
                </p>
              </div>
              <Link 
                href="/shop" 
                className="btn-primary whitespace-nowrap flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest from the Blog Preview */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
              Fresh Knowledge
            </p>
            <h2 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
              Latest from the Blog
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: "why-toner-fades", title: "Why Your Toner Fades Fast", desc: "The science behind toner longevity and what you can do about it." },
              { slug: "truth-about-box-dye", title: "The Truth About Box Dye", desc: "What actually happens when you use drugstore color — no judgment, just facts." },
              { slug: "vitamins-for-hair-growth", title: "Top 10 Vitamins for Hair Growth", desc: "What actually works, what's overhyped, and what I personally take." },
            ].map((post, i) => (
              <Link key={i} href={`/learn/${post.slug}`} className="group cursor-pointer">
                <article>
                  <div className="aspect-[4/3] bg-[#E8DDD4] mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#D4C5B5]/50 to-[#E8DDD4] group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2 group-hover:text-[#9A9086] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#9A9086] text-sm">
                    {post.desc}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/learn" className="btn-secondary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
              Follow Along
            </p>
            <h2 className="text-4xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              @colorbyjanine
            </h2>
            <p className="text-[#9A9086] max-w-xl mx-auto">
              Daily hair inspiration, behind-the-scenes, tips, and transformations. 
              Join 10k+ hair lovers on Instagram.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
            {[
              "/work-blonde-balayage.jpg",
              "/work-face-framing.jpg",
              "/work-brunette-balayage.jpg",
              "/work-ash-blonde.jpg",
              "/work-bronde-smile.jpg",
              "/work-lived-in-blonde.jpg",
            ].map((src, i) => (
              <a 
                key={i}
                href="https://instagram.com/colorbyjanine"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden group"
              >
                <Image
                  src={src}
                  alt="Instagram"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <a 
              href="https://instagram.com/colorbyjanine"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @colorbyjanine
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[#3D3935] text-[#FAF7F2] texture-overlay">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] mb-6">
            Ready for Your
            <br />
            <span className="italic text-[#D4C5B5]">Transformation?</span>
          </h2>
          <p className="text-lg text-[#B5A191] max-w-xl mx-auto mb-8">
            Whether you're looking to book an appointment or just want to learn more 
            about caring for your hair, I'm here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="btn-primary bg-[#FAF7F2] text-[#3D3935] hover:bg-[#D4C5B5]">
              Book Appointment
            </Link>
            <Link href="/chat" className="btn-secondary border-[#FAF7F2] text-[#FAF7F2] hover:bg-[#FAF7F2] hover:text-[#3D3935]">
              Chat with Jane
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

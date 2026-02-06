import Image from "next/image";
import Link from "next/link";

const portfolioImages = [
  { src: "/portfolio-13.jpg", alt: "Long brunette balayage with caramel highlights", category: "Brunette" },
  { src: "/portfolio-14.jpg", alt: "Medium length brunette with soft dimension", category: "Brunette" },
  { src: "/work-blonde-balayage.jpg", alt: "Dimensional blonde balayage", category: "Blonde" },
  { src: "/work-brunette-balayage.jpg", alt: "Brunette balayage with caramel highlights", category: "Brunette" },
  { src: "/work-ash-blonde.jpg", alt: "Ash blonde with dimension", category: "Blonde" },
  { src: "/work-dimensional-brunette.jpg", alt: "Dimensional brunette", category: "Brunette" },
  { src: "/work-face-framing.jpg", alt: "Face framing highlights", category: "Highlights" },
  { src: "/work-bronde-smile.jpg", alt: "Bronde balayage", category: "Bronde" },
  { src: "/work-lived-in-blonde.jpg", alt: "Lived-in blonde balayage", category: "Blonde" },
  { src: "/work-ponytail.jpg", alt: "Styled ponytail", category: "Styling" },
  { src: "/work-dark-balayage.jpg", alt: "Dark balayage", category: "Brunette" },
  { src: "/work-bright-blonde.jpg", alt: "Bright blonde", category: "Blonde" },
];

const categories = ["All", "Blonde", "Brunette", "Bronde", "Highlights", "Styling"];

export default function Portfolio() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2] texture-overlay pb-12">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            My Work
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto">
            Every head of hair tells a story. Here are some of my favorites — 
            from sun-kissed blondes to rich dimensional brunettes.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#FAF7F2] border-y border-[#D4C5B5]/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-sm tracking-widest uppercase px-4 py-2 transition-colors
                  ${category === "All" 
                    ? "bg-[#3D3935] text-[#FAF7F2]" 
                    : "text-[#9A9086] hover:text-[#3D3935] border border-[#D4C5B5] hover:border-[#3D3935]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative aspect-[3/4] overflow-hidden bg-[#E8DDD4] cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs tracking-widest uppercase text-[#D4C5B5]">
                    {image.category}
                  </span>
                  <p className="text-white text-sm mt-1">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#3D3935] text-[#FAF7F2] text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-[#B5A191] max-w-xl mx-auto mb-8">
            Let's create something beautiful together. Book your appointment 
            and let me bring your hair vision to life.
          </p>
          <Link href="/book" className="btn-primary bg-[#FAF7F2] text-[#3D3935] hover:bg-[#D4C5B5]">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

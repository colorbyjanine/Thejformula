import Link from "next/link";

const posts = [
  {
    slug: "why-toner-fades",
    title: "Why Your Toner Fades So Fast",
    excerpt: "The science behind toner longevity and what you can do about it. Spoiler: it's not always your stylist's fault.",
    category: "Color Science",
    readTime: "8 min read",
  },
  {
    slug: "truth-about-box-dye",
    title: "The Truth About Box Dye",
    excerpt: "What actually happens when you use drugstore color — no judgment, just facts you deserve to know.",
    category: "Education",
    readTime: "10 min read",
  },
  {
    slug: "medications-and-hair-color",
    title: "How Medications Can Mess With Your Hair Color",
    excerpt: "That new prescription might be affecting more than you realize — including how your hair holds color.",
    category: "Education",
    readTime: "7 min read",
  },
  {
    slug: "vitamins-for-hair-growth",
    title: "Top 10 Vitamins & Supplements for Hair Growth",
    excerpt: "What actually works, what's overhyped, and what I personally take for healthy hair.",
    category: "Hair Health",
    readTime: "9 min read",
  },
  {
    slug: "red-light-therapy",
    title: "Red Light Therapy for Hair Growth: What the Studies Say",
    excerpt: "Is this the future of hair restoration or just another wellness trend? Let's look at the science.",
    category: "Hair Health",
    readTime: "8 min read",
  },
];

const categories = ["All", "Color Science", "Education", "Hair Health"];

export default function Learn() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2] texture-overlay pb-12">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            Hair Education
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Learn
          </h1>
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto">
            Real talk about hair color, maintenance, and everything in between. 
            No gatekeeping — just knowledge you can actually use.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-[#FAF7F2] border-y border-[#D4C5B5]/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`text-sm tracking-widest uppercase px-4 py-2 transition-colors
                  ${category === "All" 
                    ? "bg-[#3D3935] text-[#FAF7F2]" 
                    : "text-[#9A9086] hover:text-[#3D3935]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/learn/${post.slug}`}>
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-[#E8DDD4] mb-6 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#D4C5B5]/50 to-[#E8DDD4] group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs tracking-widest uppercase text-[#9A9086]">
                      {post.category}
                    </span>
                    <span className="text-xs text-[#D4C5B5]">•</span>
                    <span className="text-xs text-[#9A9086]">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3 group-hover:text-[#9A9086] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-[#9A9086] leading-relaxed">
                    {post.excerpt}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Suggestion Box */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
            What Do You Want to Learn?
          </h2>
          <p className="text-[#9A9086] mb-8">
            Have a hair question that's been bugging you? Suggest a topic and I might write about it next!
          </p>
          <form className="flex flex-col gap-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your topic idea..."
              className="p-4 border border-[#D4C5B5] bg-white text-[#3D3935] placeholder-[#9A9086] focus:outline-none focus:border-[#3D3935]"
            />
            <input
              type="email"
              placeholder="Your email (optional, to be notified)"
              className="p-4 border border-[#D4C5B5] bg-white text-[#3D3935] placeholder-[#9A9086] focus:outline-none focus:border-[#3D3935]"
            />
            <button type="submit" className="btn-primary">
              Suggest Topic
            </button>
          </form>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-[#3D3935] text-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] mb-4">
            Never Miss a Post
          </h2>
          <p className="text-[#B5A191] max-w-xl mx-auto mb-8">
            Get new hair education articles delivered straight to your inbox. 
            No spam, just knowledge.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-3 bg-transparent border border-[#B5A191]/50 text-[#FAF7F2] placeholder-[#B5A191] focus:outline-none focus:border-[#FAF7F2]"
            />
            <button type="submit" className="btn-primary bg-[#FAF7F2] text-[#3D3935] hover:bg-[#D4C5B5]">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

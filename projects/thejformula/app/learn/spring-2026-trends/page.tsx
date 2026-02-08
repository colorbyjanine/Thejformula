import Link from "next/link";

export const metadata = {
  title: "Spring 2026 Hair Color Trends | The J Formula",
  description: "The hottest hair color trends for Spring 2026 - from buttery blondes to rich coppers. Your guide to the season's most requested looks.",
};

export default function Spring2026Trends() {
  return (
    <article className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#E8967A] mb-3">
            Trend Report
          </p>
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
            Spring 2026 Hair Color Trends
          </h1>
          <p className="text-[#9A9086] text-lg">
            The colors everyone will be asking for this season
          </p>
          <div className="mt-4 text-sm text-[#9A9086]">
            February 2026 • 5 min read
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-16">
        <div className="max-w-2xl mx-auto prose prose-lg">
          
          <p className="text-[#3D3935] text-lg leading-relaxed">
            Spring 2026 is all about <strong>warmth, dimension, and low-maintenance luxury</strong>. 
            After years of high-contrast looks, we're seeing a shift toward softer, more natural-looking 
            color that still makes a statement. Here are the trends I'm most excited about — and the ones 
            my clients are already booking.
          </p>

          {/* Trend 1 */}
          <div className="my-12 bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🧈</span>
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] m-0">
                1. Buttery Blonde
              </h2>
            </div>
            <p className="text-[#9A9086] m-0">
              Think warm, golden, and incredibly natural-looking. Buttery blonde is the antidote to 
              the ashy, icy blondes of recent years. This shade has <em>warmth</em> but still reads 
              blonde — not brassy. It's giving "I just came back from Italy" energy.
            </p>
            <div className="mt-4 pt-4 border-t border-[#E8DDD4]">
              <p className="text-sm text-[#9A9086] m-0">
                <strong>Best for:</strong> Warm and neutral undertones
                <br />
                <strong>Maintenance:</strong> Medium — toner every 8-10 weeks
              </p>
            </div>
          </div>

          {/* Trend 2 */}
          <div className="my-12 bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🍂</span>
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] m-0">
                2. Rich Copper & Auburn
              </h2>
            </div>
            <p className="text-[#9A9086] m-0">
              Red is having a MAJOR moment. But we're not talking bright fire-engine red — we're seeing 
              rich, sophisticated coppers and auburns that look like autumn leaves. This color is 
              especially stunning on brunettes who want something dramatic but wearable.
            </p>
            <div className="mt-4 pt-4 border-t border-[#E8DDD4]">
              <p className="text-sm text-[#9A9086] m-0">
                <strong>Best for:</strong> All skin tones (we adjust the copper to complement you)
                <br />
                <strong>Maintenance:</strong> Higher — color-depositing products recommended
              </p>
            </div>
          </div>

          {/* Trend 3 */}
          <div className="my-12 bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🍄</span>
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] m-0">
                3. Expensive Brunette
              </h2>
            </div>
            <p className="text-[#9A9086] m-0">
              This trend is all about making brunette hair look <em>expensive</em>. It's rich, 
              dimensional, and incredibly glossy. We achieve this with subtle face-framing highlights, 
              a gorgeous glaze, and perfectly placed lowlights for depth. It screams "I have my life together."
            </p>
            <div className="mt-4 pt-4 border-t border-[#E8DDD4]">
              <p className="text-sm text-[#9A9086] m-0">
                <strong>Best for:</strong> Natural brunettes who want enhancement
                <br />
                <strong>Maintenance:</strong> Low to medium — grows out beautifully
              </p>
            </div>
          </div>

          {/* Trend 4 */}
          <div className="my-12 bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">☀️</span>
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] m-0">
                4. Sun-Kissed Highlights
              </h2>
            </div>
            <p className="text-[#9A9086] m-0">
              Natural, lived-in highlights are still going strong. The difference in 2026? We're placing 
              them more strategically — concentrated around the face and through the ends — for that 
              "just got back from vacation" glow. Subtle but impactful.
            </p>
            <div className="mt-4 pt-4 border-t border-[#E8DDD4]">
              <p className="text-sm text-[#9A9086] m-0">
                <strong>Best for:</strong> Everyone! We customize the tone to your features
                <br />
                <strong>Maintenance:</strong> Very low — the grow-out IS the look
              </p>
            </div>
          </div>

          {/* Trend 5 */}
          <div className="my-12 bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">✨</span>
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] m-0">
                5. Glass Hair / High-Shine Everything
              </h2>
            </div>
            <p className="text-[#9A9086] m-0">
              Regardless of your color, <strong>shine is the trend</strong>. We're seeing massive demand 
              for glossing treatments that make hair look like glass. This is about hair health meeting 
              hair color. A gloss can be clear or tinted, and the results are absolutely stunning.
            </p>
            <div className="mt-4 pt-4 border-t border-[#E8DDD4]">
              <p className="text-sm text-[#9A9086] m-0">
                <strong>Best for:</strong> Literally everyone
                <br />
                <strong>Maintenance:</strong> Refresh every 4-6 weeks for best results
              </p>
            </div>
          </div>

          {/* Takeaway */}
          <div className="my-12 bg-gradient-to-r from-[#E8967A]/20 to-[#D4826A]/20 rounded-2xl p-8">
            <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              The Bottom Line
            </h2>
            <p className="text-[#3D3935] m-0">
              Spring 2026 is about looking <em>effortlessly</em> beautiful. The common thread? 
              <strong> Warmth, dimension, and healthy hair that shines.</strong> Whether you're 
              ready for a dramatic change or just want to enhance what you have, there's a trend 
              for you.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center my-12">
            <p className="text-[#9A9086] mb-4">
              Ready to try one of these looks?
            </p>
            <Link
              href="/book"
              className="inline-block bg-[#E8967A] text-white px-8 py-3 rounded-full font-medium hover:bg-[#D4826A] transition-colors no-underline"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Related */}
          <div className="mt-16 pt-8 border-t border-[#E8DDD4]">
            <h3 className="text-lg font-semibold text-[#3D3935] mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link href="/learn/why-toner-fades" className="block text-[#E8967A] hover:underline">
                Why Your Toner Fades (And How to Make It Last) →
              </Link>
              <Link href="/learn/bond-builders-explained" className="block text-[#E8967A] hover:underline">
                Bond Builders Explained: Olaplex, K18, and More →
              </Link>
              <Link href="/quiz" className="block text-[#E8967A] hover:underline">
                Take the Hair Color Quiz →
              </Link>
            </div>
          </div>

        </div>
      </section>
    </article>
  );
}

import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata = {
  title: "Bond Builders Explained: Olaplex, K18 & More | The J Formula",
  description: "What are bond builders? Learn the science behind Olaplex, K18, and other hair repair treatments, and which one is right for your hair.",
};

export default function BondBuildersArticle() {
  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#3D3935] to-[#2D2925] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#E8967A] tracking-widest text-sm mb-4 uppercase">Hair Science</p>
          <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl mb-6">
            Bond Builders Explained
          </h1>
          <p className="text-white/70 text-lg mb-6">
            Olaplex, K18, Redken Acidic Bonding — what's the difference and which one do you actually need?
          </p>
          <ShareButton url="/learn/bond-builders-explained" title="Bond Builders Explained" />
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-lg prose-stone">
          
          <p className="text-xl text-[#5A534D] leading-relaxed">
            If you've been in a salon lately, you've probably heard about "bond builders" or "bond repair treatments." These products have revolutionized how we approach hair health, especially for color-treated hair. But with so many options, it can be confusing to know what you actually need.
          </p>

          <h2 className="font-cormorant text-3xl text-[#3D3935] mt-12 mb-6">First: What Are Hair Bonds?</h2>
          
          <p className="text-[#5A534D] leading-relaxed">
            Your hair is made up of proteins held together by different types of bonds:
          </p>

          <ul className="space-y-3 text-[#5A534D] my-6">
            <li><strong>Disulfide bonds</strong> — The strongest bonds in your hair. These get broken during chemical services like color, bleach, and perms.</li>
            <li><strong>Hydrogen bonds</strong> — Temporary bonds that break when your hair gets wet (why your hair stretches when wet).</li>
            <li><strong>Salt bonds</strong> — Affected by pH changes.</li>
          </ul>

          <p className="text-[#5A534D] leading-relaxed">
            When we color, bleach, or heat-style your hair, we break these bonds. Over time, this leads to damage, breakage, and that "fried" feeling. Bond builders work by reconnecting or reinforcing these broken bonds.
          </p>

          <h2 className="font-cormorant text-3xl text-[#3D3935] mt-12 mb-6">The Big Players</h2>

          <div className="bg-white rounded-2xl p-8 shadow-lg my-8">
            <h3 className="font-cormorant text-2xl text-[#3D3935] mb-4">🔬 Olaplex</h3>
            <p className="text-[#5A534D] mb-4">
              <strong>What it does:</strong> Reconnects broken disulfide bonds using a patented ingredient called bis-aminopropyl diglycol dimaleate.
            </p>
            <p className="text-[#5A534D] mb-4">
              <strong>Best for:</strong> Preventing damage during chemical services. Most effective when used IN the color/bleach process.
            </p>
            <p className="text-[#5A534D] mb-4">
              <strong>Key products:</strong>
            </p>
            <ul className="text-[#5A534D] space-y-1 ml-4">
              <li>• No. 0 & 1 — Professional use (in-salon)</li>
              <li>• No. 3 — At-home treatment (the hero product)</li>
              <li>• No. 4 & 5 — Shampoo & conditioner</li>
              <li>• No. 8 — Intense moisture mask</li>
            </ul>
            <p className="text-[#E8967A] text-sm mt-4 font-medium">
              💡 Pro tip: No. 3 works best on damp hair, left on for at least 10 minutes (I tell clients to leave it longer — even overnight).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg my-8">
            <h3 className="font-cormorant text-2xl text-[#3D3935] mb-4">✨ K18</h3>
            <p className="text-[#5A534D] mb-4">
              <strong>What it does:</strong> Uses a bioactive peptide (K18Peptide™) that reconnects broken keratin chains — working on a molecular level to repair damage from the inside out.
            </p>
            <p className="text-[#5A534D] mb-4">
              <strong>Best for:</strong> Repairing existing damage. Works after the fact, not just during services.
            </p>
            <p className="text-[#5A534D] mb-4">
              <strong>Key products:</strong>
            </p>
            <ul className="text-[#5A534D] space-y-1 ml-4">
              <li>• Leave-In Molecular Repair Mask — The star product</li>
              <li>• Professional service mist — In-salon</li>
              <li>• Damage Shield shampoo & conditioner</li>
            </ul>
            <p className="text-[#E8967A] text-sm mt-4 font-medium">
              💡 Pro tip: Apply K18 to clean, towel-dried hair — NO conditioner first. It needs direct access to your hair. Wait 4 minutes, don't rinse out, then style as normal.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg my-8">
            <h3 className="font-cormorant text-2xl text-[#3D3935] mb-4">💜 Redken Acidic Bonding Concentrate</h3>
            <p className="text-[#5A534D] mb-4">
              <strong>What it does:</strong> Uses citric acid to reinforce weakened bonds and restore optimal pH levels. Works on all three bond types.
            </p>
            <p className="text-[#5A534D] mb-4">
              <strong>Best for:</strong> Color-treated hair that needs daily maintenance. More affordable entry point.
            </p>
            <p className="text-[#5A534D] mb-4">
              <strong>Key products:</strong>
            </p>
            <ul className="text-[#5A534D] space-y-1 ml-4">
              <li>• Shampoo, Conditioner, Leave-in treatment</li>
              <li>• Intensive Pre-Treatment</li>
            </ul>
            <p className="text-[#E8967A] text-sm mt-4 font-medium">
              💡 Pro tip: Great for daily use. The leave-in is perfect for fine hair that can't handle heavy treatments.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[#3D3935] mt-12 mb-6">So... Which One Should You Use?</h2>

          <p className="text-[#5A534D] leading-relaxed mb-6">
            Here's my honest take after years of working with all of these:
          </p>

          <div className="bg-[#F5F0E8] rounded-2xl p-8 my-8">
            <h4 className="font-medium text-[#3D3935] mb-4">Use Olaplex if:</h4>
            <ul className="text-[#5A534D] space-y-2">
              <li>✓ You're actively coloring or bleaching (especially lightening)</li>
              <li>✓ You want to prevent damage during services</li>
              <li>✓ You're maintaining already-healthy hair</li>
            </ul>
          </div>

          <div className="bg-[#F5F0E8] rounded-2xl p-8 my-8">
            <h4 className="font-medium text-[#3D3935] mb-4">Use K18 if:</h4>
            <ul className="text-[#5A534D] space-y-2">
              <li>✓ You have existing damage you want to repair</li>
              <li>✓ Your hair feels "fried" or overly porous</li>
              <li>✓ You want visible results fast</li>
              <li>✓ You hate leaving treatments on forever</li>
            </ul>
          </div>

          <div className="bg-[#F5F0E8] rounded-2xl p-8 my-8">
            <h4 className="font-medium text-[#3D3935] mb-4">Use Redken ABC if:</h4>
            <ul className="text-[#5A534D] space-y-2">
              <li>✓ You want an easy daily maintenance system</li>
              <li>✓ Budget is a concern</li>
              <li>✓ You have fine hair that gets weighed down easily</li>
              <li>✓ You're looking for a good "starter" bond repair routine</li>
            </ul>
          </div>

          <h2 className="font-cormorant text-3xl text-[#3D3935] mt-12 mb-6">Can You Use Them Together?</h2>

          <p className="text-[#5A534D] leading-relaxed">
            <strong>Yes!</strong> They actually work differently, so you can layer them:
          </p>

          <ul className="space-y-3 text-[#5A534D] my-6">
            <li><strong>In-salon:</strong> I use Olaplex in your color formula, then finish with K18 before you leave.</li>
            <li><strong>At home:</strong> Use Olaplex No. 3 weekly as a treatment, then K18 after shampooing on other days.</li>
            <li><strong>Daily:</strong> Redken ABC shampoo/conditioner as your regular routine.</li>
          </ul>

          <div className="bg-[#3D3935] text-white rounded-2xl p-8 my-12">
            <h3 className="font-cormorant text-2xl mb-4">The Bottom Line</h3>
            <p className="text-white/80 leading-relaxed">
              Bond builders are a game-changer, but they're not magic. They work best as part of an overall hair health routine — good products, heat protection, regular trims, and realistic expectations about what your hair can handle.
            </p>
            <p className="text-white/80 leading-relaxed mt-4">
              If you're not sure which is right for you, ask your stylist. We can look at your hair, your history, and your goals to recommend the perfect combo.
            </p>
          </div>

          <h2 className="font-cormorant text-3xl text-[#3D3935] mt-12 mb-6">Quick Myth Busters</h2>

          <div className="space-y-4 text-[#5A534D]">
            <p>
              <strong>❌ "Olaplex will fix my fried hair"</strong><br />
              Not exactly. Olaplex is best for <em>preventing</em> damage. For repair, K18 is more effective.
            </p>
            <p>
              <strong>❌ "I can skip conditioner if I use K18"</strong><br />
              K18 repairs bonds but doesn't add moisture or slip. You might still need a lightweight conditioner on your ends.
            </p>
            <p>
              <strong>❌ "More is better"</strong><br />
              Using too much can actually weigh hair down. Follow the instructions — a little goes a long way.
            </p>
            <p>
              <strong>❌ "They'll undo years of damage overnight"</strong><br />
              Improvement is gradual. Most people see best results after 4-6 uses of K18 or consistent Olaplex treatments.
            </p>
          </div>

        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-[#E8DDD4]">
          <Link 
            href="/learn" 
            className="inline-flex items-center gap-2 text-[#3D3935] hover:text-[#E8967A] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Learn
          </Link>
        </div>
      </article>
    </main>
  );
}

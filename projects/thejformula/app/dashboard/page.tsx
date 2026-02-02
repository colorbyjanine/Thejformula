import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Header */}
      <header className="bg-[#3D3935] text-[#FAF7F2] py-6 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-[family-name:var(--font-cormorant)]">
            Janine's Dashboard
          </h1>
          <span className="text-sm text-[#B5A191]">The J Formula HQ</span>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Content Calendar */}
          <div className="bg-white p-6 shadow-sm border border-[#D4C5B5]/30 col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935]">
                📅 Content Calendar
              </h2>
              <span className="text-xs text-[#9A9086]">February 2026</span>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-[#9A9086] font-medium py-2">{day}</div>
              ))}
              {/* Week 1 */}
              <div className="py-3 text-[#D4C5B5]">26</div>
              <div className="py-3 text-[#D4C5B5]">27</div>
              <div className="py-3 text-[#D4C5B5]">28</div>
              <div className="py-3 text-[#D4C5B5]">29</div>
              <div className="py-3 text-[#D4C5B5]">30</div>
              <div className="py-3 text-[#D4C5B5]">31</div>
              <div className="py-3">1</div>
              {/* Week 2 - Current */}
              <div className="py-3 bg-[#3D3935] text-[#FAF7F2] rounded">2</div>
              <div className="py-3 relative">
                3
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E8967A] rounded-full"></span>
              </div>
              <div className="py-3 relative">
                4
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#7AB8A8] rounded-full"></span>
              </div>
              <div className="py-3 relative">
                5
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E8967A] rounded-full"></span>
              </div>
              <div className="py-3">6</div>
              <div className="py-3 relative">
                7
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E8967A] rounded-full"></span>
              </div>
              <div className="py-3">8</div>
            </div>
            <div className="mt-4 flex gap-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E8967A] rounded-full"></span>
                <span className="text-[#9A9086]">Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#7AB8A8] rounded-full"></span>
                <span className="text-[#9A9086]">TikTok</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#9A9086] rounded-full"></span>
                <span className="text-[#9A9086]">Blog</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white p-6 shadow-sm border border-[#D4C5B5]/30">
            <h2 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              📊 Quick Stats
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#9A9086]">Website Views</span>
                  <span className="text-[#3D3935] font-medium">--</span>
                </div>
                <div className="h-2 bg-[#E8DDD4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#3D3935] w-0 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#9A9086]">IG Followers</span>
                  <span className="text-[#3D3935] font-medium">--</span>
                </div>
                <div className="h-2 bg-[#E8DDD4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#E8967A] w-0 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#9A9086]">Affiliate Clicks</span>
                  <span className="text-[#3D3935] font-medium">--</span>
                </div>
                <div className="h-2 bg-[#E8DDD4] rounded-full overflow-hidden">
                  <div className="h-full bg-[#7AB8A8] w-0 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Posts */}
          <div className="bg-white p-6 shadow-sm border border-[#D4C5B5]/30">
            <h2 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              📱 Upcoming Posts
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-[#FAF7F2] border-l-4 border-[#E8967A]">
                <p className="text-sm text-[#3D3935] font-medium">Mon, Feb 3</p>
                <p className="text-xs text-[#9A9086]">IG: Why toner fades (Reel)</p>
              </div>
              <div className="p-3 bg-[#FAF7F2] border-l-4 border-[#7AB8A8]">
                <p className="text-sm text-[#3D3935] font-medium">Tue, Feb 4</p>
                <p className="text-xs text-[#9A9086]">TikTok: Box dye truth bomb</p>
              </div>
              <div className="p-3 bg-[#FAF7F2] border-l-4 border-[#E8967A]">
                <p className="text-sm text-[#3D3935] font-medium">Wed, Feb 5</p>
                <p className="text-xs text-[#9A9086]">IG: Product recommendation</p>
              </div>
            </div>
          </div>

          {/* School Schedule */}
          <div className="bg-white p-6 shadow-sm border border-[#D4C5B5]/30">
            <h2 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              📚 School
            </h2>
            <div className="space-y-3 text-sm">
              <p className="text-[#9A9086] italic">Add your class schedule...</p>
              <button className="w-full py-2 border border-dashed border-[#D4C5B5] text-[#9A9086] hover:border-[#3D3935] hover:text-[#3D3935] transition-colors">
                + Add Classes
              </button>
            </div>
          </div>

          {/* Finances */}
          <div className="bg-white p-6 shadow-sm border border-[#D4C5B5]/30">
            <h2 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              💰 Finances
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#9A9086]">This Month</span>
                <span className="text-[#3D3935] font-medium">$--</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#9A9086]">Affiliate Earnings</span>
                <span className="text-[#7AB8A8] font-medium">$--</span>
              </div>
              <button className="w-full py-2 border border-dashed border-[#D4C5B5] text-[#9A9086] hover:border-[#3D3935] hover:text-[#3D3935] transition-colors">
                + Upload Receipt
              </button>
            </div>
          </div>

          {/* Vault / Logins */}
          <div className="bg-[#3D3935] p-6 shadow-sm text-[#FAF7F2]">
            <h2 className="text-xl font-[family-name:var(--font-cormorant)] mb-4">
              🔐 Vault
            </h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-[#B5A191]/30">
                <span>HeyGen</span>
                <span className="text-[#B5A191]">••••••••</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#B5A191]/30">
                <span>Canva</span>
                <span className="text-[#B5A191]">••••••••</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#B5A191]/30">
                <span>Namecheap</span>
                <span className="text-[#B5A191]">••••••••</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-[#B5A191]/30">
                <span>Vercel</span>
                <span className="text-[#B5A191]">••••••••</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span>Amazon Affiliate</span>
                <span className="text-[#B5A191]">thejformula-20</span>
              </div>
            </div>
          </div>

        </div>

        {/* Notes Section */}
        <div className="mt-6 bg-white p-6 shadow-sm border border-[#D4C5B5]/30">
          <h2 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
            💬 Notes from Jane
          </h2>
          <div className="bg-[#FAF7F2] p-4 text-sm text-[#3D3935]">
            <p className="mb-2"><strong>Feb 2, 2026:</strong></p>
            <p className="text-[#9A9086]">
              Welcome to your dashboard! 🎉 Here's what we accomplished today:
            </p>
            <ul className="mt-2 space-y-1 text-[#9A9086]">
              <li>✅ Built thejformula.com — LIVE!</li>
              <li>✅ 5 blog articles written</li>
              <li>✅ Portfolio page created</li>
              <li>✅ Shop page with affiliate links</li>
              <li>✅ Domain connected</li>
              <li>⏳ Working on: Full browser access for automation</li>
            </ul>
          </div>
        </div>

        {/* Back to main site */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-[#9A9086] hover:text-[#3D3935]">
            ← Back to thejformula.com
          </Link>
        </div>
      </main>
    </div>
  );
}

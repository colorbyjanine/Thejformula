import Link from "next/link";

export default function Book() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2] texture-overlay">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            Let's Create Together
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Book Your Appointment
          </h1>
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto">
            Ready to transform your hair? Choose how you'd like to book below.
          </p>
        </div>
      </section>

      {/* Two Booking Options */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Option 1: Book Online via Vagaro */}
            <div className="bg-white p-8 md:p-10 text-center">
              <div className="w-16 h-16 bg-[#FAF7F2] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#3D3935]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-3">
                Book Online
              </h2>
              <p className="text-[#9A9086] mb-6 text-sm">
                View my availability and book directly through Vagaro. 
                Select <strong>"Janine Sirope"</strong> from the staff list to see my calendar.
              </p>
              <a 
                href="https://www.vagaro.com/volumeiiisalon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full"
              >
                Book on Vagaro
              </a>
              <p className="text-xs text-[#9A9086] mt-4">
                Select Staff → Janine Sirope
              </p>
            </div>

            {/* Option 2: Need Help or ASAP */}
            <div className="bg-[#3D3935] text-white p-8 md:p-10 text-center">
              <div className="w-16 h-16 bg-[#2A2826] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="text-2xl font-[family-name:var(--font-cormorant)] mb-3">
                Request an Appointment
              </h2>
              <p className="text-[#B5A191] mb-6 text-sm">
                Don't see availability that works? Submit a request with your preferred dates 
                and I'll get back to you personally.
              </p>
              <Link 
                href="/chat"
                className="inline-block w-full py-3 px-6 bg-white text-[#3D3935] font-medium tracking-wide uppercase text-sm hover:bg-[#FAF7F2] transition-colors"
              >
                Request Appointment
              </Link>
              <p className="text-xs text-[#B5A191] mt-4">
                I'll respond within 24 hours
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Tip */}
      <section className="section bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-[#FAF7F2] p-8 rounded-lg text-center">
            <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              💡 Booking Tip
            </h3>
            <p className="text-[#9A9086] mb-4">
              On Vagaro, look for <strong>"Janine Sirope"</strong> in the staff list. 
              You can book as a guest — no account needed!
            </p>
            <p className="text-sm text-[#9A9086]">
              Not sure which service to pick? <Link href="/services" className="underline hover:text-[#3D3935]">View my full menu</Link> or <Link href="/chat" className="underline hover:text-[#3D3935]">send a request</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              What to Expect
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-medium text-[#3D3935] mb-2">New Clients</h3>
              <p className="text-sm text-[#9A9086]">
                Please arrive 10 minutes early. We'll chat about your hair history, goals, and create a plan together.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="font-medium text-[#3D3935] mb-2">Deposits</h3>
              <p className="text-sm text-[#9A9086]">
                A deposit may be required for first-time color appointments. This goes toward your service total.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-medium text-[#3D3935] mb-2">Cancellations</h3>
              <p className="text-sm text-[#9A9086]">
                Please give 48 hours notice if you need to reschedule. Late cancellations may forfeit deposit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section bg-[#3D3935] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] mb-6">
            Before You Book
          </h2>
          <p className="text-[#B5A191] mb-8 max-w-xl mx-auto">
            Not sure which service you need? Check out my portfolio or pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/services"
              className="px-6 py-3 border border-white text-white font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-[#3D3935] transition-colors"
            >
              View Services & Pricing
            </Link>
            <Link 
              href="/portfolio"
              className="px-6 py-3 border border-white text-white font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-[#3D3935] transition-colors"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

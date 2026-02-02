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
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto mb-12">
            Ready to transform your hair? Select a service below and find a time that works for you.
          </p>
        </div>
      </section>

      {/* Booking Widget Placeholder */}
      <section className="section bg-[#E8DDD4]">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-[#FAF7F2] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#9A9086]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-4">
              Book Your Appointment
            </h2>
            <p className="text-[#9A9086] mb-8">
              Ready to sit in my chair? Click below to view my availability and book your service.
            </p>
            <a 
              href="https://www.vagaro.com/volumeiiisalon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Book on Vagaro
            </a>
          </div>

          {/* Services Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6">
              <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                Color Services
              </h3>
              <ul className="text-[#9A9086] space-y-2 text-sm">
                <li>• Full Color</li>
                <li>• Highlights / Balayage</li>
                <li>• Color Correction</li>
                <li>• Toner Refresh</li>
              </ul>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
                Consultations
              </h3>
              <ul className="text-[#9A9086] space-y-2 text-sm">
                <li>• New Client Consultation</li>
                <li>• Color Correction Consultation</li>
                <li>• Virtual Consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Questions?
          </h2>
          <p className="text-[#9A9086] mb-4">
            DM me on Instagram for quick questions or consultation requests.
          </p>
          <a 
            href="https://instagram.com/colorbyjanine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="elegant-link text-sm tracking-widest uppercase text-[#3D3935]"
          >
            @colorbyjanine
          </a>
        </div>
      </section>
    </div>
  );
}

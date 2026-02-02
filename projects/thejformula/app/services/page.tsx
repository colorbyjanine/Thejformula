import Link from "next/link";

export default function Services() {
  const colorServices = [
    { name: "Root Color + Blowout", desc: "Gray coverage, includes blowout", price: "$175" },
    { name: "Root Color", desc: "Gray coverage, no blowout", price: "$150" },
    { name: "All Over Color", desc: "Price varies by density", price: "$285–$385" },
    { name: "All Over Gloss", desc: "Includes wash and blowout", price: "$110–$150" },
    { name: "Face Frame Highlights", desc: "Includes toner, wash and blowout", price: "$185" },
    { name: "Mini Highlights", desc: "Includes foiling, toner and style", price: "$285" },
    { name: "Partial Highlights", desc: "Includes foiling, toner and style", price: "$385" },
    { name: "Full Highlights", desc: "Includes foiling, toner and style", price: "$485–$585" },
    { name: "Balayage", desc: "Includes foiling, tip out, toner and style", price: "$510+" },
    { name: "Color Correction", desc: "Complex color fixes", price: "Consultation" },
  ];

  const extensions = [
    { name: "Weft Extension Install", desc: "Sew-in weft method", price: "$425+" },
    { name: "Hidden Weft", desc: "Seamless, invisible weft", price: "$485+" },
    { name: "Tape In Install", desc: "Removal available ($100)", price: "$410+" },
    { name: "K-Tip Extensions", desc: "Keratin bond method", price: "Consultation" },
  ];

  const treatments = [
    { name: "Brazilian Blowout / Keratin", desc: "Smoothing treatment", price: "$425+" },
    { name: "K18 / Deep Conditioning", desc: "Repair and restore", price: "$90" },
  ];

  const styling = [
    { name: "Haircut", desc: "Includes wash and blowout", price: "$150" },
    { name: "Blowdry", desc: "Includes wash (+$10 for iron work)", price: "$65" },
    { name: "Updo", desc: "On dry clean hair (+$25 for wash)", price: "$175" },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            Services & Pricing
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            The Menu
          </h1>
          <p className="text-[#3D3935]/70 max-w-2xl mx-auto mb-8">
            Prices vary depending on hair length, density, and history. 
            All color services include a blow dry. Book a consultation for personalized pricing.
          </p>
          <Link 
            href="/book" 
            className="btn-primary"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Color Services */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
              Color Services
            </h2>
            <div className="space-y-4">
              {colorServices.map((service, i) => (
                <div 
                  key={i} 
                  className="flex justify-between items-start py-4 border-b border-[#E8DDD4] last:border-0"
                >
                  <div>
                    <h3 className="font-medium text-[#3D3935]">{service.name}</h3>
                    <p className="text-sm text-[#9A9086]">{service.desc}</p>
                  </div>
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-[#3D3935] ml-4 whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Extensions */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
              Extensions
            </h2>
            <div className="space-y-4">
              {extensions.map((service, i) => (
                <div 
                  key={i} 
                  className="flex justify-between items-start py-4 border-b border-[#D4C5B5] last:border-0"
                >
                  <div>
                    <h3 className="font-medium text-[#3D3935]">{service.name}</h3>
                    <p className="text-sm text-[#9A9086]">{service.desc}</p>
                  </div>
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-[#3D3935] ml-4 whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[#9A9086] mt-6 italic">
              Hair extensions require a consultation to determine the best method for your hair.
            </p>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
              Treatments
            </h2>
            <div className="space-y-4">
              {treatments.map((service, i) => (
                <div 
                  key={i} 
                  className="flex justify-between items-start py-4 border-b border-[#E8DDD4] last:border-0"
                >
                  <div>
                    <h3 className="font-medium text-[#3D3935]">{service.name}</h3>
                    <p className="text-sm text-[#9A9086]">{service.desc}</p>
                  </div>
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-[#3D3935] ml-4 whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Styling */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-8 text-center">
              Styling
            </h2>
            <div className="space-y-4">
              {styling.map((service, i) => (
                <div 
                  key={i} 
                  className="flex justify-between items-start py-4 border-b border-[#D4C5B5] last:border-0"
                >
                  <div>
                    <h3 className="font-medium text-[#3D3935]">{service.name}</h3>
                    <p className="text-sm text-[#9A9086]">{service.desc}</p>
                  </div>
                  <span className="font-[family-name:var(--font-cormorant)] text-xl text-[#3D3935] ml-4 whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[#3D3935] text-[#FAF7F2] text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] mb-6">
            Ready to Transform?
          </h2>
          <p className="text-[#B5A191] max-w-xl mx-auto mb-8">
            Book your appointment or schedule a consultation to discuss your hair goals.
          </p>
          <Link 
            href="/book" 
            className="btn-primary bg-[#FAF7F2] text-[#3D3935] hover:bg-[#D4C5B5]"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

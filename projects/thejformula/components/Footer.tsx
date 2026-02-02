import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3D3935] text-[#FAF7F2] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-[family-name:var(--font-cormorant)] mb-4">
              The J Formula
            </h3>
            <p className="text-[#B5A191] max-w-md">
              15 years of passion, expertise, and the perfect formula for beautiful hair. 
              Education for clients. Formulas for professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Navigate</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">About Janine</Link></li>
              <li><Link href="/portfolio" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">Portfolio</Link></li>
              <li><Link href="/learn" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">Hair Education</Link></li>
              <li><Link href="/formulas" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">Pro Formulas</Link></li>
              <li><Link href="/style" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">Style</Link></li>
              <li><Link href="/shop" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">Shop</Link></li>
              <li><Link href="/book" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              <li><a href="https://instagram.com/colorbyjanine" target="_blank" rel="noopener noreferrer" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">Instagram</a></li>
              <li><a href="#" className="text-[#B5A191] hover:text-[#FAF7F2] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#B5A191]/20 mt-12 pt-8 text-center text-[#B5A191] text-sm">
          <p>© {new Date().getFullYear()} The J Formula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

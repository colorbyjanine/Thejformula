"use client";

export default function QRCodes() {
  const qrCodes = [
    {
      title: "Digital Business Card",
      url: "https://thejformula.com/card",
      description: "All your contact info & links",
    },
    {
      title: "Amazon Shop",
      url: "https://thejformula.com/shop",
      description: "Your product recommendations",
    },
    {
      title: "Book Appointment",
      url: "https://thejformula.com/book",
      description: "Schedule with you",
    },
    {
      title: "Formula Vault",
      url: "https://thejformula.com/formulas",
      description: "Hair color formulas",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-2">
            QR Codes
          </h1>
          <p className="text-[#9A9086] text-sm">
            Download & print these for your salon, business cards, or marketing materials
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {qrCodes.map((qr, idx) => {
            const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(qr.url)}&bgcolor=FFFFFF&color=3D3935`;
            
            return (
              <div key={idx} className="bg-white rounded-2xl p-5 text-center shadow-lg">
                <img 
                  src={qrImageUrl}
                  alt={qr.title}
                  className="mx-auto mb-4 rounded-lg"
                  width={150}
                  height={150}
                />
                <h3 className="font-medium text-[#3D3935] mb-1">{qr.title}</h3>
                <p className="text-xs text-[#9A9086] mb-3">{qr.description}</p>
                <a
                  href={qrImageUrl.replace("300x300", "1000x1000")}
                  download={`qr-${qr.title.toLowerCase().replace(/\s+/g, "-")}.png`}
                  target="_blank"
                  className="inline-block text-xs bg-[#FAF7F2] text-[#3D3935] px-4 py-2 rounded-full hover:bg-[#E8DDD4] transition-colors"
                >
                  Download HD
                </a>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-2xl p-6">
          <h3 className="font-medium text-[#3D3935] mb-3">💡 How to use</h3>
          <ul className="text-sm text-[#9A9086] space-y-2">
            <li>• <strong>Business Card:</strong> Print the card QR on the back</li>
            <li>• <strong>Salon Mirror:</strong> Display the booking QR for easy scheduling</li>
            <li>• <strong>Product Display:</strong> Show the shop QR near retail products</li>
            <li>• <strong>Receipts:</strong> Add the card QR for repeat clients</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

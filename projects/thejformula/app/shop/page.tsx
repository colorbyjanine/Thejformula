import Link from "next/link";

const AFFILIATE_TAG = "thejformula-20";

// Earthy, organic color palette - browns, tans, sage greens, warm grays
const brandStyles: Record<string, { bg: string; text: string; accent: string }> = {
  "K18": { bg: "from-[#E8DDD4] to-[#D4C5B0]", text: "#5C4A32", accent: "#8B7355" },
  "Olaplex": { bg: "from-[#D4C8B8] to-[#C4B8A8]", text: "#4A3F30", accent: "#6B5B4F" },
  "Redken": { bg: "from-[#5A554F] to-[#4A4540]", text: "#E8E0D8", accent: "#C4B8A8" },
  "Amika": { bg: "from-[#B5C4A8] to-[#A8B5A0]", text: "#3D4A35", accent: "#5A6B50" },
  "Kenra": { bg: "from-[#C9C4BC] to-[#B8B3AB]", text: "#4A4540", accent: "#6B6560" },
  "UNITE": { bg: "from-[#6B5B4F] to-[#5C4A40]", text: "#E8DDD4", accent: "#C4B5A0" },
  "Nutrafol": { bg: "from-[#9CAF88] to-[#8A9D78]", text: "#2F3A28", accent: "#4A5A40" },
  "Thorne": { bg: "from-[#2A5934] to-[#1E4228]", text: "#FFFFFF", accent: "#A8D5B0" },
  "MaryRuth's": { bg: "from-[#F5E6D3] to-[#E8D4BE]", text: "#5C4A32", accent: "#8B7355" },
  "Sports Research": { bg: "from-[#A09080] to-[#908070]", text: "#FFFFFF", accent: "#E8DDD4" },
  "Vital Proteins": { bg: "from-[#E0D8D0] to-[#D0C8C0]", text: "#5A5048", accent: "#7A7068" },
  "Nordic Naturals": { bg: "from-[#C4D4C8] to-[#B4C4B8]", text: "#3A4A3E", accent: "#5A6A5E" },
  "Nature Made": { bg: "from-[#D4C5A0] to-[#C4B590]", text: "#5C4A32", accent: "#8B7355" },
  "iRestore": { bg: "from-[#B8B3AB] to-[#A8A3A0]", text: "#4A4540", accent: "#6B6560" },
  "Revian": { bg: "from-[#7A746C] to-[#6A645C]", text: "#E8E0D8", accent: "#C9C4BC" },
  "Kérastase": { bg: "from-[#4A4540] to-[#3A3530]", text: "#D4C5B0", accent: "#E8DDD4" },
  "Dyson": { bg: "from-[#E8E0D8] to-[#D8D0C8]", text: "#4A4540", accent: "#6B6560" },
  "Kitsch": { bg: "from-[#D4C8BC] to-[#C9BDB1]", text: "#5A4A40", accent: "#7A6A60" },
  "CeraVe": { bg: "from-[#C8D4C8] to-[#B8C8B8]", text: "#3A4A3A", accent: "#5A6A5A" },
  "La Roche-Posay": { bg: "from-[#D0D8D4] to-[#C0C8C4]", text: "#404848", accent: "#606868" },
  "PAVOI": { bg: "from-[#E8DDD4] to-[#D8CEC5]", text: "#5C4A32", accent: "#8B7355" },
  "NOKMIT": { bg: "from-[#D4C5B0] to-[#C4B5A0]", text: "#5C4A32", accent: "#8B7355" },
  "SHASH": { bg: "from-[#C4B498] to-[#B4A488]", text: "#4A3F30", accent: "#6B5B4F" },
  "Ellen Evyse": { bg: "from-[#E0D4C8] to-[#D0C4B8]", text: "#5A4A40", accent: "#7A6A60" },
  "Olivia Garden": { bg: "from-[#A8B8A0] to-[#98A890]", text: "#3A4A35", accent: "#5A6A55" },
  "Fohufo": { bg: "from-[#C9BDB1] to-[#B9ADA1]", text: "#5A4A40", accent: "#7A6A60" },
  "JIRIS": { bg: "from-[#D8CEC5] to-[#C8BEB5]", text: "#5C4A32", accent: "#8B7355" },
  "French": { bg: "from-[#E0D8D0] to-[#D0C8C0]", text: "#5A5048", accent: "#7A7068" },
  "TYMO": { bg: "from-[#D4C8BC] to-[#C9BDB1]", text: "#5A4A40", accent: "#7A6A60" },
  "Stunning": { bg: "from-[#E8DDD4] to-[#D8CEC5]", text: "#5C4A32", accent: "#8B7355" },
  "EcoGems": { bg: "from-[#B5C4A8] to-[#A8B5A0]", text: "#3D4A35", accent: "#5A6B50" },
  "Kstyle": { bg: "from-[#D4C5B0] to-[#C4B5A0]", text: "#5C4A32", accent: "#8B7355" },
  "Bopiu": { bg: "from-[#E0D4C8] to-[#D0C4B8]", text: "#5A4A40", accent: "#7A6A60" },
  "FANCIME": { bg: "from-[#C4D4C8] to-[#B4C4B8]", text: "#3A4A3E", accent: "#5A6A5E" },
  "ABILITH": { bg: "from-[#C9C4BC] to-[#B8B3AB]", text: "#4A4540", accent: "#6B6560" },
  "SOLY": { bg: "from-[#D4C8BC] to-[#C9BDB1]", text: "#5A4A40", accent: "#7A6A60" },
  "Chouyatou": { bg: "from-[#B5C4A8] to-[#A8B5A0]", text: "#3D4A35", accent: "#5A6B50" },
  "OFEEFAN": { bg: "from-[#E0D8D0] to-[#D0C8C0]", text: "#5A5048", accent: "#7A7068" },
  "VDWIP": { bg: "from-[#D4C5A0] to-[#C4B590]", text: "#5C4A32", accent: "#8B7355" },
  "Women's": { bg: "from-[#E8DDD4] to-[#D8CEC5]", text: "#3D3935", accent: "#9A9086" },
  "Barrel": { bg: "from-[#C9C4BC] to-[#B8B3AB]", text: "#4A4540", accent: "#6B6560" },
  "rag": { bg: "from-[#5A554F] to-[#4A4540]", text: "#E8E0D8", accent: "#C4B8A8" },
  "Vtopmart": { bg: "from-[#B5C4A8] to-[#A8B5A0]", text: "#3D4A35", accent: "#5A6B50" },
  "CiWiVOKi": { bg: "from-[#D4C5B0] to-[#C4B5A0]", text: "#5C4A32", accent: "#8B7355" },
  "ZOBER": { bg: "from-[#C9C4BC] to-[#B8B3AB]", text: "#4A4540", accent: "#6B6560" },
  "Rechargeable": { bg: "from-[#E0D8D0] to-[#D0C8C0]", text: "#5A5048", accent: "#7A7068" },
  "Woodure": { bg: "from-[#C4B498] to-[#B4A488]", text: "#4A3F30", accent: "#6B5B4F" },
  "Snap-Tight": { bg: "from-[#D4C8BC] to-[#C9BDB1]", text: "#5A4A40", accent: "#7A6A60" },
  "StorageWorks": { bg: "from-[#C4B498] to-[#B4A488]", text: "#4A3F30", accent: "#6B5B4F" },
  "Yurhap": { bg: "from-[#D4C5A0] to-[#C4B590]", text: "#5C4A32", accent: "#8B7355" },
  "Necklace": { bg: "from-[#E8DDD4] to-[#D8CEC5]", text: "#5C4A32", accent: "#8B7355" },
  "Gold": { bg: "from-[#D4C5B0] to-[#C4B5A0]", text: "#5C4A32", accent: "#8B7355" },
  "default": { bg: "from-[#E8DDD4] to-[#D8CEC5]", text: "#3D3935", accent: "#9A9086" },
};

// Extract brand from product name
function getBrand(name: string): string {
  const brands = Object.keys(brandStyles).filter(b => b !== "default");
  for (const brand of brands) {
    if (name.toLowerCase().includes(brand.toLowerCase())) {
      return brand;
    }
  }
  // Try to get first word as brand
  return name.split(" ")[0];
}

function getShortName(name: string, brand: string): string {
  // Remove brand from name and clean up
  let short = name.replace(new RegExp(brand, "i"), "").trim();
  // Remove common prefixes
  short = short.replace(/^(No\.\s*\d+\s*)?/, "").trim();
  // Limit length
  if (short.length > 40) {
    short = short.substring(0, 40) + "...";
  }
  return short || name;
}

const hairProducts = [
  {
    name: "K18 Leave-In Molecular Repair Hair Mask",
    description: "The game-changer for damaged hair. 4 minutes, no rinse, actual repair at the molecular level.",
    amazonId: "B0961ZS96M",
    price: "$29",
  },
  {
    name: "Olaplex No. 3 Hair Perfector",
    description: "The at-home treatment that actually works. Use weekly to strengthen bonds and repair damage.",
    amazonId: "B00SNM5US4",
    price: "$30",
  },
  {
    name: "Redken Acidic Bonding Concentrate Leave-In",
    description: "Strengthens weak bonds and adds incredible shine. A must for color-treated hair.",
    amazonId: "B08P67N41H",
    price: "$36",
  },
  {
    name: "Amika Un.Done Volume & Texture Spray",
    description: "Effortless, lived-in texture without crunchiness. My secret for that 'I woke up like this' look.",
    amazonId: "B00MF80PEQ",
    price: "$29",
  },
  {
    name: "Kenra Volume Mousse 25",
    description: "Firm hold without the crunch. Perfect for volume that lasts all day.",
    amazonId: "B001T6O6R0",
    price: "$22",
  },
  {
    name: "Redken All Soft Shampoo & Conditioner Set",
    description: "For dry or brittle hair. Intense softness and shine with argan oil. A salon favorite.",
    amazonId: "B094F6TRCF",
    price: "$52",
  },
  {
    name: "Redken One United Leave-In Treatment",
    description: "25 benefits in one bottle. Heat protection, detangling, strengthening — does it all.",
    amazonId: "B013IL9XC8",
    price: "$31",
  },
  {
    name: "UNITE 7SECONDS Detangler Leave-In",
    description: "Instant detangling magic. Lightweight, protects from heat & UV. Amazing for extensions too.",
    amazonId: "B00UYBSZ52",
    price: "$35",
  },
];

const supplements = [
  {
    name: "MaryRuth's Liquid Multivitamin + Hair Growth",
    description: "Clinically tested for thicker hair in 3 weeks! Biotin 10,000mcg + Lustriva. My liquid go-to.",
    amazonId: "B0CGKVHHCY",
    price: "$75",
  },
  {
    name: "Thorne Biotin",
    description: "Pharmaceutical-grade biotin for hair, skin & nails. The brand doctors trust.",
    amazonId: "B0797CG5R8",
    price: "$28",
  },
  {
    name: "Thorne Zinc Picolinate 30mg",
    description: "Essential for hair growth. Well-absorbed form that's gentle on stomach.",
    amazonId: "B0012ZQPKG",
    price: "$20",
  },
  {
    name: "Thorne Vitamin D + K2 Liquid",
    description: "600 servings! Most people are deficient & it shows in their hair. Easy drops.",
    amazonId: "B0038NF8MG",
    price: "$34",
  },
  {
    name: "Thorne Iron Bisglycinate",
    description: "Low iron = hair loss. This form absorbs well without stomach upset. Game changer.",
    amazonId: "B0797GZDZL",
    price: "$16",
  },
  {
    name: "Thorne Super EPA Omega-3",
    description: "Supports scalp health, reduces inflammation, adds shine. No fishy aftertaste.",
    amazonId: "B0018CJ17W",
    price: "$41",
  },
  {
    name: "Nutrafol Women",
    description: "The hair growth supplement with actual clinical studies behind it. Takes 3-6 months to see results.",
    amazonId: "B01NGTV7PQ",
    price: "$88",
  },
  {
    name: "Vital Proteins Collagen Peptides",
    description: "I put this in my coffee every morning. Great for hair, skin, and nails.",
    amazonId: "B00K6JUG4K",
    price: "$27",
  },
];

const redLightDevices = [
  {
    name: "iRestore Laser Hair Growth System",
    description: "FDA-cleared helmet for hair regrowth. 25 minutes, every other day.",
    amazonId: "B01MREN0NX",
    price: "$695",
  },
  {
    name: "Revian Red Light Therapy Cap",
    description: "Higher-end option with clinical backing. 10 minutes daily.",
    amazonId: "B09F3X8V5N",
    price: "$995",
  },
];

const luxuryHaircare = [
  {
    name: "Kérastase Nutritive 8H Magic Night Serum",
    description: "Overnight treatment for dry hair. Wake up with soft, shiny, frizz-free hair. Game changer.",
    amazonId: "B0BZZJWGPQ",
    price: "$62",
  },
  {
    name: "Kérastase Nutritive Masquintense Mask",
    description: "Deep nourishing mask for dry hair. Leaves hair irresistibly soft and silky. Worth the splurge.",
    amazonId: "B0BZZK3R5S",
    price: "$65",
  },
  {
    name: "Kérastase Elixir Ultime Hair Oil",
    description: "Lightweight oil for insane shine. Controls frizz up to 96 hours. Heat protection up to 450°F.",
    amazonId: "B0D2LV7DHF",
    price: "$62",
  },
  {
    name: "Kérastase Nectar Thermique Heat Cream",
    description: "Nourishing heat protectant up to 450°F. Reduces frizz, adds shine. For medium to thick hair.",
    amazonId: "B0BZZJ2CZK",
    price: "$50",
  },
];

const toolsAccessories = [
  {
    name: "TYMO Auto Rotating Curling Iron",
    description: "Automatic curling wand — just hold and it curls for you. Beach waves in minutes!",
    amazonId: "B0DP542W7G",
    price: "$50",
  },
  {
    name: "SHASH German Boar Bristle Brush",
    description: "Handmade in Germany since 1869. Gently detangles, no pulling. Smooths and conditions naturally.",
    amazonId: "B07YXC5C26",
    price: "$40",
  },
  {
    name: "Ellen Evyse Boar Bristle Brush",
    description: "Soft bristles for smoothing & detangling. Reduces breakage, adds shine. Comes with cute hair ties!",
    amazonId: "B0DTHGXTSK",
    price: "$16",
  },
  {
    name: "Olivia Garden NanoThermic Round Brush",
    description: "The blowout brush pros use. Ceramic + ion technology. Eliminates frizz, adds shine. Volume for days.",
    amazonId: "B003IX7AIQ",
    price: "$35",
  },
  {
    name: "Dyson Supersonic Hair Dryer",
    description: "The holy grail. No heat damage, crazy fast drying, salon results at home. Worth every penny.",
    amazonId: "B0B4T6RTZ2",
    price: "$430",
  },
  {
    name: "Kitsch Satin Heatless Curlers",
    description: "Sleep in these, wake up with gorgeous curls. Satin is gentle on hair. Zero heat damage.",
    amazonId: "B0CHN56HTC",
    price: "$20",
  },
  {
    name: "Fohufo Initial Letter Claw Clip",
    description: "Cute personalized claw clip with your initial. Glittery, strong grip, perfect for thick hair.",
    amazonId: "B0F636T849",
    price: "$10",
  },
  {
    name: "JIRIS Gold Metal Hair Cuffs",
    description: "Elevate any ponytail instantly. Chic gold geometric cuffs. Gets compliments every time.",
    amazonId: "B0DRY5VBDX",
    price: "$9",
  },
  {
    name: "French Flat Claw Clips (6 pack)",
    description: "So comfy you can sleep in them. Strong hold, no slip. Works for thick or thin hair.",
    amazonId: "B0FMP1ZGJN",
    price: "$12",
  },
  {
    name: "Kitsch Pillow Satin Scrunchies",
    description: "Like a tiny cloud for your hair. No creases, no damage, no frizz. Sleep in them!",
    amazonId: "B0FPPV8V5Q",
    price: "$14",
  },
  {
    name: "Kitsch Ultra-Petite Satin Scrunchies",
    description: "Mini scrunchies, max softness. Perfect for smaller ponytails or kids. 6 pack.",
    amazonId: "B0BJS1NVKM",
    price: "$9",
  },
];

const skincare = [
  {
    name: "CeraVe Hydrating Cleanser",
    description: "Gentle, effective, affordable. I recommend this to everyone.",
    amazonId: "B01MSSDEPK",
    price: "$16",
  },
  {
    name: "La Roche-Posay Anthelios Sunscreen",
    description: "Protects your skin AND helps your scalp. Don't skip the SPF.",
    amazonId: "B004W55086",
    price: "$36",
  },
];

const jewelry = [
  {
    name: "PAVOI 14K Gold Plated Eternity Ring",
    description: "Dainty stackable ring that looks way more expensive than it is. Perfect for everyday.",
    amazonId: "B07BGXMF1Q",
    price: "$14",
  },
  {
    name: "NOKMIT 14K Gold Chunky Statement Ring",
    description: "That trendy chunky gold look without the price tag. So cute stacked or alone.",
    amazonId: "B09XDVPNJS",
    price: "$13",
  },
  {
    name: "PAVOI 14K Gold Wavy Ring",
    description: "Unique wavy design that catches the light. Gets compliments every time.",
    amazonId: "B08RDML4VV",
    price: "$16",
  },
  {
    name: "PAVOI Gold Chunky Open Twist Ring",
    description: "Bold, modern, adjustable. The statement piece your hand needs.",
    amazonId: "B08RDN9L9Z",
    price: "$14",
  },
  {
    name: "Gold Stackable Rings Set",
    description: "Why pick one? Get a set of dainty stackables and mix & match.",
    amazonId: "B0BKWD6D1V",
    price: "$15",
  },
  {
    name: "PAVOI Gold Bangle Bracelet",
    description: "Classic gold bangle that goes with everything. Adjustable and tarnish-resistant.",
    amazonId: "B0BNP5Z8J5",
    price: "$15",
  },
  {
    name: "PAVOI CZ Stackable Ring",
    description: "Sparkly cubic zirconia that looks like real diamonds. Stack 'em up!",
    amazonId: "B08CT7ZY8C",
    price: "$14",
  },
  {
    name: "PAVOI Initial Huggie Earrings",
    description: "Personalized huggies with your initial. Sterling silver with CZ sparkle.",
    amazonId: "B094BXX4XT",
    price: "$15",
  },
  {
    name: "Stunning Flame Rose Gold CZ Studs",
    description: "18K rose gold plated studs that look like real diamonds. So sparkly!",
    amazonId: "B0CH9ZZCYJ",
    price: "$18",
  },
  {
    name: "PAVOI Watch Strap Chain Bracelet",
    description: "That trendy watch-link look. Waterproof and won't tarnish. So chic.",
    amazonId: "B0D53XKP7B",
    price: "$18",
  },
  {
    name: "PAVOI Pear Solitaire CZ Ring",
    description: "Gorgeous pear-shaped stone. Looks like an engagement ring but costs way less.",
    amazonId: "B0D51D919K",
    price: "$16",
  },
  {
    name: "EcoGems Moissanite Tennis Bracelet",
    description: "Lab-grown moissanite that sparkles like crazy. Ethical and stunning.",
    amazonId: "B0DQLJ39G6",
    price: "$189",
  },
  {
    name: "Necklace Layering Clasp",
    description: "Genius little tool to layer multiple necklaces without tangling. Game changer!",
    amazonId: "B0B3RBMDJL",
    price: "$10",
  },
  {
    name: "PAVOI Bubble Letter Necklace",
    description: "Chunky bubble letter initial. So trendy right now. Gets tons of compliments.",
    amazonId: "B0DNMXGVPV",
    price: "$17",
  },
  {
    name: "PAVOI Star Shine Hoop Earrings",
    description: "Celestial CZ hoops that catch the light beautifully. Lightweight and comfy.",
    amazonId: "B0DNM7HCSG",
    price: "$16",
  },
  {
    name: "Kstyle Moissanite Spinelli Ring",
    description: "Interlocked stackable rings with moissanite. Unique and eye-catching.",
    amazonId: "B0FHTLDJT5",
    price: "$45",
  },
  {
    name: "Bopiu Gold Stackable Rings Set",
    description: "18K gold plated CZ rings. Mix metals for that trendy layered look.",
    amazonId: "B0D73B1DS7",
    price: "$16",
  },
  {
    name: "PAVOI Cross Necklace",
    description: "Simple, elegant cross pendant. 14K gold plated, perfect for everyday.",
    amazonId: "B07QTJ1WWL",
    price: "$14",
  },
  {
    name: "FANCIME Birthstone Bracelet",
    description: "Sterling silver with your birthstone. Makes a perfect personalized gift.",
    amazonId: "B0CRVSGD7J",
    price: "$35",
  },
  {
    name: "ABILITH Silver Chunky Earrings",
    description: "Bold chunky hoops. Hypoallergenic and lightweight despite the size.",
    amazonId: "B0D175S8NG",
    price: "$14",
  },
  {
    name: "PAVOI Hammered Bracelet",
    description: "Textured hammered gold look. Waterproof — wear it in the shower!",
    amazonId: "B0DBSMKHLV",
    price: "$16",
  },
];

const summerDresses = [
  {
    name: "OFEEFAN Spaghetti Strap Sundress",
    description: "Perfect vacation dress. Flowy, flattering, and so easy to pack.",
    amazonId: "B0G182H8QY",
    price: "$35",
  },
  {
    name: "SOLY HUX Backless Spaghetti Dress",
    description: "Sexy backless design. Great for date night or beach vacation.",
    amazonId: "B0DSD23HGN",
    price: "$32",
  },
  {
    name: "Chouyatou Striped Smocked Dress",
    description: "Cute stripes with smocked bodice. Comfortable and so flattering.",
    amazonId: "B0D1C9HPV3",
    price: "$38",
  },
  {
    name: "SOLY HUX Striped Sleeveless Dress",
    description: "Classic stripes, easy fit. Perfect for running errands or brunch.",
    amazonId: "B0F4X97CM3",
    price: "$30",
  },
];

const clothing = [
  {
    name: "VDWIP Yellow Cardigan Sweater",
    description: "The happiest cardigan. Soft knit, perfect for layering.",
    amazonId: "B0D7VRCML9",
    price: "$32",
  },
  {
    name: "Women's Stretchy T-Shirt",
    description: "Basic but elevated. Stretchy, flattering, comes in great colors.",
    amazonId: "B0F8BHD2B4",
    price: "$18",
  },
  {
    name: "Barrel Boyfriend Jeans",
    description: "The trendy barrel leg everyone's wearing. Comfy elastic waist.",
    amazonId: "B0CZKDYWH5",
    price: "$42",
  },
  {
    name: "rag & bone Charlie Barrel Jeans",
    description: "Designer quality barrel jeans. Worth the splurge — fit is *chef's kiss*.",
    amazonId: "B0FXQFK54K",
    price: "$225",
  },
];

const homeOrganization = [
  {
    name: "Vtopmart Organization Containers",
    description: "Clear bins that make your pantry look Pinterest-worthy. So satisfying.",
    amazonId: "B0BZNPDHR9",
    price: "$28",
  },
  {
    name: "CiWiVOKi Storage Bins with Bamboo Lids",
    description: "Stackable acrylic bins with bamboo lids. Aesthetic AND functional.",
    amazonId: "B0FND53JHY",
    price: "$28",
  },
  {
    name: "ZOBER Wrapping Paper Storage",
    description: "Finally, a place for all that gift wrap. Fits under the bed!",
    amazonId: "B08WYS4TFY",
    price: "$16",
  },
  {
    name: "Rechargeable Magnetic Light",
    description: "Stick these anywhere — closet, under cabinets. So handy and rechargeable.",
    amazonId: "B0BDF8CVBN",
    price: "$25",
  },
  {
    name: "Woodure Stuffed Animal Organizer",
    description: "Corral all the stuffies! Kids love picking their own animals from it.",
    amazonId: "B0DNDQY4V5",
    price: "$45",
  },
  {
    name: "Snap-Tight Portable Organizer",
    description: "Great for magazines, craft supplies, anything you need to store.",
    amazonId: "B01GTX8KQ2",
    price: "$20",
  },
  {
    name: "Vtopmart Airtight Pantry Containers",
    description: "Keep cereal fresh forever. These seals are no joke.",
    amazonId: "B08ZK5WDWN",
    price: "$35",
  },
  {
    name: "StorageWorks Hyacinth Baskets",
    description: "Natural woven baskets with handles. Pretty enough to leave out.",
    amazonId: "B0881LL44Y",
    price: "$35",
  },
];

const babyLifestyle = [
  {
    name: "Yurhap Checkered Baby Blanket",
    description: "The cutest checkered blanket for baby. Soft, cozy, neutral colors.",
    amazonId: "B0CYC37TNN",
    price: "$18",
  },
];

function ProductCard({ product }: { product: { name: string; description: string; amazonId: string; price: string } }) {
  const affiliateLink = `https://www.amazon.com/dp/${product.amazonId}?tag=${AFFILIATE_TAG}`;
  const brand = getBrand(product.name);
  const shortName = getShortName(product.name, brand);
  const style = brandStyles[brand] || brandStyles["default"];
  
  return (
    <a 
      href={affiliateLink}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 w-44 md:w-52 group block overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className={`aspect-square relative overflow-hidden bg-gradient-to-br ${style.bg}`}>
        {/* Brand name in large script font */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <span 
            className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] italic font-semibold leading-tight"
            style={{ color: style.text }}
          >
            {brand}
          </span>
          <span 
            className="text-[10px] md:text-xs mt-2 uppercase tracking-wider leading-tight max-w-full px-2 opacity-80"
            style={{ color: style.text }}
          >
            {shortName}
          </span>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
          <span 
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-5 py-2.5 text-xs tracking-widest uppercase font-medium rounded-full border-2 border-white text-white"
          >
            Shop Now
          </span>
        </div>
      </div>
      
      {/* Price tag */}
      <div className="bg-white p-3 flex items-center justify-between">
        <span className="text-[#3D3935] font-semibold text-lg">{product.price}</span>
        <span className="text-[#9A9086] text-xs">→</span>
      </div>
    </a>
  );
}

function ProductRow({ title, products }: { title: string; products: { name: string; description: string; amazonId: string; price: string }[] }) {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-5 px-4">
        {title}
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {products.map((product) => (
          <ProductCard key={product.amazonId} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section bg-[#FAF7F2] texture-overlay">
        <div className="container mx-auto text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-[#9A9086] mb-4">
            Curated Picks
          </p>
          <h1 className="text-5xl md:text-6xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Shop My Favorites
          </h1>
          <p className="text-lg text-[#9A9086] max-w-2xl mx-auto">
            Everything here is something I actually use, love, and would recommend to a friend. 
            No random sponsorships — just real recommendations.
          </p>
        </div>
      </section>

      {/* All Products - Horizontal Scrolling Rows */}
      <section className="py-12 bg-[#FAF7F2]">
        <ProductRow title="Hair Treatments & Styling" products={hairProducts} />
        <ProductRow title="Luxury Haircare" products={luxuryHaircare} />
        <ProductRow title="Tools & Accessories" products={toolsAccessories} />
        <ProductRow title="Cute Jewelry Finds" products={jewelry} />
        <ProductRow title="Summer '26 Dresses" products={summerDresses} />
        <ProductRow title="Clothing Picks" products={clothing} />
        <ProductRow title="Home & Organization" products={homeOrganization} />
        <ProductRow title="Baby & Lifestyle" products={babyLifestyle} />
        <ProductRow title="Vitamins & Supplements" products={supplements} />
        <ProductRow title="Skin & Beauty" products={skincare} />
        <ProductRow title="Red Light Therapy" products={redLightDevices} />
      </section>

      {/* Affiliate Disclaimer */}
      <section className="bg-[#3D3935] py-12">
        <div className="container mx-auto text-center">
          <p className="text-[#B5A191] text-sm max-w-2xl mx-auto">
            <strong className="text-[#FAF7F2]">Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. 
            This means I may earn a small commission when you buy through my links, at no extra cost to you. 
            I only recommend products I genuinely use and love.
          </p>
        </div>
      </section>

      {/* Request */}
      <section className="section bg-[#FAF7F2]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-[family-name:var(--font-cormorant)] text-[#3D3935] mb-6">
            Looking for Something Specific?
          </h2>
          <p className="text-[#9A9086] max-w-xl mx-auto mb-8">
            Can't find what you need? DM me on Instagram and I'll point you in the right direction.
          </p>
          <a 
            href="https://instagram.com/colorbyjanine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            @colorbyjanine
          </a>
        </div>
      </section>
    </div>
  );
}

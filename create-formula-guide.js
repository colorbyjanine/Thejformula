const fs = require('fs');
const PDFDocument = require('pdfkit');
const { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, Header, Footer, Table, TableRow, TableCell, WidthType } = require('docx');

const outputDir = '/home/openclaw/.openclaw/workspace/formula-guide-package';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Formula content from the website
const colorTheoryFormulas = [
  {
    name: "Creamy Vanilla Platinum",
    description: "Cool-leaning cream blonde with body that never reads grey",
    melt: "7NB + 8VB (equal parts)",
    ends: "10WG + 10GI + Clear (equal parts)",
    explanation: "The melt uses NB's red-violet undertone to add warmth and depth at level 7 while VB introduces blue-green to fight orange. At the ends, 10WG pushes vanilla warmth with its yellow-orange base, 10GI's blue-gold iridescence adds champagne dimension, and Clear sheers it out to prevent over-deposit.",
    tags: ["Blonde", "Cool Tones", "Level 10"],
  },
  {
    name: "Toasted Honey Bronde",
    description: "Multi-tonal warm blonde that shifts in different light",
    melt: "6N + 7NB (2:1)",
    ends: "9WG + 9GI + 9P (equal parts)",
    explanation: "6N is the neutral anchor with its blue undertone. 7NB adds red-violet warmth to the shadow zone. Three different expressions layer at the ends — 9WG reads buttery (yellow-orange), 9GI brings champagne beige (blue-gold iridescence), 9P's gold-violet balance adds luminosity.",
    tags: ["Bronde", "Warm Tones", "Dimensional"],
  },
  {
    name: "Smoky Mushroom Melt",
    description: "Moody, editorial cool with alive dimension",
    melt: "5N + 6M (equal parts)",
    ends: "8T + 8NA + 8GI (2:1:½)",
    explanation: "5N gives true mid-depth neutral with its blue base. 6M's blue-mahogany undertone creates earthy, muted tones without going ashy. The ends use 8T titanium (silver-blue, the coolest in the line) for steel-silver smoke, 8NA's blue-violet cancels brass, and 8GI keeps the mushroom alive with dimensional blue-gold iridescence.",
    tags: ["Brunette", "Cool Tones", "Editorial"],
  },
  {
    name: "Iced Espresso Brunette",
    description: "Cool, expensive brunette — cold brew, not hot chocolate",
    melt: "4N + 5NB (equal parts)",
    ends: "7NA + 7M + 7NB (2:1:1)",
    explanation: "4N builds rich dark-chocolate base with its blue undertone. 7NA leads with blue-violet to cancel both orange and yellow. 7M's blue-mahogany neutralizes red without going ashy, 7NB's red-violet balances for natural-looking depth.",
    tags: ["Brunette", "Cool Tones", "Rich"],
  },
  {
    name: "Rose Gold Champagne",
    description: "Blush champagne that reads 'Is that her natural color?'",
    melt: "6NB + 7RB (2:1)",
    ends: "9RB + 9P + 9GI (equal parts)",
    explanation: "NB's red-violet creates warm foundation. 7RB weaves in red-brown for warm mauve shadow. At the ends, 9RB delivers soft rose-copper (red-brown undertone), 9P's gold-violet creates luminous cool warmth, 9GI's blue-gold transforms it into champagne territory.",
    tags: ["Rose Gold", "Fashion Color", "Warm Tones"],
  },
  {
    name: "Sun-Drenched Bronze",
    description: "Liquid bronze that catches light like metal",
    melt: "5NB + 6CB (equal parts)",
    ends: "8C + 8WG + 8GG (2:1:1)",
    explanation: "NB's red-violet undertone creates dimension against warm ends. 8C (pure copper, no background) deposits vibrant orange. 8WG's yellow-orange pushes toward honey-butter. 8GG's pure gold on brown-to-tan background softens the whole thing into wearable bronze.",
    tags: ["Bronze", "Warm Tones", "Dimensional"],
  },
];

const signatureFormulas = [
  {
    name: "Gunmetal Ash",
    description: "Deliberately smoked shadow root melting into clean, airy blonde",
    base: "6N + 6T",
    ends: "8NA + 9GI",
    explanation: "Titanium at level 6 is silver-blue — the coolest series in the entire line. Creates graphite-to-platinum gradient. 8NA's blue-violet cancels brass at the transition. 9GI's blue-gold iridescence keeps ends luminous, not flat.",
    tags: ["Signature", "Ash", "Editorial"],
  },
  {
    name: "Golden Hour Velvet",
    description: "Rich warm blonde with violet sophistication underneath",
    base: "7NB + 7GG",
    ends: "8VG + 9GI + 8WG",
    explanation: "NB's red-violet undertone creates depth. GG is pure gold on brown-tan background. 8VG is the star — violet-gold with no background creates multi-dimensional warmth that separates it from basic brass. GI's blue-gold keeps it champagne.",
    tags: ["Signature", "Warm Blonde", "Dimensional"],
  },
  {
    name: "Violet Frost",
    description: "Editorial mahogany shadow dissolving into lavender-platinum",
    base: "7M + 8NA",
    ends: "10P + 10T + 10NB",
    explanation: "7M's blue-mahogany creates plummy, wine-stained shadow. 8NA bridges with blue-violet. The ends are pure ice: P's gold-violet sheers the deposit, T's silver-blue adds steel, NB's red-violet keeps it from going grey. The contrast is editorial.",
    tags: ["Signature", "Fashion Color", "Editorial"],
  },
  {
    name: "Soft Platinum",
    description: "Your-hair-but-platinum — wearable, not severe",
    base: "7NB + 6N",
    ends: "10NB + 9NW + 10P",
    explanation: "The secret is 9NW: Natural Warm has gold undertone on brown-tan background — that whisper of warmth makes platinum wearable versus severe. Pure cool at level 10 can read grey; NW softens without going brassy. NB's red-violet keeps yellow eliminated.",
    tags: ["Signature", "Platinum", "Wearable"],
  },
  {
    name: "Espresso Silk",
    description: "Brunette sorcery — single-level dimension that makes brown look expensive",
    base: "5N + 5NB",
    ends: "5NW + 6NB + 6GI",
    explanation: "This is how you make brown hair look expensive. N's blue undertone plays against NB's red-violet. NW's gold adds warmth, GI's blue-gold iridescence adds reflectivity. Tonal shift without level change — light bouncing between cool and warm creates internal dimension.",
    tags: ["Signature", "Brunette", "Luxury"],
  },
  {
    name: "Amethyst Frost",
    description: "Fashion-forward lavender-platinum without fully committing",
    base: "9M + 7N",
    ends: "10VV + 10N + 10P",
    explanation: "10VV is double violet with NO background — pure violet pigment for true lavender-lilac at level 10. Heavy-hitting yellow cancellation. 10N's blue undertone grounds it, 10P's gold-violet sheers it out. For the client who wants purple-platinum without full fashion commitment.",
    tags: ["Signature", "Fashion Color", "Violet"],
  },
];

const toneReference = {
  cool: [
    { code: "T", name: "Titanium", undertone: "Silver / Blue", desc: "Coolest in the line. Icy silver." },
    { code: "N", name: "Natural", undertone: "Blue", desc: "Cool neutral. Tones yellow." },
    { code: "NA", name: "Natural Ash", undertone: "Blue / Violet", desc: "Cancels orange AND yellow." },
    { code: "V", name: "Violet", undertone: "Blue / Violet", desc: "Cancels yellow. Watch for green on orange." },
    { code: "VB", name: "Violet Blue", undertone: "Blue / Green", desc: "Cool blonde. Can go green on yellow." },
    { code: "M", name: "Matte", undertone: "Blue / Mahogany", desc: "Neutralizes red without ash." },
    { code: "GI", name: "Gold Iridescent", undertone: "Blue / Gold", desc: "Champagne beige. Blonde favorite." },
    { code: "G", name: "Gold", undertone: "Green / Yellow", desc: "GREEN-gold, not warm gold!" },
  ],
  warm: [
    { code: "NB", name: "Neutral Brown", undertone: "Red / Violet", desc: "TRUE natural. Must use for gray coverage." },
    { code: "NW", name: "Natural Warm", undertone: "Gold", desc: "Warmth with restraint." },
    { code: "WG", name: "Warm Gold", undertone: "Yellow / Orange", desc: "Perfect for tinting back to brown." },
    { code: "GG", name: "Gold Gold", undertone: "Gold (Pure)", desc: "Intense warmth. Double gold." },
    { code: "P", name: "Pearl", undertone: "Gold / Violet", desc: "Luminous. Never goes flat." },
    { code: "CB", name: "Copper Brown", undertone: "Red / Orange", desc: "Rustic red-brown." },
    { code: "RB", name: "Red Brown", undertone: "Red / Brown", desc: "Rose, cinnamon, mauve." },
    { code: "GRo", name: "Gold Rosé", undertone: "Gold / Rosé", desc: "Rose-gold blonde." },
  ],
  vibrant: [
    { code: "AA", name: "Double Copper", undertone: "Orange / Orange", desc: "Vibrant copper. NOT ash!" },
    { code: "C", name: "Copper", undertone: "Orange", desc: "Pure copper. Bright." },
    { code: "CC", name: "Copper Copper", undertone: "Orange / Red", desc: "Intensely pigmented copper-red." },
    { code: "R", name: "Red", undertone: "Red", desc: "Pure red. Very vibrant." },
    { code: "RV", name: "Red Violet", undertone: "Red / Violet", desc: "Plum and berry tones." },
    { code: "VV", name: "Violet Violet", undertone: "Violet", desc: "Heavy-hitting violet. Lavender toner." },
    { code: "VG", name: "Violet Gold", undertone: "Violet / Gold", desc: "Multi-dimensional beige." },
    { code: "VRo", name: "Violet Rosé", undertone: "Violet / Rosé", desc: "Soft rosy-violet." },
  ]
};

// Create PDF
function createPDF() {
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 60, bottom: 60, left: 60, right: 60 },
    bufferPages: true
  });
  
  const stream = fs.createWriteStream(`${outputDir}/The-J-Formula-Shades-EQ-Guide.pdf`);
  doc.pipe(stream);
  
  // Cover Page
  doc.rect(0, 0, 612, 792).fill('#FAF7F2');
  doc.rect(0, 0, 612, 15).fill('#9CAF88');
  doc.rect(0, 777, 612, 15).fill('#9CAF88');
  
  doc.fontSize(14).fillColor('#9CAF88').text('THE J FORMULA', 0, 200, { align: 'center' });
  doc.moveDown(2);
  doc.fontSize(42).fillColor('#3D3935').font('Helvetica-Bold').text('SHADES EQ', { align: 'center' });
  doc.fontSize(42).text('FORMULA GUIDE', { align: 'center' });
  doc.moveDown(1);
  doc.fontSize(16).fillColor('#666666').font('Helvetica').text('12 Professional Formulas + Complete Tone Reference', { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(12).text('by Janine Fernandez • 15 Years Behind the Chair', { align: 'center' });
  
  doc.moveDown(4);
  doc.fontSize(10).fillColor('#9A9086').text('Color Theory Based • Salon Tested • Dimension Focused', { align: 'center' });
  
  doc.addPage();
  
  // Table of Contents
  doc.rect(0, 0, 612, 792).fill('#FAF7F2');
  doc.fontSize(24).fillColor('#3D3935').font('Helvetica-Bold').text('CONTENTS', 60, 60);
  doc.moveTo(60, 95).lineTo(200, 95).strokeColor('#9CAF88').lineWidth(2).stroke();
  
  doc.font('Helvetica').fontSize(12).fillColor('#3D3935');
  const toc = [
    { title: 'Understanding the Three Backgrounds', page: 3 },
    { title: 'Color Theory Formulas (6 Formulas)', page: 4 },
    { title: 'Signature Formulas (6 Formulas)', page: 7 },
    { title: 'Complete Shades EQ Tone Reference', page: 10 },
    { title: 'Quick Cancellation Guide', page: 12 },
  ];
  
  let y = 120;
  toc.forEach(item => {
    doc.text(item.title, 60, y);
    doc.text(item.page.toString(), 500, y, { align: 'right' });
    y += 25;
  });
  
  doc.addPage();
  
  // Understanding Backgrounds
  doc.rect(0, 0, 612, 792).fill('#FFFFFF');
  doc.fontSize(20).fillColor('#3D3935').font('Helvetica-Bold').text('UNDERSTANDING THE THREE BACKGROUNDS', 60, 60);
  doc.moveTo(60, 90).lineTo(400, 90).strokeColor('#9CAF88').lineWidth(2).stroke();
  
  doc.font('Helvetica').fontSize(11).fillColor('#333333');
  doc.text('Every Shades EQ shade has a background foundation. Understanding this is key to formulating.', 60, 110, { width: 492 });
  
  // Background boxes
  let boxY = 150;
  
  // Cool
  doc.rect(60, boxY, 150, 120).fill('#2c3e50');
  doc.fontSize(14).fillColor('#FFFFFF').font('Helvetica-Bold').text('BLACK TO GRAY', 70, boxY + 15);
  doc.fontSize(9).font('Helvetica').text('Cool foundation that diminishes warmth. Cancels orange and yellow.', 70, boxY + 40, { width: 130 });
  doc.fontSize(8).text('T, N, NA, V, VB, M, GI, G', 70, boxY + 85, { width: 130 });
  
  // Warm
  doc.rect(230, boxY, 150, 120).fill('#8B6914');
  doc.fontSize(14).fillColor('#FFFFFF').font('Helvetica-Bold').text('BROWN TO TAN', 240, boxY + 15);
  doc.fontSize(9).font('Helvetica').text('Balanced, natural foundation. Great for gray coverage. Enhances warmth.', 240, boxY + 40, { width: 130 });
  doc.fontSize(8).text('NB, NW, WG, GG, P, CB, RB, GRo', 240, boxY + 85, { width: 130 });
  
  // Vibrant
  doc.rect(400, boxY, 150, 120).fill('#c0392b');
  doc.fontSize(14).fillColor('#FFFFFF').font('Helvetica-Bold').text('NO BACKGROUND', 410, boxY + 15);
  doc.fontSize(9).font('Helvetica').text('Most vibrant, true-to-tone results. Pure reflect with no dilution.', 410, boxY + 40, { width: 130 });
  doc.fontSize(8).text('AA, C, CC, R, RV, VV, VG, VRo', 410, boxY + 85, { width: 130 });
  
  // Key principle
  doc.rect(60, 300, 492, 60).fill('#eef6ff');
  doc.rect(60, 300, 4, 60).fill('#3498db');
  doc.fontSize(11).fillColor('#2471a3').font('Helvetica-Bold').text('KEY PRINCIPLE', 75, 315);
  doc.font('Helvetica').fillColor('#333333').text('To neutralize unwanted tone, use its opposite: Violet cancels Yellow, Blue cancels Orange, Green cancels Red.', 75, 335, { width: 460 });
  
  doc.addPage();
  
  // Color Theory Formulas
  doc.rect(0, 0, 612, 792).fill('#E8DDD4');
  doc.fontSize(20).fillColor('#3D3935').font('Helvetica-Bold').text('COLOR THEORY FORMULAS', 60, 60);
  doc.moveTo(60, 90).lineTo(300, 90).strokeColor('#9CAF88').lineWidth(2).stroke();
  
  let formulaY = 110;
  colorTheoryFormulas.forEach((formula, i) => {
    if (formulaY > 650) {
      doc.addPage();
      doc.rect(0, 0, 612, 792).fill('#E8DDD4');
      formulaY = 60;
    }
    
    doc.rect(60, formulaY, 492, 100).fill('#FFFFFF');
    
    doc.fontSize(14).fillColor('#3D3935').font('Helvetica-Bold').text(formula.name, 75, formulaY + 15);
    doc.fontSize(9).fillColor('#666666').font('Helvetica-Oblique').text(formula.description, 75, formulaY + 32);
    
    doc.fontSize(9).fillColor('#9A9086').font('Helvetica').text('MELT:', 75, formulaY + 52);
    doc.fillColor('#3D3935').font('Helvetica-Bold').text(formula.melt, 115, formulaY + 52);
    
    doc.fillColor('#9A9086').font('Helvetica').text('ENDS:', 280, formulaY + 52);
    doc.fillColor('#3D3935').font('Helvetica-Bold').text(formula.ends, 320, formulaY + 52);
    
    doc.fontSize(8).fillColor('#666666').font('Helvetica').text(formula.explanation, 75, formulaY + 70, { width: 460 });
    
    formulaY += 115;
  });
  
  doc.addPage();
  
  // Signature Formulas
  doc.rect(0, 0, 612, 792).fill('#3D3935');
  doc.fontSize(12).fillColor('#B5A191').text('✦ JANINE\'S SIGNATURES ✦', 0, 50, { align: 'center' });
  doc.fontSize(20).fillColor('#FAF7F2').font('Helvetica-Bold').text('SIGNATURE FORMULAS', 0, 75, { align: 'center' });
  
  formulaY = 110;
  signatureFormulas.forEach((formula, i) => {
    if (formulaY > 650) {
      doc.addPage();
      doc.rect(0, 0, 612, 792).fill('#3D3935');
      formulaY = 60;
    }
    
    doc.rect(60, formulaY, 492, 100).fill('#2A2826');
    doc.rect(60, formulaY, 4, 100).fill('#9CAF88');
    
    doc.fontSize(14).fillColor('#FAF7F2').font('Helvetica-Bold').text(formula.name, 75, formulaY + 15);
    doc.fontSize(9).fillColor('#B5A191').font('Helvetica-Oblique').text(formula.description, 75, formulaY + 32);
    
    doc.fontSize(9).fillColor('#B5A191').font('Helvetica').text('BASE:', 75, formulaY + 52);
    doc.fillColor('#FAF7F2').font('Helvetica-Bold').text(formula.base, 115, formulaY + 52);
    
    doc.fillColor('#B5A191').font('Helvetica').text('ENDS:', 280, formulaY + 52);
    doc.fillColor('#FAF7F2').font('Helvetica-Bold').text(formula.ends, 320, formulaY + 52);
    
    doc.fontSize(8).fillColor('#B5A191').font('Helvetica').text(formula.explanation, 75, formulaY + 70, { width: 460 });
    
    formulaY += 115;
  });
  
  doc.addPage();
  
  // Tone Reference - Cool
  doc.rect(0, 0, 612, 792).fill('#FAF7F2');
  doc.fontSize(20).fillColor('#3D3935').font('Helvetica-Bold').text('SHADES EQ TONE REFERENCE', 60, 60);
  doc.moveTo(60, 90).lineTo(350, 90).strokeColor('#9CAF88').lineWidth(2).stroke();
  
  doc.fontSize(14).fillColor('#2c3e50').font('Helvetica-Bold').text('❄️ COOL SERIES — Black to Gray Background', 60, 110);
  
  let toneY = 135;
  toneReference.cool.forEach(tone => {
    doc.rect(60, toneY, 230, 45).fill('#FFFFFF');
    doc.rect(60, toneY, 3, 45).fill('#2c3e50');
    doc.fontSize(16).fillColor('#2c3e50').font('Helvetica-Bold').text(tone.code, 75, toneY + 8);
    doc.fontSize(9).fillColor('#9A9086').font('Helvetica').text(tone.name, 100, toneY + 10);
    doc.fontSize(8).fillColor('#3498db').text(tone.undertone, 75, toneY + 25);
    doc.fillColor('#666666').text(tone.desc, 75, toneY + 35, { width: 200 });
    
    if (toneReference.cool.indexOf(tone) < 4) {
      const rightTone = toneReference.cool[toneReference.cool.indexOf(tone) + 4];
      if (rightTone) {
        doc.rect(310, toneY, 230, 45).fill('#FFFFFF');
        doc.rect(310, toneY, 3, 45).fill('#2c3e50');
        doc.fontSize(16).fillColor('#2c3e50').font('Helvetica-Bold').text(rightTone.code, 325, toneY + 8);
        doc.fontSize(9).fillColor('#9A9086').font('Helvetica').text(rightTone.name, 350, toneY + 10);
        doc.fontSize(8).fillColor('#3498db').text(rightTone.undertone, 325, toneY + 25);
        doc.fillColor('#666666').text(rightTone.desc, 325, toneY + 35, { width: 200 });
      }
    }
    
    if (toneReference.cool.indexOf(tone) < 4) toneY += 55;
  });
  
  toneY += 20;
  doc.fontSize(14).fillColor('#8B6914').font('Helvetica-Bold').text('🔥 WARM SERIES — Brown to Tan Background', 60, toneY);
  toneY += 25;
  
  toneReference.warm.slice(0, 4).forEach((tone, i) => {
    doc.rect(60, toneY, 230, 45).fill('#FFFFFF');
    doc.rect(60, toneY, 3, 45).fill('#8B6914');
    doc.fontSize(16).fillColor('#8B6914').font('Helvetica-Bold').text(tone.code, 75, toneY + 8);
    doc.fontSize(9).fillColor('#9A9086').font('Helvetica').text(tone.name, 100, toneY + 10);
    doc.fontSize(8).fillColor('#e67e22').text(tone.undertone, 75, toneY + 25);
    doc.fillColor('#666666').text(tone.desc, 75, toneY + 35, { width: 200 });
    
    const rightTone = toneReference.warm[i + 4];
    if (rightTone) {
      doc.rect(310, toneY, 230, 45).fill('#FFFFFF');
      doc.rect(310, toneY, 3, 45).fill('#8B6914');
      doc.fontSize(16).fillColor('#8B6914').font('Helvetica-Bold').text(rightTone.code, 325, toneY + 8);
      doc.fontSize(9).fillColor('#9A9086').font('Helvetica').text(rightTone.name, 350, toneY + 10);
      doc.fontSize(8).fillColor('#e67e22').text(rightTone.undertone, 325, toneY + 25);
      doc.fillColor('#666666').text(rightTone.desc, 325, toneY + 35, { width: 200 });
    }
    
    toneY += 55;
  });
  
  doc.addPage();
  
  // Tone Reference - Vibrant
  doc.rect(0, 0, 612, 792).fill('#FAF7F2');
  doc.fontSize(14).fillColor('#c0392b').font('Helvetica-Bold').text('💥 VIBRANT SERIES — No Background', 60, 60);
  
  toneY = 90;
  toneReference.vibrant.slice(0, 4).forEach((tone, i) => {
    doc.rect(60, toneY, 230, 45).fill('#FFFFFF');
    doc.rect(60, toneY, 3, 45).fill('#c0392b');
    doc.fontSize(16).fillColor('#c0392b').font('Helvetica-Bold').text(tone.code, 75, toneY + 8);
    doc.fontSize(9).fillColor('#9A9086').font('Helvetica').text(tone.name, 100, toneY + 10);
    doc.fontSize(8).fillColor('#e74c3c').text(tone.undertone, 75, toneY + 25);
    doc.fillColor('#666666').text(tone.desc, 75, toneY + 35, { width: 200 });
    
    const rightTone = toneReference.vibrant[i + 4];
    if (rightTone) {
      doc.rect(310, toneY, 230, 45).fill('#FFFFFF');
      doc.rect(310, toneY, 3, 45).fill('#c0392b');
      doc.fontSize(16).fillColor('#c0392b').font('Helvetica-Bold').text(rightTone.code, 325, toneY + 8);
      doc.fontSize(9).fillColor('#9A9086').font('Helvetica').text(rightTone.name, 350, toneY + 10);
      doc.fontSize(8).fillColor('#e74c3c').text(rightTone.undertone, 325, toneY + 25);
      doc.fillColor('#666666').text(rightTone.desc, 325, toneY + 35, { width: 200 });
    }
    
    toneY += 55;
  });
  
  // Quick Cancellation Guide
  toneY += 30;
  doc.rect(60, toneY, 492, 120).fill('#FFFFFF');
  doc.fontSize(14).fillColor('#3D3935').font('Helvetica-Bold').text('🗺️ QUICK CANCELLATION REFERENCE', 75, toneY + 15);
  
  const cancellations = [
    { color: '#7b2d8e', text: 'Violet cancels Yellow' },
    { color: '#4a69bd', text: 'Blue cancels Orange' },
    { color: '#27ae60', text: 'Green cancels Red' },
    { color: '#5d3fd3', text: 'Blue/Violet cancels Yellow-Orange' },
    { color: '#1abc9c', text: 'Blue/Green cancels Red-Orange' },
    { color: '#9b59b6', text: 'Red/Violet cancels Yellow-Green' },
  ];
  
  let cancelY = toneY + 40;
  cancellations.forEach((c, i) => {
    const x = i < 3 ? 75 : 300;
    const y = i < 3 ? cancelY + (i * 22) : cancelY + ((i - 3) * 22);
    doc.circle(x, y + 5, 5).fill(c.color);
    doc.fontSize(10).fillColor('#333333').font('Helvetica').text(c.text, x + 15, y);
  });
  
  // Footer
  doc.addPage();
  doc.rect(0, 0, 612, 792).fill('#9CAF88');
  doc.fontSize(32).fillColor('#FAF7F2').font('Helvetica-Bold').text('THANK YOU', 0, 300, { align: 'center' });
  doc.moveDown(1);
  doc.fontSize(14).font('Helvetica').text('Questions? DM me @colorbyjanine', { align: 'center' });
  doc.moveDown(2);
  doc.fontSize(12).text('thejformula.com', { align: 'center' });
  
  // Add page numbers
  const pages = doc.bufferedPageRange();
  for (let i = 0; i < pages.count; i++) {
    doc.switchToPage(i);
    doc.fontSize(8).fillColor('#999999').text(`${i + 1}`, 306, 760, { align: 'center' });
  }
  
  doc.end();
  
  return new Promise(resolve => {
    stream.on('finish', () => {
      console.log('✓ PDF created: The-J-Formula-Shades-EQ-Guide.pdf');
      resolve();
    });
  });
}

// Create README
function createReadme() {
  const readme = `
THE J FORMULA - SHADES EQ FORMULA GUIDE
========================================

Thank you for purchasing the complete Shades EQ Formula Guide!

WHAT'S INSIDE:
--------------
• 12 Professional Formulas (6 Color Theory + 6 Signature)
• Complete Shades EQ Tone Reference
• The Three Backgrounds Explained
• Quick Cancellation Guide
• Color Theory Fundamentals

HOW TO USE:
-----------
1. Read the "Three Backgrounds" section first - this is foundational
2. Use the Tone Reference as your cheat sheet when formulating
3. Try the formulas as written, then adjust for your client's level
4. Remember: these are starting points - adjust ratios as needed

PRO TIPS:
---------
• Always assess underlying pigment before formulating
• The ratio matters - 2:1 hits different than 1:1
• Clear is your friend for sheering out deposit
• Processing time affects depth - watch your clock

QUESTIONS?
----------
DM me on Instagram: @colorbyjanine
Website: thejformula.com

© ${new Date().getFullYear()} The J Formula. All rights reserved.
For personal/professional use only. Do not redistribute.
`;
  
  fs.writeFileSync(`${outputDir}/README.txt`, readme.trim());
  console.log('✓ README.txt created');
}

async function main() {
  console.log('\n📚 Creating Shades EQ Formula Guide\n');
  console.log('='.repeat(50));
  
  await createPDF();
  createReadme();
  
  console.log('\n' + '='.repeat(50));
  console.log('✅ Formula Guide ready at:', outputDir);
}

main().catch(console.error);

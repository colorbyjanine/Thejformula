const { createCanvas } = require('canvas');
const fs = require('fs');

const width = 1200;
const height = 1200;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background gradient effect
ctx.fillStyle = '#3D3935';
ctx.fillRect(0, 0, width, height);

// Decorative elements
ctx.fillStyle = '#9CAF88';
ctx.fillRect(0, 0, width, 20);
ctx.fillRect(0, height - 20, width, 20);

// Inner frame
ctx.strokeStyle = '#9CAF88';
ctx.lineWidth = 2;
ctx.strokeRect(60, 80, width - 120, height - 160);

// "FOR STYLISTS" tag
ctx.font = 'bold 18px Arial';
ctx.fillStyle = '#9CAF88';
ctx.textAlign = 'center';
ctx.fillText('FOR PROFESSIONAL STYLISTS', width/2, 140);

// Main title
ctx.font = 'bold 64px Georgia';
ctx.fillStyle = '#FAF7F2';
ctx.fillText('SHADES EQ', width/2, 280);
ctx.fillText('FORMULA', width/2, 360);
ctx.fillText('GUIDE', width/2, 440);

// Decorative line
ctx.beginPath();
ctx.moveTo(350, 480);
ctx.lineTo(850, 480);
ctx.strokeStyle = '#9CAF88';
ctx.lineWidth = 3;
ctx.stroke();

// Subtitle
ctx.font = '24px Georgia';
ctx.fillStyle = '#B5A191';
ctx.fillText('12 Professional Formulas', width/2, 540);
ctx.fillText('+ Complete Tone Reference', width/2, 575);

// Features in boxes
const features = [
  '6 Color Theory Formulas',
  '6 Signature Formulas',
  'Full Tone Reference Chart',
  'Cancellation Guide'
];

ctx.font = '18px Arial';
let featureY = 640;
features.forEach(feature => {
  // Feature box
  ctx.fillStyle = '#4A4540';
  ctx.fillRect(300, featureY, 600, 40);
  ctx.fillStyle = '#9CAF88';
  ctx.fillRect(300, featureY, 5, 40);
  
  ctx.fillStyle = '#FAF7F2';
  ctx.textAlign = 'left';
  ctx.fillText('✓  ' + feature, 320, featureY + 27);
  ctx.textAlign = 'center';
  
  featureY += 55;
});

// Price badge
ctx.beginPath();
ctx.arc(width - 140, 200, 80, 0, Math.PI * 2);
ctx.fillStyle = '#9CAF88';
ctx.fill();

ctx.font = 'bold 42px Arial';
ctx.fillStyle = '#FAF7F2';
ctx.fillText('$27', width - 140, 210);

// Bottom branding
ctx.fillStyle = '#FAF7F2';
ctx.fillRect(60, height - 100, width - 120, 60);
ctx.font = 'bold 28px Georgia';
ctx.fillStyle = '#3D3935';
ctx.fillText('THE J FORMULA', width/2, height - 60);

// "By Janine" subtitle
ctx.font = '16px Georgia';
ctx.fillStyle = '#9A9086';
ctx.fillText('by Janine Fernandez • 15 Years Behind the Chair', width/2, height - 130);

// Save
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('/home/openclaw/.openclaw/workspace/formula-guide-product-image.png', buffer);
console.log('✅ Created: formula-guide-product-image.png');

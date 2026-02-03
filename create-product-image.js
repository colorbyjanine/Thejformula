const { createCanvas } = require('canvas');
const fs = require('fs');

// Create 1200x1200 product image (square for Payhip)
const width = 1200;
const height = 1200;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background - warm cream
ctx.fillStyle = '#FAF7F2';
ctx.fillRect(0, 0, width, height);

// Decorative top border - sage green
ctx.fillStyle = '#9CAF88';
ctx.fillRect(0, 0, width, 20);

// Main content area - subtle border
ctx.strokeStyle = '#E8DDD4';
ctx.lineWidth = 3;
ctx.strokeRect(80, 100, width - 160, height - 200);

// Inner decorative frame
ctx.strokeStyle = '#9CAF88';
ctx.lineWidth = 1;
ctx.strokeRect(100, 120, width - 200, height - 240);

// California bear icon area (circle)
ctx.beginPath();
ctx.arc(width/2, 280, 80, 0, Math.PI * 2);
ctx.fillStyle = '#3D3935';
ctx.fill();

// Bear emoji text
ctx.font = 'bold 80px Arial';
ctx.fillStyle = '#FAF7F2';
ctx.textAlign = 'center';
ctx.fillText('🐻', width/2, 305);

// "CALIFORNIA EDITION" badge
ctx.font = 'bold 24px Georgia';
ctx.fillStyle = '#9CAF88';
ctx.fillText('CALIFORNIA EDITION', width/2, 400);

// Main title
ctx.font = 'bold 72px Georgia';
ctx.fillStyle = '#3D3935';
ctx.fillText('STYLIST', width/2, 520);
ctx.fillText('LEGAL', width/2, 600);
ctx.fillText('VAULT', width/2, 680);

// Decorative line
ctx.beginPath();
ctx.moveTo(350, 720);
ctx.lineTo(850, 720);
ctx.strokeStyle = '#9CAF88';
ctx.lineWidth = 3;
ctx.stroke();

// Subtitle
ctx.font = '28px Georgia';
ctx.fillStyle = '#666666';
ctx.fillText('Professional Templates for', width/2, 780);
ctx.fillText('Beauty Professionals', width/2, 815);

// Feature bullets
ctx.font = '22px Arial';
ctx.fillStyle = '#3D3935';
const features = [
  '✓ AB-5 Compliant Contracts',
  '✓ Client Waivers & Releases', 
  '✓ Editable Word + PDF Formats',
  '✓ 6 Essential Templates'
];

features.forEach((feature, i) => {
  ctx.fillText(feature, width/2, 890 + (i * 35));
});

// Bottom branding
ctx.fillStyle = '#9CAF88';
ctx.fillRect(0, height - 80, width, 80);

ctx.font = 'bold 32px Georgia';
ctx.fillStyle = '#FAF7F2';
ctx.fillText('THE J FORMULA', width/2, height - 35);

// Price badge (corner)
ctx.beginPath();
ctx.arc(width - 120, 180, 70, 0, Math.PI * 2);
ctx.fillStyle = '#3D3935';
ctx.fill();

ctx.font = 'bold 36px Arial';
ctx.fillStyle = '#FAF7F2';
ctx.fillText('$97', width - 120, 190);

// Save
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('/home/openclaw/.openclaw/workspace/vault-product-image.png', buffer);
console.log('✅ Created: vault-product-image.png (1200x1200)');

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function createQuotePost() {
  // Load the base image
  const baseImage = await loadImage('./organic-bg.jpg');
  
  // Create canvas (Instagram square)
  const width = 1080;
  const height = 1080;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Calculate crop to make it square (center crop)
  const imgAspect = baseImage.width / baseImage.height;
  let sx, sy, sWidth, sHeight;
  
  if (imgAspect > 1) {
    sHeight = baseImage.height;
    sWidth = baseImage.height;
    sx = (baseImage.width - sWidth) / 2;
    sy = 0;
  } else {
    sWidth = baseImage.width;
    sHeight = baseImage.width;
    sx = 0;
    sy = (baseImage.height - sHeight) / 2;
  }
  
  // Draw base image
  ctx.drawImage(baseImage, sx, sy, sWidth, sHeight, 0, 0, width, height);
  
  // Add warm earthy overlay (brown/tan - NO PINK)
  ctx.fillStyle = 'rgba(61, 57, 53, 0.35)'; // Warm dark brown
  ctx.fillRect(0, 0, width, height);
  
  // Quote - stoic/empowering
  const quote = "Build in silence.\nLet success make the noise.";
  
  // Main quote styling
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#FAF7F2'; // Cream
  ctx.font = 'italic 58px Georgia, serif';
  
  // Draw quote lines
  const lines = quote.split('\n');
  const lineHeight = 80;
  const startY = height / 2 - 20;
  
  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + (i * lineHeight) - (lines.length * lineHeight / 2) + lineHeight/2);
  });
  
  // Decorative line above quote - sage green
  ctx.strokeStyle = '#9CAF88'; // Sage
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width/2 - 50, startY - 100);
  ctx.lineTo(width/2 + 50, startY - 100);
  ctx.stroke();
  
  // Decorative line below quote - tan
  ctx.strokeStyle = '#B5A191'; // Tan
  ctx.beginPath();
  ctx.moveTo(width/2 - 50, startY + 100);
  ctx.lineTo(width/2 + 50, startY + 100);
  ctx.stroke();
  
  // Watermark
  ctx.font = '16px Arial, sans-serif';
  ctx.fillStyle = 'rgba(250, 247, 242, 0.5)';
  ctx.fillText('THE J FORMULA', width / 2, height - 45);
  
  // Save
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync('./girlboss-quote-2.jpg', buffer);
  
  console.log('Created: girlboss-quote-2.jpg');
}

createQuotePost().catch(console.error);

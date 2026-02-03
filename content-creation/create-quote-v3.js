const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function createQuotePost() {
  // Load the linen texture
  const baseImage = await loadImage('./linen-texture.jpg');
  
  const width = 1080;
  const height = 1080;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Crop to square
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
  
  // Draw base
  ctx.drawImage(baseImage, sx, sy, sWidth, sHeight, 0, 0, width, height);
  
  // Very subtle warm overlay
  ctx.fillStyle = 'rgba(232, 221, 212, 0.3)'; // Light tan overlay
  ctx.fillRect(0, 0, width, height);
  
  // Quote
  const quote = "Discipline is choosing\nbetween what you want now\nand what you want most.";
  
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#3D3935'; // Dark brown text
  ctx.font = 'italic 48px Georgia, serif';
  
  const lines = quote.split('\n');
  const lineHeight = 65;
  const startY = height / 2;
  
  lines.forEach((line, i) => {
    const y = startY + (i * lineHeight) - ((lines.length - 1) * lineHeight / 2);
    ctx.fillText(line, width / 2, y);
  });
  
  // Small sage accent dot above
  ctx.fillStyle = '#9CAF88';
  ctx.beginPath();
  ctx.arc(width/2, startY - 120, 6, 0, Math.PI * 2);
  ctx.fill();
  
  // Watermark
  ctx.font = '16px Arial, sans-serif';
  ctx.fillStyle = 'rgba(61, 57, 53, 0.4)';
  ctx.fillText('THE J FORMULA', width / 2, height - 45);
  
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync('./girlboss-quote-3.jpg', buffer);
  
  console.log('Created: girlboss-quote-3.jpg');
}

createQuotePost().catch(console.error);

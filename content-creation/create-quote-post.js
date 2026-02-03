const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

async function createQuotePost() {
  // Load the base image
  const baseImage = await loadImage('./base-photo.jpg');
  
  // Create canvas (Instagram square)
  const width = 1080;
  const height = 1080;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Calculate crop to make it square (center crop)
  const imgAspect = baseImage.width / baseImage.height;
  let sx, sy, sWidth, sHeight;
  
  if (imgAspect > 1) {
    // Image is wider than tall
    sHeight = baseImage.height;
    sWidth = baseImage.height;
    sx = (baseImage.width - sWidth) / 2;
    sy = 0;
  } else {
    // Image is taller than wide
    sWidth = baseImage.width;
    sHeight = baseImage.width;
    sx = 0;
    sy = (baseImage.height - sHeight) / 2;
  }
  
  // Draw image
  ctx.drawImage(baseImage, sx, sy, sWidth, sHeight, 0, 0, width, height);
  
  // Add warm overlay for brand cohesion (earthy tone)
  ctx.fillStyle = 'rgba(61, 57, 53, 0.4)'; // Dark brown overlay
  ctx.fillRect(0, 0, width, height);
  
  // Quote text
  const quote = "She remembered who she was\nand the game changed.";
  const author = "— Lalah Delia";
  
  // Set up text styling
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Main quote - elegant serif-like style
  ctx.fillStyle = '#FAF7F2'; // Cream color
  ctx.font = 'italic 52px Georgia, serif';
  
  // Draw quote with line breaks
  const lines = quote.split('\n');
  const lineHeight = 70;
  const startY = height / 2 - (lines.length * lineHeight) / 2;
  
  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + (i * lineHeight));
  });
  
  // Author attribution
  ctx.font = '28px Georgia, serif';
  ctx.fillStyle = '#B5A191'; // Muted tan
  ctx.fillText(author, width / 2, startY + (lines.length * lineHeight) + 40);
  
  // Add subtle brand element - small line
  ctx.strokeStyle = '#9CAF88'; // Sage green
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width/2 - 60, startY - 50);
  ctx.lineTo(width/2 + 60, startY - 50);
  ctx.stroke();
  
  // Add "THE J FORMULA" watermark at bottom
  ctx.font = '18px Arial, sans-serif';
  ctx.fillStyle = 'rgba(250, 247, 242, 0.6)';
  ctx.letterSpacing = '4px';
  ctx.fillText('THE J FORMULA', width / 2, height - 50);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync('./girlboss-quote-1.jpg', buffer);
  
  console.log('Created: girlboss-quote-1.jpg');
}

createQuotePost().catch(console.error);

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// Original quotes written for The J Formula brand
const posts = [
  {
    bg: 'bg1.jpg',
    quote: "Your glow-up isn't just\nabout your hair.\nIt's about becoming\nwho you were meant to be.",
    output: 'original-1.jpg',
    style: 'light' // light text on dark overlay
  },
  {
    bg: 'bg2.jpg', 
    quote: "She stopped waiting\nfor permission\nand started building.",
    output: 'original-2.jpg',
    style: 'light'
  },
  {
    bg: 'linen-texture.jpg',
    quote: "Confidence isn't thinking\nyou're better than anyone.\nIt's knowing you don't have\nto compare.",
    output: 'original-3.jpg',
    style: 'dark' // dark text on light bg
  },
  {
    bg: 'bg3.jpg',
    quote: "Small steps.\nConsistent effort.\nUnstoppable results.",
    output: 'original-4.jpg',
    style: 'light'
  },
  {
    bg: 'organic-bg.jpg',
    quote: "You're not behind.\nYou're on your own timeline.\nKeep going.",
    output: 'original-5.jpg',
    style: 'light'
  }
];

async function createPost(config) {
  const baseImage = await loadImage(config.bg);
  
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
  
  ctx.drawImage(baseImage, sx, sy, sWidth, sHeight, 0, 0, width, height);
  
  // Overlay based on style
  if (config.style === 'light') {
    ctx.fillStyle = 'rgba(61, 57, 53, 0.45)'; // Brown overlay
  } else {
    ctx.fillStyle = 'rgba(250, 247, 242, 0.4)'; // Cream overlay
  }
  ctx.fillRect(0, 0, width, height);
  
  // Text color based on style
  const textColor = config.style === 'light' ? '#FAF7F2' : '#3D3935';
  const accentColor = '#9CAF88'; // Sage
  const subtleColor = config.style === 'light' ? 'rgba(250,247,242,0.5)' : 'rgba(61,57,53,0.4)';
  
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = textColor;
  
  const lines = config.quote.split('\n');
  const lineHeight = 60;
  const fontSize = lines.length > 3 ? 42 : 48;
  ctx.font = `italic ${fontSize}px Georgia, serif`;
  
  const totalHeight = lines.length * lineHeight;
  const startY = (height - totalHeight) / 2 + lineHeight / 2;
  
  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + (i * lineHeight));
  });
  
  // Sage accent - small decorative element
  ctx.fillStyle = accentColor;
  ctx.beginPath();
  ctx.arc(width/2, startY - 60, 5, 0, Math.PI * 2);
  ctx.fill();
  
  // Bottom decorative line
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(width/2 - 40, startY + totalHeight + 30);
  ctx.lineTo(width/2 + 40, startY + totalHeight + 30);
  ctx.stroke();
  
  // Watermark
  ctx.font = '15px Arial, sans-serif';
  ctx.fillStyle = subtleColor;
  ctx.fillText('THE J FORMULA', width / 2, height - 40);
  
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(config.output, buffer);
  console.log('Created:', config.output);
}

async function createAll() {
  for (const post of posts) {
    try {
      await createPost(post);
    } catch (err) {
      console.error('Error creating', post.output, err.message);
    }
  }
  console.log('Done! Created 5 original posts.');
}

createAll();

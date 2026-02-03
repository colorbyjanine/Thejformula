const { createCanvas } = require('canvas');
const fs = require('fs');

// Her aesthetic: light, airy, warm neutrals, solid backgrounds
// Like @homebybe - muted tan/taupe solid bg with elegant minimal text

const posts = [
  {
    quote: "Your glow-up isn't just\nabout your hair.\nIt's about becoming who\nyou were meant to be.",
    bg: '#C9B8A8', // Warm taupe
    textColor: '#FFFFFF',
    output: 'light-1.jpg'
  },
  {
    quote: "She stopped waiting\nfor permission\nand started building.",
    bg: '#D4C5B5', // Soft warm beige
    textColor: '#5C534A',
    output: 'light-2.jpg'
  },
  {
    quote: "Confidence isn't thinking\nyou're better than anyone.\nIt's knowing you don't\nhave to compare.",
    bg: '#E8E0D5', // Light cream
    textColor: '#6B5D4D',
    output: 'light-3.jpg'
  },
  {
    quote: "Small steps.\nConsistent effort.\nUnstoppable results.",
    bg: '#BFB0A0', // Muted tan
    textColor: '#FFFFFF',
    output: 'light-4.jpg'
  },
  {
    quote: "You're not behind.\nYou're on your own timeline.\nKeep going.",
    bg: '#D9CFC3', // Warm off-white
    textColor: '#5A4F44',
    output: 'light-5.jpg'
  }
];

function createPost(config) {
  const width = 1080;
  const height = 1350; // 4:5 ratio for Instagram
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Solid background
  ctx.fillStyle = config.bg;
  ctx.fillRect(0, 0, width, height);
  
  // Quote text - elegant serif
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = config.textColor;
  
  const lines = config.quote.split('\n');
  const lineHeight = 65;
  const fontSize = 42;
  ctx.font = `300 italic ${fontSize}px Georgia, "Times New Roman", serif`;
  
  const totalHeight = lines.length * lineHeight;
  const startY = (height - totalHeight) / 2 + lineHeight / 2;
  
  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + (i * lineHeight));
  });
  
  // Subtle watermark at bottom
  ctx.font = '14px Arial, sans-serif';
  ctx.fillStyle = config.textColor === '#FFFFFF' 
    ? 'rgba(255,255,255,0.4)' 
    : 'rgba(90,79,68,0.3)';
  ctx.fillText('THE J FORMULA', width / 2, height - 60);
  
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(config.output, buffer);
  console.log('Created:', config.output);
}

posts.forEach(createPost);
console.log('Done! Created 5 light aesthetic posts.');

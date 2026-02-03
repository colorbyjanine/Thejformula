const { createCanvas } = require('canvas');
const fs = require('fs');

// Deep stoic-inspired original quotes - light aesthetic
const posts = [
  {
    quote: "You cannot control\nwhat happens to you.\nBut you can control\nhow you rise from it.",
    bg: '#C4B5A5', // Warm taupe
    textColor: '#FFFFFF',
    output: 'stoic-1.jpg'
  },
  {
    quote: "The obstacle isn't\nin your way.\nIt is the way.",
    bg: '#D6C9BA', // Soft beige
    textColor: '#4A423A',
    output: 'stoic-2.jpg'
  },
  {
    quote: "Stop waiting for the storm\nto pass. Learn to work\nin the rain.",
    bg: '#BFB2A3', // Muted tan
    textColor: '#FFFFFF',
    output: 'stoic-3.jpg'
  },
  {
    quote: "Your peace is yours.\nNo one can take it\nunless you hand it over.",
    bg: '#E5DDD2', // Light cream
    textColor: '#5D5347',
    output: 'stoic-4.jpg'
  },
  {
    quote: "She built her empire\nquietly. No announcements.\nJust results.",
    bg: '#CAB9A7', // Warm neutral
    textColor: '#FFFFFF',
    output: 'stoic-5.jpg'
  },
  {
    quote: "Discipline today.\nFreedom tomorrow.\nThis is the trade.",
    bg: '#D0C4B6', // Soft warm
    textColor: '#4F4740',
    output: 'stoic-6.jpg'
  },
  {
    quote: "You were never asking\nfor too much.\nYou were asking\nthe wrong people.",
    bg: '#C7B8A8', // Taupe
    textColor: '#FFFFFF',
    output: 'stoic-7.jpg'
  },
  {
    quote: "Protect your energy.\nNot everyone deserves\naccess to you.",
    bg: '#DDD3C6', // Warm off-white
    textColor: '#56504A',
    output: 'stoic-8.jpg'
  }
];

function createPost(config) {
  const width = 1080;
  const height = 1350; // 4:5 Instagram
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Solid background
  ctx.fillStyle = config.bg;
  ctx.fillRect(0, 0, width, height);
  
  // Quote - elegant minimal
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = config.textColor;
  
  const lines = config.quote.split('\n');
  const lineHeight = 68;
  const fontSize = 44;
  ctx.font = `300 italic ${fontSize}px Georgia, serif`;
  
  const totalHeight = lines.length * lineHeight;
  const startY = (height - totalHeight) / 2 + lineHeight / 2;
  
  lines.forEach((line, i) => {
    ctx.fillText(line, width / 2, startY + (i * lineHeight));
  });
  
  // Minimal watermark
  ctx.font = '13px Arial, sans-serif';
  ctx.fillStyle = config.textColor === '#FFFFFF' 
    ? 'rgba(255,255,255,0.35)' 
    : 'rgba(80,70,60,0.25)';
  ctx.fillText('THE J FORMULA', width / 2, height - 55);
  
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(config.output, buffer);
  console.log('Created:', config.output);
}

posts.forEach(createPost);
console.log('Done! Created 8 stoic posts.');

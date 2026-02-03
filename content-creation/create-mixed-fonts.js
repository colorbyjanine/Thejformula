const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');

// Mixed font style like "The Art of Beautiful Hair"
// Some words in elegant serif italic, others in clean sans-serif

const posts = [
  {
    lines: [
      { text: "You cannot", font: 'serif', style: 'normal' },
      { text: "control", font: 'serif', style: 'italic' },
      { text: "what happens.", font: 'serif', style: 'normal' },
      { text: "But you can control", font: 'serif', style: 'normal' },
      { text: "how you rise.", font: 'serif', style: 'italic' },
    ],
    bg: '#C9B8A8',
    textColor: '#FFFFFF',
    output: 'mixed-1.jpg'
  },
  {
    lines: [
      { text: "She built her", font: 'sans', style: 'normal' },
      { text: "empire", font: 'serif', style: 'italic' },
      { text: "quietly.", font: 'sans', style: 'normal' },
    ],
    bg: '#D6C9BA',
    textColor: '#4A423A',
    output: 'mixed-2.jpg'
  },
  {
    lines: [
      { text: "Discipline", font: 'serif', style: 'italic' },
      { text: "today.", font: 'sans', style: 'normal' },
      { text: "Freedom", font: 'serif', style: 'italic' },
      { text: "tomorrow.", font: 'sans', style: 'normal' },
    ],
    bg: '#BFB2A3',
    textColor: '#FFFFFF',
    output: 'mixed-3.jpg'
  },
  {
    lines: [
      { text: "Your", font: 'sans', style: 'normal' },
      { text: "peace", font: 'serif', style: 'italic' },
      { text: "is yours.", font: 'sans', style: 'normal' },
      { text: "Guard it.", font: 'serif', style: 'italic' },
    ],
    bg: '#E5DDD2',
    textColor: '#5D5347',
    output: 'mixed-4.jpg'
  },
  {
    lines: [
      { text: "The obstacle is", font: 'sans', style: 'normal' },
      { text: "the way.", font: 'serif', style: 'italic' },
    ],
    bg: '#CAB9A7',
    textColor: '#FFFFFF',
    output: 'mixed-5.jpg'
  },
];

function createPost(config) {
  const width = 1080;
  const height = 1350;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = config.bg;
  ctx.fillRect(0, 0, width, height);
  
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = config.textColor;
  
  const lineHeight = 85;
  const totalHeight = config.lines.length * lineHeight;
  const startY = (height - totalHeight) / 2 + lineHeight / 2;
  
  config.lines.forEach((line, i) => {
    if (line.font === 'serif') {
      ctx.font = line.style === 'italic' 
        ? 'italic 52px Georgia, "Times New Roman", serif'
        : '52px Georgia, "Times New Roman", serif';
    } else {
      ctx.font = '38px Arial, Helvetica, sans-serif';
    }
    
    ctx.fillText(line.text, width / 2, startY + (i * lineHeight));
  });
  
  // Watermark
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
console.log('Done! Created 5 mixed font posts.');

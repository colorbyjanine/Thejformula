const { createCanvas } = require('canvas');
const fs = require('fs');

// DRAMATIC sizing like the reference:
// "INTERIOR DESIGN" = big bold
// "is the" = small italic  
// "choreography" = big bold
// "space" and "light" = HUGE cursive

const posts = [
  {
    layout: [
      [{ text: "YOUR STORY", font: 'bold', size: 58 }, { text: " is the", font: 'italic', size: 32 }],
      [{ text: "blueprint", font: 'cursive', size: 72 }],
      [{ text: "of someone else's", font: 'italic', size: 30 }],
      [{ text: "survival.", font: 'cursive', size: 70 }],
    ],
    bg: '#F3EDE4',
    textColor: '#2C2825',
    output: 'dramatic-1.jpg'
  },
  {
    layout: [
      [{ text: "SHE BUILT", font: 'bold', size: 54 }, { text: " in", font: 'italic', size: 30 }],
      [{ text: "silence", font: 'cursive', size: 78 }],
      [{ text: "and let", font: 'regular', size: 28 }],
      [{ text: "success", font: 'cursive', size: 74 }],
      [{ text: "make the noise.", font: 'italic', size: 34 }],
    ],
    bg: '#EDE6DB',
    textColor: '#3D3935',
    output: 'dramatic-2.jpg'
  },
  {
    layout: [
      [{ text: "THE OBSTACLE", font: 'bold', size: 52 }],
      [{ text: "is the", font: 'italic', size: 34 }],
      [{ text: "way.", font: 'cursive', size: 90 }],
    ],
    bg: '#F5EFE6',
    textColor: '#2C2825',
    output: 'dramatic-3.jpg'
  },
  {
    layout: [
      [{ text: "DISCIPLINE", font: 'bold', size: 56 }],
      [{ text: "today.", font: 'cursive', size: 68 }],
      [{ text: "FREEDOM", font: 'bold', size: 56 }],
      [{ text: "tomorrow.", font: 'cursive', size: 68 }],
    ],
    bg: '#EEE8DF',
    textColor: '#3D3935',
    output: 'dramatic-4.jpg'
  },
  {
    layout: [
      [{ text: "YOU ARE NOT", font: 'bold', size: 48 }],
      [{ text: "too much.", font: 'cursive', size: 76 }],
      [{ text: "They were just", font: 'regular', size: 28 }],
      [{ text: "not enough.", font: 'cursive', size: 72 }],
    ],
    bg: '#F4EEE5',
    textColor: '#2C2825',
    output: 'dramatic-5.jpg'
  },
  {
    layout: [
      [{ text: "YOUR PEACE", font: 'bold', size: 52 }],
      [{ text: "is", font: 'italic', size: 30 }, { text: " yours.", font: 'cursive', size: 68 }],
      [{ text: "Guard it", font: 'regular', size: 28 }],
      [{ text: "fiercely.", font: 'cursive', size: 74 }],
    ],
    bg: '#EDE7DE',
    textColor: '#3D3935',
    output: 'dramatic-6.jpg'
  },
  {
    layout: [
      [{ text: "STOP SHRINKING", font: 'bold', size: 46 }],
      [{ text: "yourself to fit places", font: 'regular', size: 28 }],
      [{ text: "you've", font: 'cursive', size: 66 }],
      [{ text: "outgrown.", font: 'cursive', size: 72 }],
    ],
    bg: '#F2EBE2',
    textColor: '#2C2825',
    output: 'dramatic-7.jpg'
  },
  {
    layout: [
      [{ text: "THEY WILL WATCH", font: 'bold', size: 44 }],
      [{ text: "you struggle and stay silent.", font: 'italic', size: 28 }],
      [{ text: "THEY WILL WATCH", font: 'bold', size: 44 }],
      [{ text: "you succeed and have", font: 'italic', size: 28 }],
      [{ text: "so much to say.", font: 'cursive', size: 62 }],
      [{ text: "Keep winning.", font: 'cursive', size: 58 }],
    ],
    bg: '#EAE4DB',
    textColor: '#3D3935',
    output: 'dramatic-8.jpg'
  },
];

function getFont(style, size) {
  switch(style) {
    case 'bold':
      return `700 ${size}px Georgia, "Times New Roman", serif`;
    case 'italic':
      return `italic ${size}px Georgia, serif`;
    case 'cursive':
      return `italic 500 ${size}px "Times New Roman", Georgia, serif`;
    case 'regular':
    default:
      return `400 ${size}px Arial, sans-serif`;
  }
}

function createPost(config) {
  const width = 1080;
  const height = 1350;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = config.bg;
  ctx.fillRect(0, 0, width, height);
  
  ctx.fillStyle = config.textColor;
  ctx.textBaseline = 'middle';
  
  const lineHeight = 90;
  const totalHeight = config.layout.length * lineHeight;
  let y = (height - totalHeight) / 2 + 20;
  
  config.layout.forEach((line) => {
    let lineWidth = 0;
    line.forEach(segment => {
      ctx.font = getFont(segment.font, segment.size);
      lineWidth += ctx.measureText(segment.text).width;
    });
    
    let x = (width - lineWidth) / 2;
    
    line.forEach(segment => {
      ctx.font = getFont(segment.font, segment.size);
      ctx.fillText(segment.text, x, y);
      x += ctx.measureText(segment.text).width;
    });
    
    y += lineHeight;
  });
  
  // — thejformula
  ctx.font = '20px Arial, sans-serif';
  ctx.fillStyle = 'rgba(60, 55, 50, 0.45)';
  ctx.textAlign = 'center';
  ctx.fillText('— thejformula', width / 2, height - 70);
  
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(config.output, buffer);
  console.log('Created:', config.output);
}

posts.forEach(createPost);
console.log('Done! Created 8 dramatic posts.');

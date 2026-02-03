const { createCanvas } = require('canvas');
const fs = require('fs');

// Artistic mixed fonts like the @homebybe reference
// Different fonts on SAME line, flowing together
// Light cream bg, - thejformula at bottom

const posts = [
  {
    // Line by line with mixed fonts
    layout: [
      [
        { text: "YOUR STORY", font: 'caps', size: 38 },
        { text: " is the", font: 'italic', size: 36 },
      ],
      [
        { text: "blueprint", font: 'script', size: 52 },
        { text: " of", font: 'regular', size: 32 },
      ],
      [
        { text: "someone else's", font: 'italic', size: 36 },
      ],
      [
        { text: "survival.", font: 'script', size: 52 },
      ],
    ],
    bg: '#F3EDE4',
    textColor: '#3D3935',
    output: 'artistic-1.jpg'
  },
  {
    layout: [
      [
        { text: "SHE BUILT", font: 'caps', size: 38 },
        { text: " in", font: 'italic', size: 34 },
      ],
      [
        { text: "silence", font: 'script', size: 54 },
      ],
      [
        { text: "and let", font: 'regular', size: 32 },
        { text: " success", font: 'script', size: 48 },
      ],
      [
        { text: "make the noise.", font: 'italic', size: 36 },
      ],
    ],
    bg: '#EDE6DB',
    textColor: '#4A423A',
    output: 'artistic-2.jpg'
  },
  {
    layout: [
      [
        { text: "THE OBSTACLE", font: 'caps', size: 36 },
      ],
      [
        { text: "is", font: 'italic', size: 34 },
        { text: " the", font: 'regular', size: 32 },
      ],
      [
        { text: "way.", font: 'script', size: 58 },
      ],
    ],
    bg: '#F5EFE6',
    textColor: '#3D3935',
    output: 'artistic-3.jpg'
  },
  {
    layout: [
      [
        { text: "DISCIPLINE", font: 'caps', size: 38 },
        { text: " today.", font: 'italic', size: 34 },
      ],
      [
        { text: "Freedom", font: 'script', size: 52 },
      ],
      [
        { text: "tomorrow.", font: 'italic', size: 38 },
      ],
    ],
    bg: '#EEE8DF',
    textColor: '#4A423A',
    output: 'artistic-4.jpg'
  },
  {
    layout: [
      [
        { text: "YOU ARE NOT", font: 'caps', size: 34 },
      ],
      [
        { text: "too much.", font: 'script', size: 50 },
      ],
      [
        { text: "They were just", font: 'regular', size: 30 },
      ],
      [
        { text: "not enough.", font: 'script', size: 48 },
      ],
    ],
    bg: '#F4EEE5',
    textColor: '#3D3935',
    output: 'artistic-5.jpg'
  },
  {
    layout: [
      [
        { text: "YOUR PEACE", font: 'caps', size: 36 },
      ],
      [
        { text: "is", font: 'italic', size: 32 },
        { text: " yours.", font: 'script', size: 48 },
      ],
      [
        { text: "Guard it", font: 'regular', size: 30 },
        { text: " fiercely.", font: 'script', size: 46 },
      ],
    ],
    bg: '#EDE7DE',
    textColor: '#4A423A',
    output: 'artistic-6.jpg'
  },
];

function getFont(style, size) {
  switch(style) {
    case 'caps':
      return `600 ${size}px Arial, sans-serif`;
    case 'italic':
      return `italic ${size}px Georgia, serif`;
    case 'script':
      return `italic ${size}px "Times New Roman", Georgia, serif`;
    case 'regular':
    default:
      return `${size}px Arial, sans-serif`;
  }
}

function createPost(config) {
  const width = 1080;
  const height = 1350;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Light cream background
  ctx.fillStyle = config.bg;
  ctx.fillRect(0, 0, width, height);
  
  ctx.fillStyle = config.textColor;
  ctx.textBaseline = 'middle';
  
  // Calculate total height
  const lineHeight = 75;
  const totalHeight = config.layout.length * lineHeight;
  let y = (height - totalHeight) / 2;
  
  // Draw each line
  config.layout.forEach((line) => {
    // Calculate line width first
    let lineWidth = 0;
    line.forEach(segment => {
      ctx.font = getFont(segment.font, segment.size);
      lineWidth += ctx.measureText(segment.text).width;
    });
    
    // Start x position (centered)
    let x = (width - lineWidth) / 2;
    
    // Draw each segment
    line.forEach(segment => {
      ctx.font = getFont(segment.font, segment.size);
      ctx.fillText(segment.text, x, y);
      x += ctx.measureText(segment.text).width;
    });
    
    y += lineHeight;
  });
  
  // Attribution - thejformula
  ctx.font = '18px Arial, sans-serif';
  ctx.fillStyle = 'rgba(61, 57, 53, 0.4)';
  ctx.textAlign = 'center';
  ctx.fillText('— thejformula', width / 2, height - 80);
  
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
  fs.writeFileSync(config.output, buffer);
  console.log('Created:', config.output);
}

posts.forEach(createPost);
console.log('Done! Created 6 artistic posts.');

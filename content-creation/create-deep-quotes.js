const { createCanvas } = require('canvas');
const fs = require('fs');

// Longer, deeper quotes that hit the soul
// Mixed fonts - key words in italic serif

const posts = [
  {
    lines: [
      { text: "One day you will tell your story", font: 'sans' },
      { text: "of how you overcame", font: 'sans' },
      { text: "what you went through", font: 'sans' },
      { text: "and it will become", font: 'sans' },
      { text: "someone else's", font: 'serif-italic' },
      { text: "survival guide.", font: 'serif-italic' },
    ],
    bg: '#C9B8A8',
    textColor: '#FFFFFF',
    output: 'deep-1.jpg'
  },
  {
    lines: [
      { text: "She was brave not because", font: 'sans' },
      { text: "she wasn't scared,", font: 'sans' },
      { text: "but because she kept going", font: 'sans' },
      { text: "even when", font: 'sans' },
      { text: "everything inside her", font: 'serif-italic' },
      { text: "told her to stop.", font: 'serif-italic' },
    ],
    bg: '#D6C9BA',
    textColor: '#4A423A',
    output: 'deep-2.jpg'
  },
  {
    lines: [
      { text: "You are not starting over.", font: 'sans' },
      { text: "You are starting from", font: 'sans' },
      { text: "experience.", font: 'serif-italic' },
      { text: "There is a difference.", font: 'sans' },
      { text: "Everything you've been through", font: 'sans' },
      { text: "prepared you for this.", font: 'serif-italic' },
    ],
    bg: '#BFB2A3',
    textColor: '#FFFFFF',
    output: 'deep-3.jpg'
  },
  {
    lines: [
      { text: "The woman who doesn't", font: 'sans' },
      { text: "need validation from anyone", font: 'sans' },
      { text: "is the most", font: 'sans' },
      { text: "feared woman of all.", font: 'serif-italic' },
      { text: "Be her.", font: 'serif-italic' },
    ],
    bg: '#E5DDD2',
    textColor: '#5D5347',
    output: 'deep-4.jpg'
  },
  {
    lines: [
      { text: "They will watch you struggle", font: 'sans' },
      { text: "and stay silent.", font: 'sans' },
      { text: "They will watch you succeed", font: 'sans' },
      { text: "and suddenly have", font: 'sans' },
      { text: "so much to say.", font: 'serif-italic' },
      { text: "Keep winning anyway.", font: 'serif-italic' },
    ],
    bg: '#CAB9A7',
    textColor: '#FFFFFF',
    output: 'deep-5.jpg'
  },
  {
    lines: [
      { text: "You didn't come this far", font: 'sans' },
      { text: "to only come this far.", font: 'sans' },
      { text: "The setback was a setup.", font: 'sans' },
      { text: "The delay was preparation.", font: 'sans' },
      { text: "Your time is", font: 'sans' },
      { text: "still coming.", font: 'serif-italic' },
    ],
    bg: '#D0C4B6',
    textColor: '#4F4740',
    output: 'deep-6.jpg'
  },
  {
    lines: [
      { text: "Stop shrinking yourself", font: 'sans' },
      { text: "to fit places you've outgrown.", font: 'sans' },
      { text: "You are not too much.", font: 'serif-italic' },
      { text: "They were just", font: 'sans' },
      { text: "not enough.", font: 'serif-italic' },
    ],
    bg: '#C7B8A8',
    textColor: '#FFFFFF',
    output: 'deep-7.jpg'
  },
  {
    lines: [
      { text: "Healing isn't linear.", font: 'sans' },
      { text: "Growing isn't easy.", font: 'sans' },
      { text: "But staying the same", font: 'sans' },
      { text: "is no longer an option", font: 'serif-italic' },
      { text: "for someone who's seen", font: 'sans' },
      { text: "what you're capable of.", font: 'serif-italic' },
    ],
    bg: '#DDD3C6',
    textColor: '#56504A',
    output: 'deep-8.jpg'
  },
];

function createPost(config) {
  const width = 1080;
  const height = 1350;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = config.bg;
  ctx.fillRect(0, 0, width, height);
  
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = config.textColor;
  
  const lineHeight = 72;
  const totalHeight = config.lines.length * lineHeight;
  const startY = (height - totalHeight) / 2 + lineHeight / 2;
  
  config.lines.forEach((line, i) => {
    if (line.font === 'serif-italic') {
      ctx.font = 'italic 46px Georgia, "Times New Roman", serif';
    } else {
      ctx.font = '36px Arial, Helvetica, sans-serif';
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
console.log('Done! Created 8 deep quote posts.');

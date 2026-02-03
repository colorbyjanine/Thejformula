const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');

const templatesDir = '/home/openclaw/.openclaw/workspace/projects/thejformula/public/legal-templates';
const outputDir = '/home/openclaw/.openclaw/workspace/vault-pdfs';

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = [
  'CA-booth-rental-agreement.md',
  'CA-client-waiver-consent.md', 
  'CA-independent-contractor-agreement.md',
  'photo-social-media-release.md',
  'cancellation-policy.md',
  'employee-vs-contractor-checklist.md'
];

function cleanMarkdown(text) {
  // Remove markdown formatting for plain text
  return text
    .replace(/^#{1,6}\s+/gm, '')  // Remove headers
    .replace(/\*\*([^*]+)\*\*/g, '$1')  // Bold
    .replace(/\*([^*]+)\*/g, '$1')  // Italic
    .replace(/^[-*+]\s+/gm, '• ')  // List items
    .replace(/^\d+\.\s+/gm, '')  // Numbered lists
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')  // Links
    .replace(/`([^`]+)`/g, '$1')  // Code
    .replace(/^>\s+/gm, '  ')  // Blockquotes
    .replace(/---+/g, '\n' + '─'.repeat(50) + '\n');  // Horizontal rules
}

files.forEach(file => {
  const inputPath = path.join(templatesDir, file);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`Skipping ${file} - not found`);
    return;
  }
  
  const outputPath = path.join(outputDir, file.replace('.md', '.pdf'));
  const markdown = fs.readFileSync(inputPath, 'utf-8');
  const cleanText = cleanMarkdown(markdown);
  
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 72, bottom: 72, left: 72, right: 72 }
  });
  
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);
  
  // Header
  doc.fontSize(10)
     .fillColor('#888888')
     .text('THE J FORMULA | STYLIST LEGAL VAULT', { align: 'center' });
  
  doc.moveDown(2);
  
  // Title from filename
  const title = file.replace('.md', '').replace('CA-', 'California ').replace(/-/g, ' ').toUpperCase();
  doc.fontSize(18)
     .fillColor('#3D3935')
     .text(title, { align: 'center' });
  
  doc.moveDown(1);
  doc.fontSize(11)
     .fillColor('#333333');
  
  // Split into paragraphs and handle
  const lines = cleanText.split('\n');
  lines.forEach(line => {
    if (line.trim() === '') {
      doc.moveDown(0.5);
    } else if (line.startsWith('─')) {
      doc.moveDown(0.5);
      doc.strokeColor('#cccccc').lineWidth(0.5)
         .moveTo(72, doc.y)
         .lineTo(540, doc.y)
         .stroke();
      doc.moveDown(0.5);
    } else if (line.match(/^[A-Z][A-Z\s]+$/)) {
      // Section headers (all caps)
      doc.moveDown(0.5);
      doc.fontSize(12).fillColor('#3D3935').text(line, { continued: false });
      doc.fontSize(11).fillColor('#333333');
    } else {
      doc.text(line, { align: 'left', lineGap: 2 });
    }
  });
  
  // Footer
  doc.moveDown(2);
  doc.fontSize(8)
     .fillColor('#999999')
     .text('© The J Formula | thejformula.com | For informational purposes only. Consult a licensed attorney.', 
           { align: 'center' });
  
  doc.end();
  console.log(`Created: ${outputPath}`);
});

console.log('\nDone! PDFs saved to:', outputDir);

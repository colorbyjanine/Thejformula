const fs = require('fs');
const path = require('path');
const PDFDocument = require('pdfkit');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle, Table, TableRow, TableCell, WidthType, Header, Footer, PageNumber } = require('docx');

const templatesDir = '/home/openclaw/.openclaw/workspace/projects/thejformula/public/legal-templates';
const outputDir = '/home/openclaw/.openclaw/workspace/vault-package';
const pdfDir = path.join(outputDir, 'PDFs');
const docxDir = path.join(outputDir, 'Word-Editable');

// Create directories
[outputDir, pdfDir, docxDir].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const templates = [
  { file: 'CA-booth-rental-agreement.md', title: 'California Booth Rental Agreement', subtitle: 'AB-5 Compliant Independent Contractor Booth Rental' },
  { file: 'CA-client-waiver-consent.md', title: 'Client Waiver & Consent Form', subtitle: 'California Liability Release & Service Agreement' },
  { file: 'CA-independent-contractor-agreement.md', title: 'Independent Contractor Agreement', subtitle: 'California Labor Code §2750.3 Compliant' },
  { file: 'photo-social-media-release.md', title: 'Photo & Social Media Release', subtitle: 'Model Release for Marketing & Portfolio Use' },
  { file: 'cancellation-policy.md', title: 'Cancellation & No-Show Policy', subtitle: 'Professional Salon Policy Template' },
  { file: 'employee-vs-contractor-checklist.md', title: 'Employee vs Contractor Checklist', subtitle: 'IRS & California ABC Test Classification Guide' },
];

function parseMarkdown(content) {
  const lines = content.split('\n');
  const sections = [];
  let currentSection = { title: '', content: [] };
  
  lines.forEach(line => {
    if (line.startsWith('# ')) {
      // Main title - skip, we use our own
    } else if (line.startsWith('## ')) {
      if (currentSection.title || currentSection.content.length) {
        sections.push(currentSection);
      }
      currentSection = { title: line.replace('## ', '').trim(), content: [] };
    } else if (line.startsWith('### ')) {
      currentSection.content.push({ type: 'subheading', text: line.replace('### ', '').trim() });
    } else if (line.startsWith('**') && line.endsWith('**')) {
      currentSection.content.push({ type: 'bold', text: line.replace(/\*\*/g, '').trim() });
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      currentSection.content.push({ type: 'bullet', text: line.replace(/^[-*]\s+/, '').trim() });
    } else if (line.match(/^\d+\.\s/)) {
      currentSection.content.push({ type: 'numbered', text: line.replace(/^\d+\.\s+/, '').trim() });
    } else if (line.startsWith('> ')) {
      currentSection.content.push({ type: 'quote', text: line.replace('> ', '').trim() });
    } else if (line.startsWith('---')) {
      currentSection.content.push({ type: 'divider' });
    } else if (line.trim()) {
      // Clean up markdown formatting in regular text
      let cleanLine = line
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/`([^`]+)`/g, '$1');
      currentSection.content.push({ type: 'text', text: cleanLine.trim() });
    }
  });
  
  if (currentSection.title || currentSection.content.length) {
    sections.push(currentSection);
  }
  
  return sections;
}

async function createDocx(template, sections, outputPath) {
  const children = [];
  
  // Title
  children.push(new Paragraph({
    children: [new TextRun({ text: template.title.toUpperCase(), bold: true, size: 32, font: 'Georgia' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 }
  }));
  
  // Subtitle
  children.push(new Paragraph({
    children: [new TextRun({ text: template.subtitle, italics: true, size: 22, color: '666666', font: 'Georgia' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 400 }
  }));
  
  // Divider line
  children.push(new Paragraph({
    children: [new TextRun({ text: '━'.repeat(60), color: '9CAF88' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 400 }
  }));
  
  sections.forEach(section => {
    if (section.title) {
      children.push(new Paragraph({
        children: [new TextRun({ text: section.title.toUpperCase(), bold: true, size: 24, font: 'Georgia', color: '3D3935' })],
        spacing: { before: 300, after: 150 },
        border: { bottom: { color: 'E8DDD4', size: 6, style: BorderStyle.SINGLE } }
      }));
    }
    
    section.content.forEach(item => {
      switch(item.type) {
        case 'subheading':
          children.push(new Paragraph({
            children: [new TextRun({ text: item.text, bold: true, size: 22, font: 'Georgia' })],
            spacing: { before: 200, after: 100 }
          }));
          break;
        case 'bold':
          children.push(new Paragraph({
            children: [new TextRun({ text: item.text, bold: true, size: 22 })],
            spacing: { before: 150, after: 100 }
          }));
          break;
        case 'bullet':
          children.push(new Paragraph({
            children: [new TextRun({ text: '• ' + item.text, size: 22 })],
            indent: { left: 720 },
            spacing: { after: 60 }
          }));
          break;
        case 'numbered':
          children.push(new Paragraph({
            children: [new TextRun({ text: item.text, size: 22 })],
            indent: { left: 720 },
            spacing: { after: 60 }
          }));
          break;
        case 'quote':
          children.push(new Paragraph({
            children: [new TextRun({ text: item.text, italics: true, size: 22, color: '666666' })],
            indent: { left: 720 },
            spacing: { after: 100 },
            border: { left: { color: '9CAF88', size: 12, style: BorderStyle.SINGLE } }
          }));
          break;
        case 'divider':
          children.push(new Paragraph({
            children: [new TextRun({ text: '─'.repeat(50), color: 'CCCCCC' })],
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 200 }
          }));
          break;
        default:
          // Check for fill-in blanks like [SALON NAME] and highlight them
          let text = item.text;
          if (text.includes('[') && text.includes(']')) {
            const parts = text.split(/(\[[^\]]+\])/g);
            const runs = parts.map(part => {
              if (part.startsWith('[') && part.endsWith(']')) {
                return new TextRun({ text: part, bold: true, highlight: 'yellow', size: 22 });
              }
              return new TextRun({ text: part, size: 22 });
            });
            children.push(new Paragraph({ children: runs, spacing: { after: 120 } }));
          } else {
            children.push(new Paragraph({
              children: [new TextRun({ text: text, size: 22 })],
              spacing: { after: 120 }
            }));
          }
      }
    });
  });
  
  // Signature section
  children.push(new Paragraph({ spacing: { before: 400 } }));
  children.push(new Paragraph({
    children: [new TextRun({ text: 'SIGNATURES', bold: true, size: 24, font: 'Georgia', color: '3D3935' })],
    spacing: { after: 200 },
    border: { bottom: { color: 'E8DDD4', size: 6, style: BorderStyle.SINGLE } }
  }));
  
  ['Party 1', 'Party 2'].forEach(party => {
    children.push(new Paragraph({
      children: [new TextRun({ text: `${party} Signature: `, size: 22 }), new TextRun({ text: '_'.repeat(40), size: 22 })],
      spacing: { before: 200, after: 100 }
    }));
    children.push(new Paragraph({
      children: [new TextRun({ text: 'Printed Name: ', size: 22 }), new TextRun({ text: '_'.repeat(40), size: 22 })],
      spacing: { after: 100 }
    }));
    children.push(new Paragraph({
      children: [new TextRun({ text: 'Date: ', size: 22 }), new TextRun({ text: '_'.repeat(20), size: 22 })],
      spacing: { after: 200 }
    }));
  });
  
  const doc = new Document({
    sections: [{
      properties: {
        page: { margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } }
      },
      headers: {
        default: new Header({
          children: [new Paragraph({
            children: [
              new TextRun({ text: 'THE J FORMULA', bold: true, size: 18, font: 'Georgia', color: '9CAF88' }),
              new TextRun({ text: '  |  STYLIST LEGAL VAULT', size: 18, color: '999999' })
            ],
            alignment: AlignmentType.CENTER
          })]
        })
      },
      footers: {
        default: new Footer({
          children: [new Paragraph({
            children: [
              new TextRun({ text: 'thejformula.com  •  ', size: 16, color: '999999' }),
              new TextRun({ text: 'For informational purposes only. Consult a licensed attorney.', size: 16, color: '999999' })
            ],
            alignment: AlignmentType.CENTER
          })]
        })
      },
      children: children
    }]
  });
  
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  console.log(`✓ DOCX: ${path.basename(outputPath)}`);
}

function createPdf(template, sections, outputPath) {
  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 72, bottom: 72, left: 72, right: 72 },
    bufferPages: true
  });
  
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);
  
  // Header
  doc.fontSize(9).fillColor('#9CAF88').font('Helvetica-Bold').text('THE J FORMULA', 72, 40, { continued: true });
  doc.fillColor('#999999').font('Helvetica').text('  |  STYLIST LEGAL VAULT', { align: 'left' });
  
  doc.moveTo(72, 55).lineTo(540, 55).strokeColor('#E8DDD4').lineWidth(1).stroke();
  
  doc.y = 80;
  
  // Title
  doc.fontSize(22).fillColor('#3D3935').font('Helvetica-Bold').text(template.title.toUpperCase(), { align: 'center' });
  doc.moveDown(0.3);
  doc.fontSize(11).fillColor('#666666').font('Helvetica-Oblique').text(template.subtitle, { align: 'center' });
  doc.moveDown(0.5);
  
  // Green divider
  doc.moveTo(180, doc.y).lineTo(432, doc.y).strokeColor('#9CAF88').lineWidth(2).stroke();
  doc.moveDown(1);
  
  doc.font('Helvetica').fillColor('#333333').fontSize(10);
  
  sections.forEach(section => {
    if (section.title) {
      doc.moveDown(0.5);
      doc.fontSize(12).fillColor('#3D3935').font('Helvetica-Bold').text(section.title.toUpperCase());
      doc.moveTo(72, doc.y + 2).lineTo(300, doc.y + 2).strokeColor('#E8DDD4').lineWidth(0.5).stroke();
      doc.moveDown(0.5);
      doc.font('Helvetica').fillColor('#333333').fontSize(10);
    }
    
    section.content.forEach(item => {
      // Check for page break
      if (doc.y > 680) {
        doc.addPage();
        doc.y = 72;
      }
      
      switch(item.type) {
        case 'subheading':
          doc.moveDown(0.3);
          doc.font('Helvetica-Bold').fontSize(11).text(item.text);
          doc.font('Helvetica').fontSize(10);
          doc.moveDown(0.3);
          break;
        case 'bold':
          doc.font('Helvetica-Bold').text(item.text);
          doc.font('Helvetica');
          break;
        case 'bullet':
          doc.text('  •  ' + item.text, { indent: 20 });
          break;
        case 'numbered':
          doc.text('     ' + item.text, { indent: 20 });
          break;
        case 'quote':
          doc.fillColor('#666666').font('Helvetica-Oblique').text('    ' + item.text, { indent: 15 });
          doc.fillColor('#333333').font('Helvetica');
          break;
        case 'divider':
          doc.moveDown(0.5);
          doc.moveTo(72, doc.y).lineTo(540, doc.y).strokeColor('#DDDDDD').lineWidth(0.5).stroke();
          doc.moveDown(0.5);
          break;
        default:
          // Highlight fill-in fields
          if (item.text.includes('[') && item.text.includes(']')) {
            doc.text(item.text.replace(/\[([^\]]+)\]/g, '[$1]'), { underline: false });
          } else {
            doc.text(item.text);
          }
      }
    });
  });
  
  // Signature section
  doc.moveDown(2);
  if (doc.y > 550) doc.addPage();
  
  doc.fontSize(12).fillColor('#3D3935').font('Helvetica-Bold').text('SIGNATURES');
  doc.moveTo(72, doc.y + 2).lineTo(200, doc.y + 2).strokeColor('#E8DDD4').lineWidth(0.5).stroke();
  doc.moveDown(1);
  doc.font('Helvetica').fillColor('#333333').fontSize(10);
  
  ['Party 1', 'Party 2'].forEach(party => {
    doc.text(`${party} Signature: _______________________________________`);
    doc.moveDown(0.5);
    doc.text('Printed Name: _______________________________________');
    doc.moveDown(0.5);
    doc.text('Date: ____________________');
    doc.moveDown(1);
  });
  
  // Footer on all pages
  const pages = doc.bufferedPageRange();
  for (let i = 0; i < pages.count; i++) {
    doc.switchToPage(i);
    doc.fontSize(8).fillColor('#999999');
    doc.text('thejformula.com  •  For informational purposes only. Consult a licensed attorney.', 72, 740, { align: 'center', width: 468 });
  }
  
  doc.end();
  
  return new Promise(resolve => {
    stream.on('finish', () => {
      console.log(`✓ PDF: ${path.basename(outputPath)}`);
      resolve();
    });
  });
}

async function main() {
  console.log('\n📦 Creating Professional Legal Vault Package\n');
  console.log('=' .repeat(50));
  
  for (const template of templates) {
    const inputPath = path.join(templatesDir, template.file);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠ Skipping ${template.file} - not found`);
      continue;
    }
    
    const content = fs.readFileSync(inputPath, 'utf-8');
    const sections = parseMarkdown(content);
    
    const baseName = template.file.replace('.md', '');
    const docxPath = path.join(docxDir, baseName + '.docx');
    const pdfPath = path.join(pdfDir, baseName + '.pdf');
    
    await createDocx(template, sections, docxPath);
    await createPdf(template, sections, pdfPath);
  }
  
  // Create README
  const readme = `
# THE J FORMULA - STYLIST LEGAL VAULT
## California Edition

Thank you for purchasing the Stylist Legal Vault!

### What's Included:

📁 **Word-Editable/** - Editable .docx files
   - Open in Microsoft Word, Google Docs, or Pages
   - Fill in the highlighted [BRACKETED] fields with your info
   - Save your customized version

📁 **PDFs/** - Print-ready PDF versions
   - Professional formatting for printing
   - Use as reference while filling out Word docs

### How to Use:

1. Open the Word (.docx) version of the template you need
2. Find all [BRACKETED TEXT] - these are fields to fill in
3. Replace with your salon name, client info, dates, etc.
4. Save your customized version
5. Print or send digitally for signatures

### Templates Included:

1. **California Booth Rental Agreement** - AB-5 compliant booth rental contract
2. **Client Waiver & Consent Form** - Liability release with CA Civil Code compliance
3. **Independent Contractor Agreement** - CA Labor Code §2750.3 compliant
4. **Photo & Social Media Release** - Model release for marketing use
5. **Cancellation & No-Show Policy** - Professional policy template
6. **Employee vs Contractor Checklist** - IRS & CA ABC Test guide

### Important Disclaimer:

These templates are for informational purposes only and do not constitute legal advice. 
We strongly recommend having a licensed California attorney review any documents before use.
Laws change frequently - these templates reflect California law as of 2024.

### Questions?

Email: hello@thejformula.com
Website: thejformula.com

© ${new Date().getFullYear()} The J Formula. All rights reserved.
`;
  
  fs.writeFileSync(path.join(outputDir, 'README.txt'), readme.trim());
  console.log('\n✓ README.txt created');
  
  console.log('\n' + '=' .repeat(50));
  console.log('✅ Package ready at:', outputDir);
  console.log('\nContents:');
  console.log('  - Word-Editable/ (6 .docx files)');
  console.log('  - PDFs/ (6 .pdf files)');
  console.log('  - README.txt\n');
}

main().catch(console.error);

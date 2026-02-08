const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const mediaDir = '/home/openclaw/.openclaw/media/inbound';
const outputDir = path.join(__dirname, '../public/products');

// Create output dir if not exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Map of file patterns to product names
const products = [
  { pattern: 'file_41', name: 'black-ribbed-top', crop: { top: 640, height: 1100 } },
  { pattern: 'file_42', name: 'pilates-socks', crop: { top: 640, height: 1100 } },
  { pattern: 'file_43', name: 'tennis-dress-navy', crop: { top: 640, height: 1100 } },
  { pattern: 'file_44', name: 'retro-sunglasses', crop: { top: 640, height: 1100 } },
  { pattern: 'file_45', name: 'pleated-tennis-skirt', crop: { top: 640, height: 1100 } },
  { pattern: 'file_46', name: 'mesh-ballet-flats', crop: { top: 640, height: 1100 } },
  { pattern: 'file_47', name: 'gingham-ballet-flats', crop: { top: 640, height: 1100 } },
  { pattern: 'file_48', name: 'suede-camel-flats', crop: { top: 640, height: 1100 } },
  { pattern: 'file_49', name: 'veja-campo-pink', crop: { top: 640, height: 1100 } },
  { pattern: 'file_31', name: 'veja-volley-pink', crop: { top: 640, height: 1100 } },
  { pattern: 'file_32', name: 'brown-suede-sandals', crop: { top: 640, height: 1100 } },
  { pattern: 'file_33', name: 'asymmetric-black-top', crop: { top: 640, height: 1100 } },
  { pattern: 'file_34', name: 'white-lace-pants', crop: { top: 640, height: 1100 } },
  { pattern: 'file_35', name: 'maxi-dress-colorblock', crop: { top: 640, height: 1100 } },
  { pattern: 'file_36', name: 'tan-bomber-jacket', crop: { top: 640, height: 1100 } },
  { pattern: 'file_37', name: 'polka-dot-maxi', crop: { top: 640, height: 1100 } },
  { pattern: 'file_38', name: 'suede-clogs', crop: { top: 640, height: 1100 } },
  { pattern: 'file_39', name: 'blue-sherpa-pullover', crop: { top: 640, height: 1100 } },
  { pattern: 'file_40', name: 'backless-black-dress', crop: { top: 640, height: 1100 } },
];

async function processImages() {
  const files = fs.readdirSync(mediaDir);
  
  for (const product of products) {
    const file = files.find(f => f.includes(product.pattern) && f.endsWith('.jpg'));
    if (!file) {
      console.log(`Not found: ${product.pattern}`);
      continue;
    }
    
    const inputPath = path.join(mediaDir, file);
    const outputPath = path.join(outputDir, `${product.name}.jpg`);
    
    try {
      const metadata = await sharp(inputPath).metadata();
      const cropTop = Math.round(product.crop.top * (metadata.height / 2560));
      const cropHeight = Math.round(product.crop.height * (metadata.height / 2560));
      
      await sharp(inputPath)
        .extract({
          left: 0,
          top: cropTop,
          width: metadata.width,
          height: Math.min(cropHeight, metadata.height - cropTop)
        })
        .resize(400, 400, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
        .jpeg({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✓ ${product.name}`);
    } catch (err) {
      console.error(`✗ ${product.name}: ${err.message}`);
    }
  }
  
  console.log('\nDone! Images saved to /public/products/');
}

processImages();

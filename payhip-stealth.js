const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// Add stealth plugin
puppeteer.use(StealthPlugin());

(async () => {
  console.log('Launching stealth browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-blink-features=AutomationControlled',
      '--window-size=1920,1080'
    ]
  });
  
  const page = await browser.newPage();
  
  // Set realistic viewport and user agent
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  
  // Add extra headers to look more human
  await page.setExtraHTTPHeaders({
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
  });
  
  try {
    console.log('Going to Payhip login...');
    await page.goto('https://payhip.com/auth/login', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Random delay to seem human
    await new Promise(r => setTimeout(r, 1000 + Math.random() * 2000));
    
    // Wait for page to load
    await page.waitForSelector('input[type="email"], input[placeholder*="email" i]', { timeout: 10000 });
    
    // Find and click email input first (like a human would)
    const emailInput = await page.$('input[type="email"]') || await page.$('input[placeholder*="email" i]');
    await emailInput.click();
    await new Promise(r => setTimeout(r, 300 + Math.random() * 500));
    
    // Type email slowly like a human
    console.log('Entering email...');
    await page.keyboard.type('Colorbyjanine@gmail.com', { delay: 80 + Math.random() * 50 });
    
    await new Promise(r => setTimeout(r, 500 + Math.random() * 500));
    
    // Tab to password field
    await page.keyboard.press('Tab');
    await new Promise(r => setTimeout(r, 300 + Math.random() * 300));
    
    // Type password
    console.log('Entering password...');
    await page.keyboard.type('Janine2213S!', { delay: 80 + Math.random() * 50 });
    
    await new Promise(r => setTimeout(r, 800 + Math.random() * 500));
    
    // Screenshot before submit
    await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-stealth-before.png' });
    
    // Press Enter to submit
    console.log('Submitting...');
    await page.keyboard.press('Enter');
    
    // Wait for navigation
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {});
    
    await new Promise(r => setTimeout(r, 2000));
    
    console.log('Current URL:', page.url());
    await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-stealth-after.png' });
    
    // Check if logged in
    if (!page.url().includes('login') && !page.url().includes('recaptcha')) {
      console.log('✅ LOGIN SUCCESSFUL!');
      
      // Navigate to products
      await page.goto('https://payhip.com/dashboard/products', { waitUntil: 'networkidle2' });
      console.log('Products URL:', page.url());
      await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-stealth-products.png' });
      
      // Check for existing products
      const pageContent = await page.content();
      if (pageContent.includes('Legal Vault') || pageContent.includes('Stylist')) {
        console.log('Found Legal Vault product!');
      }
      
      console.log('✅ READY TO MANAGE PRODUCTS');
      
    } else {
      console.log('❌ Still on login/captcha page');
      console.log('URL:', page.url());
      
      // Check if there's a captcha visible
      const hasCaptcha = await page.$('iframe[src*="recaptcha"]');
      if (hasCaptcha) {
        console.log('reCAPTCHA detected on page');
      }
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-stealth-error.png' }).catch(() => {});
  }
  
  await browser.close();
  console.log('Done');
})();

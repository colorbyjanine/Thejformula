const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  console.log('Going to Payhip login...');
  await page.goto('https://payhip.com/auth/login', { waitUntil: 'networkidle2' });
  
  console.log('Entering credentials...');
  await page.type('input[name="email"]', 'Colorbyjanine@gmail.com');
  await page.type('input[name="password"]', 'Janine2213S!');
  
  console.log('Clicking login...');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2' }),
    page.click('button[type="submit"]')
  ]);
  
  console.log('Current URL:', page.url());
  
  // Check if logged in
  if (page.url().includes('dashboard') || page.url().includes('account')) {
    console.log('✅ Login successful!');
    
    // Go to products page
    await page.goto('https://payhip.com/dashboard/products', { waitUntil: 'networkidle2' });
    console.log('On products page:', page.url());
    
    // Take screenshot
    await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-dashboard.png' });
    console.log('Screenshot saved');
    
    // Get page content to understand structure
    const title = await page.title();
    console.log('Page title:', title);
    
  } else {
    console.log('❌ Login may have failed. URL:', page.url());
    await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-login-result.png' });
  }
  
  await browser.close();
  console.log('Done');
})();

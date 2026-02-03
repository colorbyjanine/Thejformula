const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  
  try {
    console.log('Going to Payhip login...');
    await page.goto('https://payhip.com/auth/login', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for page to load
    await page.waitForSelector('input[type="email"], input[placeholder*="email" i]', { timeout: 10000 });
    
    // Find email input
    const emailInput = await page.$('input[type="email"]') || await page.$('input[placeholder*="email" i]');
    console.log('Entering email...');
    await emailInput.type('Colorbyjanine@gmail.com', { delay: 30 });
    
    // Find password field
    const passwordInput = await page.$('input[type="password"]');
    console.log('Entering password...');
    await passwordInput.type('Janine2213S!', { delay: 30 });
    
    // Click login button
    console.log('Clicking login...');
    const loginButton = await page.$('button[type="submit"]') || await page.$('input[type="submit"]');
    
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {}),
      loginButton.click()
    ]);
    
    console.log('Current URL after login:', page.url());
    await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-afterlogin.png' });
    
    // Check if logged in
    if (page.url().includes('dashboard') || page.url().includes('account') || page.url().includes('products') || !page.url().includes('login')) {
      console.log('✅ LOGIN SUCCESSFUL!');
      
      // Go to products
      console.log('Going to products page...');
      await page.goto('https://payhip.com/dashboard/products', { waitUntil: 'networkidle2' });
      await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-products.png' });
      console.log('Products page URL:', page.url());
      
      // Get list of products
      const products = await page.evaluate(() => {
        const items = document.querySelectorAll('[class*="product"], .product-item, tr, .card');
        return Array.from(items).slice(0, 5).map(el => el.innerText?.substring(0, 100));
      });
      console.log('Products found:', products);
      
    } else {
      console.log('❌ Login may have failed. URL:', page.url());
      await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-failed.png' });
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    await page.screenshot({ path: '/home/openclaw/.openclaw/workspace/payhip-error.png' }).catch(() => {});
  }
  
  await browser.close();
  console.log('Done');
})();

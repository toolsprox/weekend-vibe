const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Snapshot Homepage
  console.log('Navigating to homepage...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'snap-home.png', fullPage: true });
  console.log('Saved snap-home.png');

  // 2. Snapshot Login Page
  console.log('Navigating to login page...');
  await page.goto('http://localhost:3000/loyaltable/login', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'snap-login.png' });
  console.log('Saved snap-login.png');

  await browser.close();
  console.log('Done!');
})();

const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to live bookings page...');
  await page.goto('https://masakali.co.uk/bookings/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'snap-live.png', fullPage: true });
  console.log('Saved snap-live.png');

  await browser.close();
  console.log('Done!');
})();

const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to live bookings page...');
  await page.goto('https://masakali.co.uk/bookings/', { waitUntil: 'domcontentloaded' });
  
  // wait 2 seconds for JS rendering
  await new Promise(r => setTimeout(r, 2000));
  
  await page.screenshot({ path: 'snap-live-fast.png', fullPage: true });
  console.log('Saved snap-live-fast.png');

  await browser.close();
  console.log('Done!');
})();

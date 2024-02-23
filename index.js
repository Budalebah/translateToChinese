// index.js
const puppeteer = require('puppeteer');

async function translateToChinese(message) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto('https://app.tea.xyz/');

    // Sayfadaki etkileşimleri simüle ederek dil çevirisini yapın
    await page.type('#input-box', message);
    await page.click('#translate-button');
    const translatedText = await page.$eval('#output-box', el => el.textContent);

    return translatedText.trim();
  } catch (error) {
    console.error('An error occurred:', error);
    return 'Sorry, an error occurred.';
  } finally {
    await browser.close();
  }
}

module.exports = translateToChinese;

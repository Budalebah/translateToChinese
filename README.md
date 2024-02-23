# translateToChinese
Translate a web page into Chinese using Puppeteer


const translateToChinese = require('translate-puppeteer');

async function main() {
  const userMessage = "Translate this to Chinese.";

  try {
    const chineseTranslation = await translateToChinese(userMessage);
    console.log(`User: ${userMessage}`);
    console.log(`Translated to Chinese: ${chineseTranslation}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();

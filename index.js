const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://warm-headland-68796.herokuapp.com/', {waitUntil: 'networkidle2'});
  await page.waitFor(3000)
  await page.type('.form-control','282');
  await page.click('.btn-danger')
  const element = await page.$(".badge-pill");
  const text = await page.evaluate(element => element.textContent, element);
  if(text == "50%"){
      console.log("Palindromo encontrado")
  }
  await browser.close();
})();
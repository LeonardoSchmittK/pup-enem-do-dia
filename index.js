import puppeteer from "puppeteer";

setInterval(() => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://enem-do-dia.onrender.com");

    console.log("Question renewed.");
    await browser.close();
  })();
}, 1000);

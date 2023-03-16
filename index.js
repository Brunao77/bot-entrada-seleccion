import puppeteer from "puppeteer";
import fs from "fs";
import twilio from "twilio";

const savePageToCompare = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.deportick.com/");

  const html = await page.content();

  fs.writeFileSync("page_to_compare.html", html);

  await browser.close();
};

const saveElementToCompare = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.deportick.com/");

  const element = await page.$eval(
    "#eventList .home-events .row .col-md-12",
    (el) => el.innerHTML
  );

  fs.writeFileSync("element_specific_to_compare.txt", element);

  await browser.close();
};

const compareActualPage = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.deportick.com/");

  const newHtml = await page.content();

  const oldHtml = fs.readFileSync("page_to_compare.html", "utf-8");

  if (oldHtml === newHtml) {
    console.log("La página no ha cambiado.");
  } else {
    console.log("La página ha cambiado.");
  }

  await browser.close();
};

const compareActualElement = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.deportick.com/");

  const element = await page.$eval(
    "#eventList .home-events .row .col-md-12",
    (el) => el.innerHTML
  );

  const oldElement = fs.readFileSync(
    "element_specific_to_compare.txt",
    "utf-8"
  );

  if (oldElement === element) {
    console.log(
      `La página no ha cambiado. [${new Date().toLocaleTimeString("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
      })}]`
    );
  } else {
    console.log("La página ha cambiado.");
    /*const accountSid = "Your accountSid";
    const authToken = "Your  authToken";
    const client = twilio(accountSid, authToken);

    client.messages
      .create({
        body: `La página ha cambiado. [${new Date().toLocaleTimeString(
          "es-AR",
          {
            timeZone: "America/Argentina/Buenos_Aires",
          }
        )}]`,
        from: "whatsapp: The number given",
        to: "whatsapp: Your number",
      })
      .then((message) => console.log(message.sid));*/
  }
};

setInterval(compareActualElement, 30000);

// const puppeteer = require("puppeteer");
const login = require("../../puppeteer/login");
const cmd = require("../../puppeteer/command");

describe("BillPay Billers Tab", () => {
  let browser = null;
  let page = null;

  const billPay = {
    folderPath: "./screenshots/billpay/",
    Tabs: {
      bills: "#blgo-Bills",
      payments: "#blgo-Payments",
      billers: "#blgo-Billers",
    },
  };

  beforeAll(async function () {
    let obj = await login.getAccess(browser, page);
    browser = obj.browser;
    page = obj.page;
  });

  beforeEach(async function () {
    console.log("Before...............");
  });

  it("Login with credential", async () => {
    await page.waitForSelector(login.eleSelector.username);
    await page.type(login.eleSelector.username, cmd.username);
    await page.click(login.eleSelector.idp);

    await page.waitForSelector(login.eleSelector.password);
    await page.type(login.eleSelector.password, cmd.password);
    await page.click(login.eleSelector.signin);

    await page.waitForSelector(login.eleSelector.bpuiSignInWidget);
    await page.waitForSelector(login.eleSelector.oktaUsername);

    await page.type(login.eleSelector.oktaUsername, cmd.username);
    await page.click(login.eleSelector.signin);
    await page.waitForSelector(login.eleSelector.appRootEle);
  });

  it("Click on billers Tab", async () => {
    await cmd.screenshot(page, `${billPay.folderPath}dashboard-bills.png`);
    await page.goto("https://billpay.billgo-sandbox.com/dashboard/billers", { waitUntil: "load" });
    // await page.waitForSelector(billPay.Tabs.billers);
    // await page.click(billPay.Tabs.billers);

    // const bodyHandle = await page.$(billPay.Tabs.billers);
    // const html = await page.evaluate(tab => tab.innerHTML, bodyHandle);
    // await bodyHandle.dispose();

    // await page.$$eval(billPay.Tabs.billers, (elements) =>
    //   elements.map((item) => {
    //     if (item.textContent == "Billers") {
    //       item.click();
    //     }
    //   })
    // );

    // await page.evaluate(() => {
    //   // document.querySelector('.route-redirect-box').click();
    //   document
    //     .getElementById(billPay.Tabs.billers)
    //     .addEventListener("click")
    //     .click();
    // });

    await cmd.screenshot(page, `${billPay.folderPath}dashboard-billers.png`);
  });

  afterAll(async function () {
    await browser.close();
  });
});

// const puppeteer = require("puppeteer");
const login = require("../../puppeteer/login");
const cmd = require("../../puppeteer/command");

describe("User Login", () => {
  let browser = null;
  let page = null;

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

    await cmd.screenshot(page, `${login.eleSelector.folderPath}okta-login.png`);

    await page.waitForSelector(login.eleSelector.bpuiSignInWidget);
  });

  it("Check the title", async () => {
    await page.waitForSelector(login.eleSelector.oktaUsername);
    const title = await page.title();
    expect(title).toBe("BillGO Hosted Bill Pay");

    await page.type(login.eleSelector.oktaUsername, cmd.username);
    await page.click(login.eleSelector.signin);

    await page.waitForSelector(login.eleSelector.appRootEle);
    await cmd.screenshot(page, `${login.eleSelector.folderPath}bill-pay.png`);
  });

  afterAll(async function () {
    await browser.close();
  });
});

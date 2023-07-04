// @ts-check

const { test, expect } = require("@playwright/test");
const { login } = require("./modules/login");
const { fileName } = require("./utilities/utility");
const { use } = require("../playwright.config");


test.describe("Visit Billers Tab", async () => {
  let page;
  let context;
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({
      recordVideo: {
        dir: `artifacts/${fileName().short}/videos/${
          fileName().full
        }_user_login`,
      },
    });
    page = await context.newPage();
  });

  // test.beforeEach(async ({ page }) => {
  //   await page.goto("/");
  //   await page.locator("#okta-signin-username").fill(use?.username);
  //   await page.click("#okta-signin-submit");
  //   await expect(page).toHaveTitle(/BillGO Hosted Bill Pay/);
  // });

  test("click on Billers Tab", async ({ page }) => {
    // await expect(page).toHaveURL(/.*login/);
    // await page.getByRole("button", { name: "Billers" }).click({ force: true });

    // await page.goto("/");

    await login(page);
    await page.locator("#blgo-Billers").click();
    await page.screenshot({ path: `artifacts/${fileName().short}/screenshots/${fileName().full}_billers_tab.png` });

  });

  // test.afterAll(async ({ browser }) => {
  //   await context.close();
  //   await browser.close();
  // });
});

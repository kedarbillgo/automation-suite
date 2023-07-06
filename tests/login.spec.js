// @ts-check

const { test, expect } = require("@playwright/test");
const { login } = require("./modules/login");
const { fileName } = require("./utilities/utility");

test.describe("User Login", async () => {
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

  test("Correctly login and check the title of page", async ({ page }) => {
    await login(page);
    await page.locator("#blgo-Billers");
    await expect(page).toHaveTitle(/BillGO Hosted Bill Pay/);
  });
});

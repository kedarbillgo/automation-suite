// @ts-check
const { test } = require("@playwright/test");
const { login } = require("../modules/login");
const { addCredBiller } = require("../modules/add-cred-biller");
const { fileName } = require("../utilities/utility");
const { use } = require("../../playwright.config");

test.describe("Visit Billers Tab & Add Cread Biller", async () => {
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

  test("Add Cread Biller", async ({ page }) => {
    await login(page);

    // click on Billers Tab
    await page.locator("#blgo-Billers").click();

    // Wait for Billers Tab get open
    await page.waitForURL(`${use?.baseURL}/dashboard/billers`);

    // Add Cred Biller
    await addCredBiller(page);
  });
});

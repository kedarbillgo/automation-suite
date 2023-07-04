// @ts-check

const { test, expect } = require('@playwright/test');
const { login } = require('./modules/login');
const {fileName} = require('./utilities/utility');

test.describe("User Login", async () => {
  let page;
  let context;
  test.beforeAll(async ({ browser  }) => {
    context = await browser.newContext({
      recordVideo: {dir: `artifacts/${fileName().short}/videos/${fileName().full}_user_login`
    }});
    page = await context.newPage()
    await login(page);
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/BillGO Hosted Bill Pay/);
  });

  test('has url', async ({ page }) => {
    await expect(page).toHaveURL(/.*login/);
  });

  test.afterAll(async ({ browser  }) => {
    await context.close();
    await browser.close();
  });
});
/**
 * This is testcase for making the payments thorugh bills tab in BillPay UI
 *
 */

//required imports
const { test } = require("@playwright/test");
const { MakePaymentBills } = require("../../pages/make-payment-bills");
const { timer } = require("../../helpers/time-stamp");
const { Utilities } = require("../../helpers/utilities");
const { chromium } = require("@playwright/test");
const Logger = require("../../helpers/logger");
require("dotenv").config();

let logger = null;
(async () => {
  const utility = new Utilities();
  logger = await Logger.logger(await utility.retrieveFilename(__filename));
})();

//tests
test("test to make payment in bills section @smoke", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    recordVideo: { dir: `artifacts/${timer}/videos/` },
  });
  const page = await context.newPage();

  const utility = new Utilities(page);
  const makepay = new MakePaymentBills(page, logger);

  await page.goto(process.env.OKTA_URL);

  await page.waitForLoadState();

  await makepay.selectBillerAndEnterAmt();

  await makepay.selectBankReviewPaymentAndProcess();

  await utility.takeMyScreenshot("make_payment.png");
});

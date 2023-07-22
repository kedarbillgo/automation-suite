/**
 * This is testcase for adding a manual biller in BillPay UI
 *
 */

//required imports
const { test } = require("@playwright/test");
const { AddManualBiller } = require("../../pages/add-manual-biller");
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
test.use({ storageState: "./LoginAuth.json" });
test("test to add manual biller @smoke", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    recordVideo: { dir: `artifacts/${timer}/videos/` },
  });
  const page = await context.newPage();
  const addmanual = new AddManualBiller(page, logger);
  const utility = new Utilities(page);

  await page.goto(process.env.OKTA_URL);

  await page.waitForLoadState();

  await addmanual.billersTabNavigate();

  await addmanual.addBiller();

  await addmanual.verifyBiller();

  await utility.takeMyScreenshot("add_manual_biller.png");

  await browser.close();
});

/**
 * This is testcase for adding a credentials biller in BillPay UI
 *
 */

//required imports
const { test } = require("@playwright/test");
const { AddCredentialsBiller } = require("../../pages/add-credentials-biller");
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
test("test to add credential biller @smoke", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    recordVideo: { dir: `artifacts/${timer}/videos/` },
  });
  const page = await context.newPage();
  const addcred = new AddCredentialsBiller(page, logger);
  const utility = new Utilities(page);

  await page.goto(process.env.OKTA_URL);

  await page.waitForLoadState();

  await addcred.billersTabNavigate();

  await addcred.addBiller();

  await addcred.verifyBiller();

  await utility.takeMyScreenshot("add_credential_biller.png");

  await browser.close();
});

import { chromium } from "@playwright/test";
import { OktaBillgoLogin } from "../pages/okta-billgo-login";
import Logger from "../helpers/logger";
import { Utilities } from "../helpers/utilities";
require("dotenv").config();

let logger = null;
(async () => {
  const utility = await new Utilities();
  logger = await Logger.logger(await utility.retrieveFilename(__filename));
})();

async function globalSetup() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  const oktabillgo = new OktaBillgoLogin(page, logger);
  const utility = new Utilities(page);

  await page.goto(process.env.OKTA_URL);

  await oktabillgo.oktaAuth();

  await oktabillgo.billPayLogin();

  await utility.takeMyScreenshot("login.png");

  await page.context().storageState({ path: "./LoginAuth.json" });

  await browser.close();
}

export default globalSetup;

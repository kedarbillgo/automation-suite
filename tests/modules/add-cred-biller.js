const { fileName } = require("../utilities/utility");
const { expect } = require("@playwright/test");

module.exports = {
  addCredBiller: async (page) => {
    // await page.waitForSelector(login.eleSelector.username);

    /**
     * Login page element selectors
     */
    const login = {
      btnAddBiller: "#blgo-add-bills",
      inputSearchPayee: "#billgo-add-payee-company-search-input",
      addBillerTitle: "Add your biller",
    };

    // await page.goto(use.authURL);

    // await page.type(login.username, use.username);
    await page.click(login.btnAddBiller);

    const inputSearchPayee = await page.locator(login.inputSearchPayee);

    // Make sure the have correct title
    // await expect(page.locator("h3.blgo-view-header--title")).toHaveText([
    //   login.addBillerTitle,
    // ]);


    await expect(page.locator("h3.blgo-view-header--title").first()).toHaveText(/Add your biller/);

    await inputSearchPayee.type("Discover");

    await page.getByTestId("DiscoverButtonWrapper").click();

    // await page.type("Discover");

    // await page.click(login.signin);
    // await page.screenshot({ path: `artifacts/${fileName().short}/screenshots/${fileName().full}_okta_login.png` });

    // await page.locator(login.oktaUsername).fill(use.username);
    // await page.click(login.signin);

    // await page.context().storageState({ path: authFile });

    await page.screenshot({
      path: `artifacts/${fileName().short}/screenshots/${
        fileName().full
      }_add_cred_biller.png`,
    });
  },
};

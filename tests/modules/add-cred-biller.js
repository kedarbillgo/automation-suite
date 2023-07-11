const { fileName } = require("../utilities/utility");
const { expect } = require("@playwright/test");

module.exports = {
  addCredBiller: async (page) => {
    /**
     * Add Cred Biller page element selectors
     */
    const ctx = {
      btnAddBiller: "#blgo-add-bills",
      inputSearchPayee: "#billgo-add-payee-company-search-input",
      txtAddBillerTitle: "Add your biller",
      txtBillerToSerach: "Discover",
      txtCredTitle: "#billgo-add-merchant-payee-link-text>div",
      txtAddBiller: "h3.blgo-view-header--title",
      btnSubmit: "#billgo-submit-button",
      inputUsername: "input[type='text']",
      inputPassword: "input[type='password']",
    };

    // Click on add biller button
    await page.waitForSelector(ctx.btnAddBiller, { timeout: 60000 });
    await page.click(ctx.btnAddBiller);

    await page.waitForLoadState();

    await page.screenshot({
      path: `artifacts/${fileName().short}/screenshots/${
        fileName().full
      }_add_button.png`,
    });

    // Enter the biller name in search box
    // await page.waitForSelector(ctx.inputSearchPayee);
    await page.locator(ctx.inputSearchPayee).fill(ctx.txtBillerToSerach);

    // Make sure the have correct title
    /*
      const searchTitle = await page.waitForSelector(ctx.txtAddBiller);
      await expect(searchTitle.first()).toHaveText(ctx.txtAddBillerTitle, {
        timeout: 60000,
      });
    */

    // Click on search result exact result

    // await page.waitForSelector("data-testid='DiscoverButtonWrapper'", {
    //   timeout: 60000,
    // });
    // await searchResult.click();

    // await page
    //   .locator("data-testid='DiscoverButtonWrapper'", { timeout: 60000 })
    //   .click();

    await page.getByTestId("DiscoverButtonWrapper").click();

    await expect(page.locator(ctx.txtCredTitle)).toHaveText(
      "Please enter your login details"
    );

    // Add username and password
    await page.locator(ctx.inputUsername).fill("username");
    await page.locator(ctx.inputPassword).fill("Password!");

    await page.screenshot({
      path: `artifacts/${fileName().short}/screenshots/${
        fileName().full
      }_enter_login.png`,
    });

    // Submit the cred form
    await page.click(ctx.btnSubmit);


    await page.screenshot({
      path: `artifacts/${fileName().short}/screenshots/${
        fileName().full
      }_after_submit.png`,
    });

    await page.waitForLoadState();

    // Visit the billers tab page
    await page.goto("/dashboard/billers");

    /**
     * following element is have challage as these depend uplon the thirdparty linking response
     * TO: find the way wait until api get response on UI
     */
    // Go to Home
    // await page.locator("data-testid='BillPayHomeButton'").click();
    // OR
    // await expect("id='blgo-linked-payee-title'").toBeVisible();
    // await expect(page.locator(" data-testid='BillPayHomeButton'")).toHaveText("Bill Pay Home");
    // await page.locator("#blgo-billpay-home-button").click();

    await page.screenshot({
      path: `artifacts/${fileName().short}/screenshots/${
        fileName().full
      }_add_cred_biller.png`,
    });
  },
};

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
    await page.click(ctx.btnAddBiller);

    // Wait for search payee input elelemt
    const inputSearchPayee = await page.locator(ctx.inputSearchPayee);

    // Make sure the have correct title
    await expect(page.locator(ctx.txtAddBiller).first()).toHaveText(
      ctx.txtAddBillerTitle
    );

    // Enter the biller name in search box
    await inputSearchPayee.fill(ctx.txtBillerToSerach);

    // Click on search result exact result
    await page.getByTestId("DiscoverButtonWrapper").click();

    await expect(page.locator(ctx.txtCredTitle)).toHaveText(
      "Please enter your login details"
    );

    // Add username and password
    await page.locator(ctx.inputUsername).fill("username");
    await page.locator(ctx.inputPassword).fill("Password!");

    // Submit the cred form
    await page.click(ctx.btnSubmit);

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

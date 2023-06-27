const Page = require("./openUrl");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BillersTab extends Page {
  shadowRoot(ele) {
    return $("#shadow-root-host-TabLayout").shadow$(ele);
  }

  get btnAddBills() {
    return this.shadowRoot("#blgo-add-bills");
  }

  get btnBillersTab() {
    return this.shadowRoot("#blgo-Billers");
  }

  get txtHeaderTitle() {
    return $("h3.blgo-view-header--title");
  }

  get inputSearch() {
    return $("#billgo-add-payee-company-search-input")
  }

  async addBiller() {
    await this.btnAddBills.click();
    const headerTitle = await this.txtHeaderTitle;  

    await browser.waitUntil(
      async function () {
        return (await headerTitle.getText()) === "Add your biller";
      },
      {
        timeout: 5000,
        timeoutMsg: "expected text to be different after 5s",
      }
    );

    const inputSearch = await this.inputSearch;
    await inputSearch.setValue("discover");
    await browser.pause(3000);

    await browser.waitUntil(
      async function () {
        return (await $('div[data-testid="searchCountDiv"]').getText().includes("results found"));
      },
      {
        timeout: 5000,
        timeoutMsg: "expected text to be different after 5s",
      }
    );

    $('div[data-testid="DiscoverButtonWrapper"]').click();

    await browser.pause(5000);

    await expect('#billgo-add-merchant-payee-link-text > .blgo-key-nav-div').toHaveText("Please enter your login details");

    await $(".blgo-input--input").setValue("username");

    await $("#Password-input").setValue("Password!");

    await $("#billgo-submit-button").click();


    await browser.pause(3000);
    await browser.saveScreenshot(`./reports/billgo_${Date.now()}.png`);

  }

  async visit() {
    await this.btnBillersTab.click();
    await expect(this.btnAddBills).toHaveText("plus Add Bills");
  }

  open() {
    return super.open(`https://billpay.billgo-sandbox.com/dashboard/billers`);
  }
}

module.exports = new BillersTab();

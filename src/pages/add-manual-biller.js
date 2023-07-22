/**
 * This is addManualBiller.js file designed for capturing elements and page objects passed in their methods
 * Further used in Add_manual_biller testcase
 */

//imports
const { test, expect } = require("@playwright/test");
const Logger = require("../helpers/logger");
const { filename } = require("../helpers/time-stamp");

exports.AddManualBiller = class AddManualBiller {
  constructor(page, logger) {
    this.page = page;
    this.logger = logger;
  }

  //locators for addManualBiller
  eleSelectors = {
    billgo_cntnue_btn: "#okta-signin-submit",
    billers_tab: "#blgo-Billers:visible",
    add_bills_button: "#blgo-add-bills:visible",
    search_biller_box: "#billgo-add-payee-company-search-input:visible",
    search_biller: "#billgo-add-payee-company-search:visible",
    search_result: "#Discover-U8SR7d04:visible",
    search_manual_biller: 'div[data-testid="Ally AutoButtonWrapper"]',
    accnt_info_pay_lnk: "#billgo-add-merchant-payee-link-add-manually:visible",
    fill_acc_input:
      'input[data-testid="Input-Input"][title="Ally Auto Account Number"]',
    zipcde_entry: 'input[data-testid="Input-Input"][title="Zip Code"]',
    state_entry: 'input[data-testid="Input-Input"][title="State of Residence"]',
    acc_review: "#billgo-submit-button:visible",
    continue_btn: "#billgo-submit-button:visible",
    add_bllr_btn: "#billgo-review-continue:visible",
    bllr_header_match: "#billgo-add-payee-success-summary",
  };

  //method to navigate to billers tab
  async billersTabNavigate() {
    try {
      //clicking on the billers tab
      await this.page.locator(this.eleSelectors.billgo_cntnue_btn).click();
      await this.page.locator(this.eleSelectors.billers_tab).click();
      this.logger.info("clicked on the billers tab");
    } catch (error) {
      this.logger.error("captured an error", error);
    }
  }

  //method for adding the biller
  async addBiller() {
    try {
      //clicking on the Add bills button
      await this.page.locator(this.eleSelectors.add_bills_button).click();
      this.logger.info("clicked on add bills button");

      //clicking on the search box
      await this.page
        .locator(this.eleSelectors.search_biller_box)
        .fill("ally auto");
      this.logger.info("entered biller name on search biller textbox");

      //clicking on the appropriate search result
      await this.page.locator(this.eleSelectors.search_manual_biller).click();
      this.logger.info("clicked on relevant search result");

      //scrolling down
      await this.page.keyboard.down("End");
      this.logger.info(
        "scrolling down to naviagte towardsadding for manual instructions"
      );

      //clicking on "add account information to pay link"
      await this.page.locator(this.eleSelectors.accnt_info_pay_lnk).click();
      this.logger.info('clicked on "add account information to pay"');

      //filling the account number
      await this.page
        .locator(this.eleSelectors.fill_acc_input)
        .fill("007345678012");
      this.logger.info("typed account number for the biller");

      //filling the zip code
      await this.page.locator(this.eleSelectors.zipcde_entry).fill("85062");
      this.logger.info("typed the zip code for the biller");

      await this.page.keyboard.down("End");
      this.logger.info("scrolling down to navigate to type state residence");

      //filling state of residence
      await this.page.locator(this.eleSelectors.state_entry).fill("AZ");

      //clicking on review account number button
      await this.page.locator(this.eleSelectors.acc_review).click();
      this.logger.info("clicking on button review account number");

      //clicking on continue button
      const elem = await this.page.locator(this.eleSelectors.continue_btn, {
        timeout: 8000,
      });
      await elem.click();

      //scrolling up
      await this.page.keyboard.press("PageUp");
      this.logger.info("scrolling up to navigate to add biller button");

      //clicking on add biller
      await this.page.locator(this.eleSelectors.add_bllr_btn).click();
      this.logger.info("clicked on add biller button");

      //verify the header for biller added
    } catch (error) {
      this.logger.error("captured an error", error);
    }
  }

  async verifyBiller() {
    //let logger = await Logger.logger();
    try {
      //check for biller detail section
      await expect(
        this.page.locator(this.eleSelectors.bllr_header_match, {
          timeout: 9000,
        })
      ).toBeVisible();
      this.logger.info("captured biller details");
    } catch (error) {
      this.logger.error("captured an error", error);
    }
  }
};

/**
 * This is addCredentialsBiller.js file designed for capturing elements and page objects passed in their methods
 * Further used in Add_credentials_biller testcase
 */

//imports
const { expect } = require("@playwright/test");
exports.AddCredentialsBiller = class AddCredentialsBiller {
  constructor(page, logger) {
    this.page = page;
    this.logger = logger;
  }

  //locators for addCredentialsBiller
  eleSelectors = {
    billgo_cntnue_btn: "#okta-signin-submit",
    billers_tab: "#blgo-Billers:visible",
    add_bills_button: "#blgo-add-bills:visible",
    search_biller_box: "#billgo-add-payee-company-search-input:visible",
    search_biller: "#billgo-add-payee-company-search:visible",
    search_result: "#Discover-U8SR7d04:visible",
    cred_username: "#User ID-input:visible",
    cred_username1: "User ID",
    cred_pass: "#Password-input:visible",
    cred_pass1: "Password",
    cred_linkaccount_btn: "#billgo-submit-button:visible",
    biller_linked_testId: "LinkedPayee",
    biller_record_testId: "ListRow",
    verify_biller_detail: "#billgo-payee-detail-title-section:visible",
  };

  //method to navigate to billers tab
  async billersTabNavigate() {
    try {
      //clicking on the billers tab
      await this.page.locator(this.eleSelectors.billgo_cntnue_btn).click();
      await this.page.locator(this.eleSelectors.billers_tab).click();
      this.logger.info("clicked on the billers tab");
    } catch (error) {
      this.logger.info("captured an error", error);
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
        .fill("discover");
      this.logger.info("entered biller name on search biller textbox");

      //clicking on the appropriate search result
      await this.page.locator(this.eleSelectors.search_result).click();
      this.logger.info("clicked on relevant search result");

      //filling the username for credential biller
      await this.page
        .getByRole("textbox", { name: this.eleSelectors.cred_username1 })
        .click();
      await this.page
        .getByRole("textbox", { name: this.eleSelectors.cred_username1 })
        .fill("username");

      //filling password for the credentials biller
      await this.page.locator(this.eleSelectors.cred_pass).click();
      await this.page.locator(this.eleSelectors.cred_pass).fill("Password!");
      this.logger.info("entered credentials for the linking biller");

      //clicking on the continue button
      await this.page.locator(this.eleSelectors.cred_linkaccount_btn).click();
      this.logger.info(
        "clicked on continue button after entering linking credentials"
      );
    } catch (error) {
      await this.logger.info("captured an error", error);
    }
  }

  async verifyBiller() {
    try {
      //clicking on account visible
      await this.page
        .getByTestId(this.eleSelectors.biller_linked_testId)
        .getByTestId(this.eleSelectors.biller_record_testId)
        .click();
      this.logger.info(
        "clicked on element for the verified biller_add_account"
      );
      //check for biller detail section
      await expect(
        this.page.locator(this.eleSelectors.verify_biller_detail)
      ).toContainText(["Biller Detail"]);
      this.logger.info("captured biller details");
    } catch (error) {
      this.logger.info("captured an error", error);
    }
  }
};

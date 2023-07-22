/**
 * This is makePaymentBills.js file designed for capturing elements and page objects passed in their methods
 * Further used in make_payments_bills testcase
 */
exports.MakePaymentBills = class MakePaymentBills {
  constructor(page, logger) {
    this.page = page;
    this.logger = logger;
  }

  //locators for makePaymentBills
  eleSelectors = {
    billgo_cntnue_btn: "#okta-signin-submit",
    bill_selector: 'button[id^="billgo-menu-kebab-button-payee"]:visible',
    mke_pay_kebab: 'button[data-testid="KebabMenuItem-Payment"]:visible',
    othr_amt_rdio: "#single-payment-other-amount--radio:visible",
    py_amt_input: "#payment-amount-input-input",
    bnk_selection_drpdwn:
      "#payment-funding-account-selector-select-drop-down:visible",
    bnk_select: "#blgo-funding-account-1:visible",
    review_pay_btn: "button#blgo-review-payment-button:visible",
    cnfrmatn_mdl_affrmatve:
      "#billgo-payee-detail-confirmation-modal-affimative-button:visible",
    pay_amt_btn: "#payment-pay-button:visible",
  };

  async selectBillerAndEnterAmt() {
    try {
      //clicking on first record kebab menu for initiating the payment
      await this.page.locator(this.eleSelectors.billgo_cntnue_btn).click();
      await this.page.locator(this.eleSelectors.bill_selector).first().click();
      this.logger.info(
        "clicking on first record kebab menu for initiating the payment"
      );

      //clicking o the make payment option
      await this.page.locator(this.eleSelectors.mke_pay_kebab).click();
      this.logger.info("clicked on the make payment option");
    } catch (error) {
      await console.log("captured an error", error);
    }
  }

  async selectBankReviewPaymentAndProcess() {
    try {
      //element for selecting other amt radio button
      await this.page.locator(this.eleSelectors.othr_amt_rdio).click();
      this.logger.info("clicked on other amount radio");

      //element to fill text box opens after selecting other-amt radio btn
      await this.page.waitForTimeout(6000);
      await this.page.locator(this.eleSelectors.py_amt_input).fill("8.03");
      this.logger.info(
        "clicked on element to fill text box opens after selecting other-amt radio btn"
      );

      //clicking element to open dropdown
      await this.page.locator(this.eleSelectors.bnk_selection_drpdwn).click();
      this.logger.info("clicked element to open dropdown");

      //clicking element to select bank account
      await this.page.locator(this.eleSelectors.bnk_select).click();
      this.logger.info("clicked on element to select bank account");

      //scrolling down to capture next element
      await this.page.keyboard.down("End");
      this.logger.info("scrolling down to capture next element");

      //clicking on element review payment
      await this.page.locator(this.eleSelectors.review_pay_btn).click();
      this.logger.info("clicked on element review payment");

      const elem = await this.page.locator(
        this.eleSelectors.cnfrmatn_mdl_affrmatve,
        { timeout: 5000 }
      );
      if (elem) {
        await elem.click();
        this.logger.info(
          "confirmation modal button asking whether to proceed for payment",
          this.eleSelectors.cnfrmatn_mdl_affrmatve
        );
      }
      //clicking on pay btn getting appeared on next screen
      await this.page.locator(this.eleSelectors.pay_amt_btn).click();
      this.logger.info("clicked on pay btn getting appeared on next screen");

      //scrolling up to view the payment message
      await this.page.keyboard.press("Home");
      await this.page.waitForTimeout(6000);
    } catch (error) {
      await console.log("captured an error", error);
    }
  }
};

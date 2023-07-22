/**
 * Page object file of oktaBillgoLogin(okta auth Bypass) containing login elements and page objects passed in their methods
 * They are further used in respective automation scripts
 */
require("dotenv").config();

exports.OktaBillgoLogin = class OktaBillgoLogin {
  constructor(page, logger) {
    this.page = page;
    this.logger = logger;
  }
  //locators for oktaBillgoLogin
  eleSelectors = {
    okta_uname: "#idp-discovery-username",
    submit_btn: "#idp-discovery-submit",
    okta_pwd: "#okta-signin-password",
    okta_signin: "#okta-signin-submit",
    billgo_uname: "#okta-signin-username",
    billgo_cntnue_btn: "#okta-signin-submit",
  };

  //okta sign IN method for user-authentication
  async oktaAuth() {
    try {
      //entering okta username
      await this.page
        .locator(this.eleSelectors.okta_uname)
        .fill(process.env.USERNAME);
      this.logger.info("typed in okta username", this.eleSelectors.okta_uname);

      //clicking on continue button
      await this.page.locator(this.eleSelectors.submit_btn).click();
      this.logger.info(
        "clicked on continue button",
        this.eleSelectors.submit_btn
      );

      //entering okta password
      await this.page
        .locator(this.eleSelectors.okta_pwd)
        .fill(process.env.PASSWORD);
      this.logger.info("typed in okta password", this.eleSelectors.okta_pwd);

      //clicking on sign IN
      await this.page.locator(this.eleSelectors.okta_signin).click();
      this.logger.info(
        "clicked on okta signIN button",
        this.eleSelectors.okta_signin
      );
    } catch (error) {
      await console.log("captured an error", error);
      this.logger.info("captured an error", error);
    }
  }

  async billPayLogin() {
    try {
      //enter username for billpay ui
      await this.page
        .locator(this.eleSelectors.billgo_uname)
        .fill(process.env.USERNAME);
      this.logger.info(
        "filling for the username",
        this.eleSelectors.billgo_uname
      );

      //clicking on continue button
      await this.page.locator(this.eleSelectors.billgo_cntnue_btn).click();
      this.logger.info(
        "clicking on the continue button after entering username",
        this.eleSelectors.billgo_cntnue_btn
      );
    } catch (error) {
      await console.log("captured an error", error);
      this.logger.error("captured an error", error);
    }
  }
};

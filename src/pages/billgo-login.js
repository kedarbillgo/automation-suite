/**
 * Page object file of billgoLogin containing login elements and page objects passed in their methods
 * They are further used in respective automation scripts
 */

const Logger = require("../helpers/logger");
exports.BillgoLogin = class BillgoLogin {
  constructor(page) {
    this.page = page;
  }

  //locators for billgoLogin
  eleSelectors = {
    user_name: "#okta-signin-username:visible",
    submit_btn: "#okta-signin-submit",
    billgo_username: "#input28",
    billgo_password: "#input36",
    signin_click: 'input[type="submit"][value="Sign in"]',
    push_auth_button: 'div.authenticator-button[data-se="okta_verify-push"]',
  };

  //okta sign IN method for user-authentication
  async oktaAuth() {
    let logger = await Logger.logger();
    try {
      //entering username
      await this.page
        .locator(this.eleSelectors.billgo_username)
        .fill(process.env.USERID);
      logger.info("filling in username", this.billgo_username);

      //entering password
      await this.page
        .locator(this.eleSelectors.billgo_password)
        .fill(process.env.PASSID);
      logger.info("filling in the password");

      //clicking on the sign In button
      await this.page.locator(this.eleSelectors.signin_click).click();
      logger.info("clicked on signin");

      //clicking on push authentication link
      await this.page.locator(this.eleSelectors.push_auth_button).click();
      logger.info("clicked on push notification");
    } catch (error) {
      await console.log("captured an error", error);
    }
  }
};

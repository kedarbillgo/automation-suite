const Page = require("./openUrl");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#idp-discovery-username");
  }

  get inputPassword() {
    return $("#okta-signin-password");
  }

  get btnIDP() {
    return $("#idp-discovery-submit");
  }

  get btnSubmit() {
    return $("#okta-signin-submit");
  }

  get btnSingIn() {
    return $("#sign-in-widget");
  }

  get inputOktaSigninUsername() {
    return $("#okta-signin-username");
  }

  get inputRemenberMe() {
    return $("input.checkedFocus");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputRemenberMe;

    await this.btnIDP.click();

    await this.inputPassword.setValue(password);

    await this.btnSubmit.click();

    await browser.waitUntil(
      async () => (
        await expect(browser).toHaveTitle("BillGO Hosted Bill Pay"),
        {
          timeout: 5000,
          timeoutMsg: "expected text to be different after 5s00",
        }
      )
    );

    await this.inputOktaSigninUsername.setValue(username);

    // Okta submit
    await this.btnSubmit.click();

    // wait for page get load
    await browser.pause(15000);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open(`https://billgo.oktapreview.com/home/bookmark/0oa1kn6q3zUNqNz2L1d7/2557`);
  }
}

module.exports = new LoginPage();

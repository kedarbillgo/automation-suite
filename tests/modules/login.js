const { use } = require("../../playwright.config");
const {fileName} = require('../utilities/utility');

module.exports = {
  login: async (page) => {
    // await page.waitForSelector(login.eleSelector.username);

    /**
     * Login page element selectors
     */
    const login = {
      inputUsername: "#idp-discovery-username",
      inputPassword: "#okta-signin-password",
      btnIdp: "#idp-discovery-submit",
      btnSignin: "#okta-signin-submit",
      inputOktaUsername: "#okta-signin-username",
      appRootEle: "#shadow-root-host-TabLayout",
      folderPath: "login",
    };

    await page.goto(use.authURL);

    await page.type(login.inputUsername, use.username);
    await page.click(login.btnIdp);

    await page.type(login.inputPassword, use.password);
    await page.click(login.btnSignin);
    await page.screenshot({ path: `artifacts/${fileName().short}/screenshots/${fileName().full}_okta_login.png` });

    await page.locator(login.inputOktaUsername).fill(use.username);
    await page.click(login.btnSignin);

    await page.screenshot({ path: `artifacts/${fileName().short}/screenshots/${fileName().full}_okta_login.png` });
  },
};

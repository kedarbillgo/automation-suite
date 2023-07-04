const { use } = require("../../playwright.config");
const {fileName} = require('../utilities/utility');
const authFile = '../../.auth/user.json';

module.exports = {
  login: async (page) => {
    // await page.waitForSelector(login.eleSelector.username);

    /**
     * Login page element selectors
     */
    const login = {
      username: "#idp-discovery-username",
      password: "#okta-signin-password",
      idp: "#idp-discovery-submit",
      signin: "#okta-signin-submit",
      bpuiSignInWidget: "#sign-in-widget",
      oktaUsername: "#okta-signin-username",
      appRootEle: "#shadow-root-host-TabLayout",
      folderPath: "login",
    };

    await page.goto(use.authURL);

    await page.type(login.username, use.username);
    await page.click(login.idp);

    await page.type(login.password, use.password);
    await page.click(login.signin);
    await page.screenshot({ path: `artifacts/${fileName().short}/screenshots/${fileName().full}_okta_login.png` });

    await page.locator(login.oktaUsername).fill(use.username);
    await page.click(login.signin);

    await page.context().storageState({ path: authFile });

    await page.screenshot({ path: `artifacts/${fileName().short}/screenshots/${fileName().full}_okta_login.png` });
  },
};

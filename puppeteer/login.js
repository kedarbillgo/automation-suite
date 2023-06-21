const cmd = require("./index").cmd;

module.exports = {
  /**
   * Login page element selectors
   */
  eleSelector: {
    username: "#idp-discovery-username",
    password: "#okta-signin-password",
    idp: "#idp-discovery-submit",
    signin: "#okta-signin-submit",
    bpuiSignInWidget: "#sign-in-widget",
    oktaUsername: "#okta-signin-username",
    appRootEle: "#shadow-root-host-TabLayout",
    folderPath: "./screenshots/login/"
  },
  /**
   * Visit Okta URL and login
   * @param {browser} val
   * @param {page} val
   * @returns {object} papetter { browser, page }
   */
  getAccess: async (browser, page) => {
    browser = await cmd.browser();
    page = await browser.newPage();
    let URL = cmd.getLoginURL;
    // await page.goto(URL, { waitUntil: "load", timeout: 25000 });
    await page.goto(URL, { waitUntil: "load" });
    return { browser, page };
  },
};

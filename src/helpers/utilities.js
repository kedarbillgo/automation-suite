/**
 * This is a utilities file for creation of custom methods used for artifacts
 */

//imports
const { timer } = require("./time-stamp");
exports.Utilities = class Utilities {
  constructor(page) {
    this.page = page;
  }

  //custom screenshot method
  async takeMyScreenshot(screen_nm) {
    await this.page.screenshot({
      path: `artifacts/${timer}/screenshots/${screen_nm}`,
      fullPage: true,
    });
  }

  async retrieveFilename(filenme) {
    const val = await filenme.split("\\");
    const new_val = await val.slice(-1);
    return new_val;
  }
};

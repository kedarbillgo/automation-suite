require("dotenv").config();
const LoginPage = require("../login/login.page");
const BillersTab = require("../login/billers.page");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    const username = atob(process.env.AUTH_USERNAME);
    const password = atob(process.env.AUTH_PASSWORD);
    await LoginPage.open();
    await LoginPage.login(username, password);
  });

  it("should visit the billers tab", async () => {
    await BillersTab.visit();
  });

  it("should click add biller", async () => {
    await BillersTab.visit();
  });
});

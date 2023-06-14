const { defineConfig } = require("cypress");
// Populate process.env with values from .env file
require("dotenv").config();

module.exports = defineConfig({
  env: {
    okta_username: process.env.AUTH_USERNAME,
    okta_password: process.env.AUTH_PASSWORD,
    app_url: process.env.APP_URL,
    okta_login: process.env.OKTA_LOGIN,
  },
  e2e: {
    baseUrl: process.env.APP_URL || `http://localhost:3001`,
  },
});

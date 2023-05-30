const { defineConfig } = require("cypress");
// Populate process.env with values from .env file
require('dotenv').config()

module.exports = defineConfig({
  env: {
    okta_username: process.env.AUTH_USERNAME,
    okta_password: process.env.AUTH_PASSWORD,
    okta_domain: process.env.OKTA_DOMAIN,
    okta_client_id: process.env.REACT_APP_OKTA_CLIENTID,
    fake_username: process.env.FAKE_USERNAME,
    fake_password: process.env.FAKE_PASSWORD,
  },
  e2e: {
    baseUrl: process.env.DEV_DOMAIN || `http://localhost:3001`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

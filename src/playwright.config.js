// @ts-check
import { timer } from "./helpers/time-stamp";
const { defineConfig, devices } = require("@playwright/test");
//const { mergeHTMLReports } = require("playwright-merge-html-reports");
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

module.exports = defineConfig({
  globalSetup: "./global-setup/global-setup.js",
  testDir: "tests/",
  timeout: 6000000,
  //globalTimeout: 60 * 60 * 1000,
  //test.setTimeout(60000),
  /* Run tests in files in parallel */

  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: 'html',

  reporter: [
    ["html", { outputFolder: `artifacts/${timer}/htmlreport/my-report` }],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: `artifacts/${timer}/allurereport/my-allure-results`,
        suiteTitle: false,
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    //storageState: './LoginAuth.json'
  },
  //grep: [new RegExp("@smoke"), new RegExp("@sanity")],
  grep: [new RegExp("@smoke")],
  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testDir: "./global-setup/global-setup.js",
      testMatch: "global-setup.js",
    },
    {
      name: "chromium",
      //dependencies: ["setup"],
      use: { ...devices["Desktop Chrome"], storageState: "./LoginAuth.json" },
    },

    /*{
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'Edge',
      use: { ...devices['Desktop Edge'] },
    }, */

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    /*{
      name: 'Google Chrome',
       use: { ...devices['Desktop Chrome'], channel: 'chrome',video: {mode: 'on'}, colorScheme: 'dark'},
     }, */

    /*{
      name: 'Google Chrome',
       use: { ...devices['Desktop Chrome'], channel: 'chrome',video: {mode: 'on'}, colorScheme: 'dark'},
     }, */
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

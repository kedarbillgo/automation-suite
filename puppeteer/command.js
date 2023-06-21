const puppeteer = require("puppeteer");
require("dotenv").config();

module.exports = {
  sleepTime: process.env.API_CALL_SLEEP_TIME || 800,
  port: process.env.PORT || `3000`,
  getOriginURL: process.env.APP_ORIGIN || `http://localhost:${this.port}`,
  getLoginURL: process.env.OKTA_LOGIN || `http://localhost:${this.port}/login`,
  username: atob(process.env.AUTH_USERNAME),
  password: atob(process.env.AUTH_PASSWORD),
  screenshot: async function (page, path) {
    await page.screenshot({
      path: path,
      fullPage: true,
    });
  },
  browser: async function () {
    return await puppeteer.launch({
      headless: false,
      slowMo: Number(process.env.SLOWMO),
    });
  },
  delay: function (ms) {
    console.log("I am doen")
    return new Promise((resolve) => {
      setTimeout(() => {
        
        resolve("done");
      }, ms * 1000);
    });
  },
  click: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      throw new Error("Could not click on the");
    }
  },
  getText: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      return await page.$eval(selector, (element) => element.textContent);
    } catch (error) {
      throw new Error("Could not get text from selector" + { selector });
    }
  },
  getCount: async function (page, selector) {
    try {
      await page.waitForSelector(selector);
      return page.$$eval(selector, (element) => element.length);
    } catch (error) {
      throw new Error("Could not found the element " + { selector });
    }
  },
  typeText: async function (page, selector, text) {
    try {
      await page.waitForSelector(selector);
      await page.type(selector, text);
    } catch (error) {
      throw new Error("Could not found the element typeText");
    }
  },
  waitForText: async function (page, selector, text) {
    try {
      await page.waitForSelector(selector);
      await page.waitForFunction(selector, (text) => {
        document.querySelector(selector).innerText.includes(text),
          {},
          selector,
          text;
      });
    } catch (error) {
      throw new Error("Could not found the element waitForText");
    }
  },
  shouldNotExist: async function (page, selector) {
    try {
      await page.waitForSelector(selector, { hiddern: true });
    } catch (error) {
      throw new Error("Could not found the element shouldNotExist");
    }
  },
};

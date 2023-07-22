# ✨ Billpay UI Automation using the Playwright framework implemented with the page object model. ✨

## Setup

### ⚡️files and folder

- `playwright.config.js` - defines the configurations - browsers, viewport, reports, workers, grouping, mentioning tags.. etc
- `/Pageobjects` -contains locators and methods which are implemented in respective test scripts residing under `/tests` directory
- `/tests` directory contains the tests automation scripts which are running
- `/logger` directory contains file implementing logger to capture logs in respective log file with asia/kolkata timezone
- `/artifacts` directory contains the artifacts got after tests get executed

## 🥅 Local setup

- run `npm install` to install the required packages mentioned in the `package.json`
- need to add an `artifacts` folder in the local
- need to create a `.env` file, or rename the sample.env to .env and change the credentials to run in the local
  - USERID=REPLACE_WITH_YOUR_USERID
  - PASSID=REPLACE_WITH_YOUR_SECRETS

## 🔭 Github setup
- use the github secrets USERID and PASSID as mentioned in `.env`

## 🚀 Run the test

Inside that directory, you can run several commands:

`npx playwright test`
Runs the end-to-end tests.

`npx playwright test --ui`
Starts the interactive UI mode.

`npx playwright test --project=chromium`
Runs the tests only on Desktop Chrome.

`npx playwright test --workers 2`
Run all the tests in test folder and in parallel

`npx playwright test tests\add_manual_biller_POM.spec.js --project="chromium" --workers 2`
Runs any specific test in with mentioning browser_name and no of workers(for runnung in parallel)

`npx playwright test tests\add_manual_biller_POM.spec.js --project="chromium"`
Runs any specific test in with mentioning browser_name

`npx playwright test tests\add_manual_biller_POM.spec.js`
Runs the tests in a specific file.

`npx playwright test --debug`
Runs the tests in debug mode.

`npx playwright codegen`
Auto generate tests with Codegen.

### 🌱 We suggest that you begin by typing:

`npx playwright test`

### ⚡ Languages and Tools:

[<img align="left" title="Playwright" alt="Playwright" src="https://gitnet.fr/deblan/playwright/raw/commit/811d02dbe872a9637abb289f23e1afbe06ecab5e/packages/playwright-core/src/web/traceViewer/static/icon-192x192.png" alt="home"  height="40" />][playwright]
&nbsp;&nbsp;
[<img align="left" title="React" alt="React" height="40" src="https://cdn.iconscout.com/icon/free/png-512/react-3-1175109.png" />][webdevplaylist]
&nbsp;&nbsp;
[<img align="left" title="JavaScript" alt="JavaScript" height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />][webdevplaylist]
&nbsp;&nbsp;
[<img align="left" title="Node.js" alt="Node.js" height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" />][webdevplaylist]
&nbsp;&nbsp;
[<img align="left" title="Git" alt="Git" height="40" src="https://cdn.iconscout.com/icon/free/png-512/git-16-1175195.png" />][github]
&nbsp;&nbsp;
[<img align="left" title="Terminal" alt="Terminal" height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png" />][webdevplaylist]
&nbsp;&nbsp;
[<img align="left" title="Visual Studio Code" alt="Visual Studio Code" height="40" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" />][webdevplaylist]
&nbsp;&nbsp;
[<img align="left" title="Sublime text" alt="Sublime Text" height="40" src="https://cdn.iconscout.com/icon/free/png-256/sublime-text-3521747-2945191.png" />][webdevplaylist]

<br />
<br />  
<br />
<br />
<br />
<br />

### 🌱 Developer guide:

[<img align="left" title="Playwright" alt="Playwright" height="40" src="https://cdn.iconscout.com/icon/free/png-256/medium-logo-3610097-3014862.png" />][playwright]

<br />
<br />

---

[github]: https://github.com/nishithpadhbillgo/Playwright_demo/
[playwright]: https://playwright.dev/docs/intro
[webdevplaylist]: https://github.com/nishithpadhbillgo/Playwright_demo/
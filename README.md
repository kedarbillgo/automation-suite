# automation-suite
automation suite for testing


Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭


Hooks
https://playwright.dev/docs/api/class-test

session management
https://timdeschryver.dev/blog/fast-and-easy-authentication-with-playwright#usage-with-code-generation

Avoid wait
https://dev.to/checkly/avoiding-hard-waits-in-playwright-and-puppeteer-272


Github playwright 
https://snyk.io/blog/how-to-add-playwright-tests-pr-ci-github-actions/

# Playwright 101

Run to create project playwright:

    npm init playwright@latest

Runs the end-to-end tests:

    npx playwright test

Starts the interactive UI mode:

    npx playwright test --ui
  
Runs the tests only on Desktop Chrome:

    npx playwright test --project=chromium

Runs the tests in a specific file:

    npx playwright test example 

Runs the tests in debug mode:

    npx playwright test --debug  

Auto generate tests with Codegen:

    npx playwright codegen

Runs the tests in unable headless mode:

    npx playwright test --headed

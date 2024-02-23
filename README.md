# How to sreate project playwright with nodeJS

1. `npm init playwright@latest`  
    Run to create project playwright  

2. `npx playwright test`  
    Runs the end-to-end tests.

3. `npx playwright test --ui`  
    Starts the interactive UI mode.

4. `npx playwright test --project=chromium`  
    Runs the tests only on Desktop Chrome.

5. `npx playwright test example`  
    Runs the tests in a specific file.

6. `npx playwright test --debug`  
    Runs the tests in debug mode.

7. `npx playwright codegen`  
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    `npx playwright test`
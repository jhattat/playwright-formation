# playwright-formation


## Insallation
 * **npm init playwright@latest** : install latest version of playwright 
 * **npm playwright -v** : playwright version

## Execution
 * **npx playwright test** : Runs the end-to-end tests in headless mode
 * **npx playwright test --headed** : Runs the end-to-end tests in browser
 * **npx playwright test --project chromium** : Runs the end-to-end tests in specific browser/browser engine
 * **npx playwright test example.spec.js** : Runs the tests in a specific file
 * **npx playwright test  --debug** : Runs the tests in debug mode
 * **npx playwright test --workers 3** : Run with 3 workers in parellel
 * **npx playwright test --grep-invert @skip** : Run tests excluding skipped tests from the report

## Report
 * **npx playwright show report** : Open playwright report
 * **npx allure generate ./allure-results --clean** : Generate an allure-report by cleaning up the previous one
 * **npx allure open ./allure-report** : Show the last generated report
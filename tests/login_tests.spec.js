const { test,expect } = require('../utils/fixtures.js');
const qaTestData = JSON.parse(JSON.stringify(require('../test-data/qa/testData.json')));
const regTestData = JSON.parse(JSON.stringify(require('../test-data/reg/testData.json')));

test.describe('Login Test Suite', () => {
    let testData = qaTestData;
    
    if (process.env.ENV == 'reg') {
        testData = regTestData;
    }
    
    test.beforeEach(async ({ loginPage }) => {
        //await loginPage.GotoLoginPage(process.env.WEB_URL);
    });

    test.use({ userAgent: 'LMUser Cerberus' });

    test('Connexion', async ({ homepage, loginPage }) => {
        await homepage.openHomepage();
        await homepage.acceptAllCookies();
        await homepage.gotoLoginPage();
        await loginPage.login(testData.user.name, testData.user.password);
    });

    /*test('Landing page visual comparison', async ({ page, loginPage }) => {
        await loginPage.gotoLoginPage();
        await expect(page).toHaveScreenshot('landing.png');
    });*/

    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
});
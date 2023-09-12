const { test,expect } = require('../utils/fixtures.js');
const dataProd = JSON.parse(JSON.stringify(require('../test-data/prod/LM-CUSTOMER.json')));
const dataPrep = JSON.parse(JSON.stringify(require('../test-data/prep/LM-CUSTOMER.json')));

test.describe('Login Test Suite', () => {
    let testData = dataProd;
    
    if (process.env.ENV == 'prep') {
        testData = dataPrep;
    }
    
    test.beforeEach(async ({ loginPage }) => {
        //await loginPage.GotoLoginPage(process.env.WEB_URL);
    });

    test.use({ userAgent: 'LMUser Cerberus' });

    test('Connexion', async ({ homepage, loginPage }) => {
        await homepage.openHomepage();
        await homepage.acceptAllCookies();
        await homepage.gotoLoginPage();
        await loginPage.login(testData.user.email, testData.user.password);
    });

    /*test('Landing page visual comparison', async ({ page, loginPage }) => {
        await loginPage.gotoLoginPage();
        await expect(page).toHaveScreenshot('landing.png');
    });*/

    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
});
import { getDatalib } from "../../../utils/DatasetManager";
const { test } = require('../../../utils/fixtures.js');

test.describe('Login Test Suite', async () => {
    // DATALIB
    let testData = await getDatalib("customers","LM-CUSTOMER");

    // USER-AGENT
    test.use({ userAgent: 'LMUser Cerberus' });

    test('Connexion', async ({ homepage, loginPage, page }) => {
        await test.step('Open homepage', async () => {await homepage.openHomepage()})
        await test.step('Accept all cookies', async () => {await homepage.acceptAllCookies()});
        await test.step('Go to login page', async () => {await homepage.gotoLoginPage()});
        await test.step(`Log in with ${testData.user.email}`, async () => {await loginPage.login(testData.user.email, testData.user.password)});
        
        var date = new Date();
        var year = date.getFullYear();
        var month =  date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() +1;
        var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var secondes = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        var dateString = year+month+day+"-"+hours+minutes+secondes;

        await page.screenshot({ path: 'test-results/screenshots/'+ dateString +'-'+ process.env.BU + '-' + process.env.ENV +'.png' });
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
});
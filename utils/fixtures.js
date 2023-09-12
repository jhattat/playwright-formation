const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { Homepage } = require('../pages/Homepage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homepage: async ({ page }, use) => {
        await use(new Homepage(page));
    }
});
exports.expect = base.expect;
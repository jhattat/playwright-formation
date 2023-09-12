const { expect } = require ('@playwright/test');

exports.Homepage = class Homepage {

    constructor(page) {
        this.page = page
        // Application objects
        this.btnAcceptCookies = page.locator("//*[@class=' js-modal-privacy-button-accept mc-button js-modal-first-cta']");
        this.btnHeaderAccount = page.locator("//*[@data-cerberus='CPT_accountheader']");

        this.fieldEmail = page.locator("//*[@name='email']");
    }

    async openHomepage() {
        await this.page.goto(process.env.WEB_URL);
    }

    async acceptAllCookies() {
        await this.btnAcceptCookies.click();
    }

    async gotoLoginPage() {
        await this.btnHeaderAccount.click();
        await expect.soft(this.fieldEmail).toBeVisible;
    }

}
const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        // Application objects
        this.fieldEmail = page.locator("//*[@name='email']");
        this.fieldPassword = page.locator("//*[@name='password']");

        this.btnLoginContinue = page.locator("//*[@class='mc-button js-button-continue mc-button--full']");
        this.btnSignIn = page.locator("//*[@class='mc-button mc-button--full']");
       
        this.lblName = page.locator("//div[@class='logged-user-name']");
        this.lblRole = page.locator("//div[@class='logged-user-role']");
    }

   /* async GotoLoginPage(web_url) {
        await this.page.goto(web_url);
    }*/

    async login(username, password) {
        await expect.soft(this.fieldEmail).toBeVisible();
        await this.fieldEmail.click();
        await this.fieldEmail.fill(username);
        await this.page.keyboard.press('Tab');
        await this.page.waitForTimeout(2000);
        await this.btnLoginContinue.click();
        await this.fieldPassword.click();
        await this.fieldPassword.fill(password);
        await this.page.waitForTimeout(2000);
        await this.btnSignIn.click();
    }
}
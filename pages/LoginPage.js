const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.lblLoginFrom = page.locator(`//*[@class=' js-modal-privacy-button-accept mc-button js-modal-first-cta']`);
        this.cookie = page.locator(`//*[@class=' js-modal-privacy-button-accept mc-button js-modal-first-cta']`);
        this.fieldEmail = page.locator(`//*[@name='email']`);
        this.txtUsername = page.locator(`//*[@name='email']`);
        this.txtPassword = page.getByPlaceholder('Enter your password');
        this.btnSignIn = page.getByRole('link', { name: 'Sign in' });
        this.lblName = page.locator(`//div[@class='logged-user-name']`);
        this.lblRole = page.locator(`//div[@class='logged-user-role']`);
    }
    async GotoLoginPage(web_url) {
        await this.page.goto(web_url);
    }
    async Login(username, password) {
        await expect.soft(this.lblLoginFrom).toBeVisible();
        await this.cookie.click();
        await this.fieldEmail.click();
        await this.txtUsername.fill(username);
        //await this.txtPassword.fill(password);
        //await this.btnSignIn.click();
        //await expect.soft(this.btnSignIn).toBeHidden();
    }/*
    async AssertLoggedInUserDetails(userDetails) {
        await this.lblName.screenshot({path:'Screenshots/partialScreenshot.png'});
        await expect(this.lblName).toContainText(userDetails.name);
        await expect(this.lblRole).toContainText(userDetails.role);

    }*/
}
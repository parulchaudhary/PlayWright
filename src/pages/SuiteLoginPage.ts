import { Page } from "@playwright/test";

export default class suiteLoginPage {
    verifyFailedLoginMessage(arg0: string) {
        throw new Error("The user name or password is incorrect.");
    }
    
    constructor(public page: Page) {
    }
    private Elements = {
        email: "#txtUserName",
        password: "#txtUserPassword",
        loginButton: "#imgLogin",
        domain :"#drpDomain"
    }
    async enterCredentials(email, pw)
    {
        await this.page.fill(this.Elements.email,email);
        await this.page.fill(this.Elements.password,pw);
    }
    async doLogin() {
        await this.page.click(this.Elements.loginButton);
    }
    async selectDomain(value) {
        await this.page.selectOption(this.Elements.domain, value);
    }
}
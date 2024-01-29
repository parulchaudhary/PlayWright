import { Page } from "playwright/test";

export default class RegisterPage{

constructor(public page: Page)
{
 
}

    async clickRegisterLink()
{
await this.page.locator("//a[@class='ico-register']").click();
}

}
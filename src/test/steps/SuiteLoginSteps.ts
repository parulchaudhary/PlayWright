import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect }  from "@playwright/test"
import { pageFixture } from '../../hooks/pageFixture';
import { log4jsconfig } from '../../utility/log/log4jConfig/log4jsconfig';
import suiteLoginPage from '../../pages/SuiteLoginPage';

let SuiteLoginPage: suiteLoginPage;

Given('the user is on the login page', {timeout: 2 * 5000}, async function ()  {
    SuiteLoginPage = new suiteLoginPage(pageFixture.page);
    await pageFixture.page.goto(process.env.BASEURL);
    pageFixture.logger.info("user has navigated to the application")
    log4jsconfig.Log().info("Given the user is on the login page");
})



When('the user selects a domain from the dropdown {string}', async (domain) => {
    await SuiteLoginPage.selectDomain(domain);
});



When('the user clicks on the login button', async function () {
    await SuiteLoginPage.doLogin();
});

Then('user should logged in and see the Home Page title "pSuite - Home"', async () => {
    await expect(pageFixture.page).toHaveTitle("pSuite - Home");
});

When('user enters the login and password {string}, {string}', async function (email, pw) {
  await SuiteLoginPage.enterCredentials(email, pw);
})

Then('user should see the error message "The user name or password is incorrect."', async () => {
  await SuiteLoginPage.verifyFailedLoginMessage("The user name or password is incorrect.");
});


















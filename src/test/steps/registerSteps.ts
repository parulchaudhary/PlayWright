import { Given, Then, When } from '@cucumber/cucumber'
import {  Page, expect }  from "@playwright/test"
import { pageFixture } from '../../hooks/pageFixture';

//let page: Page;

Given('user clicks on register link', async function () {
    await pageFixture.page.locator("//a[@class='ico-register']").click();
  });

  When('user enters the details {string}, {string}, {string}, {string}', async function (fname, lname, email, pw) {
    await pageFixture.page.locator("#FirstName").fill(fname);  
    await pageFixture.page.locator("#LastName").fill(lname);  
    await pageFixture.page.locator("#Email").fill(email);  
    await pageFixture.page.locator("#Password").fill(pw);  
    await pageFixture.page.locator("#ConfirmPassword").fill(pw);  
  });

  When('user clicks on register button', async function () {
    await pageFixture.page.locator("#register-button").click();
  });

  Then('user should be able to see registration completed page', async function () {
    const expectedMsg = "Your registration completed"
    await expect (pageFixture.page.locator("//div[@class='page-body']")).toContainText(expectedMsg)
     });

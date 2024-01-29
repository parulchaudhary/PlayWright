import { Given, Then, When } from '@cucumber/cucumber'
import { chromium, Page, Browser, expect }  from "@playwright/test"
import { pageFixture } from '../../hooks/pageFixture';

Given('User navigates to the application', {timeout: 2 * 5000}, async function () {
     await pageFixture.page.goto(process.env.BASEURL); 
     });


  Given('User clicks the login link', async function () {
    await pageFixture.page.locator("//a[@class='ico-login']").isVisible();
   await pageFixture.page.locator("//a[@class='ico-login']").click();
      });


  When('user enters the email {string}', async function (email) {
  await pageFixture.page.locator("#Email").fill(email);   
      });

      When('user enters the login details {string}, {string}', async function (email, pw) {
        await pageFixture.page.locator("#Email").fill(email); 
        await pageFixture.page.locator("#Password").fill(pw) ; 
            });
      

  When('user enters the password {string}', async function (password) {
    await pageFixture.page.locator("#Password").fill(password) ;  
  });

  When('user clicks on the login Page', async function () {
    await pageFixture.page.locator("//button[@class='button-1 login-button']").click();
     });



  Then('User should be logged in successfully', async function () {
    await expect(pageFixture.page).toHaveTitle('nopCommerce demo store');
  });

  Then('User should not be able to log in', async function () {
    const expectedErrorMsg = "Login was unsuccessful. Please correct the errors and try again.No customer account found"
    await expect (pageFixture.page.locator("//div[@class='message-error validation-summary-errors']")).toContainText(expectedErrorMsg)
 });
  
 When('user clicks on forgot password link', async function () {
    await pageFixture.page.locator("//span[@class='forgot-password']").click();
  });

  Then('User should navigate to password recovery page',{timeout: 2 * 5000}, async function () {
    await expect(pageFixture.page).toHaveTitle('nopCommerce demo store. Password Recovery');
  });

  When('user checks the remember me checkbox', async function () {
    await pageFixture.page.locator("#RememberMe").check();
  });

  Then('User should see login button on the login page', async function () {
    await pageFixture.page.locator("//button[@class='button-1 login-button']").isVisible();
   // await pageFixture.page.locator("//button[@class='button-1 login-button']").click();
  });

  
  
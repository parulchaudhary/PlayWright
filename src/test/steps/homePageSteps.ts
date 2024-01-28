import { Then } from '@cucumber/cucumber'
import {  Page, expect }  from "@playwright/test"
import { pageFixture } from '../../hooks/pageFixture';

//let page: Page;

Then('user should see the Home Page', async function () {
    await expect(pageFixture.page).toHaveTitle('nopCommerce demo store');
  });

  Then('user should see the search icon', async function () {
   await expect(pageFixture.page.getByPlaceholder('Search store')).toBeVisible();
   await expect(pageFixture.page.getByRole('button', { name: 'Search' })).toBeVisible();
  });

  Then('user should see the home page logo', async function () {
    await expect(pageFixture.page.locator("//div[@class='header-logo']")).toBeVisible();
  });

  Then('user should see the home page header', async function () {
    await expect(pageFixture.page.locator("//div[@class='header-menu']")).toBeVisible();
  });

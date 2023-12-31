import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
// import exp from "constants";
setDefaultTimeout(60 * 1000 * 2)
let browser: Browser;
let page: Page;

Given('User navigates to the application', async function () {
    // browser = await chromium.launch({ headless: false });
    // page = await browser.newPage();
    await pageFixture.page.goto("https://bookcart.azurewebsites.net/");
});

Then('User click on the login link', async function () {
    await pageFixture.page.locator("//span[text()='Login']").click();
});

Then('User enter the username as {string}', async function (username) {
    await pageFixture.page.locator(`input[formcontrolname='username']`).fill(username);
});

Then('User enter the password as {string}', async function (password) {
    await pageFixture.page.locator(`input[formcontrolname='password']`).fill(password)
});

When('User click on the login button', async function () {
    await pageFixture.page.locator(`button[color='primary']`).click();
    await pageFixture.page.waitForTimeout(3000);
});

Then('Login should be success', async function () {
    const loginUsername = await pageFixture.page.locator(`//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]`).textContent();
    console.log(`UserName is : ` , loginUsername);
    // await page.close();
    // await browser.close();
});

Then('Login should fail', async function () {
    const failureMsg = await pageFixture.page.locator(`mat-error[role='alert']`);
    await expect(failureMsg).toBeVisible();
    // await page.close();
    // await browser.close();
});


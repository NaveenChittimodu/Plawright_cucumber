import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, Page, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import { CONSTANT } from "../../common/Constants"
import LoginPage from "../../pagesObject/login";


setDefaultTimeout(60 * 1000 * 2)

let loginPage : LoginPage;
let page: Page;
let browser: Browser;

Given('User navigates to the application', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.visit(CONSTANT.BaseURL);
    
});

Then('User click on the login link', async function () {
    await loginPage.clickLogin();
});

Then('User enter the username as {string}', async function (username) {
    await loginPage.enterUsername(username);
});

Then('User enter the password as {string}', async function (password) {
    await loginPage.enterPassword(password);
});

When('User click on the login button', async function () {
    await loginPage.Loginbtn();
});

Then('Login should be success', async function () {
    await loginPage.Loginsucess();
    await browser.close();
    
});

Then('Login should fail', async function () {
    await loginPage.Loginfail();
    await browser.close();
});


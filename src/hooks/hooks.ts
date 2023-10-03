import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "@playwright/test";
import { pageFixture } from "./pageFixture";
import { after, before } from "node:test";

let page: Page;
let browser: Browser;

Before(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async () => {
    await pageFixture.page.close()
    await browser.close();
})


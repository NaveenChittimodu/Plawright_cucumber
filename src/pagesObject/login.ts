import { Locator, Page, expect, BrowserContext } from "@playwright/test";

export default class LoginPage {

    /*
        To declare variable for Page and DOM elements.
    */
    private page: Page
    private login: Locator;
    private loginInBtn: Locator;
    private usernameInputBox: Locator;
    private passwordInputBox: Locator;

    /*
        To assign the value to those variables.
    */
    constructor(page: Page) {
        this.page = page;
        this.login = this.page.locator("//span[text()='Login']");
        this.loginInBtn= this.page.locator("button[color='primary']");
        this.usernameInputBox = this.page.locator("input[formcontrolname='username']");
        this.passwordInputBox = this.page.locator("input[formcontrolname='password']");
    }

    public async visit(url: string) {
        await this.page.goto(url);
    }

    public async delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time)
        });
    }

    public async enterUsername(username: string) {
        await this.usernameInputBox.waitFor({ state: "attached" });
        await this.usernameInputBox.fill(username);
    }

    public async enterPassword(password: string) {
        await this.passwordInputBox.fill(password);
    }

    public async clickLogin() {
        await this.login.click();
    }
    
    public async Loginbtn() {
        await this.loginInBtn.isVisible();
        await this.loginInBtn.click();

    }

    public async Loginsucess() {
        const loginUsername = await this.page.locator(`//button[contains(@class,'mat-focus-indicator mat-menu-trigger')]`).textContent();
        console.log(`UserName is : ` , loginUsername);
    }
    
    public async Loginfail() {
        const failureMsg = await this.page.locator(`mat-error[role='alert']`);
        await expect(failureMsg).toBeVisible();
    }
}
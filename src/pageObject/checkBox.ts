import { Locator, Page } from "@playwright/test";
import Constants from "../common/constant.json";
export class CheckBoxPO {
    readonly page: Page;
    checkBoxBtn: Locator;
    homeCheckBox: Locator;
    plusBtn: Locator;
    minusBtn: Locator;
    toggleBtn: Locator;
    resultArea: Locator;
    desktopBtn: Locator;
    noteBtn: Locator;
    commendBtn: Locator;
    documentBtn: Locator;
    workspaceBtn: Locator;
    officeBtn: Locator;
    downloadBtn: Locator;
    wordBtn: Locator;
    excelBtn: Locator;
    constructor(page: Page) {
        this.page = page;
        this.checkBoxBtn = this.page.locator("//span[text()='Check Box']");
        this.homeCheckBox = this.page.locator(".rct-checkbox");
        this.plusBtn = this.page.locator("button[title='Expand all']");
        this.minusBtn = this.page.locator("button[title='Collapse all']");
        this.toggleBtn = this.page.locator("button[title='Toggle']");
        this.resultArea = this.page.locator("#result");
        this.desktopBtn = this.page.locator("//span[text()='Desktop']");
        this.noteBtn = this.page.locator("//span[text()='Notes']");
        this.commendBtn = this.page.locator("//span[text()='Commands']");
        this.documentBtn = this.page.locator("//span[text()='Documents']");
        this.workspaceBtn = this.page.locator("//span[text()='WorkSpace']");
        this.officeBtn = this.page.locator("//span[text()='Office']");
        this.downloadBtn = this.page.locator("//span[text()='Downloads']");
        this.wordBtn = this.page.locator("//span[text()='Word File.doc']");
        this.excelBtn = this.page.locator("//span[text()='Excel File.doc']");
    }

    async navigateToURL() {
        await this.page.goto(Constants.checkBoxPage);
    }
    async clickCheckBoxBtn() {
        await this.checkBoxBtn.isEnabled();
        await this.checkBoxBtn.click();
    }
    async clickPlusBtn() {
        await this.plusBtn.isEnabled();
        await this.plusBtn.click();
    }
    async clickMinusBtn() {
        await this.minusBtn.isEnabled();
        await this.minusBtn.click();
    }
    async clickToggleBtn() {
        await this.toggleBtn.isEnabled();
        await this.toggleBtn.click();
    }
    async clickHomeBtn() {
        await this.homeCheckBox.isEnabled();
        await this.homeCheckBox.click()
    }
    async showResult() {
        return await this.resultArea.textContent();
    }
}
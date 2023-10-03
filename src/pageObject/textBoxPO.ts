import { Page, Locator } from "@playwright/test";
import Constants from "../common/constant.json"

export class textBoxPO {
    readonly page: Page;
    text_box: Locator;
    textbox_lable: Locator;
    fullname: Locator;
    email: Locator;
    current_address: Locator;
    permanent_address: Locator;
    submit: Locator;
    subResult: Locator;


    constructor(page: Page) {
        this.page = page;
        this.text_box = this.page.locator("//span[text()='Text Box']");
        this.textbox_lable = this.page.locator("//div[text()='Text Box']");
        this.fullname = this.page.locator("#userName");
        this.email = this.page.locator("#userEmail");
        this.current_address = this.page.locator("#currentAddress");
        this.permanent_address = this.page.locator("#permanentAddress");
        this.submit = this.page.locator("(//button['@class=btn btn-primary'])[1]");
        this.subResult = this.page.locator("//div[@class='border col-md-12 col-sm-12']");
    }
    async baseURL() { 
        await this.page.goto(Constants.textBoxPage); 
    } 

    async clickTextBox() {
        await this.text_box.click({ force: true });

    }

    async fillFullName(name: string) {
        const fName = await this.fullname.textContent();
        await this.fullname.fill(name);
    }

    async fillEmail(emailid: string) {
        const email = await this.email.textContent();
        await this.email.fill(emailid);

    }

    async fillCurrentAddress(currAddress: string) {
        const currentAddress = await this.current_address.textContent();
        await this.current_address.fill(currAddress);
    }
    async fillPermanentAddress(perAddress: string) {
        const permanentAddress = await this.permanent_address.textContent();
        await this.permanent_address.fill(perAddress);
    }

    async submitBtn() {
        await this.submit.isEnabled();
        await this.submit.click({ force: true });

    }
    async submitResult() {
        await this.subResult.allTextContents();

    }
}

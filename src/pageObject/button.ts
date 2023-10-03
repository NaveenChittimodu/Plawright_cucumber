import { Locator, Page } from "@playwright/test";
import Constants from "../common/constant.json"

export class ButtonsPO{ 
    readonly page : Page 
    buttonsBtn : Locator; 
    doubleClickBtn : Locator; 
    rightClickBtn : Locator; 
    clickMeBtn : Locator; 
    doubleClickText : Locator; 
    rightClickText : Locator; 
    clickMeText : Locator; 
    
    constructor(page:Page){  
        this.page = page;  
        this.buttonsBtn = this.page.locator("//span[text()='Buttons']");  
        this.doubleClickBtn = this.page.locator("#doubleClickBtn");  
        this.rightClickBtn = this.page.locator("#rightClickBtn");  
        this.clickMeBtn = this.page.locator("//button[text()='Click Me']");  
        this.doubleClickText = this.page.locator("#doubleClickMessage");  
        this.rightClickText = this.page.locator("#rightClickMessage");  
        this.clickMeText = this.page.locator("#dynamicClickMessage"); 
    } 
    async navigateToURL() {  
        await this.page.goto(Constants.buttonPage); 
    } 
    async clickButtons(){  
        await this.buttonsBtn.isEnabled();  
        await this.buttonsBtn.click(); 
    } 
    async clickDoubleClickBtn(){  
        await this.doubleClickBtn.isEnabled();  
        await this.doubleClickBtn.dblclick(); 
    }
     async clickRightClickBtn(){  
        await this.rightClickBtn.isEnabled();  
        await this.rightClickBtn.click({button:"right"}); 
    } 
    async clickClickMeBtn(){  
        await this.clickMeBtn.isEnabled();  
        await this.clickMeBtn.click(); 
    }
     async doubleClickButtonResult(){  
        return await this.doubleClickText.allTextContents();
     } 
     async rightClickButtonResult(){  
        return await this.rightClickText.allTextContents(); 
    } 
    async clickMeClickButtonResult(){  
        return await this.clickMeText.allTextContents(); 
    }}
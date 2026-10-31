import {Locator,Page  } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage{
    // Declaration -Locators

    private readonly usntf:Locator;
    private readonly pswtf:Locator;
    private readonly loginbtn:Locator;

  // Initialization

    constructor(page:Page){
        super(page);
        this.usntf=page .getByRole('textbox',{name:'Email'});
        this.pswtf=page.getByRole('textbox',{name:'Password'});
        this .loginbtn=page.getByRole('button',{name:'Login'});
    }
    //Utilization-Page /element action element
    async naviagteToLoginPage():Promise<void>{
        await this .page.goto('https://www.shoppersstack.com/user-signin');

    }
    async fetchloginpageUrl():Promise<string>{
        let loginpageurl=this.page.url();
        console.log("The LoginpageUrl is ${loginpageurl}");
        return loginpageurl;
    }

    async fetchloginpageTitle():Promise<string>{
        let loginpagetitle =await this.page.title();
        console.log("This Loginpage is${loginpagetitle}");
        return loginpagetitle;
    }
    async dologin(usn:string,psw:string):Promise<void>{
        await this.usntf.waitFor({state:'visible'});
        await this .usntf.fill(usn);
        await this.pswtf.waitFor({state:'visible'});
        await this .pswtf.fill(psw);
        await this.loginbtn.click();
        await this.page.screenshot({path:'./screenshot/Homepage.png'});
    }
}
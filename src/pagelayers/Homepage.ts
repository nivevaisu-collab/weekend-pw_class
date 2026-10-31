import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Homepage extends BasePage{
    // Locators
    private readonly profileicon:Locator;
    private readonly myprofile:Locator;
    private readonly logoutoption:Locator;
    private readonly searchTextField:Locator;
    private readonly searchIcon:Locator;
    private readonly  addtowishlist:Locator;
    private readonly Accountsetting:Locator;

    constructor(page:Page){
        super(page);
        this.profileicon=page.getByRole('button',{name:'Account settings'});
        this.myprofile=page.getByRole('menuitem',{name:'My Profile'});
        this.logoutoption =page.getByRole('menuitem',{name:'Logout'});
        this.searchTextField=page.locator("//input[@id='search']");
        this .searchIcon=page.getByTestId ('SearchIcon');
        this.addtowishlist =page.getByTestId('Wishlist');
        this.Accountsetting= page.getByRole('menuitem',{name:'Wishlist'});
        }
        //Utilization
        async fetchhomepageURL():Promise<string>{
            //precondiotn
            let homepageurl = this.page.url();
            console.log('The homepage url is ${homepageurl}');
            return homepageurl;
        }

    async fetchhomepagetitle():Promise<string>{

            let homepagetitle= this.page.title();
            console.log('The homepagetitle is ${homepagetitle}');
            return homepagetitle;
        }

        async checkforprofileicon():Promise<boolean>{
            return await this.myprofile.isVisible();
        }

        async searchProduct(productName:string):Promise<void>{
            await this.searchTextField.fill(productName);
            await this .searchIcon.click();
        }

        async favuoriteIcon(wishlistproductName:string):Promise<void>{
            this.addtowishlist.click();
        }

        // async wishpageurl():Promise<string>{
        //     let wishpageurl =this.page.url();
        //     return wishpageurl;
        // }


        async dologout(){
            //Precondition
            await this.profileicon.click();
            await this.logoutoption.click();
            await this.page.waitForTimeout(2000);
            await this.page.screenshot({path:'./screenshots/logout.png'});
        }
}
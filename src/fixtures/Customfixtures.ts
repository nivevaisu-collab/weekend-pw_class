import {test as baseTest  } from "@playwright/test";
import { LoginPage } from "../pagelayers/Loginpage";
import { Homepage } from "../pagelayers/Homepage";

type pagefixtures={loginpage:LoginPage,homepage:Homepage};

export let customtest = baseTest.extend<pagefixtures>({
    loginpage:async({page},use)=>{
        let loginpage=new LoginPage(page);
        await use(loginpage);
    },
    homepage:async({page},use)=>{
        let homepage=new Homepage(page);
        await use(homepage);
    }
});
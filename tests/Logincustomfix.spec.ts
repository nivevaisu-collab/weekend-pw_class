import { customtest } from "../src/fixtures/Customfixtures";
import { customdatatest } from "../src/fixtures/Datafixtures";
import { Csvhelp } from "../src/utilities/Csvhelp";
import process from'node:process';




customdatatest('validateloginnCsvfile',async({loginpage,testData})=>{
    for(const row of testData){
    await loginpage.naviagteToLoginPage();
    await loginpage.dologin( row.username,row.Password );
}
});



const data= Csvhelp.readCsv('./src/testdata/Negativecredentails.Csv');
for (const test1 of data){
    customtest(`validateloginwofixtures-${test1.username}_${test1.password}`,async({loginpage})=>{
        await loginpage.naviagteToLoginPage();
        await loginpage.dologin(test1.username,test1.password);
});
}
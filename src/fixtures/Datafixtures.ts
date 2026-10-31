
import { Csvhelp } from "../utilities/Csvhelp";
import { customtest } from "./Customfixtures";


type Datafixture = {
    testData:Record<string,string>[];

};
export const customdatatest =customtest.extend<Datafixture>({
testData:async ({},use) => {

        const testData = Csvhelp.readCsv(
            './src/testdata/Negativecredentails.Csv'
        );
        await use(testData);
    },
        
    });
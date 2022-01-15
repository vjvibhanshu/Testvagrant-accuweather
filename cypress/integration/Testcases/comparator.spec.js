import webPage from "../coreClasses/UIclasses/pageactions/HomePageActions"
import apiRequest from "../coreClasses/APIclasses/requestGet"

describe("Test suit for Comparator",()=>{

    before("Initializing Test data from fixture",()=>{
        cy.fixture('testData').then(tdata =>{
            globalThis.testData = tdata;
        })
    })


    it("Comparator testcase",()=>{
        apiRequest.fetchResponse().then(resp => {
            let apiTemp = Number.parseFloat(JSON.stringify(resp.body.main.temp));
            webPage.loggingTemprature("API",apiTemp);
            webPage.nevigateAndSearchForCity(testData.ui.cityname);
            webPage.getTemprature().then( $el =>{
                let uiTemp =Number.parseFloat($el.text());
                webPage.loggingTemprature("API",apiTemp);
                webPage.loggingTemprature("UI",uiTemp);
                expect(apiTemp).to.eq(uiTemp);
            });
        })
    })
})
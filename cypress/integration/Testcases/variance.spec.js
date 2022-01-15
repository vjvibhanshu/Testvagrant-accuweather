import webPage from "../coreClasses/UIclasses/pageactions/HomePageActions"
import apiRequest from "../coreClasses/APIclasses/requestGet"

describe("Test suit for Variance",()=>{

    before("Initializing Test data from fixture",()=>{
        cy.fixture('testData').then(tdata =>{
            globalThis.testData = tdata;
        })
    })


    it("Variance testcase",()=>{
        apiRequest.fetchResponse()
        .then(resp => {
            let apiTemp = Number.parseFloat(JSON.stringify(resp.body.main.temp));
            webPage.nevigateAndSearchForCity(testData.ui.cityname);
            webPage.getTemprature().then( $el =>{
                let uiTemp =Number.parseFloat($el.text());
                webPage.loggingTemprature("API",apiTemp);
                webPage.loggingTemprature("UI",uiTemp);
                expect(Math.abs(apiTemp-uiTemp)).to.be.within(testData.variance.range_start,testData.variance.range_end)
            });
        })
    })
})
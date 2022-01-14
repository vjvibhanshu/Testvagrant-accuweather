import homePage from "../coreClasses/UIclasses/pageactions/HomePageActions"
import weatherPage from "../coreClasses/UIclasses/pageactions/WeatherPageActios"
import apiRequest from "../coreClasses/APIclasses/requestGet"

describe("trial run",()=>{
    it("First test case",()=>{
        apiRequest.fetchResponse()
        .then(resp => {
            let apiTemp = Number.parseFloat(JSON.stringify(resp.body.main.temp));
            homePage.nevigatetoURL();
            homePage.searchForCity("Delhi");
            weatherPage.getTemprature().then( $el =>{
                let uiTemp =Number.parseFloat($el.text());
                expect(apiTemp).to.eq(uiTemp);
            });
        })
    })
})
import HomePageEl from "../pageelements/HomePageElements";
import userData from "../../../../fixtures/testData.json"
class HomePageActions{
    /**
     * nevigateAndSearchForCity navigate to the url and search for the cityname
     * @param {String} cityname 
     */
    nevigateAndSearchForCity(cityname){
        cy.visit(userData.ui.url,{ headers: { "Accept-Encoding": "gzip, deflate, br","Connection":"keep-alive"}});    
        HomePageEl.cookieBanner().click();
        cy.wait(1000);
        HomePageEl.searchbox().type(cityname);
        HomePageEl.suggestionList().eq(0).click();

    }
    /**
     * fetch the temprature from the UI
     * @returns Temprature as String
     */
    getTemprature(){
        return HomePageEl.temprature();
    }

}
/**
 * Instance of the HomePage class which is used to execute the request on UI
 */
const webPage = new  HomePageActions();
export default webPage;

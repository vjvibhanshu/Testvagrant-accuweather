import HomePageEl from "../pageelements/HomePageElements";
import userData from "../../../../fixtures/testData.json"
class HomePageActions{

    nevigateAndSearchForCity(cityname){
        cy.visit(userData.ui.url,{ headers: { "Accept-Encoding": "gzip, deflate, br","Connection":"keep-alive"}});    
        HomePageEl.cookieBanner().click();
        cy.wait(1000);
        HomePageEl.searchbox().type(cityname);
        HomePageEl.suggestionList().eq(0).click();

    }
    getTemprature(){
        return HomePageEl.temprature();
    }

}
const webPage = new  HomePageActions();
export default webPage;

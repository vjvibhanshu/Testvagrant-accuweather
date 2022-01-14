import HomePageEl from "../pageelements/HomePageElements";
class HomePageActions{
    nevigatetoURL(){
        cy.visit("http://www.accuweather.com/",{ headers: { "Accept-Encoding": "gzip, deflate, br","Connection":"keep-alive"}});
    }
    searchForCity(cityname){
        
        HomePageEl.cookieBanner().click();
        cy.wait(3000);
        HomePageEl.searchbox().type(cityname);
        HomePageEl.suggestionList().eq(0).click();
        //HomePageEl.suggestionList().parent();
    }

}
const homePage = new  HomePageActions();
export default homePage;

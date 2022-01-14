
const ORprop = require("./locators.json");
class HomePageElement{
    searchbox(){
        return cy.get(ORprop.HomePage.searchbox_css);
    }
    searchoptions(){
        return cy.get(ORprop.HomePage.searchoptions_css);
    }
    suggestionList(){
        return cy.get(ORprop.HomePage.searchlist_css);
    }
    cookieBanner(){
        return cy.get(ORprop.HomePage.cookiebtn_css);
    }
    temprature(){
        return cy.get(ORprop.WeatherPage.temp_css);
    }
}
const HomePageEl = new  HomePageElement();
export default HomePageEl;
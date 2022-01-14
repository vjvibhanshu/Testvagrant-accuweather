const ORprop = require("./locators.json");
class WeatherPageElements{
    temprature(){
        return cy.get(ORprop.WeatherPage.temp_css);
    }
}
const weatherPageEl = new WeatherPageElements();
export default weatherPageEl;
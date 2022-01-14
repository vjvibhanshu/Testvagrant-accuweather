import weatherPageEl from "../pageelements/WeatherPageElements";
class WeatherPageActions{
    getTemprature(){
        return weatherPageEl.temprature();
    }
}
const weatherPage = new WeatherPageActions();
export default weatherPage;
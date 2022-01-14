import userData from "../../../fixtures/testData.json"
class ApiRequest{
    fetchResponse(){
        return cy.request({
            'method':'GET',
            'url':userData.api.endpoint+'q='+userData.api.cityname+'&appid=7fe67bf08c80ded756e598d6f8fedaea&units='+userData.api.units,
            'headers':{
                'content-type': 'application/json',
                'Accept-Encoding' : 'gzip, deflate, br',
                'Connection' : 'keep-alive'
            }
        });
    }
}
const apiRequest = new ApiRequest;
export default apiRequest;
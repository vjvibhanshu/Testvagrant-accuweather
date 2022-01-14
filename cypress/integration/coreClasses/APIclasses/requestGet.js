import userData from "../../../fixtures/testData.json"

class ApiRequest{
    /**
     * fetchResponse will fire the API GET request on the basis of userdata
     * @returns Api Response
     */
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
/**
 * Instance of the API class which is used to execute the API request
 * Response needs to be handled by the called instance
 */
const apiRequest = new ApiRequest;
export default apiRequest;
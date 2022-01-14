class ApiRequest{
    fetchResponse(){
        return cy.request({
            'method':'GET',
            'url':'api.openweathermap.org/data/2.5/weather?q=delhi&appid=7fe67bf08c80ded756e598d6f8fedaea&units=metric',
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
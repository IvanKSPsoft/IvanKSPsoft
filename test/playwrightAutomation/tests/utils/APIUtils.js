
class APIUtils {

    constructor(apiContext, loginPayload){
        this.apiContext = apiContext
        this.loginPayload = loginPayload
    }
    async getToken() {
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
         data: this.loginPayload 
        })
        const lognResponseJson = await loginResponse.json()
        const token = lognResponseJson.token
        console.log(token)
        return token
    }

    async createOrder(orderPayload) {
        let response = {} 
        response.token = await this.getToken()
        const plaeceOrderApi = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
        data: orderPayload,
        headers: {
                    'Authorization' : response.token,
                     'Content-Type' : 'application/json'
                 }
        })
        const orderResponseJson = await plaeceOrderApi.json()
        const orderId = orderResponseJson.orders[0]
        response.orderId = orderId
        console.log(response)
        return response
    }
}

module.exports = {APIUtils}


    
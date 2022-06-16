const { faker } = require ('@faker-js/faker')

class APIUtils {

    constructor(apiContext, loginPayload){
        this.apiContext = apiContext
        this.loginPayload = loginPayload
    }

    async crateUser() {
        const email = `${faker.name.firstName()}+${faker.datatype.number(1000)}@email.com`
        const password = `${faker.name.lastName()}+${faker.date.future()}`
        const createUserResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/register', {
        data: {firstName: faker.name.firstName(),lastName:faker.name.lastName(),userEmail: email ,userRole:"customer",
        occupation:"Student",gender:"Female",userMobile:"1234567890",userPassword:password,
        confirmPassword:password,required:true} 
        })
        // expect(createUserResponse.ok()).toBeTruthy()
        const createUserResponseJson = await createUserResponse.json()
        console.log(createUserResponseJson)
        console.log(email)
        return {email, password}
        
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

    async userLogin(email, password) {
        const loginResponse = await this.apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
         data: {userEmail: email, userPassword: password} 
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

    async createOrderForNewUser(orderPayload) {
        let response = {} 
        let user = await this.crateUser()
        response.token = await this.userLogin(user.email, user.password)
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


    
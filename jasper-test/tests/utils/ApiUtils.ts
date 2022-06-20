import { faker } from "@faker-js/faker"
import { request, expect, APIRequestContext } from "@playwright/test"

export class ApiUtils {
    apiContext: any
    constructor(apiContext: APIRequestContext){
        this.apiContext = apiContext
    }
    
    async createUser() {
        const email = `${faker.name.firstName()}+fake${faker.datatype.number({min: 1000, max:99999})}@spsoft.com`
        const password = `${faker.name.lastName()}+${faker.date.future()}`
        const firstName = faker.name.firstName()
        const lastName = faker.name.lastName()
        const apiContext = await request.newContext()
        const createUser = await apiContext.post('https://api.hellojasper.care/graphql', {
         data: {operationName:"signupUser",variables:{firstName: firstName,lastName:lastName,
                phoneNumber:"",email: email,password: password,
                passwordConfirmation: password},extensions:{persistedQuery:{version:1,
                sha256Hash:"b3efaffb9e9dd5ac091c16685edd4dd981a8260379a10d7d25bd55cb886c27b6"}}} 
        })
        expect(createUser.ok()).toBeTruthy()
        const createUserJson = await createUser.json()
        const userEmail = createUserJson.data.signupUser.user.email
        
        console.log(userEmail)
        return {email, password, firstName}
    }
}
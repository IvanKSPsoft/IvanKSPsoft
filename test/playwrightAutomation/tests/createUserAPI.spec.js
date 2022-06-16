const { test, request, expect } = require('@playwright/test')
const { faker } = require ('@faker-js/faker')
// const { expect } = require('../playwright.config')
let token = ''

test.beforeAll(async ({}) => {
const apiContext = await request.newContext()
const email = `${faker.name.firstName()}+${faker.datatype.number(1000)}@email.com`
const password = `${faker.name.lastName()}+${faker.date.future()}`
const createUserResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/register', {
     data: {firstName: faker.name.firstName(),lastName:faker.name.lastName(),userEmail: email ,userRole:"customer",
     occupation:"Student",gender:"Female",userMobile:"1234567890",userPassword:password,
     confirmPassword:password,required:true} 
    })
    expect(createUserResponse.ok()).toBeTruthy()
    const createUserResponseJson = await createUserResponse.json()
    console.log(createUserResponseJson)

const loginResponse = await apiContext.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
     data: {userEmail: email, userPassword: password} 
    })
    expect(loginResponse.ok()).toBeTruthy()
    const lognResponseJson = await loginResponse.json()
    token = lognResponseJson.token
    console.log(token)
    
const plaeceOrderApi = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order', {
    data: {orders:[{country:"Ukraine",productOrderedId:"6262e990e26b7e1a10e89bfa"}]},
    headers: {
                'Authorization' : token,
                 'Content-Type' : 'application/json'
             }
    })
    expect(plaeceOrderApi.ok()).toBeTruthy()
    const orderResponseJson = await plaeceOrderApi.json()
    orderId = orderResponseJson.orders[0]
    console.log(orderId)
})

test.only('First test', async ({page}) => {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token);

    const productName = 'adidas original'
    const products = page.locator('.card-body')
    const title = await page.locator('.card-body h5').allTextContents()
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.pause()
})
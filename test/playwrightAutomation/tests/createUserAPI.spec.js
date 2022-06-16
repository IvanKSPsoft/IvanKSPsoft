const { test, request, expect } = require('@playwright/test')
const { faker } = require ('@faker-js/faker')
const { APIUtils } = require('./utils/APIUtils')
let response = {}
let email
let password

test.beforeAll(async ({}) => {
const apiContext = await request.newContext()
const apiUtils = new APIUtils(apiContext)
response = await apiUtils.crateUser()
email = response.email
password = response.password
console.log(email)
await apiUtils.userLogin(email, password)


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
    await page.locator('[routerlink="/dashboard/myorders"]').click()
    await page.locator('tbody').waitFor()
    const rows = page.locator('tbody tr')
    for(let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator('th').textContent()
        if (orderId.includes(rowOrderId)) {
            await rows.nth(i).locator('button').first().click()
            break
        }
    }
})
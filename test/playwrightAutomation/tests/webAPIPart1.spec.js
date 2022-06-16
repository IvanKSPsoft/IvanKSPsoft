const { test, request, expect} = require('@playwright/test')
const { APIUtils } = require('./utils/APIUtils')
const loginPayload = {userEmail: "ivan.kovalov@spsoft.com", userPassword: "P@ssw0rd1"}
const orderPayload = {orders:[{country:"Ukraine",productOrderedId:"6262e990e26b7e1a10e89bfa"}]}

let response;

test.beforeAll(async () => {
    const apiContext = await request.newContext()
    const apiUtils = new APIUtils(apiContext, loginPayload)
    response = await apiUtils.createOrder(orderPayload)
    })
    
    test('First test', async ({page}) => {
        page.addInitScript(value => {
            window.localStorage.setItem('token', value)
        }, response.token);

        await page.goto('https://rahulshettyacademy.com/client/')
        await page.locator('[routerlink="/dashboard/myorders"]').click()
        await page.locator('tbody').waitFor()
        const rows = page.locator('tbody tr')
        for(let i = 0; i < await rows.count(); ++i) {
            const rowOrderId = await rows.nth(i).locator('th').textContent()
            if (response.orderId.includes(rowOrderId)) {
                await rows.nth(i).locator('button').first().click()
                break
            }
        }
    })

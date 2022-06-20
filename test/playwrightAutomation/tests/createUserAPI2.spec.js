const { test, request, expect } = require('@playwright/test')
const { faker } = require ('@faker-js/faker')
const { APIUtils } = require('./utils/APIUtils')
let response = {}
let email
let password

test.beforeAll(async ({}) => {
const apiContext = await request.newContext()
const apiUtils = new APIUtils(apiContext)
response = await apiUtils.createOrderForNewUser({orders:[{country:"Ukraine",productOrderedId:"6262e990e26b7e1a10e89bfa"}]})

})

test('First test', async ({page}) => {
    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, response.token);

    const productName = 'adidas original'
    const products = page.locator('.card-body')
    const title = await page.locator('.card-body h5').allTextContents()
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
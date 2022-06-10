const { test, request, expect} = require('@playwright/test')
const loginPayload = {userEmail: "ivan.kovalov@spsoft.com", userPassword: "P@ssw0rd1"}
let token = ''

test.beforeAll(async () => {
const API = await request.newContext()
const loginResponse = await API.post('https://rahulshettyacademy.com/api/ecom/auth/login', {
     data: loginPayload 
    })
    expect(loginResponse.ok()).toBeTruthy()
    const lognResponseJson = await loginResponse.json()
    token = lognResponseJson.token
    console.log(token)
})



test('First test', async ({page}) => {
    console.log(token)
    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token);

    const productName = 'adidas original'
    const products = page.locator('.card-body')
    const title = await page.locator('.card-body h5').allTextContents()
    await page.goto('https://rahulshettyacademy.com/client/')
    // console.log(title)
    // console.log(title[1])
    const count = await products.count()
    for(let i = 0; i < count; ++i){
       if(await products.nth(i).locator('b').textContent() === productName)
        {
            await products.nth(i).locator('text= Add To Cart').click()
            break
        }
    }
    await page.locator('[routerlink="/dashboard/cart"]').click()
    await page.locator('div li').first().waitFor()
    await page.locator('h3:has-text("adidas original")').isVisible()

    await page.locator('text=Checkout').click()
    await page.locator('input[type="text"]').nth(1).fill('333')
    await page.locator('input[type="text"]').nth(2).fill('Ivan K')
    await page.locator('input[type="text"]').nth(3).fill('Ivan K')
    await page.locator('[placeholder="Select Country"]').type('Ukraine', {delay : 100})
    await page.locator('.ng-star-inserted[type="button"]').click()
    await page.locator('.action__submit').click()
    await page.locator('.hero-primary').waitFor()
    const orderId = await page.locator('label.ng-star-inserted').textContent()
    console.log(orderId)

    await page.locator('label[routerlink="/dashboard/myorders"]').click()
    
})

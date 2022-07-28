const { test, request, expect } = require('@playwright/test')

test('First test @API', async ({page}) => {
    const productName = 'adidas original'
    const page = await webContext.newPage()
    const products = page.locator('.card-body')
    await page.goto('https://rahulshettyacademy.com/client/')
    const title = await page.locator('.card-body h5').allTextContents()
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
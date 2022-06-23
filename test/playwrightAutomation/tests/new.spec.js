const { test } = require('@playwright/test')
const { expect } = require('../playwright.config')

test('First test', async ({page}) => {
    const productName = 'adidas original'
    const products = page.locator('.card-body')
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.fill('#userEmail', 'ivan.kovalov@spsoft.com')
    await page.fill('#userPassword', 'P@ssw0rd1')
    await page.click('#login')
    await page.waitForLoadState('networkidle')
    const title = await page.locator('.card-body h5').allTextContents()
    
    console.log(title)
    console.log(title[1])
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
    
    // )
    // const order = page.locator('tbody tr')
    // const orderCount = order.count()
    

    // for(let i = 0; i < orderCount; ++i){
    //          const rowOrderId = await order.nth(i).locator('th').textContent()
    //          if(orderId.includes*rowOrderId){
    //              await order.nth(i).locator('button').first().click()
    //              break
    //          }
             
    
    //  }
    //  )

})





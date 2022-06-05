const { test } = require('@playwright/test')
const { expect } = require('../playwright.config')

test('First test', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client/')
    await page.fill('#userEmail', 'ivan.kovalov@spsoft.com')
    await page.fill('#userPassword', 'P@ssw0rd1')
    await page.click('#login')
    await page.waitForLoadState('networkidle')
    const title = await page.locator('.card-body h5').allTextContents()
    console.log(title)
 

})



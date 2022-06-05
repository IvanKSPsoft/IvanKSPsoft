const { test } = require('@playwright/test')
const { expect } = require('../playwright.config')

test('First test', async ({browser, page}) => {

    // default declare page
    // const context = await browser.newContext()
    // const page = await context.newPage()
    await page.goto('https://google.com')

    console.log(await page.title())
    // await expect(page).toHaveTitle('Google')

})


test('page test', async ({ page }) => {
    const userName = page.locator('#username'),
    cardTiele = page.locator('.card-body a'),
    password =  page.locator('#password')
    signIn = page.locator('#signInBtn')
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    await userName.type('rahulshettyacademy')
    await password.type('learning')
    await signIn.click()
    // console.log(await page.locator('[style*="block"]').textContent())
    // await page.locator('[style*="block"]').textContent('Incorrect')
    
    console.log(await cardTiele.nth(0).textContent())
    console.log(await cardTiele.first().textContent())
    console.log(await cardTiele.allTextContents())
})


test('ui controls', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const userName = page.locator('#username')
    const cardTiele = page.locator('.card-body a')
    const password =  page.locator('#password')
    const documentLink = page.locator('[target="_blank"]')
    const signIn = page.locator('#signInBtn')
    const TOS = page.locator('#terms')
    const dropdown = page.locator('select.form-control')
    await userName.type('rahulshettyacademy')
    await password.type('learning')
    await dropdown.selectOption('consult')
    await page.locator('.radiotextsty').last().click()
    await page.locator('#okayBtn').click()
    await TOS.check()
    await signIn.click()
 
    
    console.log(await cardTiele.nth(0).textContent())
    console.log(await cardTiele.first().textContent())
    console.log(await cardTiele.allTextContents())
})

test.only('child window', async ({ browser }) => {
    
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const userName = page.locator('#username')
    const documentLink = page.locator('[href="https://rahulshettyacademy.com/#/documents-request"]')
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        documentLink.click(),
   ])
   const text = await newPage.locator('div.text').first().textContent()
   console.log(text)
   await newPage.locator('[href="https://courses.rahulshettyacademy.com/sign_in3"]').click()
   await userName.type('rahulshettyacademy')
})
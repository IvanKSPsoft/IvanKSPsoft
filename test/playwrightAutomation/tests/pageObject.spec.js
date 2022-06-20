const { test, response } = require('@playwright/test')
const { App } = require('../pages/App.page')

test('First test', async ({page}) => {
    const app = new App(page),
    loginPage = app.loginPage,
    dashboardPage = app.dashboardPage,
    cartPage = app.cartPage,
    paymentPage = app.paymentPage,
    thanksPage = app.thanksPage
    productName = 'adidas original',
    email = 'ivan.kovalov@spsoft.com',
    password = 'P@ssw0rd1',
    ccv = '333',
    nameOnCard = 'Ivan k',
    country = 'Ukraine';
    let orderId = ''


    await loginPage.openLoginPage()
    await loginPage.inputLoginCredentials(email, password)
    await page.waitForLoadState('networkidle')
    await dashboardPage.waitForLoaded()
    await dashboardPage.addProduct(productName)
    await dashboardPage.clickCartButton()
    await cartPage.waitForLoaded()
    await cartPage.observeProduct(productName)
    await cartPage.clickCheckOut()
    await paymentPage.waitForLoaded()
    await paymentPage.proccedPayment(ccv, nameOnCard, country)
    await thanksPage.waitForLoaded()
    orderId = await thanksPage.grabOrder()
    
    console.log(orderId)




    

    await page.locator('label[routerlink="/dashboard/myorders"]').click()
    
    // await page.pause()
    // const order = page.locator('tbody tr')
    // const orderCount = order.count()
    

    // await page.locator('tbody').waitFor()
    //     const rows = page.locator('tbody tr')
    //     for(let i = 0; i < await rows.count(); ++i) {
    //         const rowOrderId = await rows.nth(i).locator('th').textContent()
    //         if (response.orderId.includes(rowOrderId)) {
    //             await rows.nth(i).locator('button').first().click()
    //             break
    //         }
    //     }

})





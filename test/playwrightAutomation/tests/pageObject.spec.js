const { test, response } = require('@playwright/test')
const { App } = require('../pages/App.page')
const dataSet = JSON.parse(JSON.stringify(require("../utils/pageObjectTestData.json")))

for(const data of dataSet){

test(`First test ${data.productName}` , async ({page}) => {
    const app = new App(page),
    loginPage = app.loginPage,
    dashboardPage = app.dashboardPage,
    cartPage = app.cartPage,
    paymentPage = app.paymentPage,
    thanksPage = app.thanksPage
    let orderId = ''


    await loginPage.openLoginPage()
    await loginPage.inputLoginCredentials(data.email, data.password)
    await page.waitForLoadState('networkidle')
    await dashboardPage.waitForLoaded()
    await dashboardPage.addProduct(data.productName)
    await dashboardPage.clickCartButton()
    await cartPage.waitForLoaded()
    await cartPage.observeProduct(data.productName)
    await cartPage.clickCheckOut()
    await paymentPage.waitForLoaded()
    await paymentPage.proccedPayment(data.ccv, data.nameOnCard, data.country)
    await thanksPage.waitForLoaded()
    orderId = await thanksPage.grabOrder()
    
    console.log(orderId)




    

    await page.locator('label[routerlink="/dashboard/myorders"]').click()
    
    // )
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
}




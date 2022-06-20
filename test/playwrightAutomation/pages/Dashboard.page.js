// playwright-dev-page.js
const { expect } = require('@playwright/test')

class DashboardPage {

    constructor(page) {
        this.page = page
        this.products = page.locator('.card-body')
        this.cardButton = page.locator('[routerlink="/dashboard/cart"]')
        
    }

    async waitForLoaded() {
        await this.page.waitForURL('https://rahulshettyacademy.com/client/dashboard/dash')
    }

    async addProduct (productName) {
        const count = await this.products.count()
        for(let i = 0; i < count; ++i){
        if(await this.products.nth(i).locator('b').textContent() === productName)
        {
            await this.products.nth(i).locator('text= Add To Cart').click()
            break
        }
    }
    }

    async clickCartButton() {
        await this.cardButton.click()
    }

}

module.exports = {DashboardPage}
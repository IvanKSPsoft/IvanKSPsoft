// playwright-dev-page.js
const { expect } = require('@playwright/test')

class CartPage {

    constructor(page) {
        this.page = page
        this.checkoutBtn = page.locator('text=Checkout')
        
    }

    async waitForLoaded() {
        await this.page.waitForURL('https://rahulshettyacademy.com/client/dashboard/cart')
    }

    async observeProduct(productName) {
        await this.page.locator('div li').first().waitFor()
        await this.page.locator(`h3:has-text("${productName}")`).isVisible()

    }

    async clickCheckOut() {
        await this.checkoutBtn.click()

    }
}

module.exports = {CartPage}
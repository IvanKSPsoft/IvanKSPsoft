// playwright-dev-page.js
const { expect } = require('@playwright/test')

class ThanksPage {

    constructor(page) {
        this.page = page
        this.title = page.locator('.hero-primary')
        this.orderidText = page.locator('label.ng-star-inserted')
    }

    async waitForLoaded() {
        await this.title.waitFor()
    }

    async grabOrder() {
        const orderId = await this.orderidText.textContent()
        return orderId
    }

}

module.exports = {ThanksPage}
// playwright-dev-page.js
const { expect } = require('@playwright/test')

class PaymentPage {

    constructor(page) {
        this.page = page
        this.submitBtn = page.locator('.action__submit')
        this.ccvInput = page.locator('input[type="text"]').nth(1)
        this.nameInput = page.locator('input[type="text"]').nth(2)
        this.countryDropdown = page.locator('[placeholder="Select Country"]')
        this.contryOption = page.locator('.ng-star-inserted[type="button"]')
        
    }

    async waitForLoaded() {
        await this.submitBtn.waitFor()
    }

    async proccedPayment(ccv, name, country) {
        await this.ccvInput.fill(ccv)
        await this.nameInput.fill(name)
        await this.countryDropdown.type(country, {delay : 200})
        await this.contryOption.click()
        await this.submitBtn.click()
    }
    


}

module.exports = {PaymentPage}
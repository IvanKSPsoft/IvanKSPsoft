// playwright-dev-page.js
const { expect } = require('@playwright/test')

class LoginPage {

    constructor(page) {
        this.page = page
        this.signInButton = page.locator('#login')
        this.emailField = page.locator('#userEmail')
        this.passwordField = page.locator('#userPassword')
    }

    async openLoginPage() {
        await this.page.goto('https://rahulshettyacademy.com/client/')
    }

    async inputLoginCredentials(email, password) {
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.signInButton.click()
    }
}

module.exports = {LoginPage}
const { LoginPage } = require('./Login.page')
const { DashboardPage } = require('./Dashboard.page')
const { CartPage } = require('./Cart.page')
const { ThanksPage } = require('./Thanks.page')
const { PaymentPage } = require('./Payment.page')

class App {
    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.dashboardPage= new DashboardPage(this.page)
        this.cartPage = new CartPage(this.page)
        this.thanksPage = new ThanksPage(this.page)
        this.paymentPage = new PaymentPage(this.page)
    }
}

module.exports = {App}
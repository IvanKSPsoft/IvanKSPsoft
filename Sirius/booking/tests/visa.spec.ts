import { test, Page } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { LabSearchPage } from '../pages/labSearch-page';
import { PaymentPage } from '../pages/payment-page';
import { ConfirmationPage } from '../pages/confirmation-page';
import { FinishPage } from '../pages/finish-page';

const currencieData = [ 'MXN', 'ARS', 'XCD', 'AWG', 'BSD', 'BBD', 'BZD', 'BMD', 'BOB', 'BRL', 'KYD', 'CLP', 'COP', 'CRC', 'ANG', 'DOP', 'EUR',
                        'GTQ', 'GYD', 'HTG', 'NHL', 'JMD', 'NIO', 'PAB', 'PYG', 'PEN', 'SRD', 'TTD', 'UYU', 'VEF'];
for (const name of currencieData) {
  test.describe('Flow', () => {
    test.only(`e2e Book Appointment ${name}`, async ({ page }) => {
        const mainPage = new MainPage(page),
            labSearchPage = new LabSearchPage(page),
            paymentPage = new PaymentPage(page),
            confirmationPage = new ConfirmationPage(page),
            finishPage = new FinishPage(page),
            currency = name;
        await page.goto(`https://visa-test.trustassure.app/?currency=${currency}`)
        await mainPage.inputSearchField(mainPage.labAddrees2)
        await mainPage.clickOnSearchResult()
        // await mainPage.observeWelcomeModal()
        // await mainPage.closeWelcomModal()
        await labSearchPage.clickScheduleAppointment()
        await labSearchPage.observeScheduleAppmodal()
        await labSearchPage.submitAppointment()
        await paymentPage.waitForLoaded()
        await paymentPage.inputFirstName(paymentPage.firstName)
        await paymentPage.inputLastName(paymentPage.lastName)
        await paymentPage.inputEmail(paymentPage.email)
        await paymentPage.inputBirthday()
        await paymentPage.inputCity(paymentPage.city)
        await paymentPage.inputStreet(paymentPage.streetAddress)
        await paymentPage.inputMobile(paymentPage.phoneNumber)
        await paymentPage.selectGenderDropdown()
        await paymentPage.selectStateDropdown()
        await paymentPage.inputCounty(paymentPage.county)
        await paymentPage.inputZipCode(paymentPage.zipCode)    
        await paymentPage.qestionaryNewYork()
        await page.waitForTimeout(1000)
        await paymentPage.clickPrivacyContent()
        await paymentPage.clickRefoundPolicyContent()
        await paymentPage.inputCardInfo()
        await page.locator('table.price-table').screenshot({path: `test-results/valid/${name} currency screenshot1.png`})
        await confirmationPage.waitForloaded()
        await confirmationPage.clickContinueBtn()
        await finishPage.waitForLoaded()
        await finishPage.clickContinueBtn()
        await labSearchPage.waitForLoaded()
        console.log(`${currency} passed`)
    });

    
})
}
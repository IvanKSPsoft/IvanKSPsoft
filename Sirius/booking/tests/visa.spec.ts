import { test, Page } from '@playwright/test';
import { BookingApp } from '../pages/bookingApp';

const currencieData = [ 'MXN', 'ARS', 'XCD', 'AWG', 'BSD', 'BBD', 'BZD', 'BMD', 'BOB', 'BRL', 'KYD', 'CLP', 'COP', 'CRC', 'ANG', 'DOP', 'EUR',
                        'GTQ', 'GYD', 'HTG', 'NHL', 'JMD', 'NIO', 'PAB', 'PYG', 'PEN', 'SRD', 'TTD', 'UYU', 'VEF'];
for (const name of currencieData) {
  test.describe('Flow', () => {
    test(`e2e Book Appointment ${name}`, async ({ page }) => {
        const booking = new BookingApp(page)
            
        await page.goto(`https://visa-test.trustassure.app/?currency=${name}`)
        await booking.mainPage.inputSearchField(booking.mainPage.labAddrees3)
        await booking.mainPage.clickOnSearchResult()
        await booking.labSearchPage.clickScheduleAppointment()
        await booking.labSearchPage.observeScheduleAppmodal()
        await booking.labSearchPage.submitAppointment()
        await booking.paymentPage.waitForLoaded()
        await booking.paymentPage.inputFirstName(booking.paymentPage.firstName)
        await booking.paymentPage.inputLastName(booking.paymentPage.lastName)
        await booking.paymentPage.inputEmail(booking.paymentPage.email)
        await booking.paymentPage.inputBirthday()
        await booking.paymentPage.inputCity(booking.paymentPage.city)
        await booking.paymentPage.inputStreet(booking.paymentPage.streetAddress)
        await booking.paymentPage.inputMobile(booking.paymentPage.phoneNumber)
        await booking.paymentPage.selectGenderDropdown()
        await booking.paymentPage.selectStateDropdown()
        // await paymentPage.inputCounty(paymentPage.county)
        await booking.paymentPage.inputZipCode(booking.paymentPage.zipCode)
        await booking.paymentPage.selectInsurance('No')    
        await booking.paymentPage.qestionaryNewYork()
        await page.waitForTimeout(1000)
        await booking.paymentPage.clickPrivacyContent()
        await booking.paymentPage.clickRefoundPolicyContent()
        await booking.paymentPage.inputCardInfo()
        await page.locator('table.price-table').screenshot({path: `test-results/valid/${name} currency screenshot1.png`})
        await booking.confirmationPage.waitForloaded()
        await booking.confirmationPage.clickContinueBtn()
        await booking.finishPage.waitForLoaded()
        await booking.finishPage.clickContinueBtn()
        console.log(`${name} passed`)
    });

    
})
}
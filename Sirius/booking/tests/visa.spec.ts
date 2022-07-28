import { test, Page } from '@playwright/test';
import { BookingApp } from '../pages/bookingApp';
import { URLS } from '../pages/utils/apiUrl';

const currencieData = [ 'USD', 'EUR', 'AUD', 'GBP', 'CAD', 'XCD', 'ARS', 'BSD', 'BBD', 'BZD', 'BOB', 'BRL', 'CLP', 'COP', 'CRC',
                       'CUC', 'CUP', 'GTQ', 'GYD', 'HTG', 'HNL', 'JMD', 'MXN', 'NIO', 'PYG', 'PEN', 'DOP', 'SRD', 'TTD', 'UYU', 
                       'VEF', 'AFN', 'ALL', 'DZD', 'AOA', 'AMD', 'AWG', 'AZN', 'BHD', 'BDT', 'BYR', 'BMD', 'BTN', 'BOV', 'BWP', 
                       'BND', 'BGN', 'BIF', 'KHR', 'CVE', 'KYD', 'XOF', 'XAF', 'CNY', 'KMF', 'BAM', 'CZK', 'DKK', 'DJF', 'EGP', 
                       'ERN', 'EEK', 'ETB', 'FKP', 'FJD', 'CDF', 'GMD', 'GEL', 'GHS', 'GIP', 'GNF', 'HKD', 'HUF', 'ISK', 'INR', 
                       'IDR', 'IQD', 'ILS', 'JPY', 'JOD', 'KZT', 'KES', 'KRW', 'HRK',  'KWD', 'KGS', 'LAK', 'LVL', 'LBP', 'LSL', 
                       'LRD', 'LYD', 'LTL', 'MOP', 'MKD', 'MGA', 'MWK', 'MYR', 'MVR', 'MRO', 'MUR', 'MXV', 'MDL', 'MNT', 'MAD', 
                       'MZN', 'MMK', 'NAD', 'NPR', 'ANG', 'NZD', 'NGN', 'NOK', 'OMR', 'XPF', 'PKR', 'PGK', 'PHP', 'PLN', 'QAR', 
                       'RON', 'RUB', 'RWF', 'WST', 'STD', 'SAR', 'RSD', 'SCR', 'SLL', 'SGD', 'SBD', 'SOS', 'ZAR', 'LKR', 'SHP', 
                       'SDG', 'SZL', 'SEK', 'CHF', 'TWD', 'TJS', 'TZS', 'THB', 'TOP', 'TND', 'TRY', 'TMT', 'AED', 'UGX', 'UAH', 
                       'UZS', 'VUV', 'VND', 'YER', 'ZMW', 'ZWL' ]
for (const name of currencieData) {
  test.describe('Flow', () => {
    test(`e2e Book Appointment ${name}`, async ({ page }) => {
        const booking = new BookingApp(page)
            
        await page.goto(`${URLS.visaBookingUrl}/?currency=${name}`)
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
        await booking.paymentPage.inputZipCode(booking.paymentPage.zipCode)
        await booking.paymentPage.selectInsurance('No')    
        await booking.paymentPage.qestionaryNewYork()
        await page.waitForTimeout(1000)
        await booking.paymentPage.clickPrivacyContent()
        await booking.paymentPage.clickRefoundPolicyContent()
        await booking.paymentPage.inputCardInfo()
        await page.locator('table.price-table').screenshot({path: `test-results/valid/${name} currency screenshot.png`})
        await booking.confirmationPage.waitForloaded()
        await booking.confirmationPage.clickContinueBtn()
        await booking.finishPage.waitForLoaded()
        await booking.finishPage.clickContinueBtn()
        console.log(`${name} passed`)
    });

    
})
}
import { test, request, expect, Page } from '@playwright/test';
import { secreetKey, secret } from '../pages/utils/secret';
import { BookingApp } from '../pages/bookingApp';

const currencieData = ['EUR', 'USD'];
for (const name of currencieData) {
  test.describe('Flow', () => {
    test.only(`e2e Book Appointment ${name}`, async ({ page }) => {
        const booking = new BookingApp(page),
            currency = name;

        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const loginResponse = await apiContext.post('https://siq.azure-api.net/test/mle-documents/api/mle-upload/v2/VISA/VISA_TRAVEL/trips', {
            headers: {
                'Ocp-Apim-Subscription-Key': secret.secreetKeyVisa
            },
            data: {
                endUserTravelers: [{
                customerID: "UniqueVisaKey_0x001",
                firstName: "some",
                lastName: "test",
                dateOfBirth: "2000-01-01T00:00:00.000Z",
                email: "ivan.kovalov+10@spsoft.com"
                }],
                    endUserTrips: [{
                        tripType: "FLIGHT",
                        providerTripName: "VISA",
                        segments: [{
                        ordinalNumber: 0,
                        arrivalDateTimeLocal: "2022-07-18T10:00:00+00:00",
                        departureDateTimeLocal: "2022-07-18T20:00:00+00:00",
                        destination: "MIA",
                        destinationCountryCode: "US",
                        origin: "IEV",
                        originCountryCode: "UA"
                        }]
                    }]
                }
           })
           expect(loginResponse.ok()).toBeTruthy()
           const lognResponseJson = await loginResponse.json()
           const responceObj = lognResponseJson[Object.keys(lognResponseJson)[0]]
           const token = responceObj.consumerToken
           console.log(token)    
        
        const url = `https://visa-test.trustassure.app/?consumerToken=${token}&currency=${currency}`
        console.log(url)
        await page.goto(url)
        await page.waitForTimeout(1000)
        await booking.labSearchPage.closeWelcomeModal()
        await booking.labSearchPage.clickScheduleAppointmentKiev()
        await booking.labSearchPage.submitAppointment()
        await booking.paymentPage.waitForLoaded()
        await booking.paymentPage.inputCity(booking.paymentPage.city)
        await booking.paymentPage.selectGenderDropdown()
        await booking.paymentPage.selectCountryDropdown()
        await booking.paymentPage.inputStreet(booking.paymentPage.streetAddress)
        await booking.paymentPage.selectStateDropdown()
        // await paymentPage.inputCounty(paymentPage.county)
        await booking.paymentPage.inputZipCode(booking.paymentPage.zipCode)  
        await booking.paymentPage.inputMobile(booking.paymentPage.phoneNumber)
        await booking.paymentPage.selectInsurance('No')
        await booking.paymentPage.qestionaryNewYork()
        await booking.paymentPage.clickPrivacyContent()
        await booking.paymentPage.clickRefoundPolicyContent()  
        await booking.paymentPage.inputCardInfo()
        await page.waitForNavigation()
        await booking.confirmationPage.clickContinueBtn()
        await booking.finishPage.waitForLoaded()
        await booking.finishPage.clickContinueBtn()
        console.log(`${currency} + ${token} passed`)
    });

    
})
}
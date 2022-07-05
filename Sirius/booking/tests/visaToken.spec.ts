import { test, request, expect, Page } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { LabSearchPage } from '../pages/labSearch-page';
import { PaymentPage } from '../pages/payment-page';
import { ConfirmationPage } from '../pages/confirmation-page';
import { FinishPage } from '../pages/finish-page';
import { secreetKey, secret } from '../pages/utils/secret';

const currencieData = ['EUR', 'USD'];
for (const name of currencieData) {
  test.describe('Flow', () => {
    test.only(`e2e Book Appointment ${name}`, async ({ page }) => {
        const mainPage = new MainPage(page),
            labSearchPage = new LabSearchPage(page),
            paymentPage = new PaymentPage(page),
            confirmationPage = new ConfirmationPage(page),
            finishPage = new FinishPage(page),
            currency = name;

        const apiContext = await request.newContext()
        const loginResponse = await apiContext.post('https://siq.azure-api.net/test/mle-documents/api/mle-upload/v2/VISA/VISA_TRAVEL/trips', {
            headers: {
                'Ocp-Apim-Subscription-Key': secret.secreetKey1
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
        await labSearchPage.closeWelcomeModal()
        await labSearchPage.clickScheduleAppointment()
        await labSearchPage.submitAppointment()
        await paymentPage.waitForLoaded()
        await paymentPage.inputCity(paymentPage.city)
        await paymentPage.selectGenderDropdown()
        await paymentPage.selectCountryDropdown()
        await paymentPage.inputStreet(paymentPage.streetAddress)
        await paymentPage.selectStateDropdown()
        // await paymentPage.inputCounty(paymentPage.county)
        await paymentPage.inputZipCode(paymentPage.zipCode)  
        await paymentPage.inputMobile(paymentPage.phoneNumber)
        await paymentPage.selectInsurance('No')
        await paymentPage.qestionaryNewYork()
        await paymentPage.clickPrivacyContent()
        await paymentPage.clickRefoundPolicyContent()  
        await paymentPage.inputCardInfo()
        await page.waitForNavigation()
        await confirmationPage.clickContinueBtn()
        await finishPage.waitForLoaded()
        await finishPage.clickContinueBtn()
        console.log(`${currency} + ${token} passed`)
    });

    
})
}
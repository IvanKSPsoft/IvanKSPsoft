import { test, Page } from '@playwright/test';
import { BookingApp } from '../pages/bookingApp';

test.beforeEach(async ({ page }) => {
  const booking = new BookingApp(page)

    await booking.mainPage.open();
    await booking.mainPage.inputSearchField(booking.mainPage.labAddrees3)
    await booking.mainPage.clickOnSearchResult()
    await booking.labSearchPage.clickScheduleAppointment()
    await booking.labSearchPage.observeScheduleAppmodal()
    await booking.labSearchPage.submitAppointment()
    await booking.paymentPage.waitForLoaded()
    await booking.paymentPage.inputFirstName(booking.paymentPage.firstName)
    await booking.paymentPage.inputLastName(booking.paymentPage.lastName)
    await booking.paymentPage.inputEmail(booking.paymentPage.email)
    console.log(booking.paymentPage.userName)
    await booking.paymentPage.inputBirthday()
    await booking.paymentPage.inputCity(booking.paymentPage.city)
    await booking.paymentPage.inputStreet(booking.paymentPage.streetAddress)
    await booking.paymentPage.inputMobile(booking.paymentPage.phoneNumber)
    await booking.paymentPage.selectGenderDropdown()
    await booking.paymentPage.selectStateDropdown()
    // await paymentPage.inputCounty(paymentPage.county)
    await booking.paymentPage.inputZipCode(booking.paymentPage.zipCode)
  });
  

test.describe('Flow', () => {
  test('e2e Book Appointment with full price', async ({ page }) => {
    const booking = new BookingApp(page)

      await booking.paymentPage.defaultQuestionaryAnswers('No')
      await booking.paymentPage.clickPrivacyContent()
      await booking.paymentPage.clickRefoundPolicyContent()
      await booking.paymentPage.inputCardInfo()
      await booking.confirmationPage.waitForloaded()
      await booking.confirmationPage.clickContinueBtn()
      await booking.finishPage.waitForLoaded()
      await booking.finishPage.clickContinueBtn()
  });

  test('e2e Book Appointment with discount', async ({ page }) => {
    const booking = new BookingApp(page)
          
      await booking.paymentPage.selectInsurance('Yes')
      await booking.paymentPage.inputInsuranceInfo()
      await booking.paymentPage.firstQuestion('No')
      await booking.paymentPage.symptomQuestion('No')
      await booking.paymentPage.orderdingQuestion('No')
      await booking.paymentPage.firstCovidQuestion('No')
      await booking.paymentPage.previoslyDiagnosQuestion('No')
      await booking.paymentPage.yourSymtopmsDiagnosQuestion('No')
      await booking.paymentPage.medicalConditionsQuestion('No')
      await booking.paymentPage.residenceQuestion('No')
      await booking.paymentPage.raceQuestion()
      await booking.paymentPage.latinoQuestion()
      await booking.paymentPage.healthCareEmployedQuestion('No')
      await booking.paymentPage.clickPrivacyContent()
      await booking.paymentPage.clickRefoundPolicyContent()
      await booking.paymentPage.compareInsurancePrice(booking.paymentPage.discontPrice)
      await booking.paymentPage.inputCardInfo()
      await booking.confirmationPage.waitForloaded()
      await booking.confirmationPage.clickContinueBtn()
      await booking.finishPage.waitForLoaded()
      await booking.finishPage.clickContinueBtn()
  });

  test('e2e pay with invalid Card', async ({ page }) => {
    const booking = new BookingApp(page)

      await booking.paymentPage.defaultQuestionaryAnswers('No')
      await booking.paymentPage.clickPrivacyContent()
      await booking.paymentPage.clickRefoundPolicyContent()
      await booking.paymentPage.stripeFrame.click()
      await booking.paymentPage.cardNumberInput('4000000000000002')
      await booking.paymentPage.cardExpirationInput()
      await booking.paymentPage.cardCCVInput()
      await booking.paymentPage.cardZipCodeInput()
      await booking.paymentPage.stripePayBtn.isVisible()
      await booking.paymentPage.stripePayBtn.click()
      await booking.paymentPage.failPaymentModal()
  })

});



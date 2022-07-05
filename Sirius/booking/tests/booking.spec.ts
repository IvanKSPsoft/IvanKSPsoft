import { test, Page } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { LabSearchPage } from '../pages/labSearch-page';
import { PaymentPage } from '../pages/payment-page';
import { ConfirmationPage } from '../pages/confirmation-page';
import { FinishPage } from '../pages/finish-page';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page),
        labSearchPage = new LabSearchPage(page),
        paymentPage = new PaymentPage(page);

    await mainPage.open();
    await mainPage.inputSearchField(mainPage.labAddrees3)
    await mainPage.clickOnSearchResult()
    await labSearchPage.clickScheduleAppointment()
    await labSearchPage.observeScheduleAppmodal()
    await labSearchPage.submitAppointment()
    await paymentPage.waitForLoaded()
    await paymentPage.inputFirstName(paymentPage.firstName)
    await paymentPage.inputLastName(paymentPage.lastName)
    await paymentPage.inputEmail(paymentPage.email)
    console.log(paymentPage.userName)
    await paymentPage.inputBirthday()
    await paymentPage.inputCity(paymentPage.city)
    await paymentPage.inputStreet(paymentPage.streetAddress)
    await paymentPage.inputMobile(paymentPage.phoneNumber)
    await paymentPage.selectGenderDropdown()
    await paymentPage.selectStateDropdown()
    // await paymentPage.inputCounty(paymentPage.county)
    await paymentPage.inputZipCode(paymentPage.zipCode)
  });
  

test.describe('Flow', () => {
  test('e2e Book Appointment with full price', async ({ page }) => {
    const labSearchPage = new LabSearchPage(page),
          paymentPage = new PaymentPage(page),
          confirmationPage = new ConfirmationPage(page),
          finishPage = new FinishPage(page);

      await paymentPage.defaultQuestionaryAnswers('No')
      await paymentPage.clickPrivacyContent()
      await paymentPage.clickRefoundPolicyContent()
      await paymentPage.inputCardInfo()
      await confirmationPage.waitForloaded()
      await confirmationPage.clickContinueBtn()
      await finishPage.waitForLoaded()
      await finishPage.clickContinueBtn()
  });

  test('e2e Book Appointment with discount', async ({ page }) => {
    const labSearchPage = new LabSearchPage(page),
          paymentPage = new PaymentPage(page),
          confirmationPage = new ConfirmationPage(page),
          finishPage = new FinishPage(page);
          
      await paymentPage.selectInsurance('Yes')
      await paymentPage.inputInsuranceInfo()
      await paymentPage.firstQuestion('No')
      await paymentPage.symptomQuestion('No')
      await paymentPage.orderdingQuestion('No')
      await paymentPage.firstCovidQuestion('No')
      await paymentPage.previoslyDiagnosQuestion('No')
      await paymentPage.yourSymtopmsDiagnosQuestion('No')
      await paymentPage.medicalConditionsQuestion('No')
      await paymentPage.residenceQuestion('No')
      await paymentPage.raceQuestion()
      await paymentPage.latinoQuestion()
      await paymentPage.healthCareEmployedQuestion('No')
      await paymentPage.clickPrivacyContent()
      await paymentPage.clickRefoundPolicyContent()
      await paymentPage.compareInsurancePrice(paymentPage.discontPrice)
      await paymentPage.inputCardInfo()
      await confirmationPage.waitForloaded()
      await confirmationPage.clickContinueBtn()
      await finishPage.waitForLoaded()
      await finishPage.clickContinueBtn()
  });

  test('e2e pay with invalid Card', async ({ page }) => {
    const paymentPage = new PaymentPage(page);

          await paymentPage.defaultQuestionaryAnswers('No')
          await paymentPage.clickPrivacyContent()
          await paymentPage.clickRefoundPolicyContent()
          await paymentPage.stripeFrame.click()
          await paymentPage.cardNumberInput('4000000000000002')
          await paymentPage.cardExpirationInput()
          await paymentPage.cardCCVInput()
          await paymentPage.cardZipCodeInput()
          await paymentPage.stripePayBtn.isVisible()
          await paymentPage.stripePayBtn.click()
          await paymentPage.failPaymentModal()
  })

});

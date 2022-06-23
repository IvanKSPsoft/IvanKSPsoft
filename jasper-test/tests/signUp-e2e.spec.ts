import { test, expect, Page } from '@playwright/test';
import { App } from '../pages/App-page';

test.beforeEach(async ({ page }) => {
  await page.goto('/login')
});

test.describe.configure({ mode: 'parallel' })
test.describe('Sign-up' , () => {
  test.only('Sign Up As A Patient (option 1)', async ({ page }) => {
    const app = new App(page),
          loginPage = app.loginPage,
          roleSelectionPage = app.roleSelectionPage,
          updatePatientPage = app.updatePatientPage,
          commonActions = app.commonActions,
          welcomePage = app.welcomePage,
          acountDetailesPage = app.accountDetailesPage,
          addDiagnosesPage = app.addDiagnosisPage,
          addTreatmentPage = app.addTreatmentPage,
          addInterestsPage = app.addInterestsPage,
          connectionsPage = app.connectionsPage,
          homePage = app.homePage,
          name = `firstName${Math.floor(Math.random() * 100000)}`
    
    await loginPage.clickSignUpBtn()
    await roleSelectionPage.waitForLoaded()
    await roleSelectionPage.selectPatientOption1()
    await updatePatientPage.waitForLoadedPatien()
    await updatePatientPage.inputFirstNameField(name)
    await updatePatientPage.inputLastNameField()
    await updatePatientPage.inputEmailField()
    await updatePatientPage.inputPasswordField()
    await updatePatientPage.inputConfirmPasswordField()
    await updatePatientPage.clickSMSContentCheckbox()
    await commonActions.clickContinueBtn()
    await welcomePage.waitForLoaded()
    await welcomePage.checkName(name)
    await commonActions.clickContinueBtn()
    await acountDetailesPage.waitForLoaded()
    await acountDetailesPage.inputZipCodeField()
    await acountDetailesPage.selectAgeGroup('65+ years')
    await acountDetailesPage.selectSex('Female')
    await commonActions.clickContinueBtn()
    await addDiagnosesPage.waitForLoaded()
    await addDiagnosesPage.selectDiagnoses('Bladder')
    await commonActions.clickContinueBtn()
    await addTreatmentPage.waitForLoaded()
    await addTreatmentPage.selectTreatment()
    await addTreatmentPage.clickAddAppointmentBtn()
    await commonActions.clickContinueBtn()
    await connectionsPage.waitForLoaded()
    await commonActions.clickContinueBtn()
    await addInterestsPage.waitForLoaded()
    await addInterestsPage.selectInerest('Pet Care')
    await commonActions.clickContinueBtn()
    await homePage.waitForloaded()
    await homePage.observeWelcomTitle(name)
  })

  test.only('Sign Up As A Caregiver (option 4)', async ({ page }) => {
    const app = new App(page),
          loginPage = app.loginPage,
          roleSelectionPage = app.roleSelectionPage,
          updatePatientPage = app.updatePatientPage,
          commonActions = app.commonActions,
          welcomePage = app.welcomePage,
          acountDetailesPage = app.accountDetailesPage,
          addDiagnosesPage = app.addDiagnosisPage,
          addTreatmentPage = app.addTreatmentPage,
          addInterestsPage = app.addInterestsPage,
          homePage = app.homePage,
          name = `firstName${Math.floor(Math.random() * 100000)}`,
          patientName = `patientName${Math.floor(Math.random() * 100000)}`
    
    await loginPage.clickSignUpBtn()
    await roleSelectionPage.waitForLoaded()
    await roleSelectionPage.selectCaregiver()
    await updatePatientPage.waitForLoadedCaregiver()
    await updatePatientPage.inputFirstNameField(name)
    await updatePatientPage.inputLastNameField()
    await updatePatientPage.inputEmailField()
    await updatePatientPage.inputPasswordField()
    await updatePatientPage.inputConfirmPasswordField()
    await updatePatientPage.clickSMSContentCheckbox()
    await commonActions.clickContinueBtn()
    await welcomePage.waitForLoadedCaregiver()
    await welcomePage.checkName(name)
    await commonActions.clickContinueBtn()
    await acountDetailesPage.waitForLoadedCaregiver()
    await acountDetailesPage.inpurPatientData(patientName)
    await acountDetailesPage.inputZipCodeField()
    await acountDetailesPage.selectAgeGroup('65+ years')
    await acountDetailesPage.selectSex('Female')
    await commonActions.clickContinueBtn()
    await addDiagnosesPage.waitForLoadedCaregiver()
    await addDiagnosesPage.selectDiagnoses('Bladder')
    await commonActions.clickContinueBtn()
    await addTreatmentPage.waitForLoadedCaregiver()
    await addTreatmentPage.selectTreatment()
    await addTreatmentPage.clickAddAppointmentBtn()
    await commonActions.clickContinueBtn()
    await addInterestsPage.waitForLoadedCaregiver()
    await addInterestsPage.selectInerest('Pet Care')
    await commonActions.clickContinueBtn()
    await homePage.waitForloaded()
    await homePage.observeWelcomTitle(name)
  })

  test.only('Sign Up As A Patient (option 3)', async ({ page }) => {
     const app = new App(page),
          loginPage = app.loginPage,
          roleSelectionPage = app.roleSelectionPage,
          updatePatientPage = app.updatePatientPage,
          commonActions = app.commonActions,
          welcomePage = app.welcomePage,
          acountDetailesPage = app.accountDetailesPage,
          addDiagnosesPage = app.addDiagnosisPage,
          addTreatmentPage = app.addTreatmentPage,
          addInterestsPage = app.addInterestsPage,
          connectionsPage = app.connectionsPage,
          homePage = app.homePage,
          name = `firstName${Math.floor(Math.random() * 100000)}`
    
    await loginPage.clickSignUpBtn()
    await roleSelectionPage.waitForLoaded()
    await roleSelectionPage.selectPatientOption3()
    await updatePatientPage.waitForLoadedPatien()
    await updatePatientPage.inputFirstNameField(name)
    await updatePatientPage.inputLastNameField()
    await updatePatientPage.inputEmailField()
    await updatePatientPage.inputPasswordField()
    await updatePatientPage.inputConfirmPasswordField()
    await updatePatientPage.clickSMSContentCheckbox()
    await commonActions.clickContinueBtn()
    await welcomePage.waitForLoaded()
    await welcomePage.checkName(name)
    await commonActions.clickContinueBtn()
    await acountDetailesPage.waitForLoaded()
    await acountDetailesPage.inputZipCodeField()
    await acountDetailesPage.selectAgeGroup('65+ years')
    await acountDetailesPage.selectSex('Female')
    await commonActions.clickContinueBtn()
    await addDiagnosesPage.waitForLoaded()
    await addDiagnosesPage.selectDiagnoses('Bladder')
    await commonActions.clickContinueBtn()
    await addTreatmentPage.waitForLoaded()
    await addTreatmentPage.selectTreatment()
    await addTreatmentPage.clickAddAppointmentBtn()
    await commonActions.clickContinueBtn()
    await connectionsPage.waitForLoaded()
    await commonActions.clickContinueBtn()
    await addInterestsPage.waitForLoaded()
    await addInterestsPage.selectInerest('Pet Care')
    await commonActions.clickContinueBtn()
    await homePage.waitForloaded()
    await homePage.observeWelcomTitle(name)
    await homePage.observeRemissionNudge()
  })
    
})

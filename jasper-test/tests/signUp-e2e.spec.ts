import { test, expect, Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { LoginPage } from '../pages/Login-page';
import { RoleSelectionPage } from '../pages/signUp/RoleSelections-page';
import { CommonActionsPage } from '../pages/common/commonAction-page';
import { HomePage } from '../pages/Home-page';
import { UpdatePatientPage } from '../pages/signUp/UpdatePatient-page';
import { WelcomePage } from '../pages/signUp/Welcome-page';
import { AccountDetailsPage } from '../pages/signUp/AcountDetails-page';
import { AddInterestsPage } from '../pages/signUp/AddIntersts-page';
import { AddDiagnosesPage } from '../pages/signUp/AddDiagnoses-page';
import { AddTreatmentPage } from '../pages/signUp/AddTreatment-page';
import { ConnectionsPage } from '../pages/signUp/Connections-page';

test.beforeEach(async ({ page }) => {
  await page.goto('/login')
  await page.locator('[data-testing="button-submit"]').waitFor()
});

test.describe('Sign-up', () => {
  test('Sign Up As A Patient (option 1)', async ({ page }) => {
    const loginPage = new LoginPage(page),
          roleSelectionPage = new RoleSelectionPage(page),
          comonActions = new CommonActionsPage(page),
          homePage = new HomePage(page),
          updatePatientpage = new UpdatePatientPage(page),
          welcomePage = new WelcomePage(page),
          acountDetailesPage = new AccountDetailsPage(page),
          addInterstPage = new AddInterestsPage(page),
          addDiagnosesPage = new AddDiagnosesPage(page),
          addTreatmentPage = new AddTreatmentPage(page),
          connectionsPage = new ConnectionsPage(page),
          name = faker.name.firstName()
    
    await loginPage.clickSignUpBtn()
    await roleSelectionPage.waitForLoaded()
    await roleSelectionPage.selectPatientOption1()
    await updatePatientpage.waitForLoaded()
    await updatePatientpage.inputFirstNameField(name)
    await updatePatientpage.inputLastNameField()
    await updatePatientpage.inputEmailField()
    await updatePatientpage.inputPasswordField()
    await updatePatientpage.inputConfirmPasswordField()
    await updatePatientpage.clickSMSContentCheckbox()
    await comonActions.clickContinueBtn()
    await welcomePage.waitForLoaded()
    await welcomePage.checkName(name)
    await comonActions.clickContinueBtn()
    await acountDetailesPage.waitForLoaded()
    await acountDetailesPage.inputZipCodeField()
    await acountDetailesPage.selectAgeGroup('65+ years')
    await acountDetailesPage.selectSex('Female')
    await comonActions.clickContinueBtn()
    await addDiagnosesPage.waitForLoaded()
    await addDiagnosesPage.selectDiagnoses('Bladder')
    await comonActions.clickContinueBtn()
    await addTreatmentPage.waitForLoaded()
    await addTreatmentPage.selectTreatment()
    await addTreatmentPage.clickAddAppointmentBtn()
    await comonActions.clickContinueBtn()
    await connectionsPage.waitForLoaded()
    await comonActions.clickContinueBtn()
    await addInterstPage.waitForLoaded()
    await addInterstPage.selectInerest('Pet Care')
    await comonActions.clickContinueBtn()
    await homePage.waitForloaded()
    await homePage.observeWelcomTitle(name)
  })

  test('Sign Up As A Patient (option 3)', async ({ page }) => {
    const loginPage = new LoginPage(page),
          roleSelectionPage = new RoleSelectionPage(page),
          comonActions = new CommonActionsPage(page),
          homePage = new HomePage(page),
          updatePatientpage = new UpdatePatientPage(page),
          welcomePage = new WelcomePage(page),
          acountDetailesPage = new AccountDetailsPage(page),
          addInterstPage = new AddInterestsPage(page),
          addDiagnosesPage = new AddDiagnosesPage(page),
          addTreatmentPage = new AddTreatmentPage(page),
          connectionsPage = new ConnectionsPage(page),
          name = faker.name.firstName()
    
    await loginPage.clickSignUpBtn()
    await roleSelectionPage.waitForLoaded()
    await roleSelectionPage.selectPatientOption3()
    await updatePatientpage.waitForLoaded()
    await updatePatientpage.inputFirstNameField(name)
    await updatePatientpage.inputLastNameField()
    await updatePatientpage.inputEmailField()
    await updatePatientpage.inputPasswordField()
    await updatePatientpage.inputConfirmPasswordField()
    await updatePatientpage.clickSMSContentCheckbox()
    await comonActions.clickContinueBtn()
    await welcomePage.waitForLoaded()
    await welcomePage.checkName(name)
    await comonActions.clickContinueBtn()
    await acountDetailesPage.waitForLoaded()
    await acountDetailesPage.inputZipCodeField()
    await acountDetailesPage.selectAgeGroup('65+ years')
    await acountDetailesPage.selectSex('Female')
    await comonActions.clickContinueBtn()
    await addDiagnosesPage.waitForLoaded()
    await addDiagnosesPage.selectDiagnoses('Bladder')
    await comonActions.clickContinueBtn()
    await addTreatmentPage.waitForLoaded()
    await addTreatmentPage.selectTreatment()
    await addTreatmentPage.clickAddAppointmentBtn()
    await comonActions.clickContinueBtn()
    await connectionsPage.waitForLoaded()
    await comonActions.clickContinueBtn()
    await addInterstPage.waitForLoaded()
    await addInterstPage.selectInerest('Pet Care')
    await comonActions.clickContinueBtn()
    await homePage.waitForloaded()
    await homePage.observeWelcomTitle(name)
    await homePage.observeRemissionNudge()
  })
    
})

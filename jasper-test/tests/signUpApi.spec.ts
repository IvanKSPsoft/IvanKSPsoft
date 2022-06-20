import { test, expect, Page, request} from '@playwright/test';
import { faker } from '@faker-js/faker';
import { ApiUtils } from './utils/ApiUtils';
import { App } from '../pages/App-page';
let response


// test.describe.configure({ mode: 'parallel' })
test.beforeEach(async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    response = await apiUtils.createUser()
    console.log(response)

    await page.goto('/login')
    await page.locator('#email').fill(response.email)
    await page.locator('#password').fill(response.password)
    await page.locator('[data-testing="button-submit"]').click()
});

test.describe('Sign-up' , () => {
  test('Sign Up As A Patient (option 1)', async ({ page }) => {
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
          homePage = app.homePage

    await roleSelectionPage.selectPatientOption1()
    await page.waitForTimeout(1000)
    await acountDetailesPage.inputZipCodeField()
    await acountDetailesPage.selectAgeGroup('65+ years')
    await acountDetailesPage.selectSex('Female')
    await commonActions.clickContinueBtn()
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
    await homePage.observeWelcomTitle(response.firstName)
  })
})
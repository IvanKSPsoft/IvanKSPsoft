import { test, expect, Page, request} from '@playwright/test';
import { ApiUtils } from './utils/ApiUtils';
import { App } from '../pages/App-page';
let response


// test.describe.configure({ mode: 'parallel' })

test.describe('Sign-up' , () => {
  test.skip('Sign Up As A Patient API', async ({ page }) => {
    const app = new App(page),
          roleSelectionPage = app.roleSelectionPage,
          commonActions = app.commonActions,
          acountDetailesPage = app.accountDetailesPage,
          addDiagnosesPage = app.addDiagnosisPage,
          addTreatmentPage = app.addTreatmentPage,
          addInterestsPage = app.addInterestsPage,
          connectionsPage = app.connectionsPage,
          homePage = app.homePage,
          loginPage = app.loginPage


    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    response = await apiUtils.createUser()
    console.log(response)

    await page.goto('/login')
    await loginPage.inputEmailField(response.email)
    await loginPage.inputPasswordField(response.password)
    await loginPage.clickLoginbtn()

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
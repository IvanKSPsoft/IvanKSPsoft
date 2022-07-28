import { test, Page } from '@playwright/test';
import { NihApp } from '../pages/nihApp';
import { URLS } from '../pages/utils/apiUrl';

test.beforeEach(async({page})=> {
    const nih = new NihApp(page)


    await page.goto(URLS.nihUrl)
    await nih.userInfoPage.inputFirstName()
    await nih.userInfoPage.inputLastName()
    await nih.userInfoPage.inputAddress()
    await nih.userInfoPage.selecCountry()
    await nih.userInfoPage.inputEmail()
    await nih.userInfoPage.inputDOB()
    await nih.userInfoPage.inputCity()
    await nih.userInfoPage.inputPhone()
    await nih.userInfoPage.inputZipCode()
    await nih.userInfoPage.selectGender()
    await nih.userInfoPage.selectState()
    await nih.userInfoPage.inputZipCode()
    await nih.userInfoPage.inputCounty()
    await nih.userInfoPage.clickNameField()
    
})
test.describe('nih', async ()=> {
    test('Nih e2e with PDF upload ', async({page}) => {
        const nih = new NihApp(page)
              
        await nih.userInfoPage.selectTravelField()
        await nih.userInfoPage.selectNationality()
        await nih.userInfoPage.inputPassport()
        await nih.userInfoPage.clickNameField()
        await nih.userInfoPage.clickContinueBtn()
        await page.waitForNavigation()
        await nih.testUploadPage.clickUploadCheckbox()
        await nih.testUploadPage.answerOnQuestionary()
        await page.waitForTimeout(1000)
        await nih.testUploadPage.uploadFile('./testFiles/Ahorro.pdf')
        await nih.testUploadPage.clickContinueBtn()
        await nih.testUploadPage.successfullRedirect()

    })

    test('Nih e2e with JPEG upload ', async({page}) => {
        const nih = new NihApp(page)
              

        await nih.userInfoPage.clickContinueBtn()
        await page.waitForNavigation()
        await nih.testUploadPage.clickUploadCheckbox()
        await nih.testUploadPage.answerOnQuestionary()
        await page.waitForTimeout(1000)
        await nih.testUploadPage.uploadFile('./testFiles/BelizeDiagnostic.jpeg')
        await nih.testUploadPage.clickContinueBtn()
        await nih.testUploadPage.successfullRedirect()

    })

    test('Nih proceed payment with PNG upload', async({page}) => {
        const nih = new NihApp(page)

        await nih.userInfoPage.selectOfficialDocument()
        await nih.userInfoPage.inputCreditCard()
        await nih.userInfoPage.inputCreditExpiration()
        await nih.userInfoPage.inputCreditCCV()
        await nih.userInfoPage.inputCreditZip()
        await nih.userInfoPage.clickContinueBtn()
        await page.waitForNavigation()
        await nih.testUploadPage.clickUploadCheckbox()
        await nih.testUploadPage.answerOnQuestionary()
        await page.waitForTimeout(1000)
        await nih.testUploadPage.uploadFile('./testFiles/Ahorro3.png')
        await nih.testUploadPage.clickContinueBtn()
        await nih.testUploadPage.successfullRedirect()
        
    })
 
})
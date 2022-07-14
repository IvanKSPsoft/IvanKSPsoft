import { test, Page } from '@playwright/test';
import { NihApp } from '../pages/nihApp';
import { TestUploadPage } from '../pages/testUpload-nih-page';
import { UserInfoPage } from '../pages/userInfo-nih-page';

const url = 'https://nih.trustassure.app/userinformation/'
test.beforeEach(async({page})=> {
    const nih = new NihApp(page),
          userInfoPage = nih.userInfoPage

    await page.goto(url)
    await userInfoPage.inputFirstName()
    await userInfoPage.inputLastName()
    await userInfoPage.inputAddress()
    await userInfoPage.selecCountry()
    await userInfoPage.inputEmail()
    await userInfoPage.inputDOB()
    await userInfoPage.inputCity()
    await userInfoPage.inputPhone()
    await userInfoPage.inputZipCode()
    await userInfoPage.selectGender()
    await userInfoPage.selectState()
    await userInfoPage.inputZipCode()
    await userInfoPage.inputCounty()
    await userInfoPage.clickNameField()
    
})
test.describe('nih', async ()=> {
    test('Nih e2e', async({page}) => {
        const nih = new NihApp(page)
              

        await nih.userInfoPage.clickContinueBtn()
        await page.waitForNavigation()
        await nih.testUploadPage.clickUploadCheckbox()
        await nih.testUploadPage.answerOnQuestionary()
        await page.waitForTimeout(1000)
        await nih.testUploadPage.uploadFile()
        await nih.testUploadPage.clickContinueBtn()
        await nih.testUploadPage.successfullRedirect()

    })

    test.only('Nih proceed payment', async({page}) => {
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
        await nih.testUploadPage.uploadFile()
        await nih.testUploadPage.clickContinueBtn()
        await nih.testUploadPage.successfullRedirect()
        
    })

 
})
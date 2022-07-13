import { test, Page } from '@playwright/test';
import { TestUploadPage } from '../pages/testUpload-nih-page';
import { UserInfoPage } from '../pages/userInfo-nih-page';

const url = 'https://nih.trustassure.app/userinformation/'
test.beforeEach(async({page})=> {
    const userInfoPage = new UserInfoPage(page)
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
        const userInfoPage = new UserInfoPage(page),
        testUploadPage = new TestUploadPage(page)

        await userInfoPage.clickContinueBtn()
        await page.waitForNavigation()
        await testUploadPage.clickUploadCheckbox()
        await testUploadPage.answerOnQuestionary()
        await page.waitForTimeout(1000)
        await testUploadPage.uploadFile()
        await testUploadPage.clickContinueBtn()
        await testUploadPage.successfullRedirect()
    })

    test.skip('Nih proceed payment', async({page}) => {
        const userInfoPage = new UserInfoPage(page),
        testUploadPage = new TestUploadPage(page)

        await userInfoPage.selectOfficialDocument()
        await userInfoPage.inputCreditCard()
        await userInfoPage.clickContinueBtn()
        await page.waitForNavigation()
        
    })

 
})
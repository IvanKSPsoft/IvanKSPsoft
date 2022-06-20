const {test, expect} = require('@playwright/test')

test('Popup Validation', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect(page.locator('#displayed-text')).toBeHidden()
    await page.locator('[value="Confirm"]').click()
    page.on('dialog', dialog => dialog.accept())
    await page.locator('#mousehover').hover()
    const frame = page.frameLocator('#courses-iframe')
    await frame.locator('li [href="lifetime-access"]').first().click()
})


test('Screenshot & visual', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#displayed-text').screenshot({path: 'screenshot1.png'})
    await page.locator('#hide-textbox').click()
    await page.screenshot({path: 'screenshot.png'})
    await expect(page.locator('#displayed-text')).toBeHidden()
})

test.only('Visual', async({page}) => {
    await page.goBack('https://www.my.hellojasper.com/login')
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
})

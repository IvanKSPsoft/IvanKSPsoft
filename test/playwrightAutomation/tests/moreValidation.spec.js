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
    await page.pause()
})


import { test, Page } from '@playwright/test';

const url = 'https://nih.trustassure.app/userinformation/'

test.describe('nih', async ()=> {
    test('Nih e2e', async({page}) => {
        await page.goto(url)
        await page.fill('#full-first-name', `FirstName+${Math.floor(Math.random() * 100000)}`)
        await page.fill('#full-last-name', `LastName+${Math.floor(Math.random() * 100000)}`)
        await page.type('[type="date"]', `01012000`)
        await page.fill('#input-phone', `1234567890`)
        await page.fill('#input-email', `ivantest+${Math.floor(Math.random() * 100000)}@spsoft.com`)
        await page.selectOption('#input-gender', 'M')
        await page.fill('#input-streetAddress', `Address +${Math.floor(Math.random() * 100000)}`)
        await page.fill('#input-county', `county +${Math.floor(Math.random() * 100000)}`)
        await page.fill('#input-city', `city +${Math.floor(Math.random() * 100000)}`)
        await page.fill('#input-postalCode', `11111`)
        await page.selectOption('#input-State', 'AA')
        await page.selectOption('#input-country', 'us')
        await page.click('#full-first-name')
        await page.click('.indicator-label')
        await page.waitForNavigation()
        await page.click('[type="checkbox"]')
        await page.isEnabled('[title="Select file to upload"]')

        await page.click('//div[contains(text(), "Yes")][1]/input')
        await page.click('//div[contains(text(), "Yes")][2]/input')
        await page.click('//div[contains(text(), "No")][3]/input')
        await page.click('//div[contains(text(), "No")][4]/input')
        await page.click('//div[contains(text(), "Unknown")][5]/input')
        await page.click('//div[contains(text(), "Unknown")][6]/input')
        await page.click('//div[contains(text(), "Unknown")][7]/input')
        page.on('filechooser', async (filechooser) => {
            await filechooser.setFiles('./testFiles/Ahorro.pdf')
        })
        
        await page.click('.drag-drop-zone')

        await page.click('.btn-continue')
        await page.waitForSelector('.text-content')
        
    })

 
})
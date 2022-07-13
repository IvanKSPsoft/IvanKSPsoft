import { expect, Locator, Page } from '@playwright/test';

export class TestUploadPage {
  readonly page: Page;
    checkbox: Locator;
    uploadFieldVisible: Locator;
    dragAndDropZone: Locator;
    continueBtn: Locator;
    textContent: Locator;

  


  constructor(page: Page) {
    const checkboxLocator = '[type="checkbox"]',
    uploadFieldVisibleLocator = '[title="Select file to upload"]',
    dragAndDropZoneLoactor = '.drag-drop-zone',
    continueBtnLocator = '.btn-continue',
    textContentLocator = '.text-content'
    this.page = page;
    this.checkbox = page.locator(checkboxLocator)
    this.uploadFieldVisible = page.locator(uploadFieldVisibleLocator)
    this.dragAndDropZone = page.locator(dragAndDropZoneLoactor)
    this.continueBtn = page.locator(continueBtnLocator)
    this.textContent = page.locator(textContentLocator)

  }

  async clickUploadCheckbox() {
    await this.checkbox.click()
    await this.uploadFieldVisible.isEnabled()
  }
  
  async answerOnQuestionary() {
    await this.page.click('//div[contains(text(), "Yes")][1]/input')
    await this.page.click('//div[contains(text(), "Yes")][2]/input')
    await this.page.click('//div[contains(text(), "No")][3]/input')
    await this.page.click('//div[contains(text(), "No")][4]/input')
    await this.page.click('//div[contains(text(), "Unknown")][5]/input')
    await this.page.click('//div[contains(text(), "Unknown")][6]/input')
    await this.page.click('//div[contains(text(), "Unknown")][7]/input')
  }
  
  async uploadFile() {
      this.page.on('filechooser', async (filechooser) => {
          await filechooser.setFiles('./testFiles/Ahorro.pdf')
      })
      await this.page.waitForTimeout(2000)
      await this.dragAndDropZone.click({force: true})
  }
  
  async clickContinueBtn() {
      await this.continueBtn.click()
  }
  async successfullRedirect() {
      await this.textContent.waitFor()
  }
}

import { expect, Locator, Page } from '@playwright/test';

export class VaaMvpPage {
  readonly page: Page;
    uploadVaccineBtn: Locator;
    tos: Locator;
    dragAndDropZone: Locator;
    submitBtn: Locator;
    processing: Locator;

  


  constructor(page: Page) {
    const uploadVaccineBtnLocator = 'button.jss53',
    tosLocator = 'input.jss88',
    dragAndDropZoneLocator = '[for="fileFirst"]',
    submitBtnLocator = '//span[text()="Submit"]/..',
    processingLocator = '.processing-container-wrap'
    this.page = page;
    this.uploadVaccineBtn = page.locator(uploadVaccineBtnLocator)
    this.tos = page.locator(tosLocator)
    this.dragAndDropZone = page.locator(dragAndDropZoneLocator)
    this.submitBtn = page.locator(submitBtnLocator)
    this.processing = page.locator(processingLocator)
  }

  async clickUploadVaccineBtn() {
    await this.uploadVaccineBtn.click()
  }

  async clickTos() {
    await this.tos.nth(0).click()
    await this.tos.nth(1).click()
  }

  async uploadFile(file: string) {
    this.page.on('filechooser', async (filechooser) => {
        await filechooser.setFiles(file)
    })
    await this.page.waitForTimeout(2000)
    await this.dragAndDropZone.click({force: true})
  }

  async clickSubmitBtn() {
    await this.submitBtn.click()
  }

  async waitForProcessing() {
    await this.processing.click()
  }
}
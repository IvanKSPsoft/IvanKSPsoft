import { expect, Locator, Page } from '@playwright/test';

export class ConfirmationPage {
  readonly page: Page;
    continueBtn: Locator;
    confirmLabel: Locator;
  


  constructor(page: Page) {
    const continueBtnLocator = 'a.confirm-payment-button'
    this.page = page;
    this.continueBtn = page.locator(continueBtnLocator)
    this.confirmLabel = page.locator('h1', { hasText: 'Your Appointment is Confirmed!'})
  }

  
  async waitForloaded() {
    await this.page.waitForNavigation()
    // await this.continueBtn.waitFor()
    // await this.confirmLabel.waitFor()
  }

  async clickContinueBtn() {
    await this.continueBtn.click()
  }
 
}
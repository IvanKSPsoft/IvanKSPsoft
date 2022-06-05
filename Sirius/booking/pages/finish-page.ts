import { expect, Locator, Page } from '@playwright/test';

export class FinishPage {
  readonly page: Page;
    nextStepsLabel: Locator;
    finishBtn: Locator;
 
  


  constructor(page: Page) {
    const finishBtnLocator = '.finish-button'
    this.page = page;
    this.finishBtn = page.locator(finishBtnLocator)
    this.nextStepsLabel = page.locator('h1', { hasText: 'Next Steps'})
  }

  
  async waitForLoaded() {
    await this.page.waitForNavigation()
    // await this.finishBtn.waitFor()
    // await this.nextStepsLabel.waitFor()
  }

  async clickContinueBtn() {
    await this.finishBtn.click()
  }

}
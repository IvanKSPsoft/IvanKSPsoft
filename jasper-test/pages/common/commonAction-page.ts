import { expect, Locator, Page } from '@playwright/test';

export class CommonActionsPage {
  readonly page: Page;
  continueBtn: Locator;
  typographyLayout: Locator;

  constructor(page: Page) {
    const continueBtnLocator = '[data-testing="button-submit"]',
    typograpyLayoutLocator = '[data-testing="typography-form-layout-title"]'
    this.page = page
    this.continueBtn = page.locator(continueBtnLocator)
    this.typographyLayout = page.locator(typograpyLayoutLocator)
  }

  async clickContinueBtn() {
    await this.continueBtn.click()
  }

  async observeTypograpyLayout() {
    await this.page.locator('[data-testing="typography-form-layout-title"]').waitFor()
  }
}
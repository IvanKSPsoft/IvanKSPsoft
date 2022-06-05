import { expect, Locator, Page } from '@playwright/test';

export class AddInterestsPage {
  readonly page: Page;

  


  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoaded() {
    await this.page.waitForURL('/onboarding/patient/add-interests')
  }

  async selectInerest(interest: 'Child Care' | 'Entertainment' | 'Pet Care' | 'Sexual Health') {
    await this.page.locator(`[data-testing="checkbox-field:{interests}:{${interest}}"]`).click()
  }
}
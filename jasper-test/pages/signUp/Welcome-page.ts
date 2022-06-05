import { expect, Locator, Page } from '@playwright/test';

export class WelcomePage {
  readonly page: Page;

  


  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoaded() {
    await this.page.waitForURL('/onboarding/patient/welcome')
  }

  async waitForLoadedCaregiver() {
    await this.page.waitForURL('/onboarding/caregiver/welcome')
  }

  async checkName(name: string) {
    await expect(this.page.locator('[data-testing="typography-form-layout-title"] div div:last-child')).toContainText(name)
  }

}
import { expect, Locator, Page } from '@playwright/test';

export class ConnectionsPage {
  readonly page: Page;

  


  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoaded() {
    await this.page.waitForURL('/onboarding/patient/connections')
  }

}
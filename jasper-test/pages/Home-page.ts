import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  welcomeTitle: Locator;
  allItemsTab: Locator;
  remissionNudge: Locator;

  


  constructor(page: Page) {
    const welcomeTitleLocator = '[data-testing="typography-welcome-title"]',
    allItemsTabLocator = '[data-testing="tab:{All Items}"]',
    remissionNudgeLocator= '[href="/library/article/how-to-navigate-cancer-survivorship"]'
    this.page = page
    this.welcomeTitle = page.locator(welcomeTitleLocator)
    this.allItemsTab = page.locator(allItemsTabLocator)
    this.remissionNudge = page.locator(remissionNudgeLocator)
  }

  async waitForloaded() {
    
    await this.page.waitForURL('/home')
  }

  async observeWelcomTitle(name: string) {
    await this.welcomeTitle.waitFor()
    await expect(this.page.locator('[data-testing="typography-welcome-title"]')).toContainText(name)
  }

  async clickAllItemsTab() {
    await this.allItemsTab.click()
  }

  async observeRemissionNudge() {
    await this.clickAllItemsTab()
    await this.remissionNudge.isVisible()
  }

}
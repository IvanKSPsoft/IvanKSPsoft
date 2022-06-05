import { faker } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
    searchDropdownitem: Locator;
    closWelocoModalBtnLocator: any;
    mainPageModal: Locator;
    closWelocoModalBtn: Locator;
    serachInput: Locator;
    labAddrees: string;
    


  constructor(page: Page) {
    const searchDropdownitemLocator = '.dxbs-clickable',
    closWelocoModalBtnLocator = '[data-qa-selector="dx-popup-close-button"]',
    welcomeModalHeader = '[data-qa-selector="dx-popup-close-button"]',
    searchInputLocator ='input[placeholder="Search by address or zip code"]';
    this.page = page;
    this.searchDropdownitem = page.locator(searchDropdownitemLocator),
    this.mainPageModal = page.locator(welcomeModalHeader)
    this.closWelocoModalBtn = page.locator(closWelocoModalBtnLocator)
    this.serachInput = page.locator(searchInputLocator)
    this.labAddrees = 'Walmart Neighborhood Market, 1001, East Main Street, Yukon, Canadian County, Oklahoma, 73099, United States'
    
  }

  
  async open() {
    await this.page.goto('');
  }

  async observeWelcomeModal() {
      await this.searchDropdownitem.isVisible()
  }

  async closeWelcomModal() {
    await this.closWelocoModalBtn.click()
    await this.mainPageModal.isHidden()
  }

  async inputSearchField(labAddrees: string) {
    await this.serachInput.click()
    await this.serachInput.fill(labAddrees)
    await expect(this.searchDropdownitem).toContainText(labAddrees)
  }

  async clickOnSearchResult() {
    await this.searchDropdownitem.click()
  }

}
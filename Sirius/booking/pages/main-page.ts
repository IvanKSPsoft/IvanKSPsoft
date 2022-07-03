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
    labAddrees2: string;
    


  constructor(page: Page) {
    const searchDropdownitemLocator = '.dxbs-clickable',
    
    searchInputLocator ='input[placeholder="Search by address or zip code"]';
    this.page = page;
    this.searchDropdownitem = page.locator(searchDropdownitemLocator),
    
    this.serachInput = page.locator(searchInputLocator)
    this.labAddrees = 'Walmart Neighborhood Market, 1001, East Main Street, Yukon, Canadian County, Oklahoma, 73099, United States'
    this.labAddrees2 = 'Marriott Vacation Club, New York City, 33, West 37th Street, Midtown South, Manhattan Community Board 5, New York County, City of New York, New York, 10018, United States'
    
  }

  
  async open() {
    await this.page.goto('');
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
import { faker } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';

export class AccountDetailsPage {
  readonly page: Page;
  zipCodeField: Locator;
  ageGroupDropDown: Locator;
  sexField: Locator;
  femaleOption: Locator;


  constructor(page: Page) {
    const zipCodeFieldLocator = '#zip-code',
    ageGroupFieldLocator = '[data-testing="select:{ageGroup}"]',
    sexFieldlocator = '[data-testing="select:{biologicalSex}"]',
    femaleOptionlocator = '[data-testing="radio-label:{biologicalSexId}:{Female}"]'
    this.page = page
    this.zipCodeField = page.locator(zipCodeFieldLocator)
    this.ageGroupDropDown = page.locator(ageGroupFieldLocator)
    this.sexField = page.locator(sexFieldlocator)
  }

  async waitForLoaded() {
    
    await this.page.waitForURL('/onboarding/patient/update-patient')
  }

  async inputZipCodeField() {
    await this.zipCodeField.fill(faker.address.zipCode())
  }

  async selectAgeGroup(age: '18-39 years' | '40-64 years' | '65+ years') {
    await this.ageGroupDropDown.click()
    await this.page.locator(`[data-testing="menu-item-age-group:{${age}}"]`).click()
  }

  async selectSex(sex: 'Female' | 'Male' | 'Intersex' | 'Prefer not to say') {
    await this.sexField.click()
    await this.page.locator(`[data-testing="radio-label:{biologicalSexId}:{${sex}}"]`).click()
  }


}
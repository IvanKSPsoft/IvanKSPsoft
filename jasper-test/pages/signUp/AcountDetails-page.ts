import { faker } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';

export class AccountDetailsPage {
  readonly page: Page;
  zipCodeField: Locator;
  ageGroupDropDown: Locator;
  sexField: Locator;
  femaleOption: Locator;
  pateintFirstnameField: Locator;
  pateintLastnameField: Locator;


  constructor(page: Page) {
    const zipCodeFieldLocator = '#zip-code',
    ageGroupFieldLocator = '[data-testing="select:{ageGroup}"]',
    sexFieldlocator = '[data-testing="select:{biologicalSex}"]',
    femaleOptionlocator = '[data-testing="radio-label:{biologicalSexId}:{Female}"]',
    patientFirstNameLocator = '#first-name',
    patientLastNameLocator = '#last-name'
    this.page = page
    this.zipCodeField = page.locator(zipCodeFieldLocator)
    this.ageGroupDropDown = page.locator(ageGroupFieldLocator)
    this.sexField = page.locator(sexFieldlocator)
    this.pateintFirstnameField = page.locator(patientFirstNameLocator)
    this.pateintLastnameField = page.locator(patientLastNameLocator)
  }

  async waitForLoaded() {
    await this.page.waitForURL('/onboarding/patient/update-patient')
  }

  async waitForLoadedCaregiver() {
    await this.page.waitForURL('/onboarding/caregiver/update-patient')
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

  async inputPatientFirstNameField(patientName: string) {
    await this.pateintFirstnameField.fill(patientName)
  }

  async inputPatientLastNameField(patientLastName: string) {
    await this.pateintLastnameField.fill(patientLastName)
  }

  async inpurPatientData(name:string) {
    await this.inputPatientFirstNameField(name)
    await this.inputPatientLastNameField(name)
  }

}
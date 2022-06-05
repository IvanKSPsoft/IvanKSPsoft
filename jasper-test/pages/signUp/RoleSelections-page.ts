import { expect, Locator, Page } from '@playwright/test';

export class RoleSelectionPage {
  readonly page: Page;
  selectPatientOption1Btn: Locator;
  selectPatientOption3Btn: Locator;
  selectCaregiverBtn: Locator;

  


  constructor(page: Page) {
    const patintOption1BtnLocator = '[data-testing="select-patient-recently-diagnosed"]',
    patientOption3BtnLocator = '[data-testing="select-patient-remission"]',
    caregiverOption4Locator = '[data-testing="select-caregiver"]'
    this.page = page
    this.selectPatientOption1Btn = page.locator(patintOption1BtnLocator)
    this.selectPatientOption3Btn = page.locator(patientOption3BtnLocator)
    this.selectCaregiverBtn = page.locator(caregiverOption4Locator)
  }

  async waitForLoaded() {
    await this.page.waitForURL('/signup')
  }
  async selectPatientOption1() {
    await this.selectPatientOption1Btn.click()
  }

  async selectPatientOption3() {
    await this.selectPatientOption3Btn.click()
  }

  async selectCaregiver() {
    await this.selectCaregiverBtn.click()
  }
}
import { expect, Locator, Page } from '@playwright/test';

export class AddTreatmentPage {
  readonly page: Page;
  addTreatmentBtn: Locator;
  chemeoterapy: Locator;
  chemeoterapyOral: Locator;
  doneBtn: Locator;
  treatmentFrame: Locator;
  addAppoitnmentbtn: Locator;
  startDateField: Locator;
  todayDate: Locator;
  submitAppointmentBtn: Locator;

  


  constructor(page: Page) {
    const addTreatmentBtnLocator = '[data-testing="button-add-treatment"]',
    chemeoterapyLocator = `[data-testing="list-item-category:{Chemotherapy}"]`,
    chemeoterapyOralLocator = '[data-testing="radio-label:{treatmentDefinition}:{Oral}"]',
    tratmentFrameLocator = '[data-testing="field-title:{Treatment}"]',
    doneBtnLocator = '[data-testing="button-submit-treatment-definition"]',
    addAppointmentBtnLocator = '[data-testing="button-add-appointment:{treatment}:{chemotherapy-oral}"]',
    startDateFieldlocator = '[data-testing="list-item-start-date"]',
    todayDateLocator = '.MuiPickersDay-today',
    submitAppointmentBtnLocator = '[data-testing="button-submit-appointment-details"]'
    this.page = page;
    this.addTreatmentBtn = page.locator(addTreatmentBtnLocator)
    this.chemeoterapy = page.locator(chemeoterapyLocator)
    this.chemeoterapyOral = page.locator(chemeoterapyOralLocator)
    this.doneBtn = page.locator(doneBtnLocator)
    this.treatmentFrame = page.locator(tratmentFrameLocator)
    this.addAppoitnmentbtn = page.locator(addAppointmentBtnLocator)
    this.startDateField = page.locator(startDateFieldlocator)
    this.todayDate = page.locator(todayDateLocator)
    this.submitAppointmentBtn = page.locator(submitAppointmentBtnLocator)
  }

  async waitForLoaded() {
    await this.page.waitForURL('/onboarding/patient/add-treatments')
    await this.page.locator('[data-testing="typography-form-layout-title"]').waitFor()
  }

  async waitForLoadedCaregiver() {
    await this.page.waitForURL('/onboarding/caregiver/add-treatments')
  }

  async clickAddTreatmentBtn() {
    await this.addTreatmentBtn.click()
    await this.page.locator('//div[contains(text(), "Add Treatment")]').waitFor()
  }

  async selectTreatment() {
    await this.clickAddTreatmentBtn()
    await this.chemeoterapy.click()
    await this.chemeoterapyOral.click()
    await this.doneBtn.click()
    const treatment = await this.treatmentFrame.textContent()
    expect(treatment).toContain('Oral')
  }

  async clickAddAppointmentBtn() {
    await this.addAppoitnmentbtn.click()
    await this.startDateField.click()
    await this.todayDate.click()
    await this.submitAppointmentBtn.click()
  }

}
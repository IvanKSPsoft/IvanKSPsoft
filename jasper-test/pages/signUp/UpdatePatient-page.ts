import { faker } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';

export class UpdatePatientPage {
  readonly page: Page;
  smsContentCheckbox: Locator;
  confirmPasswordField: Locator;
  firstNameField: Locator;
  lastNameField: Locator;
  emailField: Locator;
  passwordField: Locator;
  password: string;


  constructor(page: Page) {
    const firstNameFiledLocator = '#first-name',
    lastNameFiledLocator = '#last-name',
    emailFiledLocator = '#email',
    passwordFiledLocator = '#password',
    confirmPasswordFiledLocator = '#passwordConfirmation',
    smsContentCheckboxLocator = '#sms-consent'
    
    this.page = page
    this.firstNameField = page.locator(firstNameFiledLocator)
    this.lastNameField = page.locator(lastNameFiledLocator)
    this.emailField = page.locator(emailFiledLocator)
    this.passwordField = page.locator(passwordFiledLocator)
    this.confirmPasswordField = page.locator(confirmPasswordFiledLocator)
    this.smsContentCheckbox = page.locator(smsContentCheckboxLocator)
    this.password = '123456'
  }

  async waitForLoadedPatien() {
    await this.page.waitForURL('/onboarding/patient')
  }

  async waitForLoadedCaregiver() {
    await this.page.waitForURL('/onboarding/caregiver')
  }

  async inputFirstNameField(name: string) {
    await this.firstNameField.fill(name)
  }

  async inputLastNameField(option= faker.name.lastName()) {
    await this.lastNameField.fill(option)
  }

  async inputEmailField(option = `${faker.name.lastName()}+fake${faker.datatype.bigInt({ min: 100000n, max: 999999n })}@spsoft.com`) {
    await this.emailField.fill(option)
  }

  async inputPasswordField(password = this.password) {
    await this.passwordField.fill(password)
  }

  async inputConfirmPasswordField(password = this.password) {
    await this.confirmPasswordField.fill(password)
  }

  async clickSMSContentCheckbox () {
    await this.smsContentCheckbox.click()
  }

}
import { expect, Locator, Page } from '@playwright/test';

export class UserInfoPage {
  readonly page: Page;
    firstName: Locator;
    lastName: Locator;
    dob: Locator;
    emailField: Locator;
    phoneField: Locator;
    genderField: Locator;
    addressFeild: Locator;
    countyField: Locator;
    cityField: Locator;
    zipCodeField: Locator;
    stateField: Locator;
    countryField: Locator;
    continueBtn: Locator;
    officialDocumentField: Locator;
  refundPolicy: Locator;
  stripeFrame: any;


  constructor(page: Page) {
    const firstNameLocator = '#full-first-name',
    lastNameLocator = '#full-last-name',
    dobLocator = '[type="date"]',
    emailFieldLocator = '#input-email',
    phoneFieldLocator = '#input-phone',
    genderFieldLocator = '#input-gender',
    addressFeildLocator = '#input-streetAddress',
    countyFieldLocator = '#input-county',
    cityFieldLocator = '#input-city',
    zipCodeFieldLocator = '#input-postalCode',
    stateFieldLocator = '#input-State',
    countryFieldLocator = '#input-country',
    continueBtnLocator = '.indicator-label',
    officialDocumentFieldLocator = '//*[contains(text(),"Do you require an official test result document?")]/../select',
    refundPolicyLocator = '#refundPolicy',
    stripeFrameLocator = '[title="Secure card payment input frame"]'
    this.page = page;
    this.firstName = page.locator(firstNameLocator)
    this.lastName = page.locator(lastNameLocator)
    this.dob = page.locator(dobLocator)
    this.emailField = page.locator(emailFieldLocator)
    this.phoneField = page.locator(phoneFieldLocator)
    this.genderField = page.locator(genderFieldLocator)
    this.addressFeild = page.locator(addressFeildLocator)
    this.countyField = page.locator(countyFieldLocator)
    this.cityField = page.locator(cityFieldLocator)
    this.zipCodeField = page.locator(zipCodeFieldLocator)
    this.stateField = page.locator(stateFieldLocator)
    this.countryField = page.locator(countryFieldLocator)
    this.continueBtn = page.locator(continueBtnLocator)
    this.officialDocumentField = page.locator(officialDocumentFieldLocator)
    this.refundPolicy = page.locator(refundPolicyLocator)
    this.stripeFrame = page.frameLocator(stripeFrameLocator)
  }
  
  async inputFirstName(name = `FirstName+${Math.floor(Math.random() * 100000)}`) {
    await this.firstName.fill(name)
  }

  async inputLastName(name = `lastName+${Math.floor(Math.random() * 100000)}`) {
    await this.lastName.fill(name)
  }

  async inputDOB(option = `01012000`) {
    await this.dob.type(option)
  }

  async inputEmail(email = `ivantest+${Math.floor(Math.random() * 100000)}@spsoft.com`) {
    await this.emailField.fill(email)
  }
  
  async inputPhone(phone = `1234567890`) {
    await this.phoneField.fill(phone)
  }

  async selectGender(option = 'M') {
    await this.genderField.selectOption(option)
  }

  async inputAddress(address = `Address +${Math.floor(Math.random() * 100000)}`) {
    await this.addressFeild.fill(address)
  }

  async inputCounty(county = `county +${Math.floor(Math.random() * 100000)}`) {
    await this.countyField.fill(county)
  }

  async inputCity(city = `city +${Math.floor(Math.random() * 100000)}`) {
    await this.cityField.fill(city)
  }

  async inputZipCode(zipCode = `11111`) {
    await this.zipCodeField.fill(zipCode)
  }

  async selectState(state = 'AA') {
    await this.stateField.selectOption(state)
  }

  async selecCountry(country = 'us') {
    await this.countryField.selectOption(country)
  }

  async clickNameField() {
    await this.firstName.click()
  }

  async clickContinueBtn() {
    await this.continueBtn.click()
  }

  async selectOfficialDocument(option = 'True') {
    await this.officialDocumentField.selectOption(option)
    await this.refundPolicy.click()
  }

  async inputCreditCard() {
    await this.stripeFrame.locator('[aria-label="Credit or debit card number"]').fill('4242424242424242')
  }

  async inputCreditExpiration() {
    await this.stripeFrame.locator('[aria-label="Credit or debit card expiration date"]').fill('1123')
  }

  async inputCreditCCV() {
    await this.stripeFrame.locator('[aria-label="Credit or debit card CVC/CVV"]').fill('1123')
  }

  async inputCreditZip() {
    await this.stripeFrame.locator('[aria-label="ZIP"]').fill('11233')
  }


}
import { faker } from '@faker-js/faker';
import { expect, Locator, Page } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  editAppointmentBtn: Locator;
  almostDoneLabel: Locator;
  firstNameField: Locator;
  genderDropdown: Locator;
  emailField: Locator;
  mobileField: Locator;
  streetField: Locator;
  cityField: Locator;
  birthdayField: Locator;
  zipCodeFiled: Locator;
  countyField: Locator;
  stateDropdown: Locator;
  lastNameField: Locator;
  insuranceNo: Locator;
  insuranceYes: Locator;
  cardNumber: Locator;
  expiration: Locator;
  ccv: Locator;
  cradZipCode: Locator;
  stripeFrame: Locator;
  stripePayBtn: Locator;
  inputInsuranceForm: Locator;
  inputInsuranceAddress: Locator;
  inputInsuranceCity: Locator;
  inputInsuranceZipCode: Locator;
  memberidField: Locator;
  groupNumberField: Locator;
  insurancePrice: Locator;
  failPaymentText: Locator;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  county: string;
  zipCode: string;
  discontPrice: string;
  csvPhoneConcent: Locator;

  constructor(page: Page) {
    const editAppointmentBtnLocator = '.edit-appointment-button',
    lastNameFieldLocator = '#LastName',
    firstNameFieldLocator = '#FirstName',
    genderDropDownLocator = '#Gender',
    emailFieldlocator = '#Email',
    mobileFieldLocator = '#Mobile',
    stereetFieldLocator = '#Street',
    cityFieldLocator = '#City',
    countyFiledLocator = '#County',
    stateDropdownlocator = '#State',
    zipCodelocator = '#PostalCode',
    insuranceYESLocator = '[name="Do you have insurance?"][value=Yes"]',
    insuranceNoLocator = '[name="Do you have insurance?"][value=No"]',
    stripeFrameLocator = 'iframe[title="Secure card payment input frame"]',
    striprPayBtnLocator = '#btn-submit',
    inputFormLocaror = '.dxbs-form-control.text-truncate',
    MemberIDFieldLocator = '[name="What is your member ID?"]',
    groupNumberFieldLocator ='[name="What is your Group Number?"]',
    priceLocator = 'tr span',
    failPaymentModalLocator = '.landing-modal-title',
    csvPhoneConcentLocator = '#CvsPhoneConsent',
    birthDayFieldlocator = '#Birthday';
    this.page = page;
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this.userName = `${faker.name.firstName()}+${faker.datatype.number(1000)}`
    this.email = `${this.userName}@email.ghostinspector.com`
    this.phoneNumber = '2029998877'
    this.streetAddress = faker.address.streetAddress()
    this.city = faker.address.city()
    this.county = faker.address.country()
    this.zipCode = faker.address.zipCode()
    this.discontPrice = '$49.95'
    this.editAppointmentBtn = page.locator(editAppointmentBtnLocator)
    this.almostDoneLabel = page.locator('h1', { hasText: 'Almost Done!'})
    this.firstNameField = page.locator(firstNameFieldLocator)
    this.lastNameField = page.locator(lastNameFieldLocator)
    this.genderDropdown = page.locator(genderDropDownLocator)
    this.emailField = page.locator(emailFieldlocator)
    this.mobileField = page.locator(mobileFieldLocator)
    this.streetField = page.locator(stereetFieldLocator)
    this.cityField = page.locator(cityFieldLocator)
    this.countyField = page.locator(countyFiledLocator)
    this.zipCodeFiled = page.locator(zipCodelocator)
    this.birthdayField = page.locator(birthDayFieldlocator)
    this.stateDropdown = page.locator(stateDropdownlocator)
    this.insuranceNo = page.locator(insuranceNoLocator)
    this.insuranceYes = page.locator(insuranceYESLocator)
    this.stripeFrame = page.locator(stripeFrameLocator)
    this.cardNumber = page.frameLocator(stripeFrameLocator).locator('[placeholder="Card number"]')
    this.expiration = page.frameLocator(stripeFrameLocator).locator('[placeholder="MM / YY"]')
    this.ccv = page.frameLocator(stripeFrameLocator).locator('[placeholder="CVC"]')
    this.cradZipCode = page.frameLocator(stripeFrameLocator).locator('[placeholder="ZIP"]')
    this.stripePayBtn = page.locator(striprPayBtnLocator)
    this.inputInsuranceForm = page.locator(inputFormLocaror).first()
    this.inputInsuranceAddress = page.locator(inputFormLocaror).nth(1)
    this.inputInsuranceCity = page.locator(inputFormLocaror).nth(2)
    this.inputInsuranceZipCode = page.locator(inputFormLocaror).nth(3)
    this.memberidField = page.locator(MemberIDFieldLocator)
    this.groupNumberField = page.locator(groupNumberFieldLocator)
    this.insurancePrice = page.locator(priceLocator).first()
    this.failPaymentText = page.locator(failPaymentModalLocator)
    this.csvPhoneConcent = page.locator(csvPhoneConcentLocator)
  }

  async waitForLoaded() {
    await expect(this.editAppointmentBtn).toBeVisible()
    await expect(this.almostDoneLabel).toBeVisible()
  }

  async inputFirstName(firstName: string) {
    await this.firstNameField.fill(firstName)
  }

  async inputLastName(lastName: string) {
    await this.lastNameField.fill(lastName)
  }

  async inputBirthday() {
    await this.birthdayField.click()
    await this.page.keyboard.type('01011990')
  }

  async inputEmail(email: string) {
    await this.emailField.fill(email)
  }

  async inputMobile(mobile: string) {
    await this.mobileField.fill(mobile)
  }
  
  async inputCounty(county: string) {
    await this.countyField.fill(county)
  }
  
  async inputCity(city: string) {
    await this.cityField.fill(city)
  }
  
  async inputStreet(street: string) {
    await this.streetField.fill(street)
  }

  async inputZipCode(zipCode: string) {
    await this.zipCodeFiled.fill(zipCode)
  }

  async selectStateDropdown() {
    await this.stateDropdown.selectOption('AA')
  }

  async selectGenderDropdown() {
    await this.genderDropdown.selectOption('Male')
  }

  async selectInsurance(option: 'Yes' | 'No') {
    await this.page.click(`[name="Do you have insurance?"][value=${option}]`)
    
  }
  async firstQuestion(option: 'No' | 'I live in an area with known community spread') {
    await this.page.click(`[name="Do any of the following apply to you?"][value=${option}]`)
  }

  async symptomQuestion(option: 'No' | 'Bluish lips or face') {
    await this.page.click(`[name="Are you symptomatic as defined by the CDC?"][value=${option}]`)
  }

  async orderdingQuestion(option: 'Yes' | 'No') {
    await this.page.click(`[name="Are you ordering this test for yourself?"][value=${option}]`)
  }

  async firstCovidQuestion(option: 'Yes' | 'No') {
    await this.page.click(`[name="Is this your first COVID-19 test?"][value=${option}]`)
  }

  async previoslyDiagnosQuestion(option: 'Yes' | 'No') {
    await this.page.click(`[name="Have you previously been diagnosed with COVID-19?"][value=${option}]`)
  }

  async yourSymtopmsDiagnosQuestion(option: 'No' | 'Sore throat') {
    await this.page.click(`[name="Symptoms"][value=${option}]`)
  }

  async medicalConditionsQuestion(option: 'Smoker' | 'No') {
    await this.page.click(`[name="Medical Conditions"][value=${option}]`)
  }

  async residenceQuestion(option: 'Yes' | 'No' | 'Unknown') {
    await this.page.click(`[name="Are you a resident in a congregate care setting?"][value=${option}]`)
  }

  async raceQuestion() {
    await this.page.click(`[name="What is your race?"][value="Other"]`)
  }

  async latinoQuestion() {
    await this.page.click(`[name="What is your ethnicity?"][value="Not Hispanic or Latino"]`)
  }

  async healthCareEmployedQuestion(option: 'Yes' | 'No') {
    await this.page.click(`[name="Are you employed in healthcare?"][value=${option}]`)
  }

  async clickPrivacyContent() {
    await this.page.click('#PrivacyConsent')
  }

  async clickRefoundPolicyContent() {
    await this.page.click('#RefundPolicyConsent')
  }

  async defaultQuestionaryAnswers(option) {
    await this.selectInsurance(option)
    await this.firstQuestion(option)
    await this.symptomQuestion(option)
    await this.orderdingQuestion(option)
    await this.firstCovidQuestion(option)
    await this.previoslyDiagnosQuestion(option)
    await this.yourSymtopmsDiagnosQuestion(option)
    await this.medicalConditionsQuestion(option)
    await this.residenceQuestion(option)
    await this.raceQuestion()
    await this.latinoQuestion()
    await this.healthCareEmployedQuestion(option)
  }

  async cardNumberInput(option: '4242424242424242' | '4000000000000002') {
    await this.cardNumber.fill(option)
  }

  async cardExpirationInput(option= '0444') {
    await this.expiration.fill(option)
  }

  async cardCCVInput(option= '444') {
    await this.ccv.fill(option)
  }

  async cardZipCodeInput(option= '44444') {
    await this.cradZipCode.fill(option)
  }
  
  async inputCardInfo() {
    await this.stripeFrame.click()
    await this.cardNumberInput('4242424242424242')
    await this.cardExpirationInput()
    await this.cardCCVInput()
    await this.cardZipCodeInput()
    await this.stripePayBtn.isVisible()
    await this.stripePayBtn.click()
    // await this.page.waitForTimeout(20000)
  }

  async failPaymentModal() {
    await this.failPaymentText.waitFor()
  }

  async inputInsuranceInfo() {
      await this.inputInsuranceForm.click()
      await this.inputInsuranceForm.fill('Insurance')
      await this.inputInsuranceAddress.type(`${faker.address.streetAddress()}`)
      await this.inputInsuranceCity.type(`${faker.address.city()}`)
      await this.inputInsuranceZipCode.type(`11111`)
      await this.page.locator('text=Insurance company State Armed Forces AmericaArmed Forces EuropeAlaskaAlabamaArme >> select').selectOption('AK')
      await this.memberidField.fill('123456')
      await this.groupNumberField.fill('123456')
  }

  async compareInsurancePrice(text: string) {
    await expect(this.insurancePrice).toContainText(text)
    console.log(this.insurancePrice.allTextContents())
  }

  async clickCsvPhoneConcent() {
    await this.csvPhoneConcent.click()
  }

  async qestionaryNewYork() {
    await this.firstQuestion('No')
    await this.symptomQuestion('No')
    await this.orderdingQuestion('Yes')
    await this.firstCovidQuestion('Yes')
    await this.previoslyDiagnosQuestion('No')
    await this.yourSymtopmsDiagnosQuestion('No')
    await this.medicalConditionsQuestion('No')
    await this.residenceQuestion('No')
    await this.raceQuestion()
    await this.latinoQuestion()
    await this.healthCareEmployedQuestion('No')
  }

  async qestionaryMiami() {
    await this.primaryPhoneQuestion()
    await this.cvsSymptomsQuestion()
    await this.cvsBloodPressureQuestion()
    await this.cvsRisksQuestion()
    await this.cvsFirstCovidQuestion()
    await this.cvsHealthCareQuestion()
    await this.cvsInterestedQuestion()
    await this.cvsRelationshipQuestion()
    await this.cvsRaceQuestion()
    await this.cvsEthnicityQuestion()
    await this.cvsPermissionToNotifyQuestion()
    await this.cvsPhiDisclosureQuestion()
    await this.cvsDigitalVMConsentQuestion()
  }

  async primaryPhoneQuestion() {
    await this.page.locator('[name="IsMobileNumber"][value="1"]').click()
  }

  async cvsSymptomsQuestion() {
    await this.page.locator('[name="CVS731"][value="17"]').click()
  }

  async cvsBloodPressureQuestion() {
    await this.page.locator('[name="CVS732"][value="1"]').click()
  }

  async cvsRisksQuestion() {
    await this.page.locator('[name="CVS761"][value="1"]').click()
  }

  async cvsFirstCovidQuestion() {
    await this.page.locator('[name="CVS767"][value="1"]').click()
  }

  async cvsHealthCareQuestion() {
    await this.page.locator('[name="CVS768"][value="1"]').click()
  }

  async cvsInterestedQuestion() {
    await this.page.locator('[name="CVS753"][value="1"]').click()
  }

  async cvsRelationshipQuestion() {
    await this.page.locator('[name="CVS762"][value="1"]').click()
  }

  async cvsRaceQuestion() {
    await this.page.locator('[name="race"][value="1"]').click()
  }

  async cvsEthnicityQuestion() {
    await this.page.locator('[name="ethnicity"][value="1"]').click()
  }

  async cvsPermissionToNotifyQuestion() {
    await this.page.locator('[name="PermissionToNotify"][value="1"]').click()
  }

  async cvsPhiDisclosureQuestion() {
    await this.page.locator('[name="phiDisclosure"][value="1"]').click()
  }

  async cvsDigitalVMConsentQuestion() {
    await this.page.locator('[name="DigitalVMConsent"][value="1"]').click()
  }

  async reviewTermsAndConditionsMiami() {
    await this.page.locator('#CvsConsent').click()
    await this.page.locator('#CvsApptConsent').click()
    await this.page.locator('#TrustAssureConsent').click()
    await this.page.locator('#EmployeeConsent').click()
    await this.page.locator('#PrivacyConsent').click()
    await this.page.locator('#RefundPolicyConsent').click()
  }

}
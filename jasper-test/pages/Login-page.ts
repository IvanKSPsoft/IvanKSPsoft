import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  signUpbtn: Locator;
  passwordField: Locator;
  emailField: Locator;
  loginBtn: Locator;

  constructor(page: Page) {
    const signUpBtnLocator = '[data-testing="button:{sign-up}"]' 
    this.page = page;
    this.signUpbtn = page.locator(signUpBtnLocator)
    this.passwordField = page.locator('#password')
    this.emailField = page.locator('#email')
    this.loginBtn = page.locator('[data-testing="button-submit"]')
  }

  async clickSignUpBtn() {
    await this.signUpbtn.click()
  }

  async inputEmailField(email){
    await this.emailField.fill(email)
  }
  
  async inputPasswordField(password){
    await this.passwordField.fill(password)
  }
  
  async clickLoginbtn(){
    await this.loginBtn.click()
  }

}
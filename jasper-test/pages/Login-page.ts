import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
    signUpbtn: Locator;

  


  constructor(page: Page) {
    const signUpBtnLocator = '[data-testing="button:{sign-up}"]' 
    this.page = page;
    this.signUpbtn = page.locator(signUpBtnLocator)
  }

  async clickSignUpBtn() {
      await this.signUpbtn.click()
  }


}
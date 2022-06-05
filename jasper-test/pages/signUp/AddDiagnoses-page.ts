import { expect, Locator, Page } from '@playwright/test';

export class AddDiagnosesPage {
  readonly page: Page;

  constructor(page: Page) {
    
    this.page = page;
  }

  async waitForLoaded() {
    await this.page.waitForURL('/onboarding/patient/add-diagnoses')
    await this.page.locator('[data-testing="typography-form-layout-title"]').waitFor()
  }

  async selectDiagnoses(diagnoses: 'Bladder' | 'Breast' | 'Colon' | 'Liver') {
    await this.page.locator(`[data-testing="checkbox-field:{diagnoses}:{${diagnoses}}"]`).click()
  }


}
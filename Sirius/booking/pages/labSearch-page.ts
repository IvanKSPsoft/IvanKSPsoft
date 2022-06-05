import { expect, Locator, Page } from '@playwright/test';

export class LabSearchPage {
  readonly page: Page;
    firstScheduleAppBtn: Locator;
    scheduleAppModal: Locator;
    appointmentModalLabel: Locator;
    sheduleAppBtnDisabled: Locator;
    sheduleAppBtnEnabled: Locator;
    timeSlot: Locator;
  map: Locator;
 


  constructor(page: Page) {
    const firstScheduleAppBtnLocator = '[data-provider-order="1"] button',
    appointmentModalLabelLocator = '.booking-popup-reminder',
    appointmentModalLabelText = 'IMPORTANT: Not all dates or test types listed below will satisfy your destination’s entry requirements. It is your responsibility to select an appropriate date. View requirements for your destination prior to booking a test.',
    sheduleAppBtnDisabledlocator = '.booking-popup-continue-button[disabled]',
    sheduleAppBtnEnabledlocator = '.booking-popup-continue-button',
    timeSlotLocator = '.picker-time-slot',
    maoLocator = '#lab-map',
    scheduleAppModalLocator = '[role="document"]';
    this.page = page;
    this.firstScheduleAppBtn = page.locator(firstScheduleAppBtnLocator)
    this.scheduleAppModal = page.locator(scheduleAppModalLocator)
    this.appointmentModalLabel = page.locator(appointmentModalLabelLocator, { hasText: appointmentModalLabelText})
    this.sheduleAppBtnDisabled = page.locator(sheduleAppBtnDisabledlocator)
    this.sheduleAppBtnEnabled = page.locator(sheduleAppBtnEnabledlocator)
    this.timeSlot = page.locator(timeSlotLocator)
    this.map = page.locator(maoLocator)

  }

  async open() {
    await this.page.goto('/?q=Walmart%20Neighborhood%20Market,%201001,%20East%20Main%20Street,%20Yukon,%20Canadian%20County,%20Oklahoma,%2073099,%20United%20States@35.5091166,-97.7256424@us');
  }

  async waitForLoaded() {
    await this.page.waitForNavigation()
    await this.map.waitFor()
  }

  async clickScheduleAppointment() {
    await this.firstScheduleAppBtn.click()
  }
  
  async observeScheduleAppmodal() {
    await this.scheduleAppModal.isVisible()
    await expect(this.appointmentModalLabel).toBeVisible()
  }

  async observeContinuebtnDisabled() {
    await expect(this.sheduleAppBtnDisabled).toBeDisabled()
  }

  async observeContinuebtnEnabled() {
    await expect(this.sheduleAppBtnEnabled).toBeVisible()
  }

  async submitAppointment() {
    this.observeContinuebtnDisabled()
    //TODO not worked
    //await this.timeSlot.click()
    await this.page.click('.picker-time-slot')
    this.observeContinuebtnEnabled()
    await this.sheduleAppBtnEnabled.click()

  }

}
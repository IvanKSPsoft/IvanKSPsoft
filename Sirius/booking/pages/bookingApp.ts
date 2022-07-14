import { Page } from '@playwright/test';
import { FinishPage } from './finish-page';
import { LabSearchPage } from './labSearch-page';
import { MainPage } from './main-page';
import { PaymentPage } from './payment-page';
import { ConfirmationPage } from './confirmation-page'


export class BookingApp {
    page: Page;
    mainPage: MainPage;
    labSearchPage: LabSearchPage;
    paymentPage: PaymentPage;
    confirmationPage: ConfirmationPage;
    finishPage: FinishPage;

    constructor(page: Page) {
        this.page = page
        this.mainPage = new MainPage(this.page)
        this.labSearchPage = new LabSearchPage(this.page)
        this.paymentPage = new PaymentPage(this.page)
        this.confirmationPage = new ConfirmationPage(this.page)
        this.finishPage = new FinishPage(this.page)

    }
}
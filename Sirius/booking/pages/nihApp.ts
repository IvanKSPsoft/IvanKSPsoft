import { Page } from '@playwright/test';
import { TestUploadPage } from './testUpload-nih-page';
import { UserInfoPage } from './userInfo-nih-page';


export class NihApp {
    page: Page;
    userInfoPage: UserInfoPage;
    testUploadPage: TestUploadPage;

    constructor(page: Page) {
        this.page = page
        this.userInfoPage = new UserInfoPage(this.page)
        this.testUploadPage = new TestUploadPage(this.page)
    }
}
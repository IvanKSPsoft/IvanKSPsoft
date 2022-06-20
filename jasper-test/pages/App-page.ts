import { Page } from '@playwright/test';
import { CommonActionsPage } from './common/commonAction-page';
import { HomePage } from './Home-page';
import { LoginPage } from './Login-page';
import { AccountDetailsPage } from './signUp/AcountDetails-page';
import { AddDiagnosesPage } from './signUp/AddDiagnoses-page';
import { AddInterestsPage } from './signUp/AddIntersts-page';
import { AddTreatmentPage } from './signUp/AddTreatment-page';
import { ConnectionsPage } from './signUp/Connections-page';
import { RoleSelectionPage } from './signUp/RoleSelections-page';
import { UpdatePatientPage } from './signUp/UpdatePatient-page';
import { WelcomePage } from './signUp/Welcome-page';

export class App {
    page: Page;
    loginPage: LoginPage;
    roleSelectionPage: RoleSelectionPage;
    accountDetailesPage: AccountDetailsPage;
    welcomePage: WelcomePage;
    updatePatientPage: UpdatePatientPage;
    addDiagnosisPage: AddDiagnosesPage;
    addTreatmentPage: AddTreatmentPage;
    connectionsPage: ConnectionsPage;
    addInterestsPage: AddInterestsPage;
    commonActions: CommonActionsPage;
    homePage: HomePage;
    
    
    constructor(page: Page) {
        this.page = page
        this.commonActions = new CommonActionsPage(this.page)
        this.loginPage = new LoginPage(this.page)
        this.roleSelectionPage = new RoleSelectionPage(this.page)
        this.accountDetailesPage = new AccountDetailsPage(this.page)
        this.welcomePage = new WelcomePage(this.page)
        this.updatePatientPage = new UpdatePatientPage(this.page)
        this.addDiagnosisPage = new AddDiagnosesPage(this.page)
        this.addTreatmentPage = new AddTreatmentPage(this.page)
        this.connectionsPage = new ConnectionsPage(this.page)
        this.addInterestsPage = new AddInterestsPage(this.page)
        this.homePage = new HomePage(this.page)
    }
}
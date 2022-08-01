import { test, expect, Page, request} from '@playwright/test';
import { URLS } from '../pages/utils/apiUrl';
import { ApiUtils } from '../pages/utils/apiUtils';
import { VaaMvpPage } from '../pages/vaaMvp-page';


test('VAA MVP e2e', async({page})=> {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const vaaMvp = new VaaMvpPage(page)
    const createTrip = await apiUtils.createTripVAAOld(`${URLS.vaaApiOld}`)

    await page.goto(`https://clx-scus-test-virgin-vax.azurewebsites.net/landing?consumerToken=${createTrip.token}`)
    await vaaMvp.clickUploadVaccineBtn()
    await vaaMvp.clickTos()
    await vaaMvp.uploadFile('./testFiles/BelizeDiagnostic.jpeg')
    await vaaMvp.clickSubmitBtn()
    await vaaMvp.waitForProcessing()

})
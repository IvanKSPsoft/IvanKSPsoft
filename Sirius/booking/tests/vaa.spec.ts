import { test, expect, Page, request} from '@playwright/test';
import { URLS } from '../pages/utils/apiUrl';
import { ApiUtils } from '../pages/utils/apiUtils';

test.describe('VAA V3', async()=>{
    test('Create Trip', async() =>{
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const response = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
        console.log(response.token)
    })

    test.only('Upload Vaccine', async() =>{
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const response = await apiUtils.uploadVaccineVAA(`${URLS.vaaApi}/vaccines`)
        console.log(response.documentId)
    })
})
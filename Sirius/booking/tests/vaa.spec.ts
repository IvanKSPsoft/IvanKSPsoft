import { test, expect, Page, request} from '@playwright/test';
import { URLS } from '../pages/utils/apiUrl';
import { ApiUtils } from '../pages/utils/apiUtils';


test.describe('VAA V3', async()=>{
 
    test('Create Trip', async() =>{
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
    })

    test.only('Upload Vaccine', async() => {
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
        const uploadVaccine = await apiUtils.uploadVaccineVAA(`${URLS.vaaApi}/vaccines`, createTrip.consumerId, createTrip.token)
        console.log(uploadVaccine.documentId)
    })

    test('Upload Test', async() => {
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
        const uploadTest = await apiUtils.uploadTestVAA(`${URLS.vaaApi}/lab-tests`, createTrip.consumerId, createTrip.token )
        console.log(uploadTest.documentId)
    })

    test('Upload Form', async() => {
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
        const uploadForm = await apiUtils.uploadFormVAA(`${URLS.vaaApi}/forms`, createTrip.consumerId, createTrip.token )
        console.log(uploadForm.documentId)
    })

    test('Get Document State', async() => {
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
        const uploadForm = await apiUtils.uploadFormVAA(`${URLS.vaaApi}/forms`, createTrip.consumerId, createTrip.token )
        const getDocumentState = await apiUtils.getDocumentSataVAA(`${URLS.vaaApi}/documents/${uploadForm.documentId}`, uploadForm.documentId)
    })
})
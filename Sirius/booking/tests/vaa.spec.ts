import { test, expect, Page, request} from '@playwright/test';
import { URLS } from '../pages/utils/apiUrl';
import { ApiUtils } from '../pages/utils/apiUtils';


test.describe('VAA V3', async()=>{
 
    test('Create Trip', async() =>{
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
    })

    test('Upload Vaccine', async() => {
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

    test('Get Document by Id', async() => {
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
        const uploadForm = await apiUtils.uploadFormVAA(`${URLS.vaaApi}/forms`, createTrip.consumerId, createTrip.token )
        const getDocumentState = await apiUtils.getDocumentByIdVAA(`${URLS.vaaApi}/documents/${uploadForm.documentId}`, uploadForm.documentId)
    })

    test('Get Document by Token', async() => {
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
        const uploadTest = await apiUtils.uploadFormVAA(`${URLS.vaaApi}/forms`, createTrip.consumerId, createTrip.token )
        const getDocumentState = await apiUtils.getDocumentByTokenVAA(`${URLS.vaaApi}/documents`, createTrip.token)
    })

    test('Get Document by Consumer Id', async() => {
        const apiContext = await request.newContext()
        const apiUtils = new ApiUtils(apiContext)
        const createTrip = await apiUtils.createTripVAA(`${URLS.vaaApi}/trip`)
        const uploadTest = await apiUtils.uploadTestVAA(`${URLS.vaaApi}/lab-tests`, createTrip.consumerId, createTrip.token )
        const getDocumentState = await apiUtils.getDocumentByConsumerVAA(`${URLS.vaaApi}/documents`, createTrip.consumerId)
    })
})
import { test, expect, Page, request} from '@playwright/test';
import { ApiUtils } from '../pages/utils/apiUtils';
import { secret } from '../pages/utils/secret';

test('Olha create trip Delta',async () => {
    const apiContext = await request.newContext ()
    const apiUtils = new ApiUtils(apiContext)




    // const createsmth = await apiUtils.createTripDelta()



    const createTrip = await apiContext.post ('https://siq.azure-api.net/test/documents/api/upload/v2/trip',{
        headers: {
            'Ocp-Apim-Subscription-Key': secret.secreetKey
        },
        data: {
            endUserTravelers : [{
                firstName: "Olha",
                lastName: "Test",
                dateOfBirth: "2000-01-01T00:00:00.000Z",
                email: "olha.prokopchukco@spsoft.com"
                }
            ],
                endUserTrip: {
                    tripType: "FLIGHT",
                    providerTripName: "PNR API4",
                segments: [
                    {
                    ordinalNumber: 0,
                    arrivalDateTimeLocal: "2022-07-25T10:00:00+00:00",
                    departureDateTimeLocal: "2022-07-25T20:00:00+00:00",
                    destination: "LHR",
                    destinationCountryCode: "GB",
                    origin: "MIA",
                    originCountryCode: "US"
                }
            ]
                
            },
            "provider": "DA",
            "useCase": "DA_API_UPLOAD"
            
        }
    })    
    console.log(createTrip.status())
    expect(createTrip.ok()).toBeTruthy()
    const response = await createTrip.json()
})

test('Olha get doc Delta', async()=> {
    const apiContext = await request.newContext()
    const get = await apiContext.get(`https://siq.azure-api.net/test/documents/api/upload/v2/documents/f153f0921611ed11bd6edc98406f9085`, {
        headers: {
            'Ocp-Apim-Subscription-Key': secret.secreetKey
        }
    })
    console.log(get.status())
    expect(get.ok()).toBeTruthy()
    const response = await get.json()
})

import { test, expect, Page, request} from '@playwright/test';

test.only('Olha create trip Delta',async () => {
    const apiContext = await request.newContext ()
    const createTrip = await apiContext.post ('https://siq.azure-api.net/test/documents/api/upload/v2/trip',{
        headers: {
            Authorization: 'Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2'
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
    console.log(response)
})

test('Olha get doc Delta', async()=> {
    const apiContext = await request.newContext()
    const get = await apiContext.get(`https://siq.azure-api.net/test/documents/api/upload/v2/documents/f153f0921611ed11bd6edc98406f9085`, {
        headers: {
            Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
        }
    })
    console.log(get.status())
    expect(get.ok()).toBeTruthy()
    const response = await get.json()
    console.log(response)
})

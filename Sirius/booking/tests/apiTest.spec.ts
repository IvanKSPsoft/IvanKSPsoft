import { test, request, expect } from "@playwright/test";

test('test Olha create Trip', async()=> {
    const apiContext = await request.newContext()
    const createTrip = await apiContext.post(`https://clx-scus-test-api.azurewebsites.net/api/upload/v3/VAA/VA_INTEGRATED_RESERVATION/trip`, {
        headers: {
            Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
        },
        data: {
            endUserTravelers: [
                {
                    customerID: "UniqueVAAKey_0x001",
                    firstName: "some",
                    lastName: "test",
                    dateOfBirth: "2000-01-01T00:00:00.000Z",
                    email: "ivan.kovalov+10@spsoft.com"
                }
            ],
            EndUserTrip: {
                tripType: "FLIGHT",
                providerTripName: "VAA",
                segments: [
                    {
                        ordinalNumber: 0,
                        arrivalDateTimeLocal: "2022-08-05T20:00:00+00:00",
                        departureDateTimeLocal: "2022-08-05T20:00:00+00:00",
                        destination: "MIA",
                        destinationCountryCode: "US",
                        origin: "LCY",
                        originCountryCode: "GB"
                    }
                ]
            }
          }
    })

    console.log(createTrip.status())
    expect(createTrip.ok()).toBeTruthy()
    const response = await createTrip.json()
})


test('test nuber2', async()=> {
    const apiContext = await request.newContext()
    const get = await apiContext.get(`https://clx-scus-test-api.azurewebsites.net/api/upload/v3/VAA/VA_INTEGRATED_RESERVATION/documents/04f0142a310fed11bd6edc98406f9085`, {
        headers: {
            Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
        }
    })

    console.log(get.status())
    expect(get.ok()).toBeTruthy()
    const response = await get.json()
    console.log(response)
})




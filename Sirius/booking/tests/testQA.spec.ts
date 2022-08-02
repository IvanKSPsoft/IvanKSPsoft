import { test, expect, Page, request} from '@playwright/test';
import { secret } from '../pages/utils/secret';

test('Illia never late' async=()=>) {
  const apiContext = await request.newContext
  const createTrip = await apiContext.post('https://clx-scus-test-api.azurewebsites.net/api/upload/v2/trip',{
    headers: {
      Authorization: 'Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2'
    },
    data: {
      endUserTravelers: [{
        customerID: "X0002222222222",
        firstName: "",
        lastName: "Doe",
        dateOfBirth: "2000-01-01T00:00:00.000Z",
        email: "vyudenkov@siriusiq.com"
    },{
        customerID: "X0002222222221",
        firstName: "Infant",
        lastName: "Doe",
        dateOfBirth: "2020-01-01T00:00:00.000Z",
        email: "vyudenkov@siriusiq.com"
    }],
    "ndUserTrip: {
        tripType: "FLIGHT",
        providerTripName: "VY:API",
        segments: [{
            ordinalNumber: 0,
            arrivalDateTimeLocal: "2022-07-29T10:00:00-04:00",
            departureDateTimeLocal: "2022-07-29T20:00:00+00:00",
            destination: "LHR",
            destinationCountryCode: "GB",
            origin: "ATL",
            originCountryCode: "US"
        },{
            ordinalNumber: 0,
            arrivalDateTimeLocal: "2022-05-01T10:00:00+01:00",
            departureDateTimeLocal: "2022-05-01T20:00:00+00:00",
            destination: "FRA",
            destinationCountryCode: "DE",
            origin: "LHR",
            originCountryCode: "GB"
        }]
    },
    provider: "DA",
    useCase: "DA_API_UPLOAD"
    }
    console.log(createTrip.status())
    expect(createTrip.ok()).toBeTruthy()
    const response = await createTrip.json()
  })

} 



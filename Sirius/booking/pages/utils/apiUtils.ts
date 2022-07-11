import { request, expect, APIRequestContext } from "@playwright/test"
import { secret } from "./secret"
const fs = require('fs')

export class ApiUtils {
    apiContext: any
    constructor(apiContext: APIRequestContext){
        this.apiContext = apiContext
    }

    async uploadFile(url: string, filePath: any) {
        const apiContext = await request.newContext({ignoreHTTPSErrors: true})
        const sendTest = await apiContext.post(url, {
          multipart: {
            file: fs.ReadStream (filePath)
          },
        })
        const responseBody = await sendTest.json()
        expect(sendTest.ok()).toBeTruthy()
        const fields = responseBody.fields
        return {responseBody, fields}
    }

    async createTrip(url: string) {
      const apiContext = await request.newContext({ignoreHTTPSErrors: true})
      const trip = await apiContext.post(url, {
        data: {
            endUserTravelers : [{
            firstName: "Ivan",
            lastName: "Test",
            dateOfBirth: "2000-01-01T00:00:00.000Z",
            email: `ivan.kovalov+${Math.floor(Math.random() * 100000)}@spsoft.com`
            }],
                endUserTrip: {
                tripType: "FLIGHT",
                providerTripName: "PNR API4",
                segments: [{
                ordinalNumber: 0,
                arrivalDateTimeLocal: "2022-07-17T10:00:00+00:00",
                departureDateTimeLocal: "2022-07-17T20:00:00+00:00",
                destination: "LHR",
                destinationCountryCode: "GB",
                origin: "MIA",
                originCountryCode: "US"
            }]
            },
            "provider": "DA",
            "useCase": "DA_API_UPLOAD"
        },
        headers: {
          'Ocp-Apim-Subscription-Key': secret.secreetKeyDelta
        }
      })
      const responseBody = await trip.json()
      expect(trip.ok()).toBeTruthy()
      const consumers = responseBody.consumers
      const data = consumers[Object.keys(consumers)[0]]
      const consumerToken = responseBody.consumerToken
      const consumerId = data.consumerId
      return {consumerId, consumers}
  }


}
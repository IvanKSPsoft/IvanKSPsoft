import { request, expect, APIRequestContext } from "@playwright/test"
import { dataSet, vaaVaccineData } from "./apiData"
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

    async createTripDelta(url: string) {
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
                arrivalDateTimeLocal: dataSet.dateTimeLocal,
                departureDateTimeLocal: dataSet.dateTimeLocal,
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
      return {consumerId, consumers, consumerToken}
  }

  async createTripVisa(url: string) {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.post(url, {
      data: {
        endUserTravelers: [{
        customerID: "UniqueVisaKey_0x001",
        firstName: "some",
        lastName: "test",
        dateOfBirth: "2000-01-01T00:00:00.000Z",
        email: "ivan.kovalov+10@spsoft.com"
        }],
            endUserTrips: [{
                tripType: "FLIGHT",
                providerTripName: "VISA",
                segments: [{
                ordinalNumber: 0,
                arrivalDateTimeLocal: dataSet.dateTimeLocal,
                departureDateTimeLocal: dataSet.dateTimeLocal,
                destination: "MIA",
                destinationCountryCode: "US",
                origin: "IEV",
                originCountryCode: "UA"
                }]
            }]
        },
      headers: {
        'Ocp-Apim-Subscription-Key': secret.secreetKeyDelta
      }
    })
    expect(trip.ok()).toBeTruthy()
    const lognResponseJson = await trip.json()
    const responceObj = lognResponseJson[Object.keys(lognResponseJson)[0]]
    const token = responceObj.consumerToken
    return { token }
  }

  async createTripVAA(url: string) {
    // convert basic aut to base64
  const btoa = (str: string) => Buffer.from(str).toString('base64');
  const credentialsBase64 = btoa(`${secret.httpTestCredentials.username}:${secret.httpTestCredentials.password}`)

    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.post(url, {
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
                      arrivalDateTimeLocal: dataSet.dateTimeLocal,
                      departureDateTimeLocal: "2022-08-05T20:00:00+00:00",
                      destination: "MIA",
                      destinationCountryCode: "US",
                      origin: "LCY",
                      originCountryCode: "GB"
                  }
              ]
          }
        },
        headers: {
          Authorization: `Basic ${credentialsBase64}`
      }
    })
    expect(trip.ok()).toBeTruthy()
    const response = await trip.json()
    const token = response.consumerToken
    const consumers = response.consumers[Object.keys(response.consumers)[0]]
    const customerId = consumers.customerId
    const consumerId = consumers.consumerId
    return { token, customerId, consumerId }
  }


  async uploadVaccineVAA(url: string) {
    // convert basic aut to base64
  const btoa = (str: string) => Buffer.from(str).toString('base64');
  const credentialsBase64 = btoa(`${secret.httpTestCredentials.username}:${secret.httpTestCredentials.password}`)

    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.post(url, {
      headers: {
          Authorization: `Basic ${credentialsBase64}`
      },
      data: vaaVaccineData
    })
    expect(trip.ok()).toBeTruthy()
    const response = await trip.json()
    const documentId = response.documentId
    expect(response.documentType).toContain('VAX')
    return { documentId }
  }

}
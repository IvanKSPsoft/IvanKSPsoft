import { request, expect, APIRequestContext } from "@playwright/test"
import { dataSet } from "./apiData"
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
          Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
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


  async uploadVaccineVAA(url: string, consumerId: string, consumerToken: string) {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.post(url, {
      headers: {
          Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
      },
      data: {
        endUserTraveler:{ 
            consumerId: consumerId,
            consumerToken: consumerToken,
            dateOfBirth: "2000-01-01T00:00:00.000Z",
            email: "ikovalov@siriusiq.com",
            firstName: "Test",
            lastName: "Test"
        },
        rules : [
         {
          validationDate:"2022-05-12T15:00:00+04:00",
          languages:[
             "EN",
             "ES",
             "FR"
          ],
          nameRequirements:{
          },
          ageRequirements:{
              minimalAge:5,
              maximimAge:80
          },
          allowedVaccines: [
                {
                    vaccineName: "PFIZER",
                    validTo: "P14D",
                    validFrom: "P1Y",
                    requredDosesCount: 2,
                    intervalFromLastDose : "P14D"
                },
                {
                    vaccineName: "Moderna",
                    validTo: "P14D",
                    validFrom: "P1Y",
                    requredDosesCount: 2
                },
                {
                    vaccineName: "Janssen",
                    validTo: "P14D",
                    validFrom: "P1Y",
                    requredDosesCount: 1,
                    boosterDoseRequired: true
                }
            ]
        }],
        reusable:true,
        document: {
            "bodyBase64": "JVBERi0xLjIgCjkgMCBvYmoKPDwKPj4Kc3RyZWFtCkJULyAzMiBUZiggIFlPVVIgVEVYVCBIRVJFICAgKScgRVQKZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9QYXJlbnQgNSAwIFIKL0NvbnRlbnRzIDkgMCBSCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9LaWRzIFs0IDAgUiBdCi9Db3VudCAxCi9UeXBlIC9QYWdlcwovTWVkaWFCb3ggWyAwIDAgMjUwIDUwIF0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1BhZ2VzIDUgMCBSCi9UeXBlIC9DYXRhbG9nCj4+CmVuZG9iagp0cmFpbGVyCjw8Ci9Sb290IDMgMCBSCj4+CiUlRU9G",
            "mimeType": "image/jpeg"
        }
      }
    })
    expect(trip.ok()).toBeTruthy()
    const response = await trip.json()
    const documentId = response.documentId
    expect(response.consumerToken).toEqual(consumerToken)
    expect(response.documentType).toEqual("VAX")
    return { documentId }
  }

  async uploadTestVAA(url: string, consumerId: string, consumerToken: string) {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.post(url, {
      headers: {
          Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
      },
      data: {
        endUserTraveler:{ 
          consumerId: consumerId,
          consumerToken: consumerToken,
          dateOfBirth: "2000-01-01T00:00:00.000Z",
          email: "ikovalov@siriusiq.com",
          firstName: "John",
          lastName: "Doe"}, 
          document: { 
              bodyBase64: "JVBERi0xLjIgCjkgMCBvYmoKPDwKPj4Kc3RyZWFtCkJULyA5IFRmKFRlc3QpJyBFVAplbmRzdHJlYW0KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCA1IDAgUgovQ29udGVudHMgOSAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0tpZHMgWzQgMCBSIF0KL0NvdW50IDEKL1R5cGUgL1BhZ2VzCi9NZWRpYUJveCBbIDAgMCA5OSA5IF0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1BhZ2VzIDUgMCBSCi9UeXBlIC9DYXRhbG9nCj4+CmVuZG9iagp0cmFpbGVyCjw8Ci9Sb290IDMgMCBSCj4+CiUlRU9G", 
   mimeType: "image/jpeg" }, 
   uploadUrl: "https://google.com?dev", 
   reusable: false, 
   rules: 
   [ 
       { id: "LEG_INTL_US-S5LISJFK", 
       ageRequirements: { 
           skip: false, 
           maximumAge: 0, 
           minimalAge: 2 }, 
           validationDate: "2022-05-12T10:00:00+01:00", 
           allowedTests: 
           [ {
                validationDate: "2022-05-12T10:00:00+01:00", 
           testMetho: "", 
           testType: "ANTIGEN", 
           validFrom: "P1D", 
           validTo: "" }, 
           { 
               validationDate: "2022-05-12T10:00:00+01:00", 
               testMethod: "", 
               testType: "LAMP", 
               validFrom: "P1D", 
               validTo: "" }, 
               { 
                   validationDate: "2022-05-12T10:00:00+01:00", 
                   testMethod: "", 
                   testType: "NAAT", 
                   validFrom: "P1D", 
                   validTo: "" }, 
                   { 
                       validationDate: "2022-05-12T10:00:00+01:00", 
                       testMethod: "", 
                       testType: "PCR", 
                       validFrom: "P1D", 
                       validTo: "" },
                       { 
                           validationDate: "2022-05-12T10:00:00+01:00", 
                           testMethod: "", 
                           testType: "RT_PCR", 
                           validFrom: "P1D", 
                           validTo: "" }, 
                           { 
                               validationDate: "2022-05-12T10:00:00+01:00", 
                               testMethod: "", 
                               testType: "TMA", 
                               validFrom: "P1D", 
                               validTo: "" } ] } ] 
      }
        
    })
    expect(trip.ok()).toBeTruthy()
    const response = await trip.json()
    const documentId = response.documentId
    expect(response.consumerToken).toEqual(consumerToken)
    expect(response.documentType).toEqual("TST")
    return { documentId }
  }

  async uploadFormVAA(url: string, consumerId: string, consumerToken: string) {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.post(url, {
      headers: {
          Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
      },
      data: {
        endUserTraveler: {
          consumerId: consumerId,
          consumerToken: consumerToken,
          dateOfBirth: "2000-01-01T00:00:00.000Z",
          email: "ikovalov@siriusiq.com",
          firstName: "John",
          lastName: "Doe"
      },
      rules : [],
      document: { 
              bodyBase64: "JVBERi0xLjIgCjkgMCBvYmoKPDwKPj4Kc3RyZWFtCkJULyA5IFRmKFRlc3QpJyBFVAplbmRzdHJlYW0KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCA1IDAgUgovQ29udGVudHMgOSAwIFIKPj4KZW5kb2JqCjUgMCBvYmoKPDwKL0tpZHMgWzQgMCBSIF0KL0NvdW50IDEKL1R5cGUgL1BhZ2VzCi9NZWRpYUJveCBbIDAgMCA5OSA5IF0KPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1BhZ2VzIDUgMCBSCi9UeXBlIC9DYXRhbG9nCj4+CmVuZG9iagp0cmFpbGVyCjw8Ci9Sb290IDMgMCBSCj4+CiUlRU9G", 
      mimeType: "image/jpeg"
        }
      }
        
    })
    expect(trip.ok()).toBeTruthy()
    const response = await trip.json()
    const documentId = response.documentId
    expect(response.consumerToken).toEqual(consumerToken)
    expect(response.documentType).toEqual("HAS")
    return { documentId }
  }

  async getDocumentByIdVAA(url: string, documentId: string) {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.get(url, {
      headers: {
          Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
      }  
    })
    expect(trip.ok()).toBeTruthy()
    const response = await trip.json()
    expect(response.documentId).toEqual(documentId)
  }

  async getDocumentByTokenVAA(url: string, consumerToken: string) {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.get(url, {
      headers: {
          Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
      }  ,
      params: {
        consumerToken: consumerToken
      }
    })
    expect(trip.ok()).toBeTruthy()
    const response = await trip.json()
    expect(response[Object.keys(response)[0]].consumerToken).toEqual(consumerToken)
  }

  async getDocumentByConsumerVAA(url: string, consumerId: string) {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const trip = await apiContext.get(url, {
      headers: {
          Authorization: `Basic dGVzdC1hcGk6Y0hKdlpDMWhjR2s2`
      }  ,
      params: {
        consumerId: consumerId
      }
    })
    // expect(trip.ok()).toBeTruthy()
    const response = await trip.json()
    expect(response[Object.keys(response)[0]].consumerId).toEqual(consumerId)
  }

}
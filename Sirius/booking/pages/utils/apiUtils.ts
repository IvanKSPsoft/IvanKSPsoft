import { request, expect, APIRequestContext } from "@playwright/test"
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
}
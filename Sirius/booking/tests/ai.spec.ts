import { test, expect, Page, request} from '@playwright/test';
const fs = require('fs')
const url = 'https://clx-scus-dev-document-processor.azurewebsites.net/api/v1/form-recognizer/vaccines/file/model'

test.describe.configure({ mode: 'parallel' })
test.describe('AI Vaccine', () => {
  test('Ahorro.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Ahorro.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.23)
    expect(name).toContain('Name                         (0.969) -       No: Edad / Age: 26 anos/years 5 meses/months => Edad Age anos years meses months')
    expect(dob).toContain('Dob                         (0.948005) -       No:')
  })

  test('Ahorro3.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Ahorro3.png')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.34)
    expect(name).toContain('Name                         (0.985) -       No: SOM SEADUST => SOM SEADUST')
    expect(dob).toContain('Dob                          (0.986) -  Unclear: Hora de Toma / Testing Hour: => ')
  })

  test('Amadita.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Amadita.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.342)
    expect(name).toContain('Name                         (0.985) -       No: ID Resultado => ID Resultado')
    expect(dob).toContain('Dob                         (0.99761325) -       No')
  })

  test('Amatista.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Amatista.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.346)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                          (0.986) -       No:")
  })

  test('Amatista.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Amatista.png')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.342)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                          (0.987) -       No:")
  })

  test('AMC1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/AMC1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                              (1) -       No:")
  })

  test('AMC2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/AMC2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                              (1) -       No:")
  })

  test('Amerimed_A.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Amerimed_A.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.342)
    expect(name).toContain('Name                         (0.985) -       No:')
    expect(dob).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('Amerimed_B.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Amerimed_B.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.232)
    expect(name).toContain('Name                          (0.97) -       No:')
    expect(dob).toContain("Dob                          (0.991) -       No")
  })

  test('Azumed.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Azumed.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.344)
    expect(name).toContain('Name                          (0.97) -       No:')
    expect(dob).toContain("Dob                          (0.996) -       No:")
  })
})
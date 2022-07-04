import { test, expect, Page, request} from '@playwright/test';
const fs = require('fs')
const url = 'https://clx-scus-dev-document-processor.azurewebsites.net/api/v1/form-recognizer/vaccines/file/model'

test.describe.configure({ mode: 'parallel' })
test.describe('AI Vaccine Pt2', () => {
  test('testSulaudmexico1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testSulaudmexico1.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.663)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.991) -       No:')
  })

  test('testSulaudmexico2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testSulaudmexico2.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.804)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testNHS1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testNHS1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.99)
    expect(fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.992) -       No:')
  })

  test('testNHS2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testNHS2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.993)
    expect(fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.994) -       No:')
  })

  test('testModelOntario1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testModelOntario1.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.731)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testModelOntario1.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testModelOntario1.png')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.671)
    expect(fields[0]).toContain('Dob                          (0.989) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('testModelOntario2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testModelOntario2.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.796)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testModelOntarioN.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testModelOntarioN.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.362)
    expect(fields[0]).toContain('Dob                          (0.989) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('testModelOntarioN.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testModelOntarioN.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.578)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('testModelOntarioN1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testModelOntarioN1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.577)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('testModelNHS-1dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testModelNHS-1dose.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.702)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testModelNHS-1dose1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testModelNHS-1dose1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.992)
    expect(fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.993) -       No:')
  })
})
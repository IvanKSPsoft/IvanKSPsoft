import { test, expect, Page, request} from '@playwright/test';
const fs = require('fs')
const url = 'https://clx-scus-dev-document-processor.azurewebsites.net/api/v1/form-recognizer/vaccines/file/model'

test.describe.configure({ mode: 'parallel' })
test.describe('AI Vaccine Pt2', () => {
  test('testSulaudmexico1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
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

  test('bermuda3doses.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/bermuda3doses.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.979)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses1.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/bermuda3doses1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.979)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses2.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/bermuda3doses2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.855)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses3.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/bermuda3doses3.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.977)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses4.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/bermuda3doses4.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.977)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses5.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/bermuda3doses5.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.979)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda2doses.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/bermuda2doses.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.725)
    expect(fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.755) -       No:')
  })

  test('testColumbia3dose.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia3dose.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.766)
    expect(fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testColumbia3dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia3dose.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testColumbia2dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia2dose.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.992) -       No:')
  })

  test('testColumbia2dose1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia2dose1.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.972)
    expect(fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.992) -       No:')
  })

  test('testColumbia2dose2.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia2dose2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testColumbia2dose3.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia2dose3.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testColumbia2dose4.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia2dose4.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.993) -       No')
  })

  test('testColumbia2dose5.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia2dose5.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.993) -       No')
  })

  test('testColumbia1dose1.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia1dose1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.989)
    expect(fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testColumbia1dose2.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testColumbia1dose2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.988)
    expect(fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testChile3dose.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testChile3dose.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.778)
    expect(fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testChile3dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testChile3dose.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.982)
    expect(fields[0]).toContain('Dob                              (1) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testChile2dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testChile2dose.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.982)
    expect(fields[0]).toContain('Dob                              (1) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testAustralia3dose1page.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testAustralia3dose1page.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.976)
    expect(fields[0]).toContain('Dob                              (1) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.967) -       No:')
  })

  test('testAustralia3dose1page1.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testAustralia3dose1page1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.976)
    expect(fields[0]).toContain('Dob                              (1) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.967) -       No:')
  })

  test('testAustralia3doseTable.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testAustralia3doseTable.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.913)
    expect(fields[0]).toContain('Dob                              (1) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.951) -       No:')
  })

  test('testAustralia2dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testAustralia2dose.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.976)
    expect(fields[0]).toContain('Dob                              (1) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.451) -       No:')
  })

  test('testAustralia2dose1.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testAustralia2dose1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.976)
    expect(fields[0]).toContain('Dob                              (1) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.656) -       No:')
  })
  
  test('testCanada2pages2doses.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada2pages2doses.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.973)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                         (0.979) -       No:')
  })

  test('testCanada2pages2doses1.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada2pages2doses1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                         (0.979) -       No:')
  })

  test('testCanada2pages2doses2.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada2pages2doses2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                         (0.979) -       No:')
  })

  test('testCanada2pages2doses3.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada2pages2doses3.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.995)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                         (0.979) -       No:')
  })

  test('testCanada1pages2doses.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada1pages2doses.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.45)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testCanada1pages2doses1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada1pages2doses1.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.626)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testCanada1pages2doses2.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada1pages2doses2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.945)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testCanada1pages2doses3.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada1pages2doses3.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.706)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                         (0.991) -       No:')
  })

  test('testCanada1pages2doses4.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada1pages2doses4.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.846)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testCanada1pages2doses5.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCanada1pages2doses5.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.716)
    expect(fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(fields[18]).toContain('Name                          (0.99) -       No:')
  })
  
  test('testCDC.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCDC.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.722)
    expect(fields[0]).toContain('Dob                          (0.943) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.983) -       No:')
  })

  test('testCDC1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCDC1.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.538)
    expect(fields[0]).toContain('Dob                          (0.841) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.943) -       No:')
  })

  test('testCDC2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCDC2.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.894)
    expect(fields[0]).toContain('Dob                          (0.943) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.978) -       No:')
  })

  test('testCDC3.pdf', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCDC3.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.633)
    expect(fields[0]).toContain('Dob                          (0.294) -  Unclear:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.187) -       No:')
  })

  test('testCDC4.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCDC4.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.543)
    expect(fields[0]).toContain('Dob                          (0.817) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.467) -       No:')
  })

  test('testCDC5.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCDC5.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.543)
    expect(fields[0]).toContain('Dob                          (0.817) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.467) -       No:')
  })

  test('testCDC6.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCDC6.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.512)
    expect(fields[0]).toContain('Dob                          (0.942) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                         (0.769) -       No:')
  })

  test('testCDC7.jpeg', async ({ page }) => {
    const apiContext = await request.newContext({ignoreHTTPSErrors: true})
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/testCDC7.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.62)
    expect(fields[0]).toContain('Dob                          (0.316) -       No:')
    expect(fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(fields[18]).toContain('Name                          (0.47) -       No:')
  })
})
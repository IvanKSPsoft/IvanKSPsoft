import { test, expect, Page, request} from '@playwright/test';
import { URLS } from '../pages/utils/apiUrl';
import { ApiUtils } from '../pages/utils/apiUtils';

test.describe.configure({ mode: 'parallel' })
test.describe('AI Vaccine Pt2', () => {
  test('testSulaudmexico1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testSulaudmexico1.jpeg')
    expect(response.responseBody.confidence).toEqual(0.663)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.991) -       No:')
  })

  test('testSulaudmexico2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testSulaudmexico2.jpeg')
    expect(response.responseBody.confidence).toEqual(0.804)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testNHS1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testNHS1.pdf')
    expect(response.responseBody.confidence).toEqual(0.99)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.992) -       No:')
  })

  test('testNHS2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testNHS2.pdf')
    expect(response.responseBody.confidence).toEqual(0.993)
    expect(response.fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.994) -       No:')
  })

  test('testModelOntario1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testModelOntario1.jpeg')
    expect(response.responseBody.confidence).toEqual(0.731)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testModelOntario1.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testModelOntario1.png')
    expect(response.responseBody.confidence).toEqual(0.671)
    expect(response.fields[0]).toContain('Dob                          (0.989) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('testModelOntario2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testModelOntario2.jpeg')
    expect(response.responseBody.confidence).toEqual(0.796)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testModelOntarioN.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testModelOntarioN.jpeg')
    expect(response.responseBody.confidence).toEqual(0.362)
    expect(response.fields[0]).toContain('Dob                          (0.989) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('testModelOntarioN.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testModelOntarioN.pdf')
    expect(response.responseBody.confidence).toEqual(0.578)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('testModelOntarioN1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testModelOntarioN1.pdf')
    expect(response.responseBody.confidence).toEqual(0.577)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('testModelNHS-1dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testModelNHS-1dose.pdf')
    expect(response.responseBody.confidence).toEqual(0.702)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testModelNHS-1dose1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testModelNHS-1dose1.pdf')
    expect(response.responseBody.confidence).toEqual(0.992)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('bermuda3doses.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/bermuda3doses.pdf')
    expect(response.responseBody.confidence).toEqual(0.979)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/bermuda3doses1.pdf')
    expect(response.responseBody.confidence).toEqual(0.979)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/bermuda3doses2.pdf')
    expect(response.responseBody.confidence).toEqual(0.855)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses3.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/bermuda3doses3.pdf')
    expect(response.responseBody.confidence).toEqual(0.977)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses4.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/bermuda3doses4.pdf')
    expect(response.responseBody.confidence).toEqual(0.977)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('bermuda3doses5.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/bermuda3doses5.pdf')
    expect(response.responseBody.confidence).toEqual(0.979)
    expect(response.fields[0]).toContain('Dob                           (0.99) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.989) -       No:')
  })

  test('NHS-2doses-1doseleft.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/NHS-2doses-1doseleft.pdf')
    expect(response.responseBody.confidence).toEqual(0.992)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('Bermuda-vac-2doses.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Bermuda-vac-2doses.pdf')
    expect(response.responseBody.confidence).toEqual(0.869)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.958) -       No:')
  })

  test('testColumbia3dose.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia3dose.jpeg')
    expect(response.responseBody.confidence).toEqual(0.766)
    expect(response.fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testColumbia3dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia3dose.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testColumbia2dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia2dose.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.992) -       No:')
  })

  test('testColumbia2dose1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia2dose1.jpeg')
    expect(response.responseBody.confidence).toEqual(0.972)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.992) -       No:')
  })

  test('testColumbia2dose2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia2dose2.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testColumbia2dose3.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia2dose3.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testColumbia2dose4.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia2dose4.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No')
  })

  test('testColumbia2dose5.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia2dose5.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                          (0.993) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No')
  })

  test('testColumbia1dose1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia1dose1.pdf')
    expect(response.responseBody.confidence).toEqual(0.989)
    expect(response.fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testColumbia1dose2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testColumbia1dose2.pdf')
    expect(response.responseBody.confidence).toEqual(0.988)
    expect(response.fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testChile3dose.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testChile3dose.jpeg')
    expect(response.responseBody.confidence).toEqual(0.778)
    expect(response.fields[0]).toContain('Dob                          (0.994) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: Spanish')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testChile3dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testChile3dose.pdf')
    expect(response.responseBody.confidence).toEqual(0.982)
    expect(response.fields[0]).toContain('Dob                              (1) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testChile2dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testChile2dose.pdf')
    expect(response.responseBody.confidence).toEqual(0.982)
    expect(response.fields[0]).toContain('Dob                              (1) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testAustralia3dose1page.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testAustralia3dose1page.pdf')
    expect(response.responseBody.confidence).toEqual(0.976)
    expect(response.fields[0]).toContain('Dob                              (1) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.967) -       No:')
  })

  test('testAustralia3dose1page1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testAustralia3dose1page1.pdf')
    expect(response.responseBody.confidence).toEqual(0.976)
    expect(response.fields[0]).toContain('Dob                              (1) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.967) -       No:')
  })

  test('testAustralia3doseTable.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testAustralia3doseTable.pdf')
    expect(response.responseBody.confidence).toEqual(0.913)
    expect(response.fields[0]).toContain('Dob                              (1) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.951) -       No:')
  })

  test('testAustralia2dose.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testAustralia2dose.pdf')
    expect(response.responseBody.confidence).toEqual(0.976)
    expect(response.fields[0]).toContain('Dob                              (1) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.451) -       No:')
  })

  test('testAustralia2dose1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testAustralia2dose1.pdf')
    expect(response.responseBody.confidence).toEqual(0.976)
    expect(response.fields[0]).toContain('Dob                              (1) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.656) -       No:')
  })
  
  test('testCanada2pages2doses.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada2pages2doses.pdf')
    expect(response.responseBody.confidence).toEqual(0.973)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                         (0.979) -       No:')
  })

  test('testCanada2pages2doses1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada2pages2doses1.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                         (0.979) -       No:')
  })

  test('testCanada2pages2doses2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada2pages2doses2.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                         (0.979) -       No:')
  })

  test('testCanada2pages2doses3.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada2pages2doses3.pdf')
    expect(response.responseBody.confidence).toEqual(0.995)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                         (0.979) -       No:')
  })

  test('testCanada1pages2doses.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada1pages2doses.pdf')
    expect(response.responseBody.confidence).toEqual(0.45)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                         (0.993) -       No:')
  })

  test('testCanada1pages2doses1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada1pages2doses1.jpeg')
    expect(response.responseBody.confidence).toEqual(0.626)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testCanada1pages2doses2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada1pages2doses2.pdf')
    expect(response.responseBody.confidence).toEqual(0.945)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testCanada1pages2doses3.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada1pages2doses3.jpeg')
    expect(response.responseBody.confidence).toEqual(0.706)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                         (0.991) -       No:')
  })

  test('testCanada1pages2doses4.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada1pages2doses4.jpeg')
    expect(response.responseBody.confidence).toEqual(0.846)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })

  test('testCanada1pages2doses5.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCanada1pages2doses5.jpeg')
    expect(response.responseBody.confidence).toEqual(0.716)
    expect(response.fields[0]).toContain('Dob                              (0) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: French')
    expect(response.fields[18]).toContain('Name                          (0.99) -       No:')
  })
  
  test('testCDC.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCDC.jpeg')
    expect(response.responseBody.confidence).toEqual(0.722)
    expect(response.fields[0]).toContain('Dob                          (0.943) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.983) -       No:')
  })

  test('testCDC1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCDC1.jpeg')
    expect(response.responseBody.confidence).toEqual(0.538)
    expect(response.fields[0]).toContain('Dob                          (0.841) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.943) -       No:')
  })

  test('testCDC2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCDC2.jpeg')
    expect(response.responseBody.confidence).toEqual(0.894)
    expect(response.fields[0]).toContain('Dob                          (0.943) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.978) -       No:')
  })

  test('testCDC3.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCDC3.pdf')
    expect(response.responseBody.confidence).toEqual(0.633)
    expect(response.fields[0]).toContain('Dob                          (0.294) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.187) -       No:')
  })

  test('testCDC4.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCDC4.jpeg')
    expect(response.responseBody.confidence).toEqual(0.543)
    expect(response.fields[0]).toContain('Dob                          (0.817) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.467) -       No:')
  })

  test('testCDC5.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCDC5.jpeg')
    expect(response.responseBody.confidence).toEqual(0.543)
    expect(response.fields[0]).toContain('Dob                          (0.817) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.467) -       No:')
  })

  test('testCDC6.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCDC6.jpeg')
    expect(response.responseBody.confidence).toEqual(0.512)
    expect(response.fields[0]).toContain('Dob                          (0.942) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.769) -       No:')
  })

  test('testCDC7.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/testCDC7.jpeg')
    expect(response.responseBody.confidence).toEqual(0.62)
    expect(response.fields[0]).toContain('Dob                          (0.316) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                          (0.47) -       No:')
  })

})
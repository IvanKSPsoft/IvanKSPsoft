import { test, expect, Page, request} from '@playwright/test';
import { URLS } from '../pages/utils/apiUrl';
import { ApiUtils } from '../pages/utils/apiUtils';

test.describe.configure({ mode: 'parallel' })
test.describe('AI tests', () => {
  test('Cerulian-labtest1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Cerulian-labtest1.pdf')
    expect(response.responseBody.confidence).toEqual(0.172)
    expect(response.fields[0]).toContain('Dob                         (0.9992953) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                             (0) -  Unclear:')
  })

  test('Cerulian-labtest2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Cerulian-labtest2.pdf')
    expect(response.responseBody.confidence).toEqual(0.18)
    expect(response.fields[0]).toContain('Dob                         (0.9993758) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                             (0) -  Unclear:')
  })

  test('ConceptoClinic-labtest.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/ConceptoClinic-labtest.pdf')
    expect(response.responseBody.confidence).toEqual(0.235)
    expect(response.fields[0]).toContain('Dob                          (0.655) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.971) -       No:')
  })

  test('LloydsPharmacy-labtest1.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/LloydsPharmacy-labtest1.jpeg')
    expect(response.responseBody.confidence).toEqual(0.234)
    expect(response.fields[0]).toContain('Dob                         (0.9900088) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.603) -  Unclear:')
  })

  test('LloydsPharmacy-labtest2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/LloydsPharmacy-labtest2.pdf')
    expect(response.responseBody.confidence).toEqual(0.35)
    expect(response.fields[0]).toContain('Dob                          (0.987) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('LondonMedical-labtest1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/LondonMedical-labtest1.pdf')
    expect(response.responseBody.confidence).toEqual(0.343)
    expect(response.fields[0]).toContain('Dob                         (0.9953308) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.985) -       No:')
  })

  test('RapidTests-labtest.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/RapidTests-labtest.jpeg')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[0]).toContain('Dob                          (0.991) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.987) -       No:')
  })

  test('RapidTests2-labtest.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/RapidTests2-labtest.pdf')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[0]).toContain('Dob                              (1) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.987) -       No:')
  })

  test('UKDiagnostics-labtest1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/UKDiagnostics-labtest1.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[0]).toContain('Dob                         (0.99266666) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('UKDiagnostics-labtest2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/UKDiagnostics-labtest2.jpeg')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[0]).toContain('Dob                          (0.988) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.985) -       No:')
  })

  test('India-2columns-1page-vaccine.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/India-2columns-1page-vaccine.jpeg')
    expect(response.responseBody.confidence).toEqual(0.347)
    expect(response.fields[0]).toContain('Dob                          (0.989) -       No:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('India-2columns-1page-vaccine2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/India-2columns-1page-vaccine2.pdf')
    expect(response.responseBody.confidence).toEqual(0.238)
    expect(response.fields[0]).toContain('Dob                          (0.638) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('India-test1columns-vac.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/India-test1columns-vac.jpeg')
    expect(response.responseBody.confidence).toEqual(0.233)
    expect(response.fields[0]).toContain('Dob                          (0.661) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('India-test2-2columns-vac.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/India-test2-2columns-vac.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[0]).toContain('Dob                          (0.656) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
  })

  test('India-test3-2columns-vac.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/India-test3-2columns-vac.pdf')
    expect(response.responseBody.confidence).toEqual(0.18)
    expect(response.fields[0]).toContain('Dob                          (0.977) -  Unclear:')
    expect(response.fields[17]).toContain('Language                         (0) -      Yes: English')
    expect(response.fields[18]).toContain('Name                             (0) -  Unclear:')
  })

})
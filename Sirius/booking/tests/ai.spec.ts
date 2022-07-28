import { test, expect, Page, request} from '@playwright/test';
import { URLS } from '../pages/utils/apiUrl';
import { ApiUtils } from '../pages/utils/apiUtils';

test.describe.configure({ mode: 'parallel' })
test.describe('AI Vaccine', () => {
  test('Ahorro.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Ahorro.pdf')
    expect(response.responseBody.confidence).toEqual(0.23)
    expect(response.fields[18]).toContain('Name                         (0.969) -       No: Edad / Age: 26 anos/years 5 meses/months => Edad Age anos years meses months')
    expect(response.fields[0]).toContain('Dob                         (0.948005) -       No:')
  })

  test('Ahorro3.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Ahorro3.png')
    expect(response.responseBody.confidence).toEqual(0.34)
    expect(response.fields[18]).toContain('Name                         (0.985) -       No: SOM SEADUST => SOM SEADUST')
    expect(response.fields[0]).toContain('Dob                          (0.986) -  Unclear: Hora de Toma / Testing Hour: => ')
  })

  test('Amadita.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Amadita.pdf')
    expect(response.responseBody.confidence).toEqual(0.342)
    expect(response.fields[18]).toContain('Name                         (0.985) -       No: ID Resultado => ID Resultado')
    expect(response.fields[0]).toContain('Dob                         (0.99761325) -       No')
  })

  test('Amatista.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Amatista.pdf')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -       No:")
  })

  test('Amatista.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Amatista.png')
    expect(response.responseBody.confidence).toEqual(0.342)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.987) -       No:")
  })

  test('AMC1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/AMC1.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('AMC2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/AMC2.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('Amerimed_A.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Amerimed_A.pdf')
    expect(response.responseBody.confidence).toEqual(0.342)
    expect(response.fields[18]).toContain('Name                         (0.985) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('Amerimed_B.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Amerimed_B.pdf')
    expect(response.responseBody.confidence).toEqual(0.232)
    expect(response.fields[18]).toContain('Name                          (0.97) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.991) -       No")
  })

  test('Azumed.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Azumed.jpeg')
    expect(response.responseBody.confidence).toEqual(0.344)
    expect(response.fields[18]).toContain('Name                          (0.97) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.996) -       No:")
  })

  test('Azumed2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Azumed2.pdf')
    expect(response.responseBody.confidence).toEqual(0.347)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('BelizeDiagnostic.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/BelizeDiagnostic.jpeg')
    expect(response.responseBody.confidence).toEqual(0.342)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.988) -  Unclear:")
  })

  test('Biomedica.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Biomedica.jpeg')
    expect(response.responseBody.confidence).toEqual(0.343)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('Biomedica2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Biomedica2.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('BlueMedical.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/BlueMedical.pdf')
    expect(response.responseBody.confidence).toEqual(0.345)
    expect(response.fields[18]).toContain('Name                          (0.97) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('CentroMedicoPuntoCana.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/CentroMedicoPuntoCana.pdf')
    expect(response.responseBody.confidence).toEqual(0.341)
    expect(response.fields[18]).toContain('Name                         (0.984) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.983) -  Unclear:")
  })

  test('Chopo.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Chopo.pdf')
    expect(response.responseBody.confidence).toEqual(0.345)
    expect(response.fields[18]).toContain('Name                         (0.973) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('Costamed1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Costamed1.pdf')
    expect(response.responseBody.confidence).toEqual(0.344)
    expect(response.fields[18]).toContain('Name                         (0.977) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.989) -  Unclear:")
  })

  test('cvs1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/cvs_2cf2ce19e9284e2393da6153dc831841.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.669) -  Unclear:")
  })

  test('cvs2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/cvs_4edaef2b04034cc7a0b152493e4f0059.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.669) -  Unclear:")
  })

  test('cvs3.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/cvs_health_0cbb52931de5492b8db46104e9efa41c.jpeg')
    expect(response.responseBody.confidence).toEqual(0.233)
    expect(response.fields[18]).toContain('Name                         (0.987) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.721) -  Unclear:")
  })

  test('cvs-positive.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/cvs-positive.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.676) -  Unclear:")
  })

  test('DamHealth.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/DamHealth.pdf')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('DiAra.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/DiAra.jpeg')
    expect(response.responseBody.confidence).toEqual(0.313)
    expect(response.fields[18]).toContain('Name                        (0.8403514) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('DiAra2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/DiAra2.jpeg')
    expect(response.responseBody.confidence).toEqual(0.195)
    expect(response.fields[18]).toContain('Name                         (0.657) -  Unclear:')
    expect(response.fields[0]).toContain("Dob                          (0.992) -       No:")
  })

  test('DNAfit.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/DNAfit.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                         (0.987) -       No:')
    expect(response.fields[0]).toContain("Dob                         (0.98793286) -       No:")
  })

  test('DocHQ.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/DocHQ.png')
    expect(response.responseBody.confidence).toEqual(0.142)
    expect(response.fields[18]).toContain('Name                             (0) -  Unclear:')
    expect(response.fields[0]).toContain("Dob                          (0.988) -  Unclear:")
  })

  test('DoctorHospitalHealthSystem.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/DoctorHospitalHealthSystem.pdf')
    expect(response.responseBody.confidence).toEqual(0.181)
    expect(response.fields[18]).toContain('Name                             (0) -  Unclear:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('DunaLife.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/DunaLife.pdf')
    expect(response.responseBody.confidence).toEqual(0.345)
    expect(response.fields[18]).toContain('Name                         (0.984) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('Emedlabs.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Emedlabs.pdf')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.987) -       No:")
  })

  test('ExpressTest.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/ExpressTest.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                         (0.987) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('GrupoArh.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/GrupoArh.pdf')
    expect(response.responseBody.confidence).toEqual(0.237)
    expect(response.fields[18]).toContain('Name                             (0) -  Unclear:')
    expect(response.fields[0]).toContain("Dob                           (0.99) -  Unclear:")
  })

  test('GSI.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/GSI.pdf')
    expect(response.responseBody.confidence).toEqual(0.345)
    expect(response.fields[18]).toContain('Name                         (0.975) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.993) -       No:")
  })

  test('HospitalMetropolitano.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/HospitalMetropolitano.pdf')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[18]).toContain('Name                         (0.985) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('hospiten_A.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/hospiten_A.pdf')
    expect(response.responseBody.confidence).toEqual(0.233)
    expect(response.fields[18]).toContain('Name                         (0.988) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('hospiten_b.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/hospiten_b.pdf')
    expect(response.responseBody.confidence).toEqual(0.236)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.608) -  Unclear:")
  })

  test('hospiten_b.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/hospiten_b.png')
    expect(response.responseBody.confidence).toEqual(0.343)
    expect(response.fields[18]).toContain('Name                         (0.972) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.987) -  Unclear:")
  })

  test('HuellaGenica1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/HuellaGenica1.pdf')
    expect(response.responseBody.confidence).toEqual(0.343)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.988) -       No:")
  })

  test('HuellaGenica2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/HuellaGenica2.pdf')
    expect(response.responseBody.confidence).toEqual(0.225)
    expect(response.fields[18]).toContain('Name                             (0) -  Unclear:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('LabEchandi1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/LabEchandi1.pdf')
    expect(response.responseBody.confidence).toEqual(0.297)
    expect(response.fields[18]).toContain('Name                         (0.585) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.989) -  Unclear:")
  })

  test('LabEchandi2.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/LabEchandi2.png')
    expect(response.responseBody.confidence).toEqual(0.341)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.988) -  Unclear:")
  })

  test('Lapi.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Lapi.pdf')
    expect(response.responseBody.confidence).toEqual(0.343)
    expect(response.fields[18]).toContain('Name                         (0.973) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.987) -       No:")
  })

  test('LMP1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/LMP1.pdf')
    expect(response.responseBody.confidence).toEqual(0.34)
    expect(response.fields[18]).toContain('Name                         (0.972) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.985) -  Unclear:")
  })

  test('LMP2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/LMP2.pdf')
    expect(response.responseBody.confidence).toEqual(0.339)
    expect(response.fields[18]).toContain('Name                          (0.97) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('Mavelsa.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Mavelsa.pdf')
    expect(response.responseBody.confidence).toEqual(0.342)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.986) -       No:")
  })

  test('mds.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/mds_2b199c0f46704453961375fba11a0817.pdf')
    expect(response.responseBody.confidence).toEqual(0.234)
    expect(response.fields[18]).toContain('Name                         (0.977) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.612) -  Unclear:")
  })

  test('MDT.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/MDT.jpeg')
    expect(response.responseBody.confidence).toEqual(0.341)
    expect(response.fields[18]).toContain('Name                         (0.985) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.985) -  Unclear:")
  })

  test('MedexLab.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/MedexLab.pdf')
    expect(response.responseBody.confidence).toEqual(0.243)
    expect(response.fields[18]).toContain('Name                         (0.115) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('MedicalCertificate.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/MedicalCertificate.pdf')
    expect(response.responseBody.confidence).toEqual(0.245)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.991) -       No:")
  })

  test('Olab.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Olab.pdf')
    expect(response.responseBody.confidence).toEqual(0.341)
    expect(response.fields[18]).toContain('Name                         (0.984) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.985) -       No:")
  })

  test('OlarteYakle.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/OlarteYakle.jpeg')
    expect(response.responseBody.confidence).toEqual(0.236)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.616) -  Unclear:")
  })

  test('Orthin.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Orthin.pdf')
    expect(response.responseBody.confidence).toEqual(0.342)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('ParadisehealthcareServise.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/ParadisehealthcareServise.pdf')
    expect(response.responseBody.confidence).toEqual(0.236)
    expect(response.fields[18]).toContain('Name                         (0.975) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.638) -  Unclear:")
  })

  test('QuestDiagnostics.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/QuestDiagnostics.pdf')
    expect(response.responseBody.confidence).toEqual(0.23)
    expect(response.fields[18]).toContain('Name                         (0.967) -       No:')
    expect(response.fields[0]).toContain("Dob                         (0.99194294) -       No:")
  })

  test('Randox.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Randox.pdf')
    expect(response.responseBody.confidence).toEqual(0.342)
    expect(response.fields[18]).toContain('Name                         (0.985) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('Prenetics.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Prenetics.pdf')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[18]).toContain('Name                         (0.987) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('Referencia.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Referencia.pdf')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[18]).toContain('Name                         (0.985) -       No:')
    expect(response.fields[0]).toContain("Dob                         (0.9976518) -       No:")
  })


  test('SaludDigna.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/SaludDigna.pdf')
    expect(response.responseBody.confidence).toEqual(0.229)
    expect(response.fields[18]).toContain('Name                         (0.985) -       No:')
    expect(response.fields[0]).toContain("Dob                          (0.271) -  Unclear:")
  })

  test('Sanlor.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/Sanlor.pdf')
    expect(response.responseBody.confidence).toEqual(0.341)
    expect(response.fields[18]).toContain('Name                         (0.981) -       No:')
    expect(response.fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('SantLukesHospitals.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const apiUtils = new ApiUtils(apiContext)
    const response = await apiUtils.uploadFile(URLS.aiUrl, './testFiles/SantLukesHospitals.pdf')
    expect(response.responseBody.confidence).toEqual(0.346)
    expect(response.fields[18]).toContain('Name                         (0.986) -       No:')
    expect(response.fields[0]).toContain("Dob                         (0.9871111) -       No:")
  })
})
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.23)
    expect(fields[18]).toContain('Name                         (0.969) -       No: Edad / Age: 26 anos/years 5 meses/months => Edad Age anos years meses months')
    expect(fields[0]).toContain('Dob                         (0.948005) -       No:')
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.34)
    expect(fields[18]).toContain('Name                         (0.985) -       No: SOM SEADUST => SOM SEADUST')
    expect(fields[0]).toContain('Dob                          (0.986) -  Unclear: Hora de Toma / Testing Hour: => ')
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.342)
    expect(fields[18]).toContain('Name                         (0.985) -       No: ID Resultado => ID Resultado')
    expect(fields[0]).toContain('Dob                         (0.99761325) -       No')
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.346)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -       No:")
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.342)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.987) -       No:")
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.342)
    expect(fields[18]).toContain('Name                         (0.985) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -  Unclear:")
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.232)
    expect(fields[18]).toContain('Name                          (0.97) -       No:')
    expect(fields[0]).toContain("Dob                          (0.991) -       No")
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
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.344)
    expect(fields[18]).toContain('Name                          (0.97) -       No:')
    expect(fields[0]).toContain("Dob                          (0.996) -       No:")
  })

  test('Azumed2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Azumed2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.347)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('BelizeDiagnostic.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/BelizeDiagnostic.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.342)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.988) -  Unclear:")
  })

  test('Biomedica.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Biomedica.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.343)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('Biomedica2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Biomedica2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('BlueMedical.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/BlueMedical.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.345)
    expect(fields[18]).toContain('Name                          (0.97) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('CentroMedicoPuntoCana.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/CentroMedicoPuntoCana.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.341)
    expect(fields[18]).toContain('Name                         (0.984) -       No:')
    expect(fields[0]).toContain("Dob                          (0.983) -  Unclear:")
  })

  test('Chopo.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Chopo.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.345)
    expect(fields[18]).toContain('Name                         (0.973) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('Costamed1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Costamed1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.344)
    expect(fields[18]).toContain('Name                         (0.977) -       No:')
    expect(fields[0]).toContain("Dob                          (0.989) -  Unclear:")
  })

  test('cvs1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/cvs_2cf2ce19e9284e2393da6153dc831841.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.669) -  Unclear:")
  })

  test('cvs2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/cvs_4edaef2b04034cc7a0b152493e4f0059.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.669) -  Unclear:")
  })

  test('cvs3.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/cvs_health_0cbb52931de5492b8db46104e9efa41c.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.233)
    expect(fields[18]).toContain('Name                         (0.987) -       No:')
    expect(fields[0]).toContain("Dob                          (0.721) -  Unclear:")
  })

  test('cvs-positive.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/cvs-positive.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.676) -  Unclear:")
  })

  test('DamHealth.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/DamHealth.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.346)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('DiAra.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/DiAra.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.313)
    expect(fields[18]).toContain('Name                        (0.8403514) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('DiAra2.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/DiAra2.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.195)
    expect(fields[18]).toContain('Name                         (0.657) -  Unclear:')
    expect(fields[0]).toContain("Dob                          (0.992) -       No:")
  })

  test('DNAfit.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/DNAfit.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                         (0.987) -       No:')
    expect(fields[0]).toContain("Dob                         (0.98793286) -       No:")
  })

  test('DocHQ.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/DocHQ.png')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.142)
    expect(fields[18]).toContain('Name                             (0) -  Unclear:')
    expect(fields[0]).toContain("Dob                          (0.988) -  Unclear:")
  })

  test('DoctorHospitalHealthSystem.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/DoctorHospitalHealthSystem.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.181)
    expect(fields[18]).toContain('Name                             (0) -  Unclear:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('DunaLife.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/DunaLife.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.345)
    expect(fields[18]).toContain('Name                         (0.984) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('Emedlabs.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Emedlabs.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.346)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.987) -       No:")
  })

  test('ExpressTest.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/ExpressTest.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                         (0.987) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('GrupoArh.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/GrupoArh.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.237)
    expect(fields[18]).toContain('Name                             (0) -  Unclear:')
    expect(fields[0]).toContain("Dob                           (0.99) -  Unclear:")
  })

  test('GSI.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/GSI.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.345)
    expect(fields[18]).toContain('Name                         (0.975) -       No:')
    expect(fields[0]).toContain("Dob                          (0.993) -       No:")
  })

  test('HospitalMetropolitano.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/HospitalMetropolitano.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.346)
    expect(fields[18]).toContain('Name                         (0.985) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('hospiten_A.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/hospiten_A.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.233)
    expect(fields[18]).toContain('Name                         (0.988) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('hospiten_b.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/hospiten_b.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.236)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.608) -  Unclear:")
  })

  test('hospiten_b.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/hospiten_b.png')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.343)
    expect(fields[18]).toContain('Name                         (0.972) -       No:')
    expect(fields[0]).toContain("Dob                          (0.987) -  Unclear:")
  })

  test('HuellaGenica1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/HuellaGenica1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.343)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.988) -       No:")
  })

  test('HuellaGenica2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/HuellaGenica2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.225)
    expect(fields[18]).toContain('Name                             (0) -  Unclear:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('LabEchandi1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/LabEchandi1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.297)
    expect(fields[18]).toContain('Name                         (0.585) -       No:')
    expect(fields[0]).toContain("Dob                          (0.989) -  Unclear:")
  })

  test('LabEchandi2.png', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/LabEchandi2.png')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.341)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.988) -  Unclear:")
  })

  test('Lapi.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Lapi.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.343)
    expect(fields[18]).toContain('Name                         (0.973) -       No:')
    expect(fields[0]).toContain("Dob                          (0.987) -       No:")
  })

  test('LMP1.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/LMP1.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.34)
    expect(fields[18]).toContain('Name                         (0.972) -       No:')
    expect(fields[0]).toContain("Dob                          (0.985) -  Unclear:")
  })

  test('LMP2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/LMP2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.339)
    expect(fields[18]).toContain('Name                          (0.97) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -  Unclear:")
  })

  test('Mavelsa.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Mavelsa.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.342)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.986) -       No:")
  })

  test('mds.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/mds_2b199c0f46704453961375fba11a0817.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.234)
    expect(fields[18]).toContain('Name                         (0.977) -       No:')
    expect(fields[0]).toContain("Dob                          (0.612) -  Unclear:")
  })

  test('MDT.jpeg', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/MDT.jpeg')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.341)
    expect(fields[18]).toContain('Name                         (0.985) -       No:')
    expect(fields[0]).toContain("Dob                          (0.985) -  Unclear:")
  })

  test('MedexLab.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/MedexLab.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.243)
    expect(fields[18]).toContain('Name                         (0.115) -       No:')
    expect(fields[0]).toContain("Dob                              (1) -       No:")
  })

  test('MedicalCertificate.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/MedicalCertificate.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.245)
    expect(fields[18]).toContain('Name                         (0.986) -       No:')
    expect(fields[0]).toContain("Dob                          (0.991) -       No:")
  })

  test('Olab.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Olab.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const fields = responseBody.fields
    expect(responseBody.confidence).toEqual(0.341)
    expect(fields[18]).toContain('Name                         (0.984) -       No:')
    expect(fields[0]).toContain("Dob                          (0.985) -       No:")
  })


})
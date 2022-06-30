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

  test('Azumed2.pdf', async ({ page }) => {
    const apiContext = await request.newContext()
    const sendTest = await apiContext.post(url, {
      multipart: {
        file: fs.ReadStream ('./testFiles/Azumed2.pdf')
      },
    })
    const responseBody = await sendTest.json()
    expect(sendTest.ok()).toBeTruthy()
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.347)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                              (1) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.342)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                          (0.988) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.343)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                          (0.986) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                              (1) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.345)
    expect(name).toContain('Name                          (0.97) -       No:')
    expect(dob).toContain("Dob                          (0.986) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.341)
    expect(name).toContain('Name                         (0.984) -       No:')
    expect(dob).toContain("Dob                          (0.983) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.345)
    expect(name).toContain('Name                         (0.973) -       No:')
    expect(dob).toContain("Dob                          (0.986) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.344)
    expect(name).toContain('Name                         (0.977) -       No:')
    expect(dob).toContain("Dob                          (0.989) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                          (0.669) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                          (0.669) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.233)
    expect(name).toContain('Name                         (0.987) -       No:')
    expect(dob).toContain("Dob                          (0.721) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                          (0.676) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.346)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                              (1) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.313)
    expect(name).toContain('Name                        (0.8403514) -       No:')
    expect(dob).toContain("Dob                          (0.986) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.195)
    expect(name).toContain('Name                         (0.657) -  Unclear:')
    expect(dob).toContain("Dob                          (0.992) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                         (0.987) -       No:')
    expect(dob).toContain("Dob                         (0.98793286) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.142)
    expect(name).toContain('Name                             (0) -  Unclear:')
    expect(dob).toContain("Dob                          (0.988) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.181)
    expect(name).toContain('Name                             (0) -  Unclear:')
    expect(dob).toContain("Dob                              (1) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.345)
    expect(name).toContain('Name                         (0.984) -       No:')
    expect(dob).toContain("Dob                              (1) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.346)
    expect(name).toContain('Name                         (0.986) -       No:')
    expect(dob).toContain("Dob                          (0.987) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                         (0.987) -       No:')
    expect(dob).toContain("Dob                              (1) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.237)
    expect(name).toContain('Name                             (0) -  Unclear:')
    expect(dob).toContain("Dob                           (0.99) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.345)
    expect(name).toContain('Name                         (0.975) -       No:')
    expect(dob).toContain("Dob                          (0.993) -       No:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.346)
    expect(name).toContain('Name                         (0.985) -       No:')
    expect(dob).toContain("Dob                          (0.986) -  Unclear:")
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
    const confidence = responseBody.confidence
    const fields = responseBody.fields
    const dob = fields[0]
    const name = fields[18]
    expect(confidence).toEqual(0.233)
    expect(name).toContain('Name                         (0.988) -       No:')
    expect(dob).toContain("Dob                              (1) -       No:")
  })


})
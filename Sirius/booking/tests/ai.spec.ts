import { test, expect, Page, request} from '@playwright/test';



test.describe('Flow', () => {
  test('Sign Up As A Patient API', async ({ page }) => {
    const apiContext = await request.newContext()
        const sendTest = await apiContext.post('https://clx-scus-dev-document-processor.azurewebsites.net/api/v1/form-recognizer/vaccines/file/model', {
         data:{"Content-Typ":"multipart/form-data", "type":"application/pdf", "file" : "../files/Ahorro.pdf"}
        })
        expect(sendTest.ok()).toBeTruthy()
        const createUserJson = await sendTest.json()
        
  })
})
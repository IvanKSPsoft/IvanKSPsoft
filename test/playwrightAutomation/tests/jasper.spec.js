const { test, request, expect} = require('@playwright/test')
const loginPayload = {userEmail: "ivan.kovalov@spsoft.com", userPassword: "P@ssw0rd1"}
const loginPayload2 = {operationName: "loginUser", variables: {email: "ivantest@spsoft.com", password: "123456"}}
let token = ''

test.beforeAll(async () => {
const API = await request.newContext()
const loginResponse = await API.post('https://api.hellojasper.care/graphql', {
     data: loginPayload2 
    })
    expect(loginResponse.ok()).toBeTruthy()
    const lognResponseJson = await loginResponse.json()
    token = lognResponseJson.token
    console.log(token)
})



test('First test', async ({page}) => {
    console.log(token)
    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token);
    await page.goto('https://my.hellojasper.care/login')
    await page.pause()

    
    
})

const { test, request, expect } = require('@playwright/test')
const { faker } = require ('@faker-js/faker')
const { APIUtils } = require('../utils/APIUtils')
let response = {}
let email
let password
let token

test.beforeAll(async ({}) => {
    email = `${faker.name.firstName()}+${faker.datatype.number(1000)}@email.com`
    password = `${faker.name.lastName()}+${faker.date.future()}`
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
const apiContext = await request.newContext()
const createUser = await apiContext.post('https://api.hellojasper.care/graphql', {
     data: {operationName:"signupUser",variables:{firstName:firstName,lastName:lastName,
     phoneNumber:"",email: email,password: password,
     passwordConfirmation: password},extensions:{persistedQuery:{version:1,
        sha256Hash:"b3efaffb9e9dd5ac091c16685edd4dd981a8260379a10d7d25bd55cb886c27b6"}}} 
    })
    expect(createUser.ok()).toBeTruthy()
    const createUserJson = await createUser.json()
    const userEmail = createUserJson.data.signupUser.user.email
    token = createUserJson.data.signupUser.token
    // console.log(createUserJson)
    console.log(userEmail)
    console.log(token)
})

test('First test', async ({page}) => {
    // page.addInitScript(value => {
    //     window.localStorage.setItem('token', value)
    // }, token);
    await page.goto('https://my.hellojasper.care/login')
    await page.locator('#email').fill(email)
    await page.locator('#password').fill(password)
    await page.locator('[data-testing="button-submit"]').click()


})
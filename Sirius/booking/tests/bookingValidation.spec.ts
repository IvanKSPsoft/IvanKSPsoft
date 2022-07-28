import { test, request, expect, Page } from '@playwright/test';
import { URLS } from '../pages/utils/apiUrl';
import { BookingApp } from '../pages/bookingApp';
import { ApiUtils } from '../pages/utils/apiUtils';


 test.beforeEach(async({page}) => {
     const booking = new BookingApp(page)
     const apiContext = await request.newContext({ignoreHTTPSErrors: true})
     const apiUtils = new ApiUtils(apiContext)
     const trip = await apiUtils.createTripVisa(URLS.visaUrl)  
     await page.goto(`${URLS.bookingUrl}/?consumerToken=${trip.token}`)
     await page.waitForTimeout(1000)
     await booking.labSearchPage.closeWelcomeModal()
     await booking.labSearchPage.clickScheduleAppointmentKiev()
     await booking.labSearchPage.submitAppointment()
     await booking.paymentPage.waitForLoaded()
 })
 
 test.describe('Booking validation', async()=>{
    test('something', async({page}) =>{
        const booking = new BookingApp(page)
        
        await booking.paymentPage.inputFirstName(booking.paymentPage.firstName)
        await booking.paymentPage.inputLastName(booking.paymentPage.lastName)
    })
 })

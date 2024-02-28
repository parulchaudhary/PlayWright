import { Given, Then, When } from "@cucumber/cucumber"
import { expect } from "playwright/test";
const axios = require('axios');



const baseUrl = 'https://reqres.in/api/'
let response
let requestBody
let request
 

When('user GET resource {string}', async function (s) {
  request= baseUrl+s
  response = await axios.get(request);
 
  })


Then('The status code is {int}', async function (s) {
  const responseStatusCode = response.status
  await expect(responseStatusCode).toEqual(s)
 
})

Then('The page is {int} in response', async (int: number) => {
  await expect(response.data.page).toEqual(int)
})

Then('The status text is {string}', async (s: string) => {
  const responseStatus = response.statusText
    await expect(responseStatus).toEqual(s)
})


Given('user has prepared request body as:', (body: string) => {
   requestBody = JSON.parse(body)
  //  console.log(body)
  //  console.log(requestBody)
 })

When('user POST resource {string}', async (s: string) => {
  request= baseUrl+s
  response = await axios.post(request,requestBody);
})

When('user PUT resource {string}', async (s: string) => {
  request= baseUrl+s
  response = await axios.put(request,requestBody);
})

Then('The updated job is {string}', (s: string) => {
  console.log(response.data.job)
  expect (response.data.job).toBe(s)
})

Then('The updated name is {string}', (s: string) => {
 console.log(response.data.name)
     expect (response.data.name).toBe(s)
})

When('user PATCH resource {string}', async (s: string) => {
  request= baseUrl+s
  response = await axios.patch(request,requestBody);
})

When('user DELETE resource {string}', async (s: string) => {
  request= baseUrl+s
  response = await axios.delete(request)
})

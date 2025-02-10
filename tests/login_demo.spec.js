import {test, expect} from '@playwright/test'
import { only } from 'node:test';
test('Demo Login Test 1', async({page}) => {
   
    await page.goto('https://demo.applitools.com/');
   <input id="username" class="form-control" placeholder="Enter your username" type="text"></input>
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Raghav')
    await page.locator('[placeholder="Enter your password"]').fill('1234')
    await page.locator('text=sign in',{timeout:5000})
    await page.locator('text=Sign in').click()
    await page.locator('text=Acme').isVisible()
    await page.pause()
})

test('Demo Login Test 2', async({page}) => {
   
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   //<input id="username" class="form-control" placeholder="Enter your username" type="text"></input>
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click()
    await page.getByRole('textbox', { name: 'username' }).fill('admin')
    await page.getByRole('textbox', { name: 'Username' }).press('Tab')
   await page.getByRole('textbox', { name: 'Password' }).fill('admin123')
  await page.getByRole('button', { name: 'Login' }).click()
  await page.locator('p:has-text("FirstNameTest LastNameTest")').click()
  await page.locator('text=Logout').click()

  // ---------------------
  
})
test.only('Demo Login Test 3', async({page}) => {
   
    await page.pause()
})



import {test,expect} from '@playwright/test'

test('selectors demo', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await page.pause()
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator ('[id="user-name"]').fill('Einstein')
    await page.locator ('#login-button').click()


    await page.locator('xpath=//input[@id="user-name"]').fill('Faraday')
    await page.locator('//input[@id="user-name"]').fill('standard_user')
   // await page.locator('xpath=//input[@name="password"]').fill('Faraday')
    await page.locator('//input[@name="password"]').fill('secret_sauce')
   // await page.locator ('#login-button').click()
   // await page.locator('//input[@name="password"]').fill('secret_sauce')
   await page.locator ('text=LOGIN').click()
//await page.locator(':has-text("LOGIN")').click()
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
 console.log( page.locator('[data-test="inventory-item-price"]').textContent());
await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="continue-shopping"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('aaaa');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('bbbb');
  await page.locator('[data-test="lastName"]').press('Tab');
  await page.locator('[data-test="postalCode"]').fill('t2y1c5');
  await page.locator('[data-test="continue"]').click();
  await page.getByText('$15.99').click();
  await page.getByText('$9.99').click();
  await page.getByText('$7.99').click();
  await page.locator('[data-test="subtotal-label"]').click();
  await page.locator('[data-test="tax-label"]').click();
  await page.locator('[data-test="total-label"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();

  // ---------------------
  await context.close();
  await browser.close();
    //await page.locator ('#app_logo').
   //await expect(page.getByRole('div', { class:'Swag labs' })).toBeVisible();
 //   await expect(page.getByRole('heading', { name: 'Writing tests' })).toBeVisible();

})

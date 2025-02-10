const{test,expect} =require('@playwright/test');
const{chromium} =require('@playwright/test');

let context;
let page;

test.beforeAll (async ({browser}) => {
   context= await browser.newContext();
  await context.tracing.start(
    {snapshots:true, 
      screenshots:true
    });
page = await context.newPage();
  
})
test.afterAll(async() => {
  await context.tracing.stop({path:'test2_trace.zip'})
})

test ('record demo 2', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  //const context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // ---------------------
  await context.close();
  await browser.close();
})
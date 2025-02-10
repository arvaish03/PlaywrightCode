import { test, expect } from '@playwright/test';

test('logintest', async ({ page }) => {
  await page.goto('https://qa.hitekschool.com/lms/3104/login');
  await page.getByRole('textbox', { name: 'Branch Name*' }).click();
  await page.getByRole('textbox', { name: 'Branch Name*' }).fill('hope');
  await page.getByRole('textbox', { name: 'Branch Name*' }).press('Tab');
  await page.getByRole('textbox', { name: 'User Name*' }).fill('admin');
  await page.getByRole('textbox', { name: 'User Name*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password*' }).fill('prajamani0415');
  await page.getByRole('textbox', { name: 'Password*' }).press('Enter');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveTitle('SmartBank Dashboard - Hope branch');

 // await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Users' }).click();
  await expect(page).toHaveTitle('Users - Hope branch');

  await page.getByRole('link', { name: 'Add User' }).click();
  await page.getByRole('textbox', { name: 'Username*' }).click();
  await page.getByRole('textbox', { name: 'Username*' }).fill('priyasan');
  await page.getByRole('textbox', { name: 'Username*' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password*' }).fill('Arvind1!');
  await page.getByRole('textbox', { name: 'Password*' }).press('Tab');
  await page.getByRole('textbox', { name: 'First Name:' }).click();
  await page.getByRole('textbox', { name: 'First Name:' }).fill('Priya');
  await page.getByRole('textbox', { name: 'First Name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name:' }).fill('Rajamani');
  await page.getByRole('textbox', { name: 'Last Name:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Phone:' }).click();
  await page.getByRole('textbox', { name: 'Phone:' }).fill('5879171876');
  await page.getByRole('textbox', { name: 'Phone:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email:' }).fill('priya_sanjay2000@yahoo.com');
  await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page).toHaveTitle('Users - Hope branch');

  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '3' }).click();
  await page.getByRole('row', { name: 'priyasan Priya Rajamani' }).getByRole('link').click();
  await page.getByRole('textbox', { name: 'Company:' }).click();
  await page.getByRole('button', { name: 'Save changes' }).click();
})
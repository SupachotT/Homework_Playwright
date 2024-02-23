// @ts-check
const { test, expect } = require('@playwright/test');

test('ผู้ใช้งานเข้าสู่ระบบ facebook และ โพสข้อความ "hello playwright" @post', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Start login facebook
  await page.getByTestId('royal_email').fill('');
  await page.getByTestId('royal_pass').fill('');
  await page.getByTestId('royal_login_button').click();
  // End login facebook

  // Start post word "Hello playwright"
  await page.getByRole('link', { name: 'Facebook' }).click();
  await page.getByRole('button', { name: 'What\'s on your mind, Supachot?' }).click();
  await page.getByRole('paragraph').click();
  await page.getByLabel('What\'s on your mind, Supachot?').fill('hello playwright');
  await page.getByLabel('Post', { exact: true }).click();
  // end post word "Hello playwright"
});

test('ตรวจสอบข้อความที่โพสมีคำว่า "hello playwright" @check', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Start login facebook
  await page.getByTestId('royal_email').fill('');
  await page.getByTestId('royal_pass').fill('');
  await page.getByTestId('royal_login_button').click();
  // End login facebook

  // check post have word "Hello playwright"
  await page.getByRole('button', { name: 'Your profile' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'Supachot Sompreda' }).click();
  await expect(page.getByText('hello playwright')).toHaveText('hello playwright');
});
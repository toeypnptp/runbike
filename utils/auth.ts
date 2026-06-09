import { Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {
  await page.goto('https://runbike-event.web.app/login');

  /*
  await page.fill('#username', username);
  await page.fill('#password', password);
  */

  await page.getByLabel('อีเมลหรือเบอร์โทรศัพท์').fill(username);
  await page.getByLabel('รหัสผ่าน').fill(password);

  await page.locator('button[type="submit"]', { hasText: 'เข้าสู่ระบบ' }).click();
}


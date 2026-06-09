import { Page } from '@playwright/test';

export async function clickButton(page: Page, buttonName: string) {  
    await page.getByRole('button',{name: buttonName }).click();
  }

  export async function scrollModalToBottom(page: Page) {
    const modal = page.locator('.ant-modal-body');
    const box = await modal.boundingBox();
  
    if (!box) throw new Error('Modal not found');
  
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  
    // Scroll until the accept button is enabled
    for (let i = 0; i < 30; i++) {
      await page.mouse.wheel(0, 500);
      await page.waitForTimeout(100);
  
      // Stop early if the button becomes enabled
      const isEnabled = await page.getByRole('button', { name: 'รับทราบและยอมรับ' }).isEnabled();
      if (isEnabled) break;
    }
  
    await page.waitForTimeout(300);
  }
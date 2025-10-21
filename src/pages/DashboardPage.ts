import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly header: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.locator('header');
  }

  async expectLoggedIn() {
    // The OrangeHRM dashboard contains a quick launch/dashboard heading - check for presence
    await expect(this.page.locator('text=Dashboard').first()).toBeVisible();
  }
}

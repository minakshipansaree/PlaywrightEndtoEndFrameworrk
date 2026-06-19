import { Locator, Page } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path = '') {
    await this.page.goto(path, { waitUntil: 'load' });
  }

  async click(locator: Locator | string) {
    if (typeof locator === 'string') {
      const element = this.page.locator(locator);
      await element.waitFor({ state: 'visible', timeout: 30000 });
      await element.click();
    } else {
      await locator.waitFor({ state: 'visible', timeout: 30000 });
      await locator.click();
    }
  }

  async fill(locator: Locator | string, value: string) {
    if (typeof locator === 'string') {
      await this.page.locator(locator).fill(value);
    } else {
      await locator.fill(value);
    }
  }

  async getText(locator: Locator | string): Promise<string | null> {
    if (typeof locator === 'string') {
      return await this.page.locator(locator).textContent();
    }
    return await locator.textContent();
  }

  async isVisible(locator: Locator | string): Promise<boolean> {
    if (typeof locator === 'string') {
      return await this.page.locator(locator).isVisible();
    }
    return await locator.isVisible();
  }
}

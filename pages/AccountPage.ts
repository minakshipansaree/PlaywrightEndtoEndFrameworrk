import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class AccountPage extends BasePage {
  readonly accountHeader: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.accountHeader = page.locator('#content h2').first();
    this.logoutLink = page.locator('a', { hasText: 'Logout' });
  }

  async getAccountHeader(): Promise<string> {
    return (await this.getText(this.accountHeader))?.trim() ?? '';
  }

  async isLogoutVisible(): Promise<boolean> {
    return await this.isVisible(this.logoutLink);
  }
}

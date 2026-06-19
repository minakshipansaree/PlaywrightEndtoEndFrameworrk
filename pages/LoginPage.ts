import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly warningMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator("input[value='Login']");
    this.warningMessage = page.locator('.alert-danger');
  }

  async gotoLogin() {
    await this.goto('index.php?route=account/login');
  }

  async login(email: string, password: string) {
    await this.fill(this.emailInput, email);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getWarningMessage()
  {    
    return await this.getText(this.warningMessage);

  }
  
}

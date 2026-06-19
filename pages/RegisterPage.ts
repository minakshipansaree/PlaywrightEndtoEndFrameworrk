import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export type RegisterUser = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
  subscribe: boolean;
};

export class RegisterPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly subscribeYes: Locator;
  readonly subscribeNo: Locator;
  readonly privacyPolicyCheckbox: Locator;
  readonly continueButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.firstNameInput = page.locator('#input-firstname');
    this.lastNameInput = page.locator('#input-lastname');
    this.emailInput = page.locator('#input-email');
    this.telephoneInput = page.locator('#input-telephone');
    this.passwordInput = page.locator('#input-password');
    this.confirmPasswordInput = page.locator('#input-confirm');
    this.subscribeYes = page.locator('input[name="newsletter"][value="1"]');
    this.subscribeNo = page.locator('input[name="newsletter"][value="0"]');
    this.privacyPolicyCheckbox = page.locator('input[name="agree"]');
    this.continueButton = page.locator('input[value="Continue"]');
    this.successMessage = page.locator('#common-success');
  }

  async gotoRegister() {
    await this.goto('index.php?route=account/register');
  }

  async register(user: RegisterUser) {
    await this.fill(this.firstNameInput, user.firstName);
    await this.fill(this.lastNameInput, user.lastName);
    await this.fill(this.emailInput, user.email);
    await this.fill(this.telephoneInput, user.telephone);
    await this.fill(this.passwordInput, user.password);
    await this.fill(this.confirmPasswordInput, user.password);
    await (user.subscribe ? this.click(this.subscribeYes) : this.click(this.subscribeNo));
    await this.click(this.privacyPolicyCheckbox);
    await this.click(this.continueButton);
  }

  async getsuccessMessage()
  {    
    return await this.getText(this.successMessage);

  }
}

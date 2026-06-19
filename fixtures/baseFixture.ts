import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountPage } from '../pages/AccountPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { Checkoutt } from '../pages/Checkoutt';

type Fixtures = {
  loginPg: LoginPage;
  registerPg: RegisterPage;
  accountPg: AccountPage;
  checkoutPg: Checkoutt;
};

export const test = base.extend<Fixtures>({
  loginPg: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  registerPg: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  accountPg: async ({ page }, use) => {
    await use(new AccountPage(page));
  },

  checkoutPg: async ({ page }, use) => {
    await use(new Checkoutt(page));
  },
});

export { expect };

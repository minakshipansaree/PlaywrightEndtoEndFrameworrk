// Load JSON Test data login

import { test, expect } from '../fixtures/baseFixture';
import { DataProviders } from '../utils/dataproviders';
import { TestConfig } from '../test.config';
import { HomePage } from '../pages/HomePage.spec';

const jsonPath = './testdata/logindata.json';

const jsondata: any[] = DataProviders.getLoginDatafromJson(jsonPath);

test.beforeEach('navigate to login page before each test', async ({ page }) => 
{
  const configobj = new TestConfig();
  await page.goto(configobj.loginURL);
});

for (const data of jsondata) 
{
  test(`login with valid credentials for ${data.testName} @regression`, async ({ page, loginPg, checkoutPg }: any) => 
  {
    await loginPg.login(data.email, data.password);

    if (data.expected === 'success') {
      const homeobj = new HomePage(page);
      homeobj.HomePagee();

      await checkoutPg.clickContinue();

      //await expect(page.locator("a[title='Checkout']")).toBeVisible();
    }
    else {
      const actwarningMessage = await loginPg.getWarningMessage();

      const expectedMessage = "Warning: No match for E-Mail Address and/or Password.";

      expect(actwarningMessage).toBe(expectedMessage);
    }

  });
}

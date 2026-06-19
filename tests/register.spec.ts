import { test, expect } from '../fixtures/baseFixture';
import { TestConfig } from '../test.config';
import { FakerUtil } from '../utils/fakerUtil';


test.beforeEach('navigate to registration page before each test', async ({ page }) => 
{
  const configobj = new TestConfig();
  await page.goto(configobj.registerURL);
});

test('user can register successfully on tutorials ninja demo @regression', async ({ registerPg, page }) => 
{
  const user = FakerUtil.createRegisterUser();
  await registerPg.register(user);

  await expect(await registerPg.getsuccessMessage()).toContain('Your Account Has Been Created!');
  //await expect(await accountPg.isLogoutVisible()).toBeTruthy();
});

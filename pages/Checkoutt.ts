import { Locator, Page } from '@playwright/test';

export class Checkoutt
{
  readonly continue: Locator;

constructor(page: Page) 
  {
    
    this.continue = page.locator('a', { hasText: 'Continue' });

}



  async clickContinue() 
  {

    await this.continue.click();
  }
}
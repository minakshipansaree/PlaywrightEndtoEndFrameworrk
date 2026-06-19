import { Locator, Page,expect } from '@playwright/test';

export class HomePage 
{
  
  readonly checkout: Locator;
 

  constructor(page: Page) 
  {

    
    this.checkout = page.locator("a[title='Checkout']");
    
  }

  async HomePagee () 
  {
    
    //await expect(this.logo).toBeVisible();
    await expect(this.checkout).toBeVisible();

    await this.checkout.click();

  }
}
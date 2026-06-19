import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly addToCartButton: Locator;
  readonly cartButton: Locator;
  readonly checkoutLink: Locator;
  readonly guestCheckoutRadio: Locator;
  readonly continueAccountButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly telephoneInput: Locator;
  readonly addressInput: Locator;
  readonly cityInput: Locator;
  readonly postCodeInput: Locator;
  readonly countrySelect: Locator;
  readonly regionSelect: Locator;
  readonly continueGuestButton: Locator;
  readonly continueDeliveryButton: Locator;
  readonly continuePaymentButton: Locator;
  readonly termsCheckbox: Locator;
  readonly confirmOrderButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('button[type="button"]').filter({ hasText: 'Search' });
    this.addToCartButton = page.locator('button[data-original-title="Add to Cart"]').first();
    this.cartButton = page.locator('#cart');
    this.checkoutLink = page.locator('a', { hasText: 'Checkout' });
    this.guestCheckoutRadio = page.locator('input[value="guest"]');
    this.continueAccountButton = page.locator('#button-account');
    this.firstNameInput = page.locator('#input-payment-firstname');
    this.lastNameInput = page.locator('#input-payment-lastname');
    this.emailInput = page.locator('#input-payment-email');
    this.telephoneInput = page.locator('#input-payment-telephone');
    this.addressInput = page.locator('#input-payment-address-1');
    this.cityInput = page.locator('#input-payment-city');
    this.postCodeInput = page.locator('#input-payment-postcode');
    this.countrySelect = page.locator('#input-payment-country');
    this.regionSelect = page.locator('#input-payment-zone');
    this.continueGuestButton = page.locator('#button-guest');
    this.continueDeliveryButton = page.locator('#button-shipping-method');
    this.continuePaymentButton = page.locator('#button-payment-method');
    this.termsCheckbox = page.locator('input[name="agree"]');
    this.confirmOrderButton = page.locator('#button-confirm');
    this.successMessage = page.locator('#content h1');
  }

  async searchProduct(name: string) {
    await this.fill(this.searchInput, name);
    await this.click(this.searchButton);
  }

  async addFirstProductToCart() {
    await this.click(this.addToCartButton);
  }

  async openCheckout() {
    await this.click(this.cartButton);
    await this.click(this.checkoutLink);
  }

  async selectGuestCheckout() {
    await this.click(this.guestCheckoutRadio);
    await this.click(this.continueAccountButton);
  }

  async fillGuestDetails(details: {
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    address: string;
    city: string;
    postCode: string;
    country: string;
    region: string;
  }) {
    await this.fill(this.firstNameInput, details.firstName);
    await this.fill(this.lastNameInput, details.lastName);
    await this.fill(this.emailInput, details.email);
    await this.fill(this.telephoneInput, details.telephone);
    await this.fill(this.addressInput, details.address);
    await this.fill(this.cityInput, details.city);
    await this.fill(this.postCodeInput, details.postCode);
    await this.select(this.countrySelect, details.country);
    await this.select(this.regionSelect, details.region);
    await this.click(this.continueGuestButton);
  }

  async continueToDelivery() {
    await this.click(this.continueDeliveryButton);
  }

  async continueToPayment() {
    await this.click(this.termsCheckbox);
    await this.click(this.continuePaymentButton);
  }

  async confirmOrder() {
    await this.click(this.confirmOrderButton);
  }

  async getSuccessMessage(): Promise<string> {
    return (await this.getText(this.successMessage))?.trim() ?? '';
  }

  async clickContinue() {
    const continueLink = this.page.locator('a', { hasText: 'Continue' });
    await this.click(continueLink);
  }

  private async select(locator: Locator, value: string) {
    await locator.selectOption({ label: value });
  }
}

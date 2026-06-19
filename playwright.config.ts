// playwright.config.ts

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testMatch: /.*\.spec\.ts$/,
  timeout: 30*1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  retries: 1,
  workers: 1,
  reporter: [['html'], ['allure-playwright'] as any],

  use: {
    headless: false,
    baseURL: 'https://tutorialsninja.com/demo',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
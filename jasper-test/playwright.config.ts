import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 15000
  },
  fullyParallel: false,
  reportSlowTests: { max: 0, threshold: 60001 },
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    headless: false,
    viewport: { width: 1960, height: 1280 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    screenshot: 'on',
    actionTimeout: 0,
    baseURL: 'https://my.hellojasper.dev/',
    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'UAT',
      use: {
        baseURL: 'https://my.hellojasper.care/',
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'Staging',
      use: {
        baseURL: 'https://my.hellojasper.dev/',
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'Development',
      use: {
        baseURL: 'http://my.localhost:3000/',
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // }
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],
  outputDir: 'test-results/',
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

export default config;

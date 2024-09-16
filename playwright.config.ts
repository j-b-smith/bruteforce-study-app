import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // 30 seconds timeout for tests
  expect: {
    timeout: 5000 // 5 seconds timeout for expect conditions
  },
  reporter: [['list'], ['html', { open: 'never' }]], // HTML test report
  use: {
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0, // No action timeout
    baseURL: 'http://localhost:3000', // Base URL for your app
    browserName: 'chromium', // Use Chromium for testing
    headless: true, // Set to false if you want to see the browser during testing
    screenshot: 'on', // Take screenshots on test failures
    video: 'on-first-retry', // Capture video only on first retry
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

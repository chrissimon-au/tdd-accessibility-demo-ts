import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/University Registration/);
  await expect(page.getByRole('heading', { level: 1, name: 'University Registration' })).toBeVisible();
});

test('No Accessibility Issues', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
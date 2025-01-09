import { test, expect } from '@playwright/test';

test.describe('Course registration', () => {
    test('Can review list of courses',  async ({ page }) => {
        await page.goto('http://localhost:3000');

        await expect(page.getByRole('combobox', { name: 'Courses '})).toBeVisible();
    });
});
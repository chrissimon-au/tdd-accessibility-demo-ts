import { test, expect } from '@playwright/test';

test.describe('Course registration', () => {
    test('Can review list of courses',  async ({ page }) => {
        await page.goto('http://localhost:3000');

        const coursesList = page.getByRole('combobox', { name: 'Courses '});

        await expect(coursesList).toBeVisible();
        await expect(coursesList.getByRole("option", { name: "Accessibility 101" })).toBeEnabled();

    });
});
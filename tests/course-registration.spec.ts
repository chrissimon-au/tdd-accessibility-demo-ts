import { test, expect } from '@playwright/test';

const GUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

test.describe('Course registration', () => {
    test('Can review list of courses',  async ({ page }) => {
        await page.goto('http://localhost:3000');

        const coursesList = page.getByRole('combobox', { name: 'Courses '});

        await expect(coursesList).toBeVisible();
        await expect(coursesList.getByRole("option", { name: "Select the course you'd like to register for..." })).toBeDisabled();
        const accessibilityCourse = coursesList.getByRole("option", { name: "Accessibility 101" });
        await expect(accessibilityCourse).toBeEnabled();
        const courseId = await accessibilityCourse.getAttribute("data-course-id");
        await expect(courseId).toMatch(GUID_REGEX);
    });
});
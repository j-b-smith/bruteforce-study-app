import { test, expect } from '@playwright/test';

test.describe('Flashcards Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/flashcards');
  });

  test('should load the flashcards page', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Flashcards');
  });

  test('should flip a flashcard', async ({ page }) => {
    const flashcard = page.locator('.flashcard');
    
    await expect(flashcard).toContainText('Front of the Card');

    await flashcard.click();

    await expect(flashcard).toContainText('Back of the Card');
  });

  test('should navigate to the next flashcard', async ({ page }) => {
    const flashcard = page.locator('.flashcard');
    await expect(flashcard).toContainText('Front of the Card 1');

    const nextButton = page.locator('button:has-text("Next")');
    await nextButton.click();

    await expect(flashcard).toContainText('Front of the Card 2');
  });

  test('should navigate to the previous flashcard', async ({ page }) => {
    const nextButton = page.locator('button:has-text("Next")');
    await nextButton.click();

    const prevButton = page.locator('button:has-text("Previous")');
    await prevButton.click();

    const flashcard = page.locator('.flashcard');
    await expect(flashcard).toContainText('Front of the Card 1');
  });

  test('should return to sets from flashcards', async ({ page }) => {
    const returnButton = page.locator('button:has-text("Return to Sets")');
    await returnButton.click();

    await expect(page.locator('h1')).toHaveText('Select Study');
  });
});

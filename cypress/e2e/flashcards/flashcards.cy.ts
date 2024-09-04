import FlashcardPage from '../../support/pages/FlashcardPage';

describe('Flashcards Page Tests', () => {
  beforeEach(() => {
    cy.visit('/flashcards');
  });

  it('should select a flashcard set and study', () => {
    FlashcardPage.selectFlashcardSet('Endocrine System');
    FlashcardPage.clickStudyButton();
    FlashcardPage.verifyFlashcardText('What is the endocrine system?');
  });

  it('should flip the flashcard and display the back', () => {
    FlashcardPage.selectFlashcardSet('Endocrine System');
    FlashcardPage.clickStudyButton();
    FlashcardPage.clickFlipButton();
    FlashcardPage.verifyFlashcardText('A collection of ductless glands that secrete hormones...');
  });

  it('should navigate to the next flashcard', () => {
    FlashcardPage.selectFlashcardSet('Endocrine System');
    FlashcardPage.clickStudyButton();
    FlashcardPage.clickNextButton();
    FlashcardPage.verifyFlashcardText('What is the function of ACTH?');
  });

  it('should navigate to the previous flashcard', () => {
    FlashcardPage.selectFlashcardSet('Endocrine System');
    FlashcardPage.clickStudyButton();
    FlashcardPage.clickNextButton();
    FlashcardPage.clickPreviousButton();
    FlashcardPage.verifyFlashcardText('What is the endocrine system?');
  });

  it('should return to the flashcard sets', () => {
    FlashcardPage.selectFlashcardSet('Endocrine System');
    FlashcardPage.clickStudyButton();
    FlashcardPage.clickReturnToSetsButton();
    cy.get('select[name="flashcardSet"]').should('be.visible');
  });
});

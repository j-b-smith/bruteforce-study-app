class FlashcardPage {
    private static readonly flashcardSetSelect = 'select[name="flashcardSet"]';
    private static readonly studyButton = 'button:contains("Study")';
    private static readonly flipButton = 'button:contains("Flip")';
    private static readonly nextButton = 'button:contains("Next")';
    private static readonly previousButton = 'button:contains("Previous")';
    private static readonly returnToSetsButton = 'button:contains("Return to Sets")';
    private static readonly flashcardText = 'div[role="flashcard"]';
  
    static selectFlashcardSet(flashcardSet: string) {
      cy.get(this.flashcardSetSelect).select(flashcardSet);
    }
  
    static clickStudyButton() {
      cy.get(this.studyButton).click();
    }
  
    static clickFlipButton() {
      cy.get(this.flipButton).click();
    }
  
    static clickNextButton() {
      cy.get(this.nextButton).click();
    }
  
    static clickPreviousButton() {
      cy.get(this.previousButton).click();
    }
  
    static clickReturnToSetsButton() {
      cy.get(this.returnToSetsButton).click();
    }
  
    static verifyFlashcardText(expectedText: string) {
      cy.get(this.flashcardText).should('contain.text', expectedText);
    }
  }
  
  export default FlashcardPage;
  
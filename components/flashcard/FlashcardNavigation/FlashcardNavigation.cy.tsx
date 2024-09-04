import React from 'react';
import { mount } from 'cypress/react18';
import FlashcardNavigation from './FlashcardNavigation';

describe('FlashcardNavigation Component', () => {
  it('navigates between flashcards', () => {
    const onPrevious = cy.stub();
    const onNext = cy.stub();
    const onFlip = cy.stub();
    
    mount(
      <FlashcardNavigation
        onPrevious={onPrevious}
        onNext={onNext}
        currentIndex={1}
        total={5}
        isFlipped={false}
        onFlip={onFlip}
      />
    );

    // Add your assertions or interactions here
  });
});

import React from 'react';
import { mount } from '@cypress/react';
import FlashcardStudyArea from './FlashcardStudyArea';
import { Flashcard } from '../../../types';


const flashcards: Flashcard[] = [
  { front: 'Front 1', back: 'Back 1' },
  { front: 'Front 2', back: 'Back 2' },
];

describe('FlashcardStudyArea Component', () => {
  it('displays and navigates through flashcards', () => {
    mount(<FlashcardStudyArea flashcards={flashcards} onReturnToSets={cy.stub()} />);
    cy.get('div').contains('Front 1').click();
    cy.get('div').contains('Back 1');
    cy.get('button').contains('Next').click();
    cy.get('div').contains('Front 2');
  });
});

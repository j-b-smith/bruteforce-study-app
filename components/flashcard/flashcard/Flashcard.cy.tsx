import React from 'react';
import { mount } from 'cypress/react18';
import Flashcard from '../flashcard/Flashcard';

describe('Flashcard Component', () => {
  it('flips the flashcard when clicked', () => {
    const front = 'Front of Card';
    const back = 'Back of Card';
    mount(<Flashcard front={front} back={back} isFlipped={false} onFlip={cy.stub()} />);
    cy.get('div').contains(front).click();
    cy.get('div').contains(back);
  });
});

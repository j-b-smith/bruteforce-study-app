import React from 'react';
import { mount } from '@cypress/react';
import FlashcardListTab from './FlashcardListTab';
import { Course } from '../../../types';



const courses: Course[] = [
  {
    name: 'Course 1',
    categories: [
      {
        name: 'Category 1',
        flashcards: [{ front: 'Front 1', back: 'Back 1' }],
        questions: [],
      },
    ],
  },
];

describe('FlashcardListTab Component', () => {
  it('renders course and categories', () => {
    mount(<FlashcardListTab courses={courses} onSelectFlashcardSet={cy.stub()} />);
    cy.get('button').contains('Study').click();
  });
});

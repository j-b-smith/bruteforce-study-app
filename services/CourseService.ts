const fs = require('fs');
const path = require('path');

import { Course, Category, Flashcard } from '../types';

// Load JSON from file and parse it
const loadJson = (filePath: string): any => {
  console.log(`Loading JSON from: ${filePath}`);
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

export const getAnatomyAndPhysiologyIICourse = (): Course => {
  const filePath = path.join(__dirname, '../public/data/anatomyIIFlashcards.json');
  
  const anatomyData = loadJson(filePath);
  
  const courseName = Object.keys(anatomyData)[0];
  
  const categories: Category[] = Object.keys(anatomyData[courseName]).map((categoryName) => {
    const flashcardsData = anatomyData[courseName][categoryName];
    
    const flashcards: Flashcard[] = Object.keys(flashcardsData).map((questionText) => {
      return {
        front: questionText,
        back: flashcardsData[questionText],
      };
    });
    
    return {
      name: categoryName,
      flashcards,
      questions: [], // Placeholder for now
    };
  });
  
  return {
    name: courseName,
    categories,
  };
};

export const getIntroToPsychologyCourse = (): Course => {
  const filePath = path.join(__dirname, '../data/introToPsychologyFlashcards.json');
  
  const psychologyData = loadJson(filePath);
  
  const courseName = Object.keys(psychologyData)[0];
  
  const categories: Category[] = Object.keys(psychologyData[courseName]).map((categoryName) => {
    const flashcardsData = psychologyData[courseName][categoryName];
    
    const flashcards: Flashcard[] = Object.keys(flashcardsData).map((questionText) => {
      return {
        front: questionText,
        back: flashcardsData[questionText],
      };
    });
    
    return {
      name: categoryName,
      flashcards,
      questions: [], // Placeholder for now
    };
  });
  
  return {
    name: courseName,
    categories,
  };
};

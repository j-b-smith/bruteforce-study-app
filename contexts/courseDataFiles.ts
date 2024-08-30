// List of all course data imports
import anatomyIIFlashcardsData from '../public/data/anatomyIIFlashcards.json';
import psychologyFlashcardsData from '../public/data/introToPsychologyFlashcards.json';

// Import the corresponding TS files for additional course data
import anatomyAndPhysiologyIICourse from '../public/data/anatomyAndPhysiologyIICourse';
// (Add any new course data files here)

export const courseDataFiles = [
  { tsData: anatomyAndPhysiologyIICourse, jsonData: anatomyIIFlashcardsData },
  // Add new courses as { tsData: ..., jsonData: ... }
  { tsData: null, jsonData: psychologyFlashcardsData }, // For courses without TS data
];

import apyIIFlashcardsData from '../public/data/anatomyIIFlashcards.json';
import psychologyFlashcardsData from '../public/data/introToPsychologyFlashcards.json';
import { Course, Category, Flashcard } from '../types';

class FlashcardService {
  createCourseFromFlashcardsData(flashcardsData: any): Course {
    const courseName = Object.keys(flashcardsData)[0];

    const categories: Category[] = Object.keys(flashcardsData[courseName]).map((categoryName) => {
      const flashcardsRawData = flashcardsData[courseName][categoryName];
      const flashcards: Flashcard[] = Object.keys(flashcardsRawData).map((questionText) => ({
        front: questionText,
        back: flashcardsRawData[questionText],
      }));

      return {
        name: categoryName,
        flashcards,
        questions: [], // This can be populated if needed, or left as an empty array
      };
    });

    return {
      name: courseName,
      categories,
    };
  }

  getFlashcardsByCategory(course: Course, categoryName: string): Flashcard[] {
    const category = course.categories.find(cat => cat.name === categoryName);
    return category ? category.flashcards : [];
  }

  shuffleFlashcards(flashcards: Flashcard[]): Flashcard[] {
    const shuffled = [...flashcards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

export default new FlashcardService();

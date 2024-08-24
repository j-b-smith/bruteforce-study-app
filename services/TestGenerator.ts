// services/TestGenerator.ts

import { Course, Question } from "../types/quiz";

class TestGenerator {
  private courses: Course[];

  constructor(courses: Course[]) {
    this.courses = courses;
  }

  // Randomize the order of questions in an array
  private shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Randomize the options within each question
  private shuffleQuestionOptions(question: Question): Question {
    const shuffledOptions = this.shuffleArray(Object.entries(question.options));
    return {
      ...question,
      options: Object.fromEntries(shuffledOptions),
    };
  }

  // Generate a quiz for a specific category with randomized questions and options
  generateCategoryQuiz(courseName: string, categoryName: string): Question[] {
    const course = this.courses.find(c => c.courseName === courseName);
    if (!course) throw new Error(`Course ${courseName} not found`);

    const category = course.categories.find(cat => cat.categoryName === categoryName);
    if (!category) throw new Error(`Category ${categoryName} not found in course ${courseName}`);

    const shuffledQuestions = this.shuffleArray(category.questions);
    return shuffledQuestions.map(this.shuffleQuestionOptions.bind(this));
  }

  // Generate a comprehensive quiz for a specific course with randomized questions and options
  generateComprehensiveQuiz(courseName: string): Question[] {
    const course = this.courses.find(c => c.courseName === courseName);
    if (!course) throw new Error(`Course ${courseName} not found`);

    const shuffledQuestions = this.shuffleArray(course.categories.flatMap(category => category.questions));
    return shuffledQuestions.map(this.shuffleQuestionOptions.bind(this));
  }

  // Generate a custom quiz based on a selection of categories with randomized questions and options
  generateCustomQuiz(courseName: string, selectedCategories: string[]): Question[] {
    const course = this.courses.find(c => c.courseName === courseName);
    if (!course) throw new Error(`Course ${courseName} not found`);

    const questions = selectedCategories.flatMap(categoryName => {
      const category = course.categories.find(cat => cat.categoryName === categoryName);
      if (!category) throw new Error(`Category ${categoryName} not found in course ${courseName}`);
      return category.questions;
    });

    const shuffledQuestions = this.shuffleArray(questions);
    return shuffledQuestions.map(this.shuffleQuestionOptions.bind(this));
  }
}

export default TestGenerator;

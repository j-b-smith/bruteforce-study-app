import apyIIData from '../public/data/anatomyAndPhysiologyIICourse'
import { Course, Category, Question, QuizResult, DetailedQuestionResult } from '../types/quiz';

class QuizService {
  private courses: Course[];
  private quizStore: Record<number, Question[]> = {}; // Store quizzes by ID
  private quizResultsStore: Record<number, QuizResult[]> = {}; // Store quiz results by quiz ID
  private nextQuizId: number = 1; // ID counter for quizzes

  constructor() {
    this.courses = [];
    this.courses.push(apyIIData);
    this.initializeQuizzes(); // Call initializeQuizzes to populate the quizStore
  }

  private initializeQuizzes() {
    this.courses.forEach(course => {
      course.categories.forEach(category => {
        this.quizStore[this.nextQuizId] = category.questions;
        this.nextQuizId++;
      });

      const comprehensiveQuiz = course.categories.flatMap(category => category.questions);
      this.quizStore[this.nextQuizId] = comprehensiveQuiz;
      this.nextQuizId++;
    });
  }

  storeQuiz(quizQuestions: Question[]): number {
    const quizId = this.nextQuizId++;
    this.quizStore[quizId] = quizQuestions;
    return quizId;
  }

  getCategoriesByCourse(courseName: string): Category[] {
    const course = this.courses.find(c => c.courseName === courseName);
    return course ? course.categories : [];
  }

  getQuizById(quizId: number): Question[] | null {
    return this.quizStore[quizId] || null;
  }

  getAllQuizIds(): number[] {
    return Object.keys(this.quizStore).map(id => parseInt(id, 10));
  }

  getQuestionsByCategory(courseName: string, categoryName: string): Question[] {
    const categories = this.getCategoriesByCourse(courseName);
    const category = categories.find(cat => cat.categoryName === categoryName);
    return category ? category.questions : [];
  }

  getAllCourses(): Course[] {
    return this.courses.map(course => course);
  }

  /**
   * Save the result of a quiz attempt
   * @param quizId - The ID of the quiz
   * @param quizResult - The result of the quiz attempt
   */
  saveQuizResult(quizId: number, quizResult: QuizResult): void {
    if (!this.quizResultsStore[quizId]) {
      this.quizResultsStore[quizId] = [];
    }
    this.quizResultsStore[quizId].push(quizResult);
  }

  /**
   * Get all quiz results by quiz ID
   * @param quizId - The ID of the quiz
   * @returns Array of QuizResult
   */
  getQuizResultsById(quizId: number): QuizResult[] {
    return this.quizResultsStore[quizId] || [];
  }
}

export default new QuizService();

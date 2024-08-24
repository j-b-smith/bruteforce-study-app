// services/QuizService.ts

import apyIIData from '../public/data/anatomyAndPhysiologyIICourse';
import { Course, Category, Question } from '../types/quiz';

class QuizService {
  private courses: Course[];

  constructor() {
    this.courses = [];
    this.courses.push(apyIIData);
  }

  /**
   * @param courseName 
   * @returns Category Array of questions belonging to the specified course.  
   */
  getCategoriesByCourse(courseName: string): Category[] {
    const course = this.courses.find(c => c.courseName === courseName);
    return course ? course.categories : [];
  }

  /**
   * @param courseName
   * @param categoryName
   * @returns Question Array of questions belonging to the specified category in the specified course.  
   */
  getQuestionsByCategory(courseName: string, categoryName: string): Question[] {
    const categories = this.getCategoriesByCourse(courseName);
    const category = categories.find(cat => cat.categoryName === categoryName);
    return category ? category.questions : [];
  }

  /**
   * @returns Course Array containing all courses available.  
   */
  getAllCourses(): Course[] {
    return this.courses.map(course => course);
  }
}

export default new QuizService();

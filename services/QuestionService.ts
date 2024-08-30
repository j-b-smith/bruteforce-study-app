import { Course, Category, Question } from '../types/quiz';
import anatomyAndPhysiologyIICourse from '../public/data/anatomyAndPhysiologyIICourse';
class QuestionService {
  private courses: Course[];

  constructor() {
    this.courses = [];
    this.courses.push(anatomyAndPhysiologyIICourse);
  }

  getCategoriesByCourse(courseName: string): Category[] {
    const course = this.courses.find(c => c.name === courseName);
    return course ? course.categories : [];
  }

  getQuestionsByCategory(courseName: string, categoryName: string): Question[] {
    const categories = this.getCategoriesByCourse(courseName);
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.questions : [];
  }

  getAllCourses(): Course[] {
    return this.courses.map(course => course);
  }

  addQuestionToCategory(courseName: string, categoryName: string, question: Question): void {
    const categories = this.getCategoriesByCourse(courseName);
    const category = categories.find(cat => cat.name === categoryName);
    if (category) {
      category.questions.push(question);
    }
  }

  removeQuestionFromCategory(courseName: string, categoryName: string, questionText: string): void {
    const categories = this.getCategoriesByCourse(courseName);
    const category = categories.find(cat => cat.name === categoryName);
    if (category) {
      category.questions = category.questions.filter(q => q.text !== questionText);
    }
  }
}

export default new QuestionService();

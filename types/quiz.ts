export interface QuizBase {
  category: string;
  questions: Question[];
}

export interface Question {
  question: string;
  options: Record<string, string>;
  correctAnswer: string;
}

export interface Category {
  categoryName: string;
  questions: Question[];
}

export interface Course {
  courseName: string;
  categories: Category[];
}

export interface Quiz extends QuizBase {}

export interface DetailedQuestionResult {
  question: string;
  options: Record<string, string>;
  correctAnswer: string;
  selectedAnswer: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizResult {
  category: string;
  detailedResults: DetailedQuestionResult[];
  score: number;
  dateTaken: Date;
}

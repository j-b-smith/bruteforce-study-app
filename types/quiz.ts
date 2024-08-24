export interface Course {
  courseName: string;
  categories: Category[];
}

export interface Category {
  categoryName: string;
  questions: Question[];
}

export interface Question {
  category: string;
  question: string;
  options: Option[];
}

export interface Option {
  answerText: string;
  explanationText: string;
  isCorrect: boolean;
}

export interface QuizResult {
  quizName: string;
  courseName: string;
  numCorrect: number;
  totalQuestions: number;
  questions: DetailedQuestionResult[];
}

export interface DetailedQuestionResult {
  question: Question;
  selectedAnswer: string;
  isCorrect: boolean;
  explanation: string;
}

import { Flashcard } from "./flashcard";

// Base Option Interface
export interface Option {
  text: string;               // Answer text
  explanation?: string;       // Explanation text
  isCorrect: boolean;         // Whether the option is correct
}

// Question Interface
export interface Question {
  text: string;               // Question text
  options: Option[];          // List of answer options
  categoryName: string;       // The name of the category this question belongs to
}

// Category Interface
export interface Category {
  name: string;               // Category name
  flashcards: Flashcard[];    // List of flashcards
  questions: Question[];      // List of questions
}

// Course Interface
export interface Course {
  name: string;               // Course name
  categories: Category[];     // List of categories
}

// Option Item Props Interface
export interface OptionItemProps {
  option: Option;             // Option data
  isSelected: boolean;        // Whether the option is selected
  showResult: boolean;        // Whether to show result
  onSelectAnswer?: (value: string) => void; // Function to handle answer selection
}

// Question Header Props Interface
export interface QuestionHeaderProps {
  questionText: string;       // Question text
  questionIndex: number;      // Index of the question
  isCorrectAnswer: boolean;   // Whether the selected answer is correct
  showResult: boolean;        // Whether to show result
}

// Question Display Props Interface
export interface QuestionDisplayProps {
  question: Question;         // Question data
  questionIndex: number;      // Index of the question
  selectedAnswer?: string;    // The selected answer
  showResult?: boolean;       // Whether to show result
  onSelectAnswer?: (value: string) => void; // Function to handle answer selection
  isResultPage?: boolean;        // Whether to show result
}

// Quiz Result Interface
export interface QuizResult {
  quizName: string;               // Name of the quiz
  courseName: string;             // Name of the course
  numCorrect: number;             // Number of correct answers
  totalQuestions: number;         // Total number of questions
  questions: DetailedQuestionResult[]; // List of detailed question results
}

// Detailed Question Result Interface
export interface DetailedQuestionResult {
  question: Question;             // Question data
  selectedAnswer: string;         // The selected answer
  isCorrect: boolean;             // Whether the answer is correct
  explanation: string;            // Explanation of the correct answer
}

// Category Selector Props Interface
export interface CategorySelectorProps {
  categories: Category[];                   // Updated import path to match the new interface
  selectedCategories: string[];             // Selected categories by name
  onCategorySelect: (selected: string[]) => void; // Callback function when categories are selected
}

// Course Card Props Interface
export interface CourseCardProps {
  courseName: string;                    // The name of the course
  description: string;                   // A brief description of the course
  categories: Category[];                // The list of categories within the course
  onStartQuiz: (courseName: string, categoryName?: string) => void; // Callback function when the quiz starts
}

// Quiz Filter Props Interface
export interface QuizFilterProps {
  courses: Course[];
  selectedCourses: string[];
  selectedCategories: string[];
  onCourseSelect: (selected: string[]) => void;
  onCategorySelect: (selected: string[]) => void;
}

// Quiz Result Header Props Interface
export interface QuizResultHeaderProps {
  quizResult: QuizResult;
}

// Category Stats Props Interface
export interface CategoryStatsProps {
  quizResult: QuizResult;
}

// Detailed Results Props Interface
export interface DetailedResultsProps {
  filteredQuestions: DetailedQuestionResult[];
  expandedIndex: number[];
  setExpandedIndex: (indices: number[]) => void;
}


export interface QuestionNavigationProps {
  currentQuestionIndex: number;
  totalQuestions: number;
  showResult: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onSubmitQuiz: () => void;
  selectedAnswer: string;
}


export interface QuizSummaryProps {
  currentQuestionIndex: number;
  totalQuestions: number;
}
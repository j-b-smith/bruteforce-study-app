export interface User {
    uid: string;              // User ID from Firebase
    email: string | null;     // User's email
    displayName?: string | null;  // Optional display name
    photoURL?: string | null; // Optional profile photo URL
    quizResults?: Array<{
      quizId: string;         // ID of the quiz taken
      score: number;          // Score achieved on the quiz
      dateTaken: Date;        // Date the quiz was taken
    }>;
  }
  
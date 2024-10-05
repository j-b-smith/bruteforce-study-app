
# Bruteforce Study App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The app is designed to help users (specifically my girlfriend) prepare for quizzes and exams through both flashcard and multiple-choice quiz modes. It's optimized for mobile and desktop viewing and leverages  Chakra UI for design.

## Features

- **Multiple-Choice Quiz Mode**: Users can take pre-built or custom quizzes, filter questions by category, and receive instant feedback.
- **Flashcard Mode**: Users can study key concepts through a flashcard interface.
- **Quiz Filtering**: Quizzes can be filtered by category and user-created custom quizzes.
- **Randomized Questions & Options**: Both quiz questions and answer options are randomized for each attempt.
- **Mobile-Friendly**: The app is fully responsive and optimized for mobile use.
- **Real-time Updates**: Uses Chakra UI for components and Firebase for real-time authentication and data storage.
- **State Management**: React Context API is used to handle global state across the app.


## File Structure

- `pages/`: Main routing and rendering of pages (e.g., Quizzes, Flashcards, Settings).
- `components/`: Reusable React components, including buttons, modals, and form elements.
- `context/`: Contains React Context API for managing global state, including authentication and quiz data.
- `services/`: Manages interaction with Firebase, authentication, and quiz data retrieval.

## Technologies

- **Next.js**: Used for server-side rendering and routing.
- **TypeScript**: Ensures type safety throughout the application.
- **Chakra UI**: Provides responsive, customizable components for UI design.
- **Firebase**: Authentication and real-time database integration.
- **React Context API**: Manages global state like quiz progress and user sessions.

## Scripts

- **`dev`**: Runs the development server.
- **`build`**: Builds the application for production.
- **`start`**: Starts the Next.js server.
- **`lint`**: Runs ESLint checks.

## Deployment

This project is deployed with Vercel

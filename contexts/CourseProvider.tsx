import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course } from '../types/quiz';
import FlashcardService from '../services/FlashcardService';
import { courseDataFiles } from './courseDataFiles';

interface CourseContextType {
  courses: Course[];
  getCourseByName: (courseName: string) => Course | undefined;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const CourseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const initializeCourses = () => {
      const courseList: Course[] = [];

      courseDataFiles.forEach(({ tsData, jsonData }) => {
        const flashcardCourse = FlashcardService.createCourseFromFlashcardsData(jsonData);

        const initializedCourse = tsData
          ? {
              ...tsData,
              categories: tsData.categories.map(category => {
                const flashcards = FlashcardService.getFlashcardsByCategory(flashcardCourse, category.name);
                return {
                  ...category,
                  flashcards,
                };
              }),
            }
          : flashcardCourse;

        courseList.push(initializedCourse);
      });

      setCourses(courseList);
    };

    initializeCourses();
  }, []);

  const getCourseByName = (courseName: string) => courses.find(course => course.name === courseName);

  return (
    <CourseContext.Provider value={{ courses, getCourseByName }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
};

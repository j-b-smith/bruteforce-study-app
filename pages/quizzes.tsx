// pages/quizzes.tsx

import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import QuizService from "../services/QuizService";
import TestGenerator from "../services/TestGenerator";
import { Course } from "../types/quiz";
import CourseCard from "../components/CourseCard";

const Quizzes = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const router = useRouter();

  useEffect(() => {
    const allCourses = QuizService.getAllCourses();
    setCourses(allCourses);
  }, []);

  const handleStartQuiz = (courseName: string, categoryName?: string) => {
    const testGenerator = new TestGenerator(courses);

    let quizQuestions = [];
    if (categoryName) {
      quizQuestions = testGenerator.generateCategoryQuiz(courseName, categoryName);
    } else {
      quizQuestions = testGenerator.generateComprehensiveQuiz(courseName);
    }

    // Store quizQuestions in state, context, or pass it as a query parameter
    router.push({
      pathname: "/quiz",
      query: { courseName, categoryName, questions: JSON.stringify(quizQuestions) }
    });
  };

  return (
    <Box p={4}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Take a Quiz</Tab>
          <Tab>Quiz Results</Tab>
          <Tab>Create Custom Test</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  courseName={course.courseName}
                  description={`Course Description for ${course.courseName}`}
                  categories={course.categories}
                  onStartQuiz={handleStartQuiz}
                />
              ))}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              {/* Display Quiz Results Here */}
            </VStack>
          </TabPanel>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              {/* Custom Test Builder */}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Quizzes;

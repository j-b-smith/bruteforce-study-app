import { VStack, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import QuizService from "../../services/QuizService";
import TestGenerator from "../../services/TestGenerator";
import CourseCard from "../CourseCard";
import { Course } from "../../types/quiz";

interface TakeQuizTabProps {
  courses: Course[];
}

const TakeQuizTab: React.FC<TakeQuizTabProps> = ({ courses }) => {
  const router = useRouter();

  const handleStartQuiz = (courseName: string, categoryName?: string) => {
    const testGenerator = new TestGenerator(courses);

    let quizQuestions = [];
    if (categoryName) {
      quizQuestions = testGenerator.generateCategoryQuiz(courseName, categoryName);
    } else {
      quizQuestions = testGenerator.generateComprehensiveQuiz(courseName);
    }

    // Store the quiz and retrieve its ID
    const quizId = QuizService.storeQuiz(quizQuestions);

    router.push({
      pathname: `/quiz/${quizId}`
    });
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            courseName={course.name}
            description={`Course Description for ${course.name}`}
            categories={course.categories}
            onStartQuiz={handleStartQuiz}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default TakeQuizTab;

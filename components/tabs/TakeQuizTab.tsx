import { useState } from "react";
import { VStack, Switch, Text, Box, HStack, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import QuizService from "../../services/QuizService";
import TestGenerator from "../../services/TestGenerator";
import CourseCard from "../CourseCard";
import { Course } from "../../types/quiz";

interface TakeQuizTabProps {
  courses: Course[];
}

const TakeQuizTab: React.FC<TakeQuizTabProps> = ({ courses }) => {
  const [isPrepMode, setIsPrepMode] = useState(false); // Boolean toggle for Test Prep Mode
  const [timer, setTimer] = useState<number | null>(null); // Timer for Test Prep Mode (in minutes)
  const router = useRouter();

  const handleModeToggle = () => {
    setIsPrepMode((prevMode) => !prevMode);
    if (!isPrepMode) setTimer(null); // Reset timer when switching back to Study Mode
  };

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

    // Route to the quiz page using the quiz ID and pass the mode and timer as query parameters
    router.push({
      pathname: `/quiz/${quizId}`,
      query: {
        mode: isPrepMode ? "prep" : "study",
        timer: isPrepMode && timer ? timer : undefined,
      },
    });
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <HStack spacing={4} alignItems="center">
          <Switch isChecked={isPrepMode} onChange={handleModeToggle} />
          <Text>Test Prep Mode</Text>
          {isPrepMode && (
            <Input
              placeholder="Set Timer (minutes)"
              type="number"
              value={timer ?? ""}
              onChange={(e) => setTimer(Number(e.target.value))}
              width="175px"
            />
          )}
        </HStack>
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
    </Box>
  );
};

export default TakeQuizTab;

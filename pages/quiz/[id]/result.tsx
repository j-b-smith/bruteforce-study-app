// pages/quiz/[id]/result.tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { 
  Box, 
  Heading, 
  VStack, 
  Text, 
  HStack, 
  CircularProgress, 
  CircularProgressLabel, 
  Progress 
} from "@chakra-ui/react";
import QuizService from "../../../services/QuizService";
import { QuizResult } from "../../../types/quiz";
import QuestionDisplay from "../../../components/QuestionDisplay";

const QuizResultPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const quizId = parseInt(id as string, 10);

  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  useEffect(() => {
    const results = QuizService.getQuizResultsById(quizId);
    if (results.length > 0) {
      setQuizResult(results[results.length - 1]); // Show the latest result
    } else {
      router.push("/quizzes"); // Redirect if no results found
    }
  }, [quizId, router]);

  const renderCategoryStats = () => {
    if (!quizResult || quizResult.questions.length === 0) return null;

    const categoryStats: Record<string, { correct: number; total: number }> = {};

    quizResult.questions.forEach((result) => {
      const categoryName = result.question.category;

      if (!categoryStats[categoryName]) {
        categoryStats[categoryName] = { correct: 0, total: 0 };
      }
      categoryStats[categoryName].total++;
      if (result.isCorrect) {
        categoryStats[categoryName].correct++;
      }
    });

    return Object.entries(categoryStats).map(([category, stats], index) => {
      const correctPercentage = Math.floor((stats.correct / stats.total) * 100);
      const incorrectPercentage = 100 - correctPercentage;

      return (
        <Box key={index} mb={4}>
          <Text fontWeight="bold">{category}</Text>
          <HStack align="center" spacing={4}>
            <Text>Correct:</Text>
            <Progress value={correctPercentage} colorScheme="green" size="sm" flex={1} />
            <Text>{stats.correct}/{stats.total} ({correctPercentage}%)</Text>
          </HStack>
          <HStack align="center" spacing={4} mt={2}>
            <Text>Incorrect:</Text>
            <Progress value={incorrectPercentage} colorScheme="red" size="sm" flex={1} />
            <Text>{stats.total - stats.correct}/{stats.total} ({incorrectPercentage}%)</Text>
          </HStack>
        </Box>
      );
    });
  };

  const renderCircularProgress = () => {
    if (!quizResult) return null;

    const correctPercentage = Math.floor((quizResult.numCorrect / quizResult.totalQuestions) * 100);

    return (
      <CircularProgress value={correctPercentage} color="green.400" size="120px">
        <CircularProgressLabel>
          {correctPercentage}%
        </CircularProgressLabel>
      </CircularProgress>
    );
  };

  return (
    <Box p={[2, 4]}>
      <Heading mb={[2, 4]} fontSize={["xl", "2xl"]}>
        Quiz Results
      </Heading>
      {quizResult && (
        <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
          <HStack justifyContent="space-between">
            <VStack align="flex-start">
              <Text fontWeight="bold">Quiz Name: {quizResult.quizName}</Text>
              <Text>Course Name: {quizResult.courseName}</Text>
              <Text>Score: {quizResult.numCorrect} / {quizResult.totalQuestions}</Text>
            </VStack>
            <VStack>
              {renderCircularProgress()}
            </VStack>
          </HStack>
        </Box>
      )}

      {quizResult && quizResult.questions.length > 0 && (
        <Box>
          {renderCategoryStats()}
          <Heading as="h4" size="md" mt={4} mb={2}>
            Detailed Results:
          </Heading>
          {quizResult.questions.map((result, index) => (
            <QuestionDisplay
              key={index}
              question={result.question}
              selectedAnswer={result.selectedAnswer}
              showResult={true}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default QuizResultPage;

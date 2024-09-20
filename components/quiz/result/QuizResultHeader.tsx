import { Box, Heading, VStack, Text, CircularProgress, CircularProgressLabel, HStack } from "@chakra-ui/react";
import { QuizResultHeaderProps } from "../../../types/quiz";

const QuizResultHeader: React.FC<QuizResultHeaderProps> = ({ quizResult }) => {
  const correctPercentage = Math.floor((quizResult.numCorrect / quizResult.totalQuestions) * 100);
  const incorrectPercentage = 100 - correctPercentage;
  const numIncorrect = quizResult.totalQuestions - quizResult.numCorrect;

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
      <HStack justifyContent="space-between" alignItems="center">
        {/* Quiz Information */}
        <VStack align="flex-start" spacing={2}>
          <Text fontWeight="bold" fontSize="lg">Quiz Name: {quizResult.quizName}</Text>
          <Text>Course Name: {quizResult.courseName}</Text>
          <Text>Score: {quizResult.numCorrect} / {quizResult.totalQuestions}</Text>
          <Text>Incorrect Answers: {numIncorrect}</Text>
        </VStack>

        {/* Circle Graph */}
        <VStack>
          <CircularProgress
            value={correctPercentage}
            color="green.400"
            size="120px"
            trackColor="red.400"
          >
            <CircularProgressLabel>{correctPercentage}%</CircularProgressLabel>
          </CircularProgress>
          <Text mt={2}>{quizResult.totalQuestions} Questions</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default QuizResultHeader;

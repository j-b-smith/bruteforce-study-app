import { Box, Heading, VStack, Text, CircularProgress, CircularProgressLabel, HStack } from "@chakra-ui/react";
import { QuizResultHeaderProps } from "../../../types/quiz";

const QuizResultHeader: React.FC<QuizResultHeaderProps> = ({ quizResult }) => {
  const correctPercentage = Math.floor((quizResult.numCorrect / quizResult.totalQuestions) * 100);

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
      <HStack justifyContent="space-between">
        <VStack align="flex-start">
          <Text fontWeight="bold">Quiz Name: {quizResult.quizName}</Text>
          <Text>Course Name: {quizResult.courseName}</Text>
          <Text>Score: {quizResult.numCorrect} / {quizResult.totalQuestions}</Text>
        </VStack>
        <VStack>
          <CircularProgress value={correctPercentage} color="green.400" size="120px">
            <CircularProgressLabel>{correctPercentage}%</CircularProgressLabel>
          </CircularProgress>
        </VStack>
      </HStack>
    </Box>
  );
};

export default QuizResultHeader;

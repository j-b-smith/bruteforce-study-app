import { Text } from "@chakra-ui/react";
import { QuizSummaryProps } from "../../types";

const QuizSummary: React.FC<QuizSummaryProps> = ({ currentQuestionIndex, totalQuestions }) => {
  return (
    <Text mt={4} mb={2} fontSize="md">
      Question {currentQuestionIndex + 1} of {totalQuestions}
    </Text>
  );
};

export default QuizSummary;

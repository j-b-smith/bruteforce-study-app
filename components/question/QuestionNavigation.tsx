import { HStack, Button } from "@chakra-ui/react";
import { QuestionNavigationProps } from "../../types";

const QuestionNavigation: React.FC<QuestionNavigationProps> = ({
  currentQuestionIndex,
  totalQuestions,
  showResult,
  onPrevious,
  onNext,
  onSubmit,
  onSubmitQuiz,
  selectedAnswer,
}) => {
  return (
    <HStack mt={4} spacing={4}>
      {currentQuestionIndex > 0 && (
        <Button colorScheme="purple" onClick={onPrevious} size={["sm", "md"]}>
          Back
        </Button>
      )}
      {!showResult ? (
        <Button colorScheme="purple" onClick={onSubmit} isDisabled={!selectedAnswer} size={["sm", "md"]}>
          Submit Answer
        </Button>
      ) : currentQuestionIndex < totalQuestions - 1 ? (
        <Button colorScheme="purple" onClick={onNext} size={["sm", "md"]}>
          Next Question
        </Button>
      ) : (
        <Button colorScheme="green" onClick={onSubmitQuiz} size={["sm", "md"]}>
          Submit Quiz
        </Button>
      )}
    </HStack>
  );
};

export default QuestionNavigation;

import { Box, Text, Icon } from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { QuestionHeaderProps } from "../../types";

const QuestionHeader: React.FC<QuestionHeaderProps> = ({
  questionText,
  questionIndex,
  isCorrectAnswer,
  showResult,
}) => {
  return (
    <Box display="flex" alignItems="center">
      {showResult && (
        <Icon
          as={isCorrectAnswer ? CheckCircleIcon : CloseIcon}
          color={isCorrectAnswer ? "green.500" : "red.500"}
          mr={2}
        />
      )}
      <Text fontSize={["md", "lg"]}>{`${questionIndex + 1}. ${questionText}`}</Text>
    </Box>
  );
};

export default QuestionHeader;

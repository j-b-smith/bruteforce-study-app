// components/QuestionDisplay.tsx

import { Box, Text, HStack, Radio, Stack, Icon, RadioGroup } from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { Question } from "../types/quiz";

interface QuestionDisplayProps {
  question: Question;
  selectedAnswer?: string;
  showResult?: boolean;
  mode?: "prep" | "study";
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  selectedAnswer = "",
  showResult = false,
  mode = "study", // default mode is "study"
}) => {
  return (
    <Box p={[2, 4]} borderWidth="1px" borderRadius="lg">
      <Text fontSize={["md", "lg"]}>{question.question}</Text>
      <RadioGroup mt={4} value={selectedAnswer}>
        <Stack direction="column" spacing={4}>
          {Object.keys(question.options).map((option, index) => {
            const isAnswerCorrect = option === question.correctAnswer;
            const icon = isAnswerCorrect ? CheckCircleIcon : CloseIcon;
            const explanationText = question.options[option].replace(/^(Correct\.|Incorrect\.)\s*/, "");

            return (
              <Box key={index}>
                <Radio
                  value={option}
                  fontSize={["sm", "md"]}
                  isDisabled={showResult} // Disable only when showing results
                >
                  {option}
                </Radio>
                {showResult && (
                  <HStack
                    mt={2}
                    spacing={2}
                    alignItems="center"
                    borderWidth="1px"
                    borderRadius="lg"
                    borderColor="gray.200"
                    paddingLeft={[4, 8]}
                    paddingY={2}
                  >
                    <Icon as={icon} color={option === question.correctAnswer ? "green.500" : "red.500"} boxSize={["4", "6"]} />
                    <Text fontSize={["sm", "md"]}>{explanationText}</Text>
                  </HStack>
                )}
              </Box>
            );
          })}
        </Stack>
      </RadioGroup>
      {showResult && (
        <Text mt={4} color={selectedAnswer === question.correctAnswer ? "green.500" : "red.500"} fontSize={["sm", "md"]}>
          {selectedAnswer === question.correctAnswer ? "Correct!" : "Incorrect!"}
        </Text>
      )}
    </Box>
  );
};

export default QuestionDisplay;

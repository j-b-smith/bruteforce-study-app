import { Box, Text, HStack, Radio, Stack, Icon, RadioGroup } from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { Question } from "../types/quiz";

interface QuestionDisplayProps {
  question: Question;
  selectedAnswer?: string;
  showResult?: boolean;
  mode?: "prep" | "study";
  onSelectAnswer?: (value: string) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  selectedAnswer = "",
  showResult = false,
  mode = "study",
  onSelectAnswer,
}) => {
  return (
    <Box p={[2, 4]} borderWidth="1px" borderRadius="lg">
      <Text fontSize={["md", "lg"]}>{question.question}</Text>
      <RadioGroup mt={4} value={selectedAnswer} onChange={onSelectAnswer}>
        <Stack direction="column" spacing={4}>
          {Object.keys(question.options).map((option, index) => {
            const isAnswerCorrect = option === question.correctAnswer;
            const icon = isAnswerCorrect ? CheckCircleIcon : CloseIcon;
            const explanationText = question.options[option].replace(/^(Correct\.|Incorrect\.)\s*/, "");

            return (
              <Box
                key={index}
                position="relative"
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={showResult && option === selectedAnswer ? (isAnswerCorrect ? "green.500" : "red.500") : "gray.200"}
                bg={showResult && option === selectedAnswer ? (isAnswerCorrect ? "green.50" : "red.50") : "white"}
              >
                <Radio
                  value={option}
                  fontSize={["sm", "md"]}
                  isDisabled={showResult && mode === "prep"} // Disable only if in 'prep' mode and showing results
                  position="relative"
                  pl={2} // Adjust padding to make space for the icon
                >
                  {question.options[option]}
                </Radio>
                {showResult && (
                  <Icon
                    as={icon}
                    color={isAnswerCorrect ? "green.500" : "red.500"}
                    position="absolute"
                    top={-3}
                    left={-3}
                    boxSize={5}
                    bg="white"
                    borderRadius="full"
                    zIndex={1}
                  />
                )}
                {showResult && (
                  <Text
                    mt={2}
                    ml={8} // Adjust margin to align with the Radio button text
                    fontSize={["sm", "md"]}
                    color={isAnswerCorrect ? "green.600" : "red.600"}
                  >
                    {explanationText}
                  </Text>
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

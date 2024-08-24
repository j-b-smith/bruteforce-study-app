import { Box, Text, Stack, Radio, RadioGroup, Icon, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { Question } from "../types/quiz";

interface QuestionDisplayProps {
  question: Question;
  questionIndex: number; // Added prop for question index
  selectedAnswer?: string;
  showResult?: boolean;
  mode?: "prep" | "study" | "result"; // Added "result" to mode
  onSelectAnswer?: (value: string) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  questionIndex, // Receiving the question index
  selectedAnswer = "",
  showResult = false,
  mode = "study",
  onSelectAnswer,
}) => {
  const isResultMode = mode === "result";
  const isCorrectAnswer = selectedAnswer === question.options.find(o => o.isCorrect)?.answerText;

  return (
    <Box m={2} borderWidth="1px" borderRadius="lg" >
      {isResultMode ? (
        <Accordion defaultIndex={[0]} allowMultiple >
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left" display="flex" alignItems="center">
                <Icon
                  as={isCorrectAnswer ? CheckCircleIcon : CloseIcon}
                  color={isCorrectAnswer ? "green.500" : "red.500"}
                  mr={2}
                />
                <Text fontSize={["md", "lg"]} fontWeight="bold">
                  {`${questionIndex + 1}. ${question.question}`}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {question.options.map((option, index) => {
                const isAnswerCorrect = option.isCorrect;
                const icon = isAnswerCorrect ? CheckCircleIcon : CloseIcon;

                return (
                  <Box
                    key={index}
                    position="relative"
                    p={4}
                    m={3}
                    ml={8}
                    borderWidth="1px"
                    borderRadius="lg"
                    borderColor={option.answerText === selectedAnswer ? (isAnswerCorrect ? "green.500" : "red.500") : "gray.200"}
                    bg={option.answerText === selectedAnswer ? (isAnswerCorrect ? "green.50" : "red.50") : "white"}
                    mb={2}
                  >
                    <Icon
                      as={icon}
                      color={isAnswerCorrect ? "green.500" : "red.500"}
                      position="absolute"
                      top={2}
                      left={2}
                      boxSize={5}
                      bg="white"
                      borderRadius="full"
                      zIndex={1}
                    />
                    <Text pl={8} fontSize={["sm", "md"]}>
                      {option.answerText}
                    </Text>
                    {showResult && (
                      <Text
                        mt={2}
                        ml={8}
                        fontSize={["sm", "md"]}
                        color={isAnswerCorrect ? "green.600" : "red.600"}
                      >
                        {option.explanationText}
                      </Text>
                    )}
                  </Box>
                );
              })}
              {showResult && (
                <Text mt={4} color={isCorrectAnswer ? "green.500" : "red.500"} fontSize={["sm", "md",]} fontWeight={"bold"}>
                  {isCorrectAnswer ? "You've selected the correct answer, nice job!" : "Sorry, The answer you've selected is incorrect."}
                </Text>
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <Box display="flex" alignItems="center">
            {showResult && (
              <Icon
                as={isCorrectAnswer ? CheckCircleIcon : CloseIcon}
                color={isCorrectAnswer ? "green.500" : "red.500"}
                mr={2}
              />
            )}
            <Text fontSize={["md", "lg"]}>{`${questionIndex + 1}. ${question.question}`}</Text>
          </Box>
          <RadioGroup mt={4} value={selectedAnswer} onChange={onSelectAnswer}>
            <Stack direction="column" spacing={4}>
              {question.options.map((option, index) => {
                const isAnswerCorrect = option.isCorrect;
                const icon = isAnswerCorrect ? CheckCircleIcon : CloseIcon;

                return (
                  <Box
                    key={index}
                    position="relative"
                    p={2}
                    m={1}
                    ml={8}
                    borderWidth="1px"
                    borderRadius="lg"
                    borderColor={showResult && option.answerText === selectedAnswer ? (isAnswerCorrect ? "green.500" : "red.500") : "gray.200"}
                    bg={showResult && option.answerText === selectedAnswer ? (isAnswerCorrect ? "green.50" : "red.50") : "white"}
                  >
                    <Radio
                      value={option.answerText}
                      fontSize={["sm", "md"]}
                      isDisabled={showResult && mode === "prep"} // Disable only if in 'prep' mode and showing results
                      position="relative"
                      pl={2} // Adjust padding to make space for the icon
                    >
                      {option.answerText} {/* Display the answer text */}
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
                        ml={8}
                        fontSize={["sm", "md"]}
                        color={isAnswerCorrect ? "green.600" : "red.600"}
                      >
                        {option.explanationText} {/* Display the explanation */}
                      </Text>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </RadioGroup>
          {showResult && (
            <Text mt={4} color={isCorrectAnswer ? "green.500" : "red.500"} fontSize={["sm", "md",]} fontWeight={"bold"}>
              {isCorrectAnswer ? "You've selected the correct answer, nice job!" : "Sorry, The answer you've selected is incorrect."}
            </Text>
          )}
        </>
      )}
    </Box>
  );
};

export default QuestionDisplay;

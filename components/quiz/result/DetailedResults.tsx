import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Icon, Text } from "@chakra-ui/react";
import { DetailedResultsProps } from "../../../types/quiz";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const DetailedResults: React.FC<DetailedResultsProps> = ({
  filteredQuestions,
  expandedIndex,
  setExpandedIndex,
}) => {
  return (
    <Accordion allowMultiple index={expandedIndex} onChange={(indices) => setExpandedIndex(indices as number[])}>
      {filteredQuestions.map((result, index) => (
        <AccordionItem key={index}>
          <AccordionButton>
            <Box flex="1" textAlign="left" display="flex" alignItems="center">
              <Icon
                as={result.isCorrect ? CheckCircleIcon : CloseIcon}
                color={result.isCorrect ? "green.500" : "red.500"}
                mr={2}
              />
              {`${index + 1}. ${result.question.text}`}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {result.question.options.map((option, idx) => (
              <Box
                key={idx}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                borderColor={option.isCorrect ? "green.500" : option.text === result.selectedAnswer ? "red.500" : "gray.200"}
                bg={option.isCorrect ? "green.50" : option.text === result.selectedAnswer ? "red.50" : "white"}
                mb={2}
              >
                <Text>{option.text}</Text>
                <Text mt={2} color={option.isCorrect ? "green.600" : "red.600"}>
                  {option.explanation}
                </Text>
              </Box>
            ))}
            <Text mt={4} color={result.isCorrect ? "green.500" : "red.500"} fontWeight="bold">
              {result.isCorrect ? "You've selected the correct answer, nice job!" : "Sorry, The answer you've selected is incorrect."}
            </Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default DetailedResults;

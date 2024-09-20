import {
  Box,
  Stack,
  RadioGroup,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import OptionItem from "./OptionItem";
import { QuestionDisplayProps } from "../../types";
import QuestionHeader from "./QuestionHeader";

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  questionIndex,
  selectedAnswer = "",
  showResult = false,
  onSelectAnswer,
  isResultPage = false,
}) => {
  const isCorrectAnswer = selectedAnswer === question.options.find(option => option.isCorrect)?.text;

  return (
    <Box m={2} p={2} borderWidth="1px" borderRadius="lg">
      {showResult && isResultPage ? (
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <QuestionHeader
                questionText={question.text}
                questionIndex={questionIndex}
                isCorrectAnswer={isCorrectAnswer}
                showResult={showResult}
              />
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={2}>
              {question.options.map((option, index) => (
                <OptionItem
                  key={index}
                  option={option}
                  isSelected={option.text === selectedAnswer}
                  showResult={showResult}
                  onSelectAnswer={onSelectAnswer}
                />
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ) : (
        <>
          <QuestionHeader
            questionText={question.text}
            questionIndex={questionIndex}
            isCorrectAnswer={isCorrectAnswer}
            showResult={showResult}
          />
          <RadioGroup mt={4} pb={4} value={selectedAnswer} onChange={onSelectAnswer}>
            <Stack direction="column" spacing={4}>
              {question.options.map((option, index) => (
                <OptionItem
                  key={index}
                  option={option}
                  isSelected={option.text === selectedAnswer}
                  showResult={showResult}
                  onSelectAnswer={onSelectAnswer}
                />
              ))}
            </Stack>
          </RadioGroup>
        </>
      )}
    </Box>
  );
};

export default QuestionDisplay;

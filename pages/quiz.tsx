// pages/quiz.tsx

import { useRouter } from "next/router";
import { Box, Heading, VStack, Text, RadioGroup, Radio, Stack, Button, HStack, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { Question } from "../types/quiz";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const QuizPage = () => {
  const router = useRouter();
  const { courseName, categoryName, questions } = router.query;
  const quizQuestions: Question[] = questions ? JSON.parse(questions as string) : [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    setIsCorrect(selectedAnswer === currentQuestion.correctAnswer);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer("");
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz completed!");
      router.push("/quizzes"); // Redirect back to quizzes page after completion
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <Box p={[2, 4]}>
      <Heading mb={[2, 4]} fontSize={["xl", "2xl"]}>
        {categoryName || "Comprehensive Quiz"} - {courseName}
      </Heading>
      {currentQuestion && (
        <Box p={[2, 4]} borderWidth="1px" borderRadius="lg">
          <Text fontSize={["md", "lg"]}>{currentQuestion.question}</Text>
          <RadioGroup mt={4} onChange={handleAnswerSelect} value={selectedAnswer}>
            <Stack direction="column" spacing={4}>
              {Object.keys(currentQuestion.options).map((option, index) => {
                const isAnswerCorrect = option === currentQuestion.correctAnswer;
                const icon = isAnswerCorrect ? CheckCircleIcon : CloseIcon;
                const explanationText = currentQuestion.options[option].replace(/^(Correct\.|Incorrect\.)\s*/, "");

                return (
                  <Box key={index}>
                    <Radio value={option} fontSize={["sm", "md"]}>
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
                        <Icon as={icon} color={isAnswerCorrect ? "green.500" : "red.500"} boxSize={["4", "6"]} />
                        <Text fontSize={["sm", "md"]}>{explanationText}</Text>
                      </HStack>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </RadioGroup>
          {showResult && (
            <Text mt={4} color={isCorrect ? "green.500" : "red.500"} fontSize={["sm", "md"]}>
              {isCorrect ? "Correct!" : "Incorrect!"}
            </Text>
          )}
          {!showResult ? (
            <Button mt={4} colorScheme="purple" onClick={handleSubmitAnswer} isDisabled={!selectedAnswer} size={["sm", "md"]}>
              Submit Answer
            </Button>
          ) : (
            <Button mt={4} colorScheme="purple" onClick={handleNextQuestion} size={["sm", "md"]}>
              Next Question
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default QuizPage;

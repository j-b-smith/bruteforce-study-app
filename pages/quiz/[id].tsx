import { useRouter } from "next/router";
import { Box, Heading, Button, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import QuizService from "../../services/QuizService";
import { DetailedQuestionResult } from "../../types/quiz";
import QuestionDisplay from "../../components/QuestionDisplay";

const QuizPage = () => {
  const router = useRouter();
  const { id, mode: queryMode, timer } = router.query;
  const quizId = parseInt(id as string, 10);
  const mode = queryMode as "prep" | "study";
  const quizQuestions = QuizService.getQuizById(quizId) || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [quizResults, setQuizResults] = useState<DetailedQuestionResult[]>([]);

  useEffect(() => {
    if (!quizQuestions.length) {
      router.push("/quizzes"); // Redirect if quiz is not found
    }
  }, [quizQuestions, router]);

  useEffect(() => {
    const savedResult = quizResults[currentQuestionIndex];
    if (savedResult) {
      setSelectedAnswer(savedResult.selectedAnswer);
      setShowResult(mode === "study");
    } else {
      setSelectedAnswer("");
      setShowResult(false);
    }
  }, [currentQuestionIndex, quizResults, mode]);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    const detailedResult: DetailedQuestionResult = {
      question: currentQuestion,
      selectedAnswer,
      isCorrect,
      explanation: currentQuestion.options[selectedAnswer],
    };

    const updatedResults = [...quizResults];
    updatedResults[currentQuestionIndex] = detailedResult;

    setQuizResults(updatedResults);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleSubmitQuiz(); // Automatically submit when reaching the last question
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    QuizService.saveQuizResult(quizId, {
      quizName: `Quiz ${quizId}`,
      courseName: "Sample Course", // This should be dynamic based on your data
      numCorrect: quizResults.filter(result => result.isCorrect).length,
      totalQuestions: quizQuestions.length,
      questions: quizResults,
    });

    router.push(`/quiz/${quizId}/result`); // Navigate to results page after completing the quiz
  };

  // Function to answer all questions randomly and submit the quiz
  const handleRandomAnswerAndSubmit = () => {
    const randomResults: DetailedQuestionResult[] = quizQuestions.map((question) => {
      const options = Object.keys(question.options);
      const randomAnswer = options[Math.floor(Math.random() * options.length)];
      return {
        question: question,
        selectedAnswer: randomAnswer,
        isCorrect: randomAnswer === question.correctAnswer,
        explanation: question.options[randomAnswer],
      };
    });

    setQuizResults(randomResults);

    // Simulate submitting the quiz
    QuizService.saveQuizResult(quizId, {
      quizName: `Quiz ${quizId}`,
      courseName: "Sample Course", // This should be dynamic based on your data
      numCorrect: randomResults.filter(result => result.isCorrect).length,
      totalQuestions: randomResults.length,
      questions: randomResults,
    });

    router.push(`/quiz/${quizId}/result`);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <Box p={[2, 4]}>
      <Heading mb={[2, 4]} fontSize={["xl", "2xl"]}>
        Quiz ID: {quizId}
      </Heading>
      {currentQuestion && (
        <Box p={[2, 4]} borderWidth="1px" borderRadius="lg">
          <QuestionDisplay
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            mode={mode}
            onSelectAnswer={handleAnswerSelect}
          />
          <HStack mt={4} spacing={4}>
            {currentQuestionIndex > 0 && (
              <Button colorScheme="purple" onClick={handlePreviousQuestion} size={["sm", "md"]}>
                Back
              </Button>
            )}
            {!showResult ? (
              <Button colorScheme="purple" onClick={handleSubmitAnswer} isDisabled={!selectedAnswer} size={["sm", "md"]}>
                Submit Answer
              </Button>
            ) : (
              currentQuestionIndex < quizQuestions.length - 1 ? (
                <Button colorScheme="purple" onClick={handleNextQuestion} size={["sm", "md"]}>
                  Next Question
                </Button>
              ) : (
                <Button colorScheme="green" onClick={handleSubmitQuiz} size={["sm", "md"]}>
                  Submit Quiz
                </Button>
              )
            )}
          </HStack>
          <Text mt={4} mb={2} fontSize="md">
            Question {currentQuestionIndex + 1} of {quizQuestions.length}
          </Text>
        </Box>
      )}

      {/* Button for testing - answers all questions randomly */}
      <Button mt={8} colorScheme="blue" onClick={handleRandomAnswerAndSubmit}>
        Answer All Randomly and Submit
      </Button>
    </Box>
  );
};

export default QuizPage;

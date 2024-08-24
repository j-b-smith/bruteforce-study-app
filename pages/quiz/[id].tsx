// pages/quiz/[id].tsx

import { useRouter } from "next/router";
import { Box, Heading, Button, HStack, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import QuizService from "../../services/QuizService";
import { DetailedQuestionResult } from "../../types/quiz";
import QuestionDisplay from "../../components/QuestionDisplay";
import ModeSelectionModal from "../../components/ModeSelectionModal"; // Import the modal

const QuizPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const quizId = parseInt(id as string, 10);
  const quizQuestions = QuizService.getQuizById(quizId) || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [quizResults, setQuizResults] = useState<DetailedQuestionResult[]>([]);
  const [mode, setMode] = useState<"prep" | "study">("study"); // Default mode
  const [timer, setTimer] = useState<number | undefined>(undefined); // Timer for Test Prep Mode

  const [isModeSelectionOpen, setModeSelectionOpen] = useState(true);

  useEffect(() => {
    if (!quizQuestions.length) {
      router.push("/quizzes"); // Redirect if quiz is not found
    }
  }, [quizQuestions, router]);

  const handleModeSelect = (selectedMode: "prep" | "study", selectedTimer?: number) => {
    setMode(selectedMode);
    setTimer(selectedTimer);
    if (selectedMode === "prep" && selectedTimer) {
      setTimeout(handleSubmitQuiz, selectedTimer * 1000 * 60); // Auto-submit after the timer ends
    }
    setModeSelectionOpen(false); // Close the modal and start the quiz
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    setIsAnswerCorrect(isCorrect);
    setShowResult(true);

    const detailedResult: DetailedQuestionResult = {
      question: currentQuestion, // Store the entire question object
      selectedAnswer,
      isCorrect,
      explanation: currentQuestion.options[selectedAnswer],
    };

    setQuizResults([...quizResults, detailedResult]);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer("");
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setShowResult(false);
      setSelectedAnswer("");
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    const quizResult: DetailedQuestionResult[] = quizQuestions.map((question, index) => {
      const selectedAnswer = quizResults[index]?.selectedAnswer || "";
      const isCorrect = selectedAnswer === question.correctAnswer;

      return {
        question: question, // Store the entire question object
        selectedAnswer: selectedAnswer,
        isCorrect: isCorrect,
        explanation: question.options[selectedAnswer],
      };
    });

    QuizService.saveQuizResult(quizId, {
      quizName: `Quiz ${quizId}`,
      courseName: "Sample Course", // This should be dynamic based on your data
      numCorrect: quizResult.filter(result => result.isCorrect).length,
      totalQuestions: quizResult.length,
      questions: quizResult,
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
            mode={mode} // Pass mode to the QuestionDisplay component
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

      {/* Mode Selection Modal */}
      <ModeSelectionModal
        isOpen={isModeSelectionOpen}
        onClose={() => setModeSelectionOpen(false)}
        onModeSelect={handleModeSelect}
      />
    </Box>
  );
};

export default QuizPage;

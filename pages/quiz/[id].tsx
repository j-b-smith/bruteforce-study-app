import { useRouter } from "next/router";
import { Box, Heading, Button } from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import QuizService from "../../services/QuizService";
import { DetailedQuestionResult } from "../../types/quiz";
import QuestionDisplay from "../../components/question/QuestionDisplay";
import QuestionNavigation from "../../components/question/QuestionNavigation";
import QuizSummary from "../../components/question/QuizSummary";

const QuizPage = () => {
  const router = useRouter();
  const { id, mode: queryMode } = router.query;
  const quizId = parseInt(id as string, 10);
  const mode = queryMode as "prep" | "study";

  // Memoize quizQuestions to avoid recalculating on every render
  const quizQuestions = useMemo(() => QuizService.getQuizById(quizId) || [], [quizId]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [quizResults, setQuizResults] = useState<DetailedQuestionResult[]>([]);

  useEffect(() => {
    if (!quizQuestions.length) {
      router.push("/quizzes");
    }
  }, [quizQuestions, router]);

  useEffect(() => {
    const savedResult = quizResults[currentQuestionIndex];
    if (savedResult) {
      setSelectedAnswer(savedResult.selectedAnswer);
      setShowResult(true);
    } else {
      setSelectedAnswer("");
      setShowResult(false);
    }
  }, [currentQuestionIndex, quizResults]);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleSubmitAnswer = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find((option) => option.text === selectedAnswer);
    const isCorrect = selectedOption?.isCorrect ?? false;

    const detailedResult: DetailedQuestionResult = {
      question: currentQuestion,
      selectedAnswer,
      isCorrect,
      explanation: selectedOption?.explanation || "",
    };

    const updatedResults = [...quizResults];
    updatedResults[currentQuestionIndex] = detailedResult;

    setQuizResults(updatedResults);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowResult(false);
    } else {
      handleSubmitQuiz();
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
      courseName: "Sample Course",
      numCorrect: quizResults.filter((result) => result.isCorrect).length,
      totalQuestions: quizQuestions.length,
      questions: quizResults,
    });

    router.push(`/quiz/${quizId}/result`);
  };

  const handleRandomAnswerAndSubmit = () => {
    const randomResults: DetailedQuestionResult[] = quizQuestions.map((question) => {
      if (question.options.length === 0) {
        return {
          question: question,
          selectedAnswer: "",
          isCorrect: false,
          explanation: "No options available.",
        };
      }

      const randomOption = question.options[Math.floor(Math.random() * question.options.length)];

      return {
        question: question,
        selectedAnswer: randomOption.text,
        isCorrect: randomOption.isCorrect,
        explanation: randomOption.explanation || "No explanation provided.",
      };
    });

    setQuizResults(randomResults);

    QuizService.saveQuizResult(quizId, {
      quizName: `Quiz ${quizId}`,
      courseName: "Sample Course",
      numCorrect: randomResults.filter((result) => result.isCorrect).length,
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
            questionIndex={currentQuestionIndex}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            onSelectAnswer={handleAnswerSelect}
            isResultPage={false}
          />
          <QuestionNavigation
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={quizQuestions.length}
            showResult={showResult}
            onPrevious={handlePreviousQuestion}
            onNext={handleNextQuestion}
            onSubmit={handleSubmitAnswer}
            onSubmitQuiz={handleSubmitQuiz}
            selectedAnswer={selectedAnswer}
          />
          <QuizSummary currentQuestionIndex={currentQuestionIndex} totalQuestions={quizQuestions.length} />
        </Box>
      )}

      <Button mt={8} colorScheme="blue" onClick={handleRandomAnswerAndSubmit}>
        Answer All Randomly and Submit
      </Button>
    </Box>
  );
};

export default QuizPage;

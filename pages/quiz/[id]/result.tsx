import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Select,
  Icon,
} from "@chakra-ui/react";
import QuizService from "../../../services/QuizService";
import { QuizResult } from "../../../types/quiz";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";

const QuizResultPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const quizId = parseInt(id as string, 10);

  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number[]>([]);
  const [filter, setFilter] = useState<"All" | "Correct" | "Incorrect">("All");

  useEffect(() => {
    const results = QuizService.getQuizResultsById(quizId);
    if (results.length > 0) {
      setQuizResult(results[results.length - 1]); // Show the latest result
    } else {
      router.push("/quizzes"); // Redirect if no results found
    }
  }, [quizId, router]);

  const toggleExpandAll = () => {
    if (expandedIndex.length === quizResult?.questions.length) {
      setExpandedIndex([]); // Collapse all
    } else {
      setExpandedIndex(quizResult?.questions.map((_, idx) => idx) || []); // Expand all
    }
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as "All" | "Correct" | "Incorrect");
  };

  const filteredQuestions = quizResult?.questions.filter((result) => {
    if (filter === "Correct") return result.isCorrect;
    if (filter === "Incorrect") return !result.isCorrect;
    return true; // All questions
  });

  const renderCategoryStats = () => {
    if (!quizResult || quizResult.questions.length === 0) return null;

    const categoryStats: Record<string, { correct: number; total: number }> = {};

    quizResult.questions.forEach((result) => {
      const categoryName = result.question.category;

      if (!categoryStats[categoryName]) {
        categoryStats[categoryName] = { correct: 0, total: 0 };
      }
      categoryStats[categoryName].total++;
      if (result.isCorrect) {
        categoryStats[categoryName].correct++;
      }
    });

    return Object.entries(categoryStats).map(([category, stats], index) => {
      const correctPercentage = Math.floor((stats.correct / stats.total) * 100);
      const incorrectPercentage = 100 - correctPercentage;

      return (
        <Box key={index} mb={4}>
          <Text fontWeight="bold">{category}</Text>
          <HStack align="center" spacing={4}>
            <Text>Correct:</Text>
            <Progress value={correctPercentage} colorScheme="green" size="sm" flex={1} />
            <Text>{stats.correct}/{stats.total} ({correctPercentage}%)</Text>
          </HStack>
          <HStack align="center" spacing={4} mt={2}>
            <Text>Incorrect:</Text>
            <Progress value={incorrectPercentage} colorScheme="red" size="sm" flex={1} />
            <Text>{stats.total - stats.correct}/{stats.total} ({incorrectPercentage}%)</Text>
          </HStack>
        </Box>
      );
    });
  };

  const renderCircularProgress = () => {
    if (!quizResult) return null;

    const correctPercentage = Math.floor((quizResult.numCorrect / quizResult.totalQuestions) * 100);

    return (
      <CircularProgress value={correctPercentage} color="green.400" size="120px">
        <CircularProgressLabel>
          {correctPercentage}%
        </CircularProgressLabel>
      </CircularProgress>
    );
  };

  return (
    <Box p={[2, 4]}>
      <Heading mb={[2, 4]} fontSize={["xl", "2xl"]}>
        Quiz Results
      </Heading>
      {quizResult && (
        <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
          <HStack justifyContent="space-between">
            <VStack align="flex-start">
              <Text fontWeight="bold">Quiz Name: {quizResult.quizName}</Text>
              <Text>Course Name: {quizResult.courseName}</Text>
              <Text>Score: {quizResult.numCorrect} / {quizResult.totalQuestions}</Text>
            </VStack>
            <VStack>
              {renderCircularProgress()}
            </VStack>
          </HStack>
        </Box>
      )}

      {quizResult && quizResult.questions.length > 0 && (
        <SimpleGrid columns={[1, 2]} spacing={4} minH="600px">
          {/* Detailed Results (3/5) */}
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            overflowY="auto"
            flex="3"
            minW="60%"
            maxH="70vh" // Limit the height of this container
          >
            <HStack justifyContent="space-between" alignItems="center" mb={4}>
              <Heading as="h4" size="md">
                Detailed Results
              </Heading>
              <HStack>
                <Select size="sm" value={filter} onChange={handleFilterChange} width="140px">
                  <option value="All">All Questions</option>
                  <option value="Correct">Correct</option>
                  <option value="Incorrect">Incorrect</option>
                </Select>
                <Button size="sm" width="140px" onClick={toggleExpandAll}>
                  {expandedIndex.length === quizResult.questions.length ? "Collapse Recursively" : "Expand Recursively"}
                </Button>
              </HStack>
            </HStack>
            <Accordion allowMultiple index={expandedIndex} onChange={(indices) => setExpandedIndex(indices as number[])}>
              {filteredQuestions?.map((result, index) => (
                <AccordionItem key={index}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" display="flex" alignItems="center">
                      <Icon
                        as={result.isCorrect ? CheckCircleIcon : CloseIcon}
                        color={result.isCorrect ? "green.500" : "red.500"}
                        mr={2}
                      />
                      {`${index + 1}. ${result.question.question}`}
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
                        borderColor={option.isCorrect ? "green.500" : option.answerText === result.selectedAnswer ? "red.500" : "gray.200"}
                        bg={option.isCorrect ? "green.50" : option.answerText === result.selectedAnswer ? "red.50" : "white"}
                        mb={2}
                      >
                        <HStack>
                          <Icon
                            as={option.isCorrect ? CheckCircleIcon : CloseIcon}
                            color={option.isCorrect ? "green.500" : "red.500"}
                          />
                          <Text>{option.answerText}</Text>
                        </HStack>
                        <Text mt={2} color={option.isCorrect ? "green.600" : "red.600"}>
                          {option.explanationText}
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
          </Box>

          {/* Stats (2/5) */}
          <Box
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            minW="40%"
            flex="2"
            h="100%"
            maxH="70vh" // Limit the height of this container
            overflowY="auto" // Enable scrolling
          >
            {renderCategoryStats()}
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
};

export default QuizResultPage;

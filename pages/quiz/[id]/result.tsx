import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, HStack, Select, Button } from "@chakra-ui/react";
import QuizService from "../../../services/QuizService";
import { QuizResult } from "../../../types/quiz";
import QuizResultHeader from "../../../components/quiz/result/QuizResultHeader";
import DetailedResults from "../../../components/quiz/result/DetailedResults";
import CategoryStats from "../../../components/quiz/result/CategoryStats";


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

  return (
    <Box p={[2, 4]}>
      <Heading mb={[2, 4]} fontSize={["xl", "2xl"]}>
        Quiz Results
      </Heading>
      {quizResult && (
        <>
          <QuizResultHeader quizResult={quizResult} />
          <SimpleGrid columns={[1, 2]} spacing={4} minH="600px">
            <DetailedResults
              filteredQuestions={filteredQuestions || []}
              expandedIndex={expandedIndex}
              setExpandedIndex={setExpandedIndex}
            />
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              minW="40%"
              flex="2"
              h="100%"
              maxH="70vh"
              overflowY="auto" // Enable scrolling
            >
              <CategoryStats quizResult={quizResult} />
            </Box>
          </SimpleGrid>
        </>
      )}
    </Box>
  );
};

export default QuizResultPage;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
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

  useEffect(() => {
    const results = QuizService.getQuizResultsById(quizId);
    if (results.length > 0) {
      setQuizResult(results[results.length - 1]); // Show the latest result
    } else {
      router.push("/quizzes"); // Redirect if no results found
    }
  }, [quizId, router]);

  const filteredQuestions = quizResult?.questions;

  return (
    <Box p={[2, 4]} height="calc(100vh - 4rem)" display="flex" flexDirection="column">
      <Heading mb={[2, 4]} mt={2} fontSize={["xl", "2xl"]}>
        Quiz Results
      </Heading>
      {quizResult && (
        <>
          <QuizResultHeader quizResult={quizResult} />
          {/* Adjusting the grid layout based on screen size */}
          <SimpleGrid columns={[1, null, 2]} spacing={4} flex="1" overflow="hidden">
            {/* Detailed Results */}
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              minW="100%" // Full width on mobile, flex on larger screens
              flex="2"
              h="100%"
              overflowY="auto"
              maxH="80vh" // Adjust to ensure it fits within the viewport
            >
              <DetailedResults
                filteredQuestions={filteredQuestions || []}
                expandedIndex={expandedIndex}
                setExpandedIndex={setExpandedIndex}
              />
            </Box>

            {/* Category Stats */}
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              minW="100%" // Full width on mobile, flex on larger screens
              flex="2"
              maxH="80vh" // Adjust to ensure it fits within the viewport
              overflowY="auto" // Enable scrolling within the box
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

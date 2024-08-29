import { Box, Text, HStack, Progress } from "@chakra-ui/react";
import { QuizResult } from "../../../types/quiz";

interface CategoryStatsProps {
  quizResult: QuizResult;
}

const CategoryStats: React.FC<CategoryStatsProps> = ({ quizResult }) => {
  const categoryStats: Record<string, { correct: number; total: number }> = {};

  quizResult.questions.forEach((result) => {
    const categoryName = result.question.categoryName;

    if (!categoryStats[categoryName]) {
      categoryStats[categoryName] = { correct: 0, total: 0 };
    }
    categoryStats[categoryName].total++;
    if (result.isCorrect) {
      categoryStats[categoryName].correct++;
    }
  });

  return (
    <>
      {Object.entries(categoryStats).map(([category, stats], index) => {
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
      })}
    </>
  );
};

export default CategoryStats;

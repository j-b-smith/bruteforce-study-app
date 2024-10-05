import { Box, Heading } from "@chakra-ui/react";
import { useCourseContext } from "../contexts/CourseProvider";
import { useRouter } from "next/router";
import QuizService from "../services/QuizService";
import TestGenerator from "../services/TestGenerator";
import CourseSetList from "../components/common/CourseSetList";
import { Category } from "../types/quiz";

const Quizzes = () => {
  const { courses } = useCourseContext();
  const router = useRouter();

  const handleSelectQuizSet = (selectedCategories: Category[]) => {
    if (selectedCategories.length === 0) return;

    const course = courses.find((course) =>
      selectedCategories.every((category) =>
        course.categories.some((c) => c.name === category.name)
      )
    );

    if (!course) return;

    const testGenerator = new TestGenerator([course]);
    let quizQuestions = [];

    if (selectedCategories.length === 1) {
      quizQuestions = testGenerator.generateCategoryQuiz(
        course.name,
        selectedCategories[0].name
      );
    } else {
      const selectedCategoryNames = selectedCategories.map(
        (category) => category.name
      );
      quizQuestions = testGenerator.generateCustomQuiz(
        course.name,
        selectedCategoryNames
      );
    }

    const quizId = QuizService.storeQuiz(quizQuestions);

    router.push({
      pathname: `/quiz/${quizId}`,
    });
  };

  return (
    <Box p={[4, 4, 8]} mt={4} bg="white" _dark={{ bg: "gray.700" }} borderRadius="md" boxShadow="lg">
      {/* Header */}
      <Box
        bg="purple.500"
        color="white"
        borderRadius="md"
        py={4}
        textAlign="center"
        mb={6}
        mt={[8, 0]}
        boxShadow="md"
      >
        <Heading as="h2" size="lg" fontSize={["lg", "xl", "2xl"]} fontWeight="bold">
          Quizzes
        </Heading>
      </Box>

      {/* Use CourseSetList to render quizzes */}
      <CourseSetList
        courses={courses}
        actionLabel="Take Quiz"       
        tagLabel="Questions"
        onAction={handleSelectQuizSet}
      />
    </Box>
  );
};

export default Quizzes;

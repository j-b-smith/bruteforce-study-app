import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, VStack } from "@chakra-ui/react";
import { useCourseContext } from "../contexts/CourseProvider";
import CourseCategoryList from "../components/common/CourseCategoryList";  // Import the common component
import QuizService from "../services/QuizService";
import TestGenerator from "../services/TestGenerator";
import { useRouter } from "next/router";
import { Category } from "../types/quiz";

const Quizzes = () => {
  const { courses } = useCourseContext();
  const router = useRouter();

  const handleSelectQuizSet = (selectedCategories: Category[]) => {
    if (selectedCategories.length === 0) return;

    // Determine the course that these categories belong to
    const course = courses.find(course => 
      selectedCategories.every(category => 
        course.categories.some(c => c.name === category.name)
      )
    );

    if (!course) return; // If the course is not found, return early

    const testGenerator = new TestGenerator([course]);

    let quizQuestions = [];
    if (selectedCategories.length === 1) {
      // Generate a quiz for the specific category
      quizQuestions = testGenerator.generateCategoryQuiz(course.name, selectedCategories[0].name);
    } else {
      // Generate a quiz for the selected categories
      const selectedCategoryNames = selectedCategories.map(category => category.name);
      quizQuestions = testGenerator.generateCustomQuiz(course.name, selectedCategoryNames);
    }

    // Store the quiz and retrieve its ID
    const quizId = QuizService.storeQuiz(quizQuestions);

    // Navigate to the quiz page
    router.push({
      pathname: `/quiz/${quizId}`
    });
  };

  return (
    <Box p={[2, 4]}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab fontSize={["sm", "md"]}>Take a Quiz</Tab>
          <Tab fontSize={["sm", "md"]}>Quiz Results</Tab>
          <Tab fontSize={["sm", "md"]}>Create Custom Quiz</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <CourseCategoryList 
                courses={courses} 
                actionLabel="Take Quiz"
                onAction={handleSelectQuizSet} 
              />
            </VStack>
          </TabPanel>
          <TabPanel>
            {/* QuizResultsTab Component */}
          </TabPanel>
          <TabPanel>
            {/* CreateCustomTestTab Component */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Quizzes;

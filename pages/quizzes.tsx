import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import QuizService from "../services/QuizService";
import { Course } from "../types/quiz";
import TakeQuizTab from "../components/tabs/TakeQuizTab";
import QuizResultsTab from "../components/tabs/QuizResultsTab";
import CreateCustomTestTab from "../components/tabs/CreateCustomTestTab";

const Quizzes = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const allCourses = QuizService.getAllCourses();
    setCourses(allCourses);
  }, []);

  return (
    <Box p={[2, 4]}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab fontSize={["sm", "md"]}>Take a Quiz</Tab>
          <Tab fontSize={["sm", "md"]}>Quiz Results</Tab>
          <Tab fontSize={["sm", "md"]}>Create Custom Test</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TakeQuizTab courses={courses} />
          </TabPanel>
          <TabPanel>
            <QuizResultsTab />
          </TabPanel>
          <TabPanel>
            <CreateCustomTestTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Quizzes;

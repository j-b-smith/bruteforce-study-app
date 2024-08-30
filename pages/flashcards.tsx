import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, VStack } from "@chakra-ui/react";
import { useState } from "react";
import FlashcardStudyArea from "../components/flashcard/FlashcardStudyArea";
import { Flashcard as FlashcardType, Category } from "../types";
import { useCourseContext } from "../contexts/CourseProvider";
import CourseCategoryList from "../components/common/CourseCategoryList";

const Flashcards = () => {
  const { courses } = useCourseContext();
  const [selectedFlashcards, setSelectedFlashcards] = useState<FlashcardType[]>([]);
  const [isStudying, setIsStudying] = useState(false);

  const handleSelectFlashcardSet = (categories: Category[]) => {
    const flashcards = categories.flatMap(category => category.flashcards);
    setSelectedFlashcards(flashcards);
    setIsStudying(true);
  };

  const handleReturnToSets = () => {
    setIsStudying(false);
  };

  return (
    <Box p={[2, 4]}>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab fontSize={["sm", "md"]}>Study Flashcards</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {!isStudying ? (
              <VStack spacing={4} align="stretch">
                <CourseCategoryList 
                  courses={courses} 
                  actionLabel="Study"
                  onAction={handleSelectFlashcardSet} 
                />
              </VStack>
            ) : (
              <FlashcardStudyArea flashcards={selectedFlashcards} onReturnToSets={handleReturnToSets} />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Flashcards;

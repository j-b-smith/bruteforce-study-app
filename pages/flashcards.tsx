import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import FlashcardStudyArea from "../components/flashcard/FlashcardStudyArea";
import { Category, Flashcard } from "../types";
import { useCourseContext } from "../contexts/CourseProvider";
import CourseSetList from "../components/common/CourseSetList";

const Flashcards = () => {
  const { courses } = useCourseContext();
  const [selectedFlashcards, setSelectedFlashcards] = useState<Flashcard[]>([]);
  const [isStudying, setIsStudying] = useState(false);

  // Handler for selecting a flashcard set
  const handleSelectFlashcardSet = (categories: Category[]) => {
    const flashcards = categories.flatMap((category) => category.flashcards);
    setSelectedFlashcards(flashcards);
    setIsStudying(true);
  };

  const handleReturnToSets = () => {
    setIsStudying(false);
  };

  return (
    <Box p={[4, 4, 8]} mt={4} bg="white" _dark={{ bg: "gray.700" }} borderRadius="md" boxShadow="lg">
      {/* Header Styling */}
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
          Flashcards
        </Heading>
      </Box>

      {!isStudying ? (
        <CourseSetList
          courses={courses}                
          actionLabel="Study"              
          onAction={handleSelectFlashcardSet} 
        />
      ) : (
        <FlashcardStudyArea
          flashcards={selectedFlashcards}
          onReturnToSets={handleReturnToSets}
        />
      )}
    </Box>
  );
};

export default Flashcards;

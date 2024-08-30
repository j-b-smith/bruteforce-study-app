import { useState, useEffect } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import Flashcard from "./Flashcard";
import FlashcardNavigation from "./FlashcardNavigation";
import { Flashcard as FlashcardType } from "../../types/flashcard";

interface FlashcardStudyAreaProps {
  flashcards: FlashcardType[];
  onReturnToSets: () => void;
}

const FlashcardStudyArea: React.FC<FlashcardStudyAreaProps> = ({ flashcards, onReturnToSets }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setCurrentIndex(0); // Reset to the first flashcard when flashcards prop changes
  }, [flashcards]);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false); // Ensure the next card starts on the front
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false); // Ensure the previous card starts on the front
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const currentFlashcard = flashcards[currentIndex];

  return (
    <Box p={4} position="relative">
      <Button
        size="sm"
        colorScheme="purple"
        onClick={onReturnToSets}
        position="absolute"
        top="10px"
        left="10px"
        zIndex="1"
        padding="0.5rem"
        fontSize="0.8rem"
        borderRadius="md"
      >
        Return to Sets
      </Button>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <Flashcard
          front={currentFlashcard.front}
          back={currentFlashcard.back}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />
      </Box>
      <FlashcardNavigation
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentIndex={currentIndex}
        total={flashcards.length}
      />
    </Box>
  );
};

export default FlashcardStudyArea;

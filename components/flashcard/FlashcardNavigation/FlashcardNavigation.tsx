import React from "react";
import { Button, HStack } from "@chakra-ui/react";

interface FlashcardNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
  isFlipped: boolean;
  onFlip: () => void;
}

const FlashcardNavigation: React.FC<FlashcardNavigationProps> = ({
  onPrevious,
  onNext,
  currentIndex,
  total,
  isFlipped,
  onFlip,
}) => {
  const handleNextClick = () => {
    if (isFlipped) {
      onNext();
    } else {
      onFlip();
    }
  };

  return (
    <HStack spacing={4} justifyContent="center" mt={4}>
      <Button
        colorScheme="purple"
        onClick={onPrevious}
        isDisabled={currentIndex === 0}
      >
        Previous
      </Button>
      <Button
        colorScheme="purple"
        onClick={handleNextClick}
        isDisabled={currentIndex === total - 1 && isFlipped}
      >
        Next
      </Button>
    </HStack>
  );
};

export default FlashcardNavigation;

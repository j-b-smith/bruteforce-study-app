import React from "react";
import { Button, HStack } from "@chakra-ui/react";

interface FlashcardNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

const FlashcardNavigation: React.FC<FlashcardNavigationProps> = ({
  onPrevious,
  onNext,
  currentIndex,
  total,
}) => {
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
        onClick={onNext}
        isDisabled={currentIndex === total - 1}
      >
        Next
      </Button>
    </HStack>
  );
};

export default FlashcardNavigation;

import { Box, Text, Button } from "@chakra-ui/react";
import React from "react";

interface FlashcardProps {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ front, back, isFlipped, onFlip }) => {
  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      maxW={["280px", "300px", "400px"]}
      height="200px"
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      onClick={onFlip}
      backgroundColor="white"
      transition="transform 0.6s ease"
    >
      <Text fontSize={["sm", "md", "lg"]} noOfLines={6} lineHeight="1.5">
        {isFlipped ? back : front}
      </Text>
    </Box>
  );
};

export default Flashcard;

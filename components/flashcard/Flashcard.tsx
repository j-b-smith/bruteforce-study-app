import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface FlashcardProps {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: () => void;
}

// Helper function to format the back content
const formatBackContent = (back: string) => {
  const bulletSymbol = "•";

  // Split by the bullet point, keeping the bullet point with the text
  const backContent = back.split(bulletSymbol).map((item, index) => (
    <React.Fragment key={index}>
      {index === 0 ? null : <br />} {/* Add line break before all but the first bullet */}
      {index > 0 && bulletSymbol} {/* Add bullet symbol back except for the first item */}
      {item.trim()}
    </React.Fragment>
  ));

  return backContent;
};

// Helper function to check if back content contains bullets
const containsBullets = (back: string) => back.includes("•");

const Flashcard: React.FC<FlashcardProps> = ({ front, back, isFlipped, onFlip }) => {
  const cardStyles = {
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.3s ease',
    perspective: '1000px'
  };

  const textAlign = isFlipped && containsBullets(back) ? "left" : "center"; // Front is always centered, back adjusts if bullets
  const paddingLeft = isFlipped && containsBullets(back) ? "1rem" : "0"; // Add left padding only if back content contains bullets

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      textAlign={textAlign}
      paddingLeft={paddingLeft}
      maxW={["17.5rem", "18.75rem", "25rem"]}
      minW={["15rem", "18.75rem", "25rem"]}
      maxH={["20rem", "25rem", "25rem"]}
      minH={["12rem", "25rem", "25rem"]}
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      onClick={onFlip}
      backgroundColor="white"
      style={cardStyles} // Apply flipping styles
    >
      <Text fontSize={["sm", "md", "lg"]} noOfLines={6} lineHeight="1.5" style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        {isFlipped ? formatBackContent(back) : front}
      </Text>
    </Box>
  );
};

export default Flashcard;

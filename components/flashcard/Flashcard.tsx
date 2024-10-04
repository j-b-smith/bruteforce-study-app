import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";

interface FlashcardProps {
  front: string;
  back: string;
  isFlipped: boolean;
  onFlip: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ front, back, isFlipped, onFlip }) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const textRef = useRef<HTMLDivElement>(null); // Reference to the text container
  const [textSize, setTextSize] = useState("lg"); // State to dynamically adjust text size

  useEffect(() => {
    // Dynamically reduce font size if the text is overflowing
    const adjustFontSize = () => {
      if (textRef.current) {
        const { scrollHeight, clientHeight } = textRef.current;
        if (scrollHeight > clientHeight) {
          setTextSize("md"); // Reduce size if text overflows
        } else {
          setTextSize("lg"); // Reset to default size
        }
      }
    };

    adjustFontSize(); // Check initially
    window.addEventListener("resize", adjustFontSize); // Re-check on window resize

    return () => {
      window.removeEventListener("resize", adjustFontSize); // Cleanup on unmount
    };
  }, [isFlipped]); // Re-run when card is flipped

  return (
    <Box
      onClick={onFlip}
      p={[6, 8]}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      textAlign="center"
      backgroundColor={cardBg}
      color={textColor}
      borderColor={borderColor}
      w={["80vw", "60vw", "400px"]} // Fixed width for responsiveness
      h={["40vh", "50vh", "250px"]} // Fixed height for responsiveness
      maxW="400px"
      maxH="250px"
      mx="auto"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      transition="all 0.2s ease-in-out"
      _hover={{ boxShadow: "xl" }}
    >
      <Text
        ref={textRef} // Attach ref to track overflow
        fontSize={textSize} // Dynamically adjust font size
        fontWeight="medium"
        lineHeight="1.5"
        overflow="hidden"
        whiteSpace="normal"
        overflowWrap="break-word"
        textOverflow="ellipsis"
        noOfLines={6} // Limit number of lines
      >
        {isFlipped ? back : front}
      </Text>
    </Box>
  );
};

export default Flashcard;

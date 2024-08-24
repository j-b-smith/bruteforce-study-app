// components/CourseCard.tsx

import { Box, Heading, Text, Button, VStack, Collapse, useDisclosure, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Category } from "../types/quiz";

interface CourseCardProps {
  courseName: string;
  description: string;
  categories: Category[];
  onStartQuiz: (courseName: string, categoryName?: string) => void;
}

const CourseCard = ({ courseName, description, categories, onStartQuiz }: CourseCardProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      p={[2, 4]}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      mb={[2, 4]}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading fontSize={["lg", "xl"]}>{courseName}</Heading>
          <Text mt={2} fontSize={["sm", "md"]}>{description}</Text>
        </Box>
        <IconButton
          aria-label="Toggle Categories"
          icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          onClick={onToggle}
          variant="ghost"
          size={["sm", "md"]}
        />
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <VStack spacing={4} mt={4} align="stretch">
          {categories.map((category, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="lg">
              <Heading fontSize={["md", "lg"]}>{category.categoryName}</Heading>
              <Button mt={2} colorScheme="purple" size={["sm", "md"]} onClick={() => onStartQuiz(courseName, category.categoryName)}>
                Take this Quiz
              </Button>
            </Box>
          ))}
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <Heading fontSize={["md", "lg"]}>Comprehensive Quiz</Heading>
            <Button mt={2} colorScheme="purple" size={["sm", "md"]} onClick={() => onStartQuiz(courseName)}>
              Take Comprehensive Quiz
            </Button>
          </Box>
        </VStack>
      </Collapse>
    </Box>
  );
};

export default CourseCard;

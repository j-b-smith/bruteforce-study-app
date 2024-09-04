import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Button,
    Text,
    Stack,
  } from "@chakra-ui/react";
  import { Course, Flashcard } from "../../types";
  
  interface FlashcardListTabProps {
    courses: Course[];
    onSelectFlashcardSet: (flashcards: Flashcard[]) => void;
  }
  
  const FlashcardListTab: React.FC<FlashcardListTabProps> = ({ courses, onSelectFlashcardSet }) => {
    return (
      <Box p={4}>
        <Accordion allowMultiple>
          {courses.map((course, courseIndex) => (
            <AccordionItem key={courseIndex}>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {course.name}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <Stack spacing={4}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Text fontWeight="bold">All Flashcards</Text>
                    <Button
                      size="sm"
                      colorScheme="purple"
                      onClick={() => onSelectFlashcardSet(course.categories.flatMap(category => category.flashcards))}
                    >
                      Study
                    </Button>
                  </Box>
                  <Accordion allowMultiple>
                    {course.categories.map((category, categoryIndex) => (
                      <AccordionItem key={categoryIndex}>
                        <AccordionButton>
                          <Box flex="1" textAlign="left">
                            {category.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Text>{category.name}</Text>
                            <Button
                              size="sm"
                              colorScheme="purple"
                              onClick={() => onSelectFlashcardSet(category.flashcards)}
                            >
                              Study
                            </Button>
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    );
  };
  
  export default FlashcardListTab;
  
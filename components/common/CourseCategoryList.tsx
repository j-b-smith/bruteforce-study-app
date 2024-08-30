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
    Heading,
  } from "@chakra-ui/react";
  import { Course, Category } from "../../types";
  
  interface CourseCategoryListProps {
    courses: Course[];
    actionLabel: string;
    onAction: (categoryItems: Category[]) => void;
  }
  
  const CourseCategoryList: React.FC<CourseCategoryListProps> = ({
    courses,
    actionLabel,
    onAction,
  }) => {
    return (
      <Box p={4}>
        <Heading size="md" mb={4}>
          Select {actionLabel}
        </Heading>
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
                    <Text fontWeight="bold">All {actionLabel}</Text>
                    <Button
                      size="sm"
                      colorScheme="purple"
                      onClick={() => onAction(course.categories)}
                    >
                      {actionLabel}
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
                              onClick={() => onAction([category])}
                            >
                              {actionLabel}
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
  
  export default CourseCategoryList;
  
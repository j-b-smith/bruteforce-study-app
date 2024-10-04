import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Button,
  Text,
  Tag,
  useColorModeValue,
  Flex,
  StackDivider,
} from "@chakra-ui/react";
import { Course, Category } from "../../types";

interface CourseSetListProps {
  courses: Course[];
  actionLabel: string;
  onAction: (setItems: Category[]) => void;
}

const CourseSetList: React.FC<CourseSetListProps> = ({
  courses,
  actionLabel,
  onAction,
}) => {
  // Color mode variables
  const expandedBgColor = useColorModeValue("purple.100", "purple.900");
  const panelBgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Accordion allowToggle>
      {courses.map((course) => (
        <AccordionItem key={course.name}>
          <h2>
            <AccordionButton
              _expanded={{ bg: expandedBgColor }} // Expanded background color
              fontSize={["sm", "md"]}
              py={4}
            >
              <Box flex="1" textAlign="left" fontWeight="bold" fontSize="lg">
                {course.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg={panelBgColor}>
            <VStack
              spacing={6}
              align="stretch"
              divider={<StackDivider borderColor="gray.300" />}
            >
              {course.categories.map((category) => (
                <Box
                  key={category.name}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py={4}
                  px={6}
                  borderRadius="lg"
                  bg="gray.100"
                  _hover={{ bg: "gray.200" }}
                  flexDirection={["column", "row"]} // Stacks on mobile
                >
                  <Flex
                    flexDirection={["column", "row"]}
                    width="100%"
                    alignItems={["flex-start", "center"]}
                    justifyContent="space-between"
                  >
                    <Text fontSize={["sm", "md"]} fontWeight="semibold" mb={[2, 0]}>
                      {category.name}
                    </Text>

                    <Tag
                      bg="purple.200"
                      color="purple.900"
                      size="lg"
                      mb={[4, 0]}
                      mr={[0, 12]}
                      width={["full", "auto"]} // Full width on mobile, auto on desktop
                      textAlign="center"
                      py={2}
                    >
                      {category.flashcards?.length || 0} {actionLabel}
                    </Tag>
                  </Flex>

                  <Button
                    colorScheme="purple"
                    size="lg"
                    width={["full", "auto"]}
                    px={8}
                    py={6}
                    boxShadow="md"
                    borderRadius="full"
                    onClick={() => onAction([category])}
                  >
                    {actionLabel}
                  </Button>
                </Box>
              ))}
            </VStack>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CourseSetList;

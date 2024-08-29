import { Box, Checkbox, CheckboxGroup, VStack, Stack } from "@chakra-ui/react";
import { QuizFilterProps } from "../types/quiz";

const QuizFilter = ({
  courses,
  selectedCourses,
  selectedCategories,
  onCourseSelect,
  onCategorySelect,
}: QuizFilterProps) => {
  return (
    <VStack spacing={4} align="stretch">
      <CheckboxGroup
        colorScheme="purple"
        value={selectedCourses}
        onChange={onCourseSelect}
      >
        <Stack spacing={4}>
          {courses.map((course, index) => (
            <Box key={index}>
              <Checkbox value={course.name}>
                {course.name}
              </Checkbox>
              <CheckboxGroup
                colorScheme="purple"
                value={selectedCategories}
                onChange={onCategorySelect}
              >
                <Stack spacing={4} pl={6} mt={2}>
                  {course.categories.map((category, catIndex) => (
                    <Checkbox key={catIndex} value={category.name}>
                      {category.name}
                    </Checkbox>
                  ))}
                </Stack>
              </CheckboxGroup>
            </Box>
          ))}
        </Stack>
      </CheckboxGroup>
    </VStack>
  );
};

export default QuizFilter;

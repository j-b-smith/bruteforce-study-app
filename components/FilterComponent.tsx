import { Box, Checkbox, CheckboxGroup, VStack, Stack } from "@chakra-ui/react";
import { Course } from "../types/quiz";

interface FilterComponentProps {
  courses: Course[];
  selectedCourses: string[];
  selectedCategories: string[];
  onCourseSelect: (selected: string[]) => void;
  onCategorySelect: (selected: string[]) => void;
}

const FilterComponent = ({
  courses,
  selectedCourses,
  selectedCategories,
  onCourseSelect,
  onCategorySelect,
}: FilterComponentProps) => {
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
              <Checkbox value={course.courseName}>
                {course.courseName}
              </Checkbox>
              <CheckboxGroup
                colorScheme="purple"
                value={selectedCategories}
                onChange={onCategorySelect}
              >
                <Stack spacing={4} pl={6} mt={2}>
                  {course.categories.map((category, catIndex) => (
                    <Checkbox key={catIndex} value={category.categoryName}>
                      {category.categoryName}
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

export default FilterComponent;

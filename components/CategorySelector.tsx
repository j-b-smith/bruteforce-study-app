import { VStack, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { CategorySelectorProps } from "../types";

const CategorySelector = ({
  categories,
  selectedCategories,
  onCategorySelect,
}: CategorySelectorProps) => {
  return (
    <VStack spacing={4} align="stretch">
      <CheckboxGroup
        colorScheme="purple"
        value={selectedCategories}
        onChange={onCategorySelect}
      >
        <Stack spacing={4}>
          {categories.map((category, index) => (
            <Checkbox key={index} value={category.name}>
              {category.name}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </VStack>
  );
};

export default CategorySelector;

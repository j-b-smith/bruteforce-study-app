// components/CategorySelector.tsx

import { VStack, Checkbox, CheckboxGroup, Stack } from "@chakra-ui/react";
import { Category } from "../types/quiz";

interface CategorySelectorProps {
  categories: Category[];
  selectedCategories: string[];
  onCategorySelect: (selected: string[]) => void;
}

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
            <Checkbox key={index} value={category.categoryName}>
              {category.categoryName}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </VStack>
  );
};

export default CategorySelector;

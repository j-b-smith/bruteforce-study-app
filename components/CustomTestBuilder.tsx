// components/CustomTestBuilder.tsx

import { VStack, Heading, Box, Checkbox, Button } from "@chakra-ui/react";
import { Category, Question } from "../types/quiz";
import { useState } from "react";

interface CustomTestBuilderProps {
  categories: Category[];
  onTestCreate: (testName: string, questions: Question[]) => void;
}

const CustomTestBuilder = ({ categories, onTestCreate }: CustomTestBuilderProps) => {
  const [customTestName, setCustomTestName] = useState("");
  const [customQuestions, setCustomQuestions] = useState<Question[]>([]);

  const handleCustomTestNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTestName(e.target.value);
  };

  const handleQuestionToggle = (question: Question) => {
    setCustomQuestions(prevQuestions => {
      if (prevQuestions.includes(question)) {
        return prevQuestions.filter(q => q !== question);
      } else {
        return [...prevQuestions, question];
      }
    });
  };

  const handleCreateCustomTest = () => {
    onTestCreate(customTestName, customQuestions);
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading size="md">Create Your Custom Test</Heading>
      <input
        type="text"
        placeholder="Enter test name"
        value={customTestName}
        onChange={handleCustomTestNameChange}
      />
      {categories.map((category, index) => (
        <Box key={index}>
          <Heading size="sm" mt={4} mb={2}>
            {category.categoryName}
          </Heading>
          {category.questions.map((question, qIndex) => (
            <Checkbox
              key={qIndex}
              value={question.question}
              onChange={() => handleQuestionToggle(question)}
            >
              {question.question}
            </Checkbox>
          ))}
        </Box>
      ))}
      <Button mt={4} colorScheme="purple" onClick={handleCreateCustomTest}>
        Create Custom Test
      </Button>
    </VStack>
  );
};

export default CustomTestBuilder;

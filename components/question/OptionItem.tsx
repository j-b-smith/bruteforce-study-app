import { Box, Text, Icon, Radio } from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { OptionItemProps } from "../../types";

const OptionItem: React.FC<OptionItemProps> = ({
  option,
  isSelected,
  showResult,
  onSelectAnswer,
}) => {
  const icon = option.isCorrect ? CheckCircleIcon : CloseIcon;

  return (
    <Box
      position="relative"
      p={2}
      m={1}
      ml={8}
      borderWidth="1px"
      borderRadius="lg"
      borderColor={isSelected ? (option.isCorrect ? "green.500" : "red.500") : "gray.200"}
      bg={isSelected ? (option.isCorrect ? "green.50" : "red.50") : "white"}
      onClick={() => onSelectAnswer && onSelectAnswer(option.text)}
      cursor="pointer"
    >
      <Radio value={option.text} fontSize={["sm", "md"]} isDisabled={showResult}>
        {option.text}
      </Radio>
      {showResult && (
        <>
          <Icon
            as={icon}
            color={option.isCorrect ? "green.500" : "red.500"}
            position="absolute"
            top={-3}
            left={-3}
            boxSize={5}
            bg="white"
            borderRadius="full"
            zIndex={1}
          />
          {option.explanation && (
            <Text mt={2} ml={8} fontSize={["sm", "md"]} color={option.isCorrect ? "green.600" : "red.600"}>
              {option.explanation}
            </Text>
          )}
        </>
      )}
    </Box>
  );
};

export default OptionItem;

import { VStack, Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { AtSignIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <VStack
      as="nav"
      spacing={4}
      mt={2}
      bg="purple.500"
      p={4}
      borderRadius="md"
      display={{ md: "none" }}
      onClick={onClose} // Close the menu when an item is clicked
    >
      <Link href="/" passHref>
        <Box display="flex" alignItems="center" cursor="pointer" w="full">
          <Icon as={AtSignIcon} />
          <Box ml={2}>Home</Box>
        </Box>
      </Link>
      <Link href="/quizzes" passHref>
        <Box display="flex" alignItems="center" cursor="pointer" w="full">
          <Icon as={InfoIcon} />
          <Box ml={2}>Quizzes</Box>
        </Box>
      </Link>
      <Link href="/flashcards" passHref>
        <Box display="flex" alignItems="center" cursor="pointer" w="full">
          <Icon as={InfoIcon} />
          <Box ml={2}>Flashcards</Box>
        </Box>
      </Link>
      <Link href="/settings" passHref>
        <Box display="flex" alignItems="center" cursor="pointer" w="full">
          <Icon as={SettingsIcon} />
          <Box ml={2}>Settings</Box>
        </Box>
      </Link>
    </VStack>
  );
};

export default MobileMenu;

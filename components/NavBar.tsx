import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AtSignIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { memo } from "react";

const Navbar: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="purple.500"
      px={4}
      py={2}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex="1000"
      boxShadow="md"
      mb={4}
    >
      <Flex h={8} alignItems="center" justifyContent="space-between">
        <Box color="white" fontWeight="bold" fontSize="lg">
          BruteforceStudy
        </Box>
        <Spacer />
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          color="white"
        />
        <HStack
          as="nav"
          spacing={6}
          display={{ base: "none", md: "flex" }}
          color="white"
        >
          <Link href="/" passHref>
            <Box display="flex" alignItems="center" cursor="pointer">
              <Icon as={AtSignIcon} />
              <Box ml={2}>Home</Box>
            </Box>
          </Link>
          <Link href="/quizzes" passHref>
            <Box display="flex" alignItems="center" cursor="pointer">
              <Icon as={InfoIcon} />
              <Box ml={2}>Quizzes</Box>
            </Box>
          </Link>
          <Link href="/flashcards" passHref>
            <Box display="flex" alignItems="center" cursor="pointer">
              <Icon as={InfoIcon} />
              <Box ml={2}>Flashcards</Box>
            </Box>
          </Link>
          <Link href="/settings" passHref>
            <Box display="flex" alignItems="center" cursor="pointer">
              <Icon as={SettingsIcon} />
              <Box ml={2}>Settings</Box>
            </Box>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

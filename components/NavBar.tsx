import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Icon,
  Spacer,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MobileMenu from "./MobileMenu"; // Import the new MobileMenu component
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
              Home
            </Box>
          </Link>
          <Link href="/quizzes" passHref>
            <Box display="flex" alignItems="center" cursor="pointer">
              Quizzes
            </Box>
          </Link>
          <Link href="/flashcards" passHref>
            <Box display="flex" alignItems="center" cursor="pointer">
              Flashcards
            </Box>
          </Link>
          <Link href="/settings" passHref>
            <Box display="flex" alignItems="center" cursor="pointer">
              Settings
            </Box>
          </Link>
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <MobileMenu onClose={onClose} />
      </Collapse>
    </Box>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

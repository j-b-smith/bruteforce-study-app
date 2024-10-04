import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Collapse,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import MobileMenu from "./mobile/MobileMenu";
import Link from "next/link";
import { memo } from "react";

const Navbar: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgGradient="linear(to-r, purple.600, purple.700)" // Gradient for depth
      px={{ base: 4, md: 8 }}
      py={4}
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex="1000"
      boxShadow="lg"
    >
      <Flex h={8} alignItems="center" justifyContent="space-between">
        {/* Logo / Brand */}
        <Box
          color="white"
          fontWeight="extrabold"
          fontSize={{ base: "2xl", md: "3xl" }} // Larger font for more emphasis
          textShadow="0px 4px 6px rgba(0, 0, 0, 0.2)" // Subtle shadow for pop
          letterSpacing="wide" // Improved spacing for a cleaner look
          _hover={{
            color: "purple.300",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          transition="all 0.3s ease-in-out"
        >
          BruteforceStudy
        </Box>

        <Spacer />

        {/* Mobile Menu Button */}
        <IconButton
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          color="white"
          _hover={{
            bg: "purple.500",
            transform: "scale(1.15)",
            border: "2px solid white",
          }} // Enhanced hover effect
          transition="all 0.2s ease-in-out"
        />

        {/* Desktop Menu */}
        <HStack
          as="nav"
          spacing={8}
          display={{ base: "none", md: "flex" }}
          color="white"
        >
          <Link href="/" passHref>
            <Text
              as="a"
              fontWeight="medium"
              _hover={{ color: "purple.300", transform: "scale(1.05)" }}
              transition="all 0.2s ease-in-out"
              cursor="pointer"
            >
              Home
            </Text>
          </Link>

          <Link href="/quizzes" passHref>
            <Text
              as="a"
              fontWeight="medium"
              _hover={{ color: "purple.300", transform: "scale(1.05)" }}
              transition="all 0.2s ease-in-out"
              cursor="pointer"
            >
              Quizzes
            </Text>
          </Link>

          <Link href="/flashcards" passHref>
            <Text
              as="a"
              fontWeight="medium"
              _hover={{ color: "purple.300", transform: "scale(1.05)" }}
              transition="all 0.2s ease-in-out"
              cursor="pointer"
            >
              Flashcards
            </Text>
          </Link>

          <Link href="/settings" passHref>
            <Text
              as="a"
              fontWeight="medium"
              _hover={{ color: "purple.300", transform: "scale(1.05)" }}
              transition="all 0.2s ease-in-out"
              cursor="pointer"
            >
              Settings
            </Text>
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

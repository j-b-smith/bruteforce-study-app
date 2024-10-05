import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Collapse,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { AtSignIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import { memo } from "react";
import NavBarLink from "./NavBarLink";
import MobileNavBarLink from "./MobileNavBarLink";

const Navbar: React.FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bgGradient="linear(to-r, purple.600, purple.700)"
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
          fontSize={{ base: "2xl", md: "3xl" }}
          textShadow="0px 4px 6px rgba(0, 0, 0, 0.2)"
          letterSpacing="wide"
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
          }}
          transition="all 0.2s ease-in-out"
        />

        {/* Desktop Menu */}
        <HStack
          as="nav"
          spacing={8}
          display={{ base: "none", md: "flex" }}
          color="white"
        >
          <NavBarLink href="/" label="Home" />
          <NavBarLink href="/quizzes" label="Quizzes" />
          <NavBarLink href="/flashcards" label="Flashcards" />
        </HStack>
      </Flex>

      {/* Mobile Menu */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          as="nav"
          spacing={4}
          mt={2}
          bg="purple.500"
          p={4}
          borderRadius="md"
          display={{ md: "none" }}
          onClick={onClose}
        >
          <MobileNavBarLink href="/" label="Home" icon={AtSignIcon} onClose={onClose}/>
          <MobileNavBarLink href="/quizzes" label="Quizzes" icon={InfoIcon} onClose={onClose}/>
          <MobileNavBarLink href="/flashcards" label="Flashcards" icon={InfoIcon} onClose={onClose}/>
        </VStack>
      </Collapse>
    </Box>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

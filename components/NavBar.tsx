import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    Icon,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon, AtSignIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";
  import Link from "next/link";
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box bg="purple.600" px={4} py={2}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box color="white" fontWeight="bold" fontSize="lg">
              MyApp
            </Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: "none", md: "flex" }}
              color="white"
            >
              <Link href="/">
                <Box display="flex" alignItems="center">
                  <Icon as={AtSignIcon} />
                  <Box ml={2}>Home</Box>
                </Box>
              </Link>
              <Link href="/quizzes">
                <Box display="flex" alignItems="center">
                  <Icon as={InfoIcon} />
                  <Box ml={2}>Quizzes</Box>
                </Box>
              </Link>
              <Link href="/flashcards">
                <Box display="flex" alignItems="center">
                  <Icon as={InfoIcon} />
                  <Box ml={2}>Flashcards</Box>
                </Box>
              </Link>
              <Link href="/settings">
                <Box display="flex" alignItems="center">
                  <Icon as={SettingsIcon} />
                  <Box ml={2}>Settings</Box>
                </Box>
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;
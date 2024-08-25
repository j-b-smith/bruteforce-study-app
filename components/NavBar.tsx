import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Icon,
  Spacer,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AtSignIcon, InfoIcon, SettingsIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { memo, useCallback } from "react";
import { User } from "../types/user"; 
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Define the props interface
interface NavbarProps {
  user: User | null;
}

// Memoize the Navbar component to prevent unnecessary re-renders
const Navbar: React.FC<NavbarProps> = memo(({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Handle user logout
  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  }, []);

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

          {user ? (
            <Menu>
              <MenuButton as={Button} variant="ghost" colorScheme="whiteAlpha">
                <HStack spacing={2}>
                  <Avatar size="sm" src={user.photoURL || ""} />
                  <Box>{user.displayName || user.email}</Box>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Link href="/login" passHref>
              <Button variant="outline" colorScheme="whiteAlpha">
                Login
              </Button>
            </Link>
          )}
        </HStack>
      </Flex>
    </Box>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;

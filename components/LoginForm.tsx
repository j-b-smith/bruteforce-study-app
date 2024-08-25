// components/LoginForm.tsx
import { useState } from "react";
import { 
  Box, 
  Button, 
  Input, 
  VStack, 
  Heading, 
  Text, 
  Tabs, 
  TabList, 
  TabPanels, 
  Tab, 
  TabPanel 
} from "@chakra-ui/react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Sign Up error: ", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Google login error: ", error);
    }
  };

  return (
    <Box p={6} maxW="md" borderWidth="1px" borderRadius="lg" mx="auto" mt={8} bg="white" boxShadow="lg">
      <Tabs variant="soft-rounded" colorScheme="purple" isFitted>
        <TabList mb={4}>
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          {/* Login Panel */}
          <TabPanel>
            <VStack spacing={4}>
              <Heading size="lg">Login</Heading>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button colorScheme="purple" onClick={handleLogin} width="full">
                Login
              </Button>
              <Button colorScheme="blue" onClick={handleGoogleLogin} width="full">
                Login with Google
              </Button>
            </VStack>
          </TabPanel>
          {/* Sign Up Panel */}
          <TabPanel>
            <VStack spacing={4}>
              <Heading size="lg">Sign Up</Heading>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button colorScheme="purple" onClick={handleSignUp} width="full">
                Sign Up
              </Button>
              <Button colorScheme="blue" onClick={handleGoogleLogin} width="full">
                Sign Up with Google
              </Button>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default LoginForm;

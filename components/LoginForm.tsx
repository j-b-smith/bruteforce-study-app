import { useState } from "react";
import { Box, Button, Input, VStack, Heading, Text, Flex, Spacer } from "@chakra-ui/react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { saveUserToFirestore } from "../services/UserService";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      await saveUserToFirestore(userCredential.user);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      await saveUserToFirestore(userCredential.user);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Flex direction="column" h="100%">
      <VStack spacing={4} align="stretch" flex="1">
        <Box>
          <Heading mb={4}>Login</Heading>
          {error && <Text color="red.500">{error}</Text>}
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={4}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={4}
          />
        </Box>
        <VStack spacing={4} mt={8}>
          <Button colorScheme="purple" onClick={handleLogin} w="100%">
            Login
          </Button>
          <Button colorScheme="purple" variant="outline" onClick={handleGoogleLogin} w="100%">
            Sign in with Google
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default LoginForm;

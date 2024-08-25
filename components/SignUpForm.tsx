import { useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  InputGroup,
  InputRightElement,
  IconButton,
  Text,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";
import { saveUserToFirestore } from "../services/UserService";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await saveUserToFirestore({
        uid: user.uid,
        email: user.email,
        displayName: `${firstName} ${lastName}`,
        photoURL: user.photoURL,
        quizResults: [],
      });
      setError(null);
    } catch (error: any) {
      console.error("Sign-Up error: ", error);
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      await saveUserToFirestore(userCredential.user);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Flex direction="column" h="100%">
      <VStack spacing={4} align="stretch" flex="1">
        <Box>
          <Heading mb={4}>Sign Up</Heading>
          {error && <Text color="red.500">{error}</Text>}
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            mb={4}
          />
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            mb={4}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={4}
          />
          <InputGroup mb={4}>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement>
              <IconButton
                aria-label="Toggle Password Visibility"
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={toggleShowPassword}
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup>
          <InputGroup mb={4}>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputRightElement>
              <IconButton
                aria-label="Toggle Password Visibility"
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={toggleShowPassword}
                variant="ghost"
              />
            </InputRightElement>
          </InputGroup>
          <Spacer />
        </Box>
        <VStack spacing={4} mt={8}>
          <Button colorScheme="purple" onClick={handleSignUp} w="100%">
            Sign Up
          </Button>
          <Button colorScheme="purple" variant="outline" onClick={handleGoogleSignUp} w="100%">
            Sign up with Google
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default SignUpForm;

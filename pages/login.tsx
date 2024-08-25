// pages/login.tsx
import { Box, Heading, Text } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.50"
      px={4}
    >
      <Heading as="h1" size="xl" mb={4} color="purple.600">
        Welcome to BruteforceStudy
      </Heading>
      <Text fontSize="lg" mb={8} color="gray.700">
        Please log in or sign up to continue
      </Text>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;

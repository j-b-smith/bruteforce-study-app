// pages/login.tsx
import { Box, Heading, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

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
      <Box
        p={6}
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        bg="white"
        boxShadow="md"
        minH="69vh"
        display="flex"
        flexDirection="column"
      >
        <Tabs isFitted variant="enclosed" flex="1" display="flex" flexDirection="column">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel flex={1}>
              <LoginForm />
            </TabPanel>
            <TabPanel flex={1}>
              <SignUpForm />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default LoginPage;

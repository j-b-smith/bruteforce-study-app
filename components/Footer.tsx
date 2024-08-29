import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="purple.600"
      color="white"
      py={2}
      px={4}
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      textAlign="center"
      fontSize="sm"
      boxShadow="0 -1px 3px rgba(0, 0, 0, 0.1)"
    >
      <Text>&copy; {new Date().getFullYear()} BruteforceStudy</Text>
    </Box>
  );
};

export default Footer;

import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      bgGradient="linear(to-r, purple.600, purple.700)"
      color="white"
      py={4}
      px={8}
      position="fixed"
      bottom={0}
      left={0}
      width="100%"
      textAlign="center"
      fontSize="sm"
      boxShadow="0 -2px 6px rgba(0, 0, 0, 0.2)"
      zIndex="1000"
    >
      <Text
        fontWeight="medium"
        letterSpacing="wide"
        textShadow="0px 2px 4px rgba(0, 0, 0, 0.2)"
        transition="color 0.3s ease"
        _hover={{ color: "purple.300" }}
      >
        &copy; {new Date().getFullYear()} BruteforceStudy
      </Text>
    </Box>
  );
};

export default Footer;

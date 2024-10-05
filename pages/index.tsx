import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <>
    <Box
      height="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="white"
      textAlign="center"
      px={4}
    >
      <Box
        bg="purple.600"
        borderRadius="lg"
        boxShadow="xl"
        maxW={{ base: "90%", md: "65%", lg: "50%" }}
        px={{ base: 6, md: 12, lg: 16 }}
        py={{ base: 12, md: 16, lg: 20 }}
        mx={4}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height={{ base: "auto", md: "60vh", lg: "60vh" }}
      >
        <VStack spacing={6}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="bold"
            color="white"
          >
            Study Harder.
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            color="white"
          >
            Master your knowledge with quizzes and flashcards.
          </Text>

          <Box display="flex" gap={6} flexWrap="wrap" justifyContent="center">
            <Button
              size="lg"
              bg="white"
              color="purple.600"
              _hover={{ bg: "gray.100" }}
              onClick={() => router.push("/flashcards")}
            >
              Study Flashcards
            </Button>
            <Button
              size="lg"
              bg="white"
              color="purple.600"
              _hover={{ bg: "gray.100" }}
              onClick={() => router.push("/quizzes")}
            >
              Take a Quiz
            </Button>
          </Box>
        </VStack>
      </Box>
    </Box>
    </>
  );
}

import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { CourseProvider } from "../contexts/CourseProvider";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <CourseProvider>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Navbar />

          <Box as="main" flex="1" pt={[4, 6, 8]} pb={[4, 6, 8]}>
            <Component {...pageProps} />
          </Box>

          <Footer />
        </Box>
      </CourseProvider>
    </ChakraProvider>
  );
}

export default MyApp;

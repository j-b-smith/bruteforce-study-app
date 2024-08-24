// pages/_app.tsx
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box flex="1" pt={8}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;

// pages/_app.tsx
import { ChakraProvider, Box } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "../types/user"; // Import the User interface

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null); // Use the User interface
  const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
  //     if (firebaseUser) {
  //       const mappedUser: User = {
  //         uid: firebaseUser.uid,
  //         email: firebaseUser.email,
  //         displayName: firebaseUser.displayName,
  //         photoURL: firebaseUser.photoURL,
  //         quizResults: [], 
  //       };
  //       setUser(mappedUser);
  //     } else {
  //       setUser(null);
  //       if (router.pathname !== "/login") {
  //         router.push("/login");
  //       }
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, [router]);

  // if (loading) {
  //   return <Box>Loading...</Box>;
  // }

  return (
    <ChakraProvider>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar user={user} /> {/* Pass the user state to the Navbar */}
        
        <Box as="main" flex="1" pt={8}>
          <Component {...pageProps} user={user} /> {/* Pass the user state to the page components */}
        </Box>

        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;

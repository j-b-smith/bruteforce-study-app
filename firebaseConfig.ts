import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD2pnHWx-Raivc9zBu4PQG0lWdDeUsF6eM",
    authDomain: "bruteforce-study-app.firebaseapp.com",
    projectId: "bruteforce-study-app",
    storageBucket: "bruteforce-study-app.appspot.com",
    messagingSenderId: "925399018045",
    appId: "1:925399018045:web:5d1b39f1b3ed6e0f045854",
    measurementId: "G-R2MQKQNS39"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };

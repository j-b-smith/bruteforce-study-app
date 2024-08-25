import { db } from "../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";

// Save user preferences
export const saveUserPreferences = async (userId: string, preferences: object) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, { preferences }, { merge: true });
  } catch (error) {
    console.error("Error saving preferences: ", error);
  }
};

// Save quiz results
export const saveQuizResults = async (userId: string, quizResults: object) => {
  try {
    const userRef = doc(db, "users", userId);
    await setDoc(userRef, { quizResults }, { merge: true });
  } catch (error) {
    console.error("Error saving quiz results: ", error);
  }
};

// Fetch user data
export const getUserData = async (userId: string) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
  }
};

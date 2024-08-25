import { User } from "../types/user";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const saveUserToFirestore = async (user: User) => {
  const userDoc = doc(db, "users", user.uid);
  const userToSave = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    quizResults: user.quizResults || [],
  };
  await setDoc(userDoc, userToSave);
};


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

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC56CP5oqSP0zoBJhTMrfGNg9LJc1lEM5M",
  authDomain: "lostark-db.firebaseapp.com",
  projectId: "lostark-db",
  storageBucket: "lostark-db.appspot.com",
  messagingSenderId: "744123113875",
  appId: "1:744123113875:web:2f106ae463e4761e1a4866",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// creating the authenication
export const auth = getAuth();
// passing the selected provider along with the auth to sign in with popup
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(database, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if user data does not exist
  // create and set doc withg the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createAt });
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  } 
  
  // if user data exist
  // return userDocRef
  return userDocRef;
};

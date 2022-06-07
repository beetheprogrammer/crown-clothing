import {initializeApp} from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCWjWySdnPXYVy3B5mVSk0wn9RY6xY7F0Q",
	authDomain: "crown-clothing-6aecc.firebaseapp.com",
	projectId: "crown-clothing-6aecc",
	storageBucket: "crown-clothing-6aecc.appspot.com",
	messagingSenderId: "284920788646",
	appId: "1:284920788646:web:59047c595a160e56b56667",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid)
  const userSnapshot = await getDoc(userDocRef);
  console.log("userDocRef", userDocRef);
  console.log("userSnapshot", userSnapshot);
  console.log("userSnapshot", userSnapshot.exists());

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
    }catch(e){
      console.log("error", e.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email && !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email && !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}
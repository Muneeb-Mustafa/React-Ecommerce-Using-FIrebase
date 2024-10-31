// src/firebase/config.js

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfhuCPUJCDGJ7I-7mAJ_WgewaxbbwnCOmoDwk",
  authDomain: "ecommerce-86gdgr434f8fb.firebaseapp.com",
  projectId: "ecommerce-8f8364grefb",
  storageBucket: "ecommerce-8f8fbs.appspot.com",
  messagingSenderId: "1470236814se32",
  appId: "1:147023681432:web:42sheeeaa63a76c800559bded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app); // Firestore instance
const storage = getStorage(app);

// Export Firebase services and functions
export {
  auth,
  db,
  storage,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  doc,
  setDoc,
  ref,
  uploadBytes,
  uploadBytesResumable
};

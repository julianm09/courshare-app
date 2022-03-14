import { getDatabase, ref, onValue, set } from "firebase/database";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import * as CloudStorage from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD9BGS60cvdMFl7kNmCsPuAlFZaGh3NKo",
  authDomain: "courshare-5a8a5.firebaseapp.com",
  projectId: "courshare-5a8a5",
  storageBucket: "courshare-5a8a5.appspot.com",
  messagingSenderId: "308213207091",
  appId: "1:308213207091:web:aee7e0006cf5783e211346",
  measurementId: "G-ZGLBZ0Z4Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore();
export const auth = getAuth();
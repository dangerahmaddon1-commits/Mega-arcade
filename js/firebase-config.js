import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYyWzdqDgoYC-xaCEMgaXKdqnXkeelQt0",
  authDomain: "meta-arcade-portal.firebaseapp.com",
  projectId: "meta-arcade-portal",
  storageBucket: "meta-arcade-portal.firebasestorage.app",
  messagingSenderId: "898800042003",
  appId: "1:898800042003:web:bb368449c8af4a7e827fe6",
  measurementId: "G-K0HMG6MNT9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, db, googleProvider, signInWithPopup, signOut, onAuthStateChanged, doc, getDoc, setDoc, updateDoc, increment };
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, googleProvider, db };

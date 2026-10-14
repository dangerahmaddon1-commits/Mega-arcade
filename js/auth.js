import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc as firestoreDoc, getDoc as firestoreGetDoc, setDoc as firestoreSetDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { db } from "./firebase-config.js";

const authBtn = document.getElementById("auth-btn");
const coinCount = document.getElementById("coin-count");

onAuthStateChanged(auth, async (user) => {
    if (user) {
        authBtn.innerText = "Sign Out";
        const userRef = firestoreDoc(db, "users", user.uid);
        const userSnap = await firestoreGetDoc(userRef);

        if (userSnap.exists()) {
            coinCount.innerText = userSnap.data().tokens.freeCoins;
        } else {
            await firestoreSetDoc(userRef, {
                uid: user.uid,
                email: user.email,
                tokens: { freeCoins: 100 }
            });
            coinCount.innerText = 100;
        }
    } else {
        authBtn.innerText = "Sign In";
        coinCount.innerText = "0";
    }
});

authBtn.addEventListener("click", () => {
    if (auth.currentUser) {
        signOut(auth);
    } else {
        signInWithPopup(auth, googleProvider);
    }
});

import { auth, googleProvider, signInWithPopup, signOut, onAuthStateChanged, doc, getDoc, setDoc } from "./firebase-config.js";

const authBtn = document.getElementById("auth-btn");
const coinCount = document.getElementById("coin-count");

// Monitor Auth State
onAuthStateChanged(auth, async (user) => {
    if (user) {
        authBtn.innerText = "Sign Out";
        // Fetch or create user document in Firestore
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            coinCount.innerText = userSnap.data().tokens.freeCoins;
        } else {
            // New user, create document
            await setDoc(userRef, {
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

// Handle Sign In/Out
authBtn.addEventListener("click", () => {
    if (auth.currentUser) {
        signOut(auth);
    } else {
        signInWithPopup(auth, googleProvider);
    }
});
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import {
  getFirestore,
  getDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8cqjRdJF6OENHJrPsPdttMmiYYRt7UvM",
  authDomain: "csc-426-login-auth.firebaseapp.com",
  projectId: "csc-426-login-auth",
  storageBucket: "csc-426-login-auth.firebasestorage.app",
  messagingSenderId: "345926849748",
  appId: "1:345926849748:web:935fa51199cf4473081741",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties

    const docRef = doc(db, "users", user.uid);
    getDoc(docRef)
    .then((docSnap) => {
        if (docSnap.exists()) {
            const userData = docSnap.data();
            const username = document.getElementById("username");
            username.textContent = userData.username;
        } else {
            console.log("No such document!");
        }
    }) .catch((error) => {
        console.log("Error getting document:", error);
    });
    // const uid = user.uid;
    if (window.location.pathname.endsWith("welcome.html")) {
        // User is on the welcome page, do nothing
    }
  } else {
    // User is signed out
     if(!window.location.pathname.endsWith("welcome.html")) {
        window.location.href = "login.html";
     }
  }
});


const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "login.html";
    }).catch((error) => {
    // An error happened.
    console.error("Error signing out: ", error);
    });
});
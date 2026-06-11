// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

import {
  getFirestore,
  setDoc,
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

const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const message = document.getElementById("message");
  message.textContent = "";

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Login successful:", user);
      message.style.color = "green";
      message.textContent = "Login successful!";
      window.location.href = "welcome.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      message.style.color = "red";
      message.textContent = errorMessage;
    });
});



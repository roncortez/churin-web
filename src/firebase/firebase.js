// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARfDx0nnwbWuKUjQiMBe9bMnFgZrqMnPc",
  authDomain: "churin-e37cd.firebaseapp.com",
  projectId: "churin-e37cd",
  storageBucket: "churin-e37cd.appspot.com",
  messagingSenderId: "57537116145",
  appId: "1:57537116145:web:8e7fb0be0639d66b2ef650",
  measurementId: "G-6V25481R76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
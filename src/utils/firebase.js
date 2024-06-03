// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-rL94JasWw_K8X_sNj9f6Fl5p4XR_h0U",
  authDomain: "netflixgpt-21fa1.firebaseapp.com",
  projectId: "netflixgpt-21fa1",
  storageBucket: "netflixgpt-21fa1.appspot.com",
  messagingSenderId: "1081979913364",
  appId: "1:1081979913364:web:ab9ffe8ce449af96542081",
  measurementId: "G-NXEX7PPGQG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

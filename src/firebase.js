// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_oM9bl7fhzRMo0NKy3z9GvsVFE0oXSA0",
  authDomain: "hng-image-a4e25.firebaseapp.com",
  projectId: "hng-image-a4e25",
  storageBucket: "hng-image-a4e25.appspot.com",
  messagingSenderId: "1005606144796",
  appId: "1:1005606144796:web:37af0de6bcb706b3f7c8d9"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);

 export { auth };

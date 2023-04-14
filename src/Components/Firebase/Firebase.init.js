// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-dODfDUaE3tO6uo4xaav1kG2XzAGnCnI",
  authDomain: "simple-firebase-f28ee.firebaseapp.com",
  projectId: "simple-firebase-f28ee",
  storageBucket: "simple-firebase-f28ee.appspot.com",
  messagingSenderId: "1042667885796",
  appId: "1:1042667885796:web:18e452d75677314d6008f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)
export default app;
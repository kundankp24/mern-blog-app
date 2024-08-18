// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d7829.firebaseapp.com",
  projectId: "mern-blog-d7829",
  storageBucket: "mern-blog-d7829.appspot.com",
  messagingSenderId: "324620246977",
  appId: "1:324620246977:web:28041b728fe11d4f12d940"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

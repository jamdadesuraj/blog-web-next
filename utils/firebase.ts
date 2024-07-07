// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-next-app-44853.firebaseapp.com",
  projectId: "blog-next-app-44853",
  storageBucket: "blog-next-app-44853.appspot.com",
  messagingSenderId: "401770936656",
  appId: "1:401770936656:web:98e1c91e7dc5d26333d455",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

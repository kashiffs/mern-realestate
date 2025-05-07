// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e1226.firebaseapp.com",
  projectId: "mern-estate-e1226",
  storageBucket: "mern-estate-e1226.firebasestorage.app",
  messagingSenderId: "740763882705",
  appId: "1:740763882705:web:6bada66a33ed0e493721f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
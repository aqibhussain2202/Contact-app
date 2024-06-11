// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDZFZicTfjlbTZEPwKdEnofDyuMt_ocIw",
  authDomain: "vite-contact-ba901.firebaseapp.com",
  projectId: "vite-contact-ba901",
  storageBucket: "vite-contact-ba901.appspot.com",
  messagingSenderId: "683219782574",
  appId: "1:683219782574:web:c7d2c10f845772933e963f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

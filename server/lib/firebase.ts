// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5NHlcpcyzY9hOVY44bRAuPaC7dUgello",
  authDomain: "mundialito-c566e.firebaseapp.com",
  projectId: "mundialito-c566e",
  storageBucket: "mundialito-c566e.appspot.com",
  messagingSenderId: "98726862925",
  appId: "1:98726862925:web:97f8443164f5f04347bc04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firsetoreDB = getFirestore(app);
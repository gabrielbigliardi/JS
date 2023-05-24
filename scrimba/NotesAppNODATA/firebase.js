// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1SgIdqLKdui67GxxWhyz1yyPI9ppBajQ",
  authDomain: "react-notes-12242.firebaseapp.com",
  projectId: "react-notes-12242",
  storageBucket: "react-notes-12242.appspot.com",
  messagingSenderId: "1096021072691",
  appId: "1:1096021072691:web:2ddd4918f0c4e195853c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
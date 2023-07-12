// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACb2pR1Ljrqb47DHRWxEBgrWFVdPFo--M",
  authDomain: "todo-app-bf55c.firebaseapp.com",
  projectId: "todo-app-bf55c",
  storageBucket: "todo-app-bf55c.appspot.com",
  messagingSenderId: "612674697965",
  appId: "1:612674697965:web:c16a2212d13c9114756ae4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALgGQcytHMSH74h0fEqaioKGc05zkmCoo",
  authDomain: "skillslash-zomato.firebaseapp.com",
  projectId: "skillslash-zomato",
  storageBucket: "skillslash-zomato.appspot.com",
  messagingSenderId: "178455119508",
  appId: "1:178455119508:web:59c799fbb29c0e6af99681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvfHrcdKuFUmgszbfX9nClkunW81YfxCM",
  authDomain: "the-gadget-bank.firebaseapp.com",
  projectId: "the-gadget-bank",
  storageBucket: "the-gadget-bank.appspot.com",
  messagingSenderId: "868289514300",
  appId: "1:868289514300:web:ad3ba7c61fd83e07682c39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
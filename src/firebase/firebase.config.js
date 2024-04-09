// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDarG9anlsTE8jv_ABlsBxqkKVntBrwRCs",
  authDomain: "react-dragon-news-firebase-au.firebaseapp.com",
  projectId: "react-dragon-news-firebase-au",
  storageBucket: "react-dragon-news-firebase-au.appspot.com",
  messagingSenderId: "888525060555",
  appId: "1:888525060555:web:a6f7d4c699dd04bcff9e4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
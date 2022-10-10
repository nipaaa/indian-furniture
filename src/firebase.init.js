// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZaAy8PV9b6rl-HOkGCrH4mAxR8TdbIOY",
  authDomain: "new-authentication-1af4b.firebaseapp.com",
  projectId: "new-authentication-1af4b",
  storageBucket: "new-authentication-1af4b.appspot.com",
  messagingSenderId: "1063175175857",
  appId: "1:1063175175857:web:5edd5c830ea53b3c77ec90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
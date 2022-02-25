// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXggLYG3QO11sBSzqV3_e0XOVrqmDoipo",
  authDomain: "linkedin-clone-3e412.firebaseapp.com",
  databaseURL: "https://linkedin-clone-3e412-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-3e412",
  storageBucket: "linkedin-clone-3e412.appspot.com",
  messagingSenderId: "403423842502",
  appId: "1:403423842502:web:0b9ee4d11b147cdd3a07c7",
};

// Initialize Firebase
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export { db };

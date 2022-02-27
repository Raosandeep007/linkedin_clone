import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXggLYG3QO11sBSzqV3_e0XOVrqmDoipo",
  authDomain: "linkedin-clone-3e412.firebaseapp.com",
  databaseURL: "https://linkedin-clone-3e412-default-rtdb.firebaseio.com",
  projectId: "linkedin-clone-3e412",
  storageBucket: "linkedin-clone-3e412.appspot.com",
  messagingSenderId: "403423842502",
  appId: "1:403423842502:web:0b9ee4d11b147cdd3a07c7",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };

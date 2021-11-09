// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_JxfDmArK2mDlsiFJ2d2C2MofnOinIBg",
  authDomain: "uber-clone-f2eef.firebaseapp.com",
  projectId: "uber-clone-f2eef",
  storageBucket: "uber-clone-f2eef.appspot.com",
  messagingSenderId: "118487212485",
  appId: "1:118487212485:web:cbee84fd349af18eb22bac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };

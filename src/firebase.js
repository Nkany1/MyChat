import firebase from "firebase/app";
import "firebase/auth";



export const auth = firebase.initializeApp({
    apiKey: "AIzaSyB3Snn8mn2dhhwVZJJFD7fBHc2nhWNxx6E",
    authDomain: "mychat-ffbaa.firebaseapp.com",
    projectId: "mychat-ffbaa",
    storageBucket: "mychat-ffbaa.appspot.com",
    messagingSenderId: "880697655319",
    appId: "1:880697655319:web:3f19bfc4faf2a6ced39c52"
  }).auth();


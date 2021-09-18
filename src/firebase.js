import firebase from 'firebase/app';

import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1XWgrUt_JsR-HhX6zl7DsYw2sRGjfbKo",
    authDomain: "vinyl-commerce.firebaseapp.com",
    projectId: "vinyl-commerce",
    storageBucket: "vinyl-commerce.appspot.com",
    messagingSenderId: "889340010064",
    appId: "1:889340010064:web:8c6ce2f00889c949a33b55"
  };

// Initialize Firebase 
const fb = firebase.initializeApp(firebaseConfig)

// const app = initializeApp(firebaseConfig);

export const db = fb.firestore();
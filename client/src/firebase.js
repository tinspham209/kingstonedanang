import firebase from "firebase/app";
import "firebase/firestore";

// Config
const config = {
  apiKey: "AIzaSyD1SattDoCViPrllfNKFuMNvOqqy1R3jy0",
  authDomain: "kingstonedanang-vn.firebaseapp.com",
  projectId: "kingstonedanang-vn",
  storageBucket: "kingstonedanang-vn.appspot.com",
  messagingSenderId: "1043583231829",
  appId: "1:1043583231829:web:91cf3a4f2a674f5d9ab1dc",
  measurementId: "G-NRYGJY1KD7",
};

const firebaseInit = firebase.initializeApp(config);

export { firebaseInit };

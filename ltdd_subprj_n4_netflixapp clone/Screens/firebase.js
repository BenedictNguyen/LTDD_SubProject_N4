// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBVZ2BJ_Gg3jaAsOIEDcw3chBjYXo4bSg",
  authDomain: "lttbdt-4a73f.firebaseapp.com",
  projectId: "lttbdt-4a73f",
  storageBucket: "lttbdt-4a73f.firebasestorage.app",
  messagingSenderId: "1093173431552",
  appId: "1:1093173431552:web:7fee3b20bf69bf6325f7e5",
  measurementId: "G-XD7SF27YTF",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export default firebase;

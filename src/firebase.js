// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0BunFd-iF2u2CE_sz6OWFoTQlVW_NBKs",
    authDomain: "speed-wordle.firebaseapp.com",
    projectId: "speed-wordle",
    storageBucket: "speed-wordle.appspot.com",
    messagingSenderId: "1058474584919",
    appId: "1:1058474584919:web:c7d151bc09656ee1f86c12",
    measurementId: "G-JKRBKKGMJQ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// const analytics = getAnalytics(app);

// export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const fromDate = firebase.firestore.Timestamp.fromDate;

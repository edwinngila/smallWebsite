// Import the functions you need from the SDKs you need
const initializeApp = require("firebase/app");
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA5UCxgkzbYfhmX6WSCMRrShQ9wXxy4LE",
  authDomain: "forms-cfda5.firebaseapp.com",
  projectId: "forms-cfda5",
  storageBucket: "forms-cfda5.appspot.com",
  messagingSenderId: "140981281168",
  appId: "1:140981281168:web:16a2caab836b62bd8a5315",
  measurementId: "G-027WV2LBJL"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export const db = getDatabase(app);
export const firebase = firestore;
import { initializeApp } from "firebase/app";
// import 'firebase/compat/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDixgOf1rB4b3keAsD5FzQvxM7lHfUt9ZQ",
  authDomain: "house-6270b.firebaseapp.com",
  projectId: "house-6270b",
  storageBucket: "house-6270b.appspot.com",
  messagingSenderId: "77521393145",
  appId: "1:77521393145:web:165a63f12be29f699a9928"
};

initializeApp(firebaseConfig);
export const db = getFirestore();

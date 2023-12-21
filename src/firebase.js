import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC_VNHbBHtYqIMmQ7f364ROarLK2oKfLvI",
  authDomain: "house-market-305b9.firebaseapp.com",
  projectId: "house-market-305b9",
  storageBucket: "house-market-305b9.appspot.com",
  messagingSenderId: "831997022417",
  appId: "1:831997022417:web:8b0947c15284d49d2a75f0",
  measurementId: "G-5X9CVEFE4L"
};

initializeApp(firebaseConfig);
export const db = getFirestore();

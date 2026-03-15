// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK93RXiaaynzRrQA1Hu9tzkBttgb1N2J8",
  authDomain: "upflux-ai.firebaseapp.com",
  projectId: "upflux-ai",
  storageBucket: "upflux-ai.firebasestorage.app",
  messagingSenderId: "991438837299",
  appId: "1:991438837299:web:ed000930fcc7cf1a28f546"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
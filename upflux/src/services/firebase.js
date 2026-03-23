// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { connectFirestoreEmulator, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCK93RXiaaynzRrQA1Hu9tzkBttgb1N2J8",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "upflux-ai.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "upflux-ai",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "upflux-ai.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "991438837299",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:991438837299:web:ed000930fcc7cf1a28f546"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
  useFetchStreams: false,
});

// Optional: Connect to emulator in development
if (import.meta.env.DEV && import.meta.env.VITE_USE_FIRESTORE_EMULATOR === "true") {
  connectFirestoreEmulator(db, "localhost", 8080);
}

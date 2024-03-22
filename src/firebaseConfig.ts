// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const {
  VITE_VERCEL_API_KEY,
  VITE_VERCEL_AUTH_DOMAIN,
  VITE_VERCEL_DATABASE_URL,
  VITE_VERCEL_PROJECT_ID,
  VITE_VERCEL_STORAGE_BUCKET,
  VITE_VERCEL_MESSAGING_SENDER_ID,
  VITE_VERCEL_APP_ID,
  VITE_VERCEL_MEASUREMENT_ID,
} = import.meta.env;

const firebaseConfig = {
  apiKey: VITE_VERCEL_API_KEY,
  authDomain: VITE_VERCEL_AUTH_DOMAIN,
  databaseURL: VITE_VERCEL_DATABASE_URL,
  projectId: VITE_VERCEL_PROJECT_ID,
  storageBucket: VITE_VERCEL_STORAGE_BUCKET,
  messagingSenderId: VITE_VERCEL_MESSAGING_SENDER_ID,
  appId: VITE_VERCEL_APP_ID,
  measurementId: VITE_VERCEL_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
export { db, app, auth };

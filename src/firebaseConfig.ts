// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_MfiWlj-UAQOGXJIlHU7cByj3msmgDGg",
  authDomain: "learn-lingo-pet-project.firebaseapp.com",
  databaseURL:
    "https://learn-lingo-pet-project-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "learn-lingo-pet-project",
  storageBucket: "learn-lingo-pet-project.appspot.com",
  messagingSenderId: "942087153141",
  appId: "1:942087153141:web:55319103e47016e9bd2cbc",
  measurementId: "G-4G8TCGNGP7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, app };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgNPDCEPs02ck_sve8G5lZqVyAfwLMY5I",
  authDomain: "minha-rotina-27a2c.firebaseapp.com",
  projectId: "minha-rotina-27a2c",
  storageBucket: "minha-rotina-27a2c.firebasestorage.app",
  messagingSenderId: "336613364823",
  appId: "1:336613364823:web:9f1ed39c533949e5dcff12"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCArzqTZZX90HFjuPUFkZPaXiYR44DFLJg",
    authDomain: "quiz-322.firebaseapp.com",
    projectId: "quiz-322",
    storageBucket: "quiz-322.appspot.com",
    messagingSenderId: "24764344156",
    appId: "1:24764344156:web:31c17f10eecfaad683c399",
    measurementId: "G-GKLD5QG3R8"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
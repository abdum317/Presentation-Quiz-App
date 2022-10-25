import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDRKA3dUsCp_7PQC7o2JSJeJ1gqWxxF_eA",
    authDomain: "quiz-317.firebaseapp.com",
    projectId: "quiz-317",
    storageBucket: "quiz-317.appspot.com",
    messagingSenderId: "149104093903",
    appId: "1:149104093903:web:5a8c92ef8ba8487a3625ba",
    measurementId: "G-N6RTJLSZRH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
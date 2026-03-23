// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDWO8sbiczka5JHUxF5sXhyHs2Uxw8GpKQ",
  authDomain: "hypervorax-e26a5.firebaseapp.com",
  projectId: "hypervorax-e26a5",
  storageBucket: "hypervorax-e26a5.firebasestorage.app",
  messagingSenderId: "792149468071",
  appId: "1:792149468071:web:8ade3a50b38cb06d2d8c82"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
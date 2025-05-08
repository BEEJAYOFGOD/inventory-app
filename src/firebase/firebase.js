// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM9At8DC0VPOBdu2jcrpTgnfSO_mU8Pd8",
    authDomain: "inventory-app-2602.firebaseapp.com",
    projectId: "inventory-app-2602",
    storageBucket: "inventory-app-2602.firebasestorage.app",
    messagingSenderId: "227648259452",
    appId: "1:227648259452:web:7c6128eb1446a006a810f9",
    measurementId: "G-638XR0RKSY",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };

try {
    initializeApp(firebaseConfig);
    console.log("Firebase initialized successfully");
    console.log(app);
} catch (error) {
    console.error("Firebase initialization error:", error);
}

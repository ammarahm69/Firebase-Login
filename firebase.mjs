import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1WMgW0jMsWJBNSKcCYN0F4FdvjiDz7eE",
  authDomain: "fir-e7ffb.firebaseapp.com",
  projectId: "fir-e7ffb",
  storageBucket: "fir-e7ffb.appspot.com",
  messagingSenderId: "361643856203",
  appId: "1:361643856203:web:f767c60063b1d111c4d8ce",
  measurementId: "G-6M59R7H292"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword };
export {signInWithEmailAndPassword};
export {signOut}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpyr2iiGzyIqqIVA-YBktn3HvgMUiapa8",
  authDomain: "linkedin-1576.firebaseapp.com",
  projectId: "linkedin-1576",
  storageBucket: "linkedin-1576.appspot.com",
  messagingSenderId: "915272228311",
  appId: "1:915272228311:web:006a040d8dbf159e78ff92",
  measurementId: "G-HPRLWP6SML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
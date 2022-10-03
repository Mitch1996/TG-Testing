// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlECyzycibkPbhEP4vEHBoDPjxjJ4hhx8",
  authDomain: "tg-testing-c174e.firebaseapp.com",
  projectId: "tg-testing-c174e",
  storageBucket: "tg-testing-c174e.appspot.com",
  messagingSenderId: "994318419640",
  appId: "1:994318419640:web:4f7c218640e7e6e08b164d",
  measurementId: "G-5Z27YDD9K0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
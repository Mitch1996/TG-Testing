import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDmXgb_58lO7aK_ujN37pGlNxzWGEU0YpI",
  authDomain: "fb9-sandbox.firebaseapp.com",
  projectId: "fb9-sandbox",
  storageBucket: "fb9-sandbox.appspot.com",
  messagingSenderId: "867529587246",
  appId: "1:867529587246:web:dc754ab7840c737f47bdbf"
}

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
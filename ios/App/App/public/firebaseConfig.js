
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDGQqIzJq89nQEFS5O6HD23Bact8x6u3_U",
  authDomain: "gestionale-emerals-trasporti.firebaseapp.com",
  projectId: "gestionale-emerals-trasporti",
  storageBucket: "gestionale-emerals-trasporti.appspot.com",
  messagingSenderId: "502830907301",
  appId: "1:502830907301:web:5b035012199cf32782324c",
  measurementId: "G-2PZCXEND6F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

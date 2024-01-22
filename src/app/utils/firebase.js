// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAQMEZiDZEsUefwa2tecvxRW6Yo0Rm9Wmg",
  authDomain: "bloxbunny-4c1e7.firebaseapp.com",
  projectId: "bloxbunny-4c1e7",
  storageBucket: "bloxbunny-4c1e7.appspot.com",
  messagingSenderId: "236581985115",
  appId: "1:236581985115:web:0346f6c572d41bce16187e",
  measurementId: "G-929TNT7SCX"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
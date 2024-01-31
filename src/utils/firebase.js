import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyt828bQ_YtQCLnFdr3ZXavIKmvrZzm5Y",
  authDomain: "locke-connect.firebaseapp.com",
  projectId: "locke-connect",
  storageBucket: "locke-connect.appspot.com",
  messagingSenderId: "396499824399",
  appId: "1:396499824399:web:520cb224ff8a6314f8187a",
  measurementId: "G-HX7X2E0KPM",
};

const firebase =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase;

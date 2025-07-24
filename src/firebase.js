// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0vJDEQd1-vscK593WXBcV5CUnilExzxk",
  authDomain: "friend-forum.firebaseapp.com",
  projectId: "friend-forum",
  storageBucket: "friend-forum.appspot.com", // fixed typo here
  messagingSenderId: "808779196455",
  appId: "1:808779196455:web:45c06d17c8775a68420602",
  databaseURL: "https://friend-forum-default-rtdb.firebaseio.com", // you must add this!
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

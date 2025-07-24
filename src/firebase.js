// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // ✅ THIS IS NEEDED

const firebaseConfig = {
  apiKey: "AIzaSyB0vJDEQd1-vscK593WXBcV5CUnilExzxk",
  authDomain: "friend-forum.firebaseapp.com",
  projectId: "friend-forum",
  storageBucket: "friend-forum.appspot.com", // ✅ fixed the typo: was .app → now .com
  messagingSenderId: "808779196455",
  appId: "1:808779196455:web:45c06d17c8775a68420602",
  measurementId: "G-6ED111TN87",
  databaseURL: "https://friend-forum-default-rtdb.firebaseio.com" // ✅ IMPORTANT: Realtime DB URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// ✅ Export the database instance
export const db = getDatabase(app);
// test push take 2
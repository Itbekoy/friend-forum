// Import core Firebase and Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB0vJDEQd1-vscK593WXBcV5CUnilExzxk",
  authDomain: "friend-forum.firebaseapp.com",
  projectId: "friend-forum",
  storageBucket: "friend-forum.firebasestorage.app",
  messagingSenderId: "808779196455",
  appId: "1:808779196455:web:45c06d17c8775a68420602",
  measurementId: "G-6ED111TN87",
  databaseURL: "https://friend-forum-default-rtdb.firebaseio.com" // ✅ IMPORTANT: Realtime DB URL
};

/// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firestore
const db = getFirestore(app);

// Export the database instance to use in your app
export { db };
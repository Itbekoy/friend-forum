// src/App.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, push, onValue } from "firebase/database";

function App() {
  const [dogwaterCount, setDogwaterCount] = useState(0);

  // Set up listener to count "dogwater" entries in the DB
  useEffect(() => {
    const messagesRef = ref(db, "test-messages/");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) {
        setDogwaterCount(0);
        return;
      }
      const values = Object.values(data);
      const count = values.filter((msg) => msg === "dogwater").length;
      setDogwaterCount(count);
    });
  }, []);

  // Button click handler
  const handleAddDogwater = () => {
    const messagesRef = ref(db, "test-messages/");
    push(messagesRef, "dogwater");
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>Dogwater Counter Test 🐶💦</h1>
      <button onClick={handleAddDogwater}>Add Dogwater</button>
      <p>Total Dogwaters: {dogwaterCount}</p>
    </div>
  );
}

export default App;

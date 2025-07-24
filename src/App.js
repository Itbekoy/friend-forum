// App.jsx or wherever your button is
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

function App() {
  const [count, setCount] = useState(0);

  // Load the counter from Firebase on first render
  useEffect(() => {
    const fetchCounter = async () => {
      const counterRef = doc(db, "counters", "coyCounter");
      const docSnap = await getDoc(counterRef);

      if (docSnap.exists()) {
        setCount(docSnap.data().value);
      } else {
        // If no counter yet, set to 0
        await setDoc(counterRef, { value: 0 });
      }
    };

    fetchCounter();
  }, []);

  // Handle click and update Firebase
  const handleClick = async () => {
    const counterRef = doc(db, "counters", "coyCounter");
    const newCount = count + 1;

    await updateDoc(counterRef, { value: newCount });
    setCount(newCount);
  };

  return (
    <div className="App">
      <h1>COY Counter</h1>
      <p>You've clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
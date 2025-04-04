import { useState } from "react";
import { Footer } from "./Footer";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React App</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Footer />
    </div>
  );
}

export default App;

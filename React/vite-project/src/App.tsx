import { useState } from "react";
import reactLogo from "https://cdn.example.com/react.svg";
import viteLogo from "https://cdn.example.com/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Counter />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

function Footer() {
  return (
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  );
}

export default App;

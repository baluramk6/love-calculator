import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Love from "./components/Love";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Love />
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Love from "./components/Love";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box w="100%" h="100vh">
      <Navbar />
      <Love />
      <Footer />
    </Box>
  );
}

export default App;

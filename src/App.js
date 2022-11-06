import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./components/styles/Global.styled";
import { BrowserRouter as Br, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Br>
      <GlobalStyles />
      <Navbar />
    </Br>
  );
}

export default App;

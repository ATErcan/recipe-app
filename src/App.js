import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./components/styles/Global.styled";
import { BrowserRouter as Br, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Br>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Br>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import { GlobalStyles } from "./components/styles/Global.styled";
import { BrowserRouter as Br, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <Br>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Br>
    </LoginContext.Provider>
  );
}

export default App;
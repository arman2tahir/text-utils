import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'
import Alert from "./components/Alert";

function App() {
  const [isDark, setIsDark] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }



  const toggleMode = () => {
    if (isDark === "light") {
      setIsDark("dark");
      document.body.classList.add("dark");
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setIsDark("light");
      document.body.classList.remove("dark");
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <Router>
      <NavBar toggleMode={toggleMode} mode={isDark} btnText={isDark === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/text-utils" element={<TextForm mode={isDark} showAlert={showAlert}/>} />
        <Route path="/text-utils/about" element={<About mode={isDark} />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from 'react'

function App() {
  const [isDark, setIsDark] = useState("light");


    const toggleMode = () =>{
      if(isDark === "light"){
        setIsDark("dark");
        document.body.classList.add("dark");
      }
      else{
        setIsDark("light");
        document.body.classList.remove("dark");


      }

      console.log("hello")
    }
  return (
    <Router>
      <NavBar toggleMode={toggleMode} mode={isDark} btnText={isDark === 'dark' ? 'Disable Dark Mode' : 'Enable Dark Mode'}/>
      <Routes>
      <Route path="/" element={<TextForm mode={isDark}/>}/>
      <Route path="/about" element={<About mode={isDark}/>}/>
      </Routes>
    </Router>
  );
}

export default App;

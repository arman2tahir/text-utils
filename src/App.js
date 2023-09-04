import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" Component={TextForm}/>
      <Route path="/about" Component={About}/>
      </Routes>
    </Router>
  );
}

export default App;

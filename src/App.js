import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="lg:mx-96">
        <Introduction />
      </div>

      <About />

      <Skills id="skills" />

      <Projects id="projects" />

      <div className="fixed bottom-16 left-8 z-20">
        <Socials />
      </div>

      <p className="text-primary">Yiğit Arısoy &copy; 2022</p>
    </div>
  );
}

export default App;

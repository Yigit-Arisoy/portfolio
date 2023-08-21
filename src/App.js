import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="sticky inset-0 z-0 h-screen">
        <Introduction />
      </div>

      <div className="relative z-10">
        <About />
      </div>

      <div className="relative z-10">
        <Skills id="skills" />
      </div>
      <div className="relative z-10">
        <Projects id="projects" />
      </div>

      <div className="fixed bottom-16 left-8 z-20">
        <Socials />
      </div>

      <div id="contact" className="bg-bgMain relative z-10">
        Contact
      </div>

      <div className="relative z-20">
        <p className="text-primary bg-bgMain pt-16 mb-2 ">
          Yiğit Arısoy &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default App;

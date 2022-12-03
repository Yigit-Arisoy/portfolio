import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div className="lg:mx-96">
        <Introduction />
      </div>

      <Fade left big>
        <About />
      </Fade>

      <Fade>
        <Skills />
      </Fade>

      <div className="fixed bottom-16 left-8 z-20">
        <Socials />
      </div>
    </div>
  );
}

export default App;

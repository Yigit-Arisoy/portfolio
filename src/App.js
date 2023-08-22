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
import ContactStuff from "./components/ContactStuff";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".mainElement");

      elements.forEach((element, i) => {
        const top = element.getBoundingClientRect().top;
        if (top <= 0) {
          if (element.classList.contains("sticky")) return;
          console.log(element.id, "top 0dan dusuk oldu, top: ", top);
          element.classList.add(`sticky`);
          element.classList.add(`inset-0`);
          element.classList.add(`z-[${i}]`);
          element.classList.remove("relative");
          element.classList.remove("z-10");
        } else {
          if (!element.classList.contains("relative")) {
            console.log(element.id, "top 0dan buyuk oldu, top: ", top);
            element.classList.remove(`sticky`);
            element.classList.remove(`inset-0`);
            element.classList.remove(`z-[${i}]`);
            element.classList.add("relative");
            element.classList.add("z-10");
          }
        }
      });
    };
    if (window.innerWidth > 768)
      window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div id="intro" className="sticky inset-0 z-0 h-screen">
        <Introduction />
      </div>

      <div id="about" className="relative z-10 mainElement">
        <About />
      </div>

      <div id="skills" className="relative z-10 mainElement">
        <Skills />
      </div>
      <div id="projects" className="relative z-10 mainElement">
        <Projects />
      </div>

      <div className="fixed bottom-16 left-8 z-20">
        <Socials />
      </div>

      <div className="relative z-10 mainElement bg-bgMain">
        <ContactStuff />
      </div>

      <div id="contact" className="bg-bgMain relative z-10 mainElement">
        Contact
      </div>

      <div className="relative z-20 mainElement">
        <p className="text-primary bg-bgMain pt-16 mb-2 ">
          Yiğit Arısoy &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default App;

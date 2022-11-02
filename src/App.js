import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/Alert/AlertContext";
function App() {
  return (
    <div className="App">
      <GithubProvider>
        <AlertProvider>
          <Router>
            <div className="">
              <Navbar />

              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path={`/users/:login`} element={<User />} />
                </Routes>
              </main>

              <Footer></Footer>
            </div>
          </Router>
        </AlertProvider>
      </GithubProvider>
    </div>
  );
}

export default App;

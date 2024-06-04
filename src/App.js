import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import MoveToTop from "./Components/MoveToTop";
import DotLoader from 'react-spinners/DotLoader';

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <DotLoader
            color="#113c87"
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Nav />
          <MoveToTop />
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

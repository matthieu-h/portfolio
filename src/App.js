import React from "react";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <BurgerMenu />
      <Home />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
};

export default App;

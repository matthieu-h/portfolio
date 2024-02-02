import React from "react";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./components/Home";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <BurgerMenu />
      <Home />
      <Skills />
    </div>
  );
};

export default App;

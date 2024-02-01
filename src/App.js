import React from "react";
import Navbar from "./components/Navbar";
import BurgerMenu from "./components/BurgerMenu";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <BurgerMenu />
      <Home />
    </div>
  );
};

export default App;

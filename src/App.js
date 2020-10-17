import React from "react";
import "./App.css";
import Greeting from "./Components/Greeting";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Greeting />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

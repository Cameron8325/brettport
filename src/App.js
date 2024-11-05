import React from "react";
import { About } from "./components/AboutMe";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar.jsx";
import { FactsForYou } from './components/FactsForYou.jsx';

import "./App.css"; // Add any global styles here

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <Navbar />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Facts Section */}
      <FactsForYou />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;

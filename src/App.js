import React from "react";
import "./App.css"; // Import the global CSS file
import Navbar from "./components/Navbar";
import About from "./components/About";
import Certifications from "./components/Certifications";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      {" "}
      {/* Apply the CSS class here */}
      <Navbar />
      <div id="home">
        <h1>Welcome to my portfolio</h1>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="certifications">
        <Certifications />
      </div>
      <div id="projects">
        <ProjectList />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;

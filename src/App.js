import React from "react";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import TechStack from "./components/TechStack/TechStack";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="main-item">
        {/* header */}
        <Header></Header>

        {/* profile */}
        <Profile></Profile>

        {/* Tech stacks */}
        <TechStack></TechStack>

        {/* My projects */}
        <Project></Project>

        {/* Contact me */}
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;

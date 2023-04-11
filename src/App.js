import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        {/* <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          Download Source Code
        </a>{" "} */}
         Developed by{" "}
        <a target="_blank" href="https://github.com/rayarka26">
          Arkaprava Ray
        </a>{" "}
        | React Developer
        
      </div>
    </>
  );
}

export default App;

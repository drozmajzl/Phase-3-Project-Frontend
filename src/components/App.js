import React from 'react';
import '../App.css';
import './NavBar.js';
import { useState, useEffect } from 'react';


function App() {
  const [buildings, setBuildings] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/buildings")
      .then((r) => r.json())
      .then((b) => setBuildings(b));
  }, []);

  return (
    <div id="title">
      <NavBar/>
      <h1>Build Your Own Mid-Century Modern Architectural Tour!</h1>
    </div>
  );
}

export default App;

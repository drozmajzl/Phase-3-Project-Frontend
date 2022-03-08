import React from 'react';
import '../App.css';
import NavBar from './NavBar.js';
import Agenda from './Agenda';
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
      <Agenda buildings={buildings} />
    </div>
  );
}

export default App;
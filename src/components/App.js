import React from 'react';
import '../App.css';
import NavBar from './NavBar.js';
import Agenda from './Agenda';
import { useState, useEffect } from 'react';


function App() {
  const [buildings, setBuildings] = useState([])
  const archNames = [] 
  const cityNames = []

  useEffect(() => {
    fetch("http://localhost:9292/buildings")
      .then((r) => r.json())
      .then((b) => setBuildings(b));
  }, []);

  
  
  buildings.forEach(c => {
    if (!archNames.includes(c.architect.full_name)){
      archNames.push(c.architect.full_name)
    }
  })

  return (
    <div id="title">
      <NavBar archNames={archNames}/>
      <h1>Build Your Own Mid-Century Modern Architectural Tour!</h1>
      <Agenda buildings={buildings} />
    </div>
  );
}

export default App;

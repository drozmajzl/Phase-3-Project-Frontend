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

  function handleAddBuilding(){
    fetch("http://localhost:9292/buildings")
      .then((r) => r.json())
      .then((b) => setBuildings(b.reverse()));
  }

  function handleDelete(b){
    const revisedList = buildings.filter(building => building.id !== b);
    fetch(`http://localhost:9292/buildings/${b}`, {
      method: 'DELETE',
  })
    setBuildings(revisedList);
  }
  
  buildings.forEach(c => {
    if (!archNames.includes(c.architect.full_name)){
      archNames.push(c.architect.full_name)
    }
  })

  return (
    <div id="title">
      <h1 id="app_title">Build Your Own Mid-Century Modern Architectural Tour!</h1>
      <NavBar archNames={archNames} handleAddBuilding={handleAddBuilding}/>
      <Agenda buildings={buildings} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

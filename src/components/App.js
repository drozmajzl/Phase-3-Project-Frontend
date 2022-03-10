import { Switch, Route, useRouteMatch } from 'react-router-dom';
import React from 'react';
import '../index.css';
import AddBuilding from './AddBuilding';
import Agenda from './Agenda';
import Info from './Info';
import NavBar from './NavBar';
import CitiesInfo from './CitiesInfo';
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
  // <h1 id="app_title">Build Your Own Mid-Century Modern Architectural Tour!</h1>
  return (
    <div id="title">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Agenda buildings={buildings} handleDelete={handleDelete} />
        </Route >
        <Route path="/info">
          <Info />
          <CitiesInfo />
        </Route>
        <Route path="/add">
          <AddBuilding archNames={archNames} handleAddBuilding={handleAddBuilding}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

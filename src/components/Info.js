import React, { useState } from 'react';

function Info() {
    let architect_id;
    const [ architect, setArchitect ] = useState('')
    const [ info, setInfo ] = useState({})
    const locations =[]

    function handleSubmit() {
        fetch(`http://localhost:9292/architects/${architect}/info`)
            .then((r) => r.json())
            .then((b) => setInfo(b));

    }
    
            if (info.locations)
            {
                info.locations.forEach(c => {
                if (!locations.includes(c)){
                  locations.push(c)
                }
              })
            }
        
    const displayInfo = (
        <div>
            <p>Number of Buildings: {info.number}</p>
            <p>Building Locations: {locations.join(", ")}</p>
            <p>Oldest Building (Year Built): {info.oldest}</p>
            <p>Most Recent Building (Year Built): {info.newest}</p>
        </div>
    )

    let form = (
        <div className="info-container">
            <label>Architect Details</label>
            <br></br>
                <select name="category" className="dropdown" value={architect} onChange={(e) => setArchitect(e.target.value)}>
                    <option value="select">Select architect...</option>
                    <option value="1">Albert Frey</option>
                    <option value="2">Alvar Aalto</option>
                    <option value="3">Arne Jacobsen</option>
                    <option value="4">Charles and Ray Eames</option>
                    <option value="5">E. Stewart Williams</option>
					<option value="6">Eero Saarinen</option>
					<option value="7">Frank Lloyd Wright</option>
					<option value="8">Gerrit Rietveld</option>
					<option value="9">Le Corbusier</option>
					<option value="10">Ludwig Mies Van Der Rohe</option>
					<option value="11">Marcel Breuer</option>
					<option value="12">Oscar Niemeyer</option>
					<option value="13">Paul R Williams</option>
					<option value="14">Pierre Koenig</option>
					<option value="15">Walter Gropius</option>
					<option value="16">William Pereira</option>
                </select>
            <br></br>
            <button className="button" type="submit" onClick={handleSubmit}>Get Details!</button>
        </div>
    )

    return (
        <div className="info-box">
            {form}
            {displayInfo}
        </div>
    )
}

export default Info;
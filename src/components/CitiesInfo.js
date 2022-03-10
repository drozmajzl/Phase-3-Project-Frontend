import React, { useState } from "react";

function CitiesInfo (){
const [city, setCity] = useState('')
const [info, setInfo] = useState({})

    function handleSubmit() {
        if (city != "select" && city != ""){
        fetch(`http://localhost:9292/cities/${city}/info`)
            .then((r) => r.json())
            .then((b) => setInfo(b));
        }
    }


    let detailDisplay = (<div></div>)
    let displayInfo = (<div></div>)
    let oneBuilding = (<div></div>)

    if (info){
      
        detailDisplay= (<div>
        <p>Oldest Building (Year Built): {info.oldest} </p>
        <p>Most Recent Building (Year Built): {info.newest}</p>
        </div>
    )
            oneBuilding = (
                <div>
                    <p>Only Building (Year Built): {info.oldest}</p>
                </div>
            )
    }

    if (info.city_buildings){
        
        const x = info.city_buildings.map((o) => 
            <ul key={o.architect_name}>
                <p>Architect: {o.architect_name}</p>
                <p>Buildings: {o.buildings.join(", ")}</p>
            </ul>
        )

    displayInfo = (
        <div>
            <h3>Buildings in the City:</h3>
         {x}
        {info.city_buildings.length === 1 ? oneBuilding : detailDisplay}
    </div>
    )
}


    let form = (
        <div className="info-container">
            <h3>City Details</h3>
                <select name="category" className="dropdown" value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="select">Select city...</option>
					<option value="13">Berlin</option>
					<option value="12">Bologna</option>
					<option value="16">Brasília</option>
					<option value="15">Curitiba</option>
					<option value="18">Dessau-Roßlau</option>
					<option value="6">Dulles</option>
					<option value="2">Helsinki</option>
					<option value="19">Irvine</option>
					<option value="5">Los Angeles</option>
					<option value="9">Mill Run</option>
					<option value="7">New York City</option>
					<option value="10">Oak Park</option>
                    <option value="1">Palm Springs</option>
					<option value="14">Plano</option>
                    <option value="3">Riola</option>
                    <option value="4">Skovshoved</option>
					<option value="8">St. Louis</option>
					<option value="11">Utrecht</option>
					<option value="17">West Hollywood</option>
                </select>
            <br></br>
            <br></br>
            <button className="button-35" type="submit" onClick={handleSubmit}>Get Details!</button>
        </div>
    )


    return(
        <div className="info-box">
            {form}
            {displayInfo}
        </div>
    )
}

export default CitiesInfo;
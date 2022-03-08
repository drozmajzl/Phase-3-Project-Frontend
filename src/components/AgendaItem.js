import React from "react";

function AgendaItem({name, city, opened, architect, architect_id, city_id, image_url, map_location, description, id}){

    return(
        <div className="building_container">
        <h3>{name}</h3>
        <p>Architect: {architect.full_name}</p>
        <p>Completed: {opened}</p>
        <p>City: {city.name}</p>
        
        </div>
    )
}

export default AgendaItem;
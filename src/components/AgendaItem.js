import React from "react";

function AgendaItem({handleDelete, name, city, opened, architect, architect_id, city_id, image_url, map_location, description, id}){

    return(
        <div className="building_container">
            <div className="text_div">
                <h4>{name}</h4>
                <p>Architect: {architect.full_name}</p>
                <p>Completed: {opened}</p>
                <p>City: {city.name}</p>
            </div>
           
            <img className="card_image" src={image_url}></img>
            <button className="button-35" id="delete_button" onClick={()=>handleDelete(id)}>Delete</button>
        </div>
    )
}

export default AgendaItem;
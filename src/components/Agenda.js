import React from "react";
import AgendaItem from "./AgendaItem";

function Agenda( { buildings } ){

    const displayItem = buildings.map(b => {
        return(
            <AgendaItem 
                key={b.id}
                name={b.name}
                opened={b.opened}
                city={b.city}
                architect={b.architect}
                architect_id={b.architect_id}
                city_id={b.city_id}
                image_url={b.image_url}
                map_location={b.map_location}
                description={b.description}
                id={b.id}
            />
        )
    })
    
    return(
        <div className="card_container">
            {displayItem}
        </div>
    )
}

export default Agenda;
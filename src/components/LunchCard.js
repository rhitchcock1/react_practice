import React from "react";


function LunchCard({lunch}){
    return(
        <div>
         <h2>{lunch.name}</h2>
         <img src={lunch.image} alt={lunch.name} />
         <p>{lunch.details}</p>
         <h3>${lunch.price}</h3>
        </div>
    )
}

export default LunchCard;
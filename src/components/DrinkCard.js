import React from 'react';


function DrinkCard({drink}){
    return(
        <div>
         <h2>{drink.name}</h2>
         <img src={drink.image} alt={drink.name} />
         <p>{drink.details}</p>
         <h3>${drink.price}</h3>
        </div>
    )
}

export default DrinkCard;
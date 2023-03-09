import React from 'react';

function BreakfastCard({breakfast}){
    return(
        <div>
        <h2>{breakfast.name}</h2>
        <img src={breakfast.image} alt={breakfast.name} />
        <p>{breakfast.details}</p>
        <h3>${breakfast.price}</h3>
       </div>
    )
}
export default BreakfastCard
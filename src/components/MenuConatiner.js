import React, { useState, useEffect } from 'react';
import DrinkCard from './DrinkCard';
import BreakfastCard from './BreakfastCard';
import LunchCard from './LunchCard';


function MenuContainer(){
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        fetch(" http://localhost:3001/drinks")
        .then(res => res.json())
        .then(setDrinks)
    }, [])

    const drinkCard=drinks.map((drink)=>{
        return (
            <DrinkCard key={drink.name} drink={drink} />
    
        )})
   const [breakfast, setBreakfast]=useState ([]) 
   useEffect(() => {
    fetch(" http://localhost:3001/breakfast")
    .then(res => res.json())
    .then(setBreakfast)
    }, [])
    const breakfastCard= breakfast.map((breakfastObj)=>{
    return (
        <BreakfastCard key={breakfastObj.name} breakfast={breakfastObj} />

    )})
    const [lunches, setLunches]=useState ([]) 
    useEffect(() => {
     fetch(" http://localhost:3001/lunch")
     .then(res => res.json())
     .then(setLunches)
     }, [])
     const lunchCard= lunches.map((lunch)=>{
     return (
         <LunchCard key={lunch.name} lunch={lunch} />
 
     )})


    return(
        <div>
        <div className="drinks">
            <h1>Drinks</h1>
        {drinkCard}
        </div>
        <div className="breakfast">
            <h1>Breakfast</h1>
        {breakfastCard}
        </div>
        <div className="lunch" >
            <h1>Lunch</h1>
        {lunchCard}
        </div>
        </div>
    )
}

export default MenuContainer
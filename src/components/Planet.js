import React, { useState, useEffect } from "react";
import axios from 'axios';

const Planet = (props) => {
    const [planet, setplanet] = useState({})
    const [error, setError] = useState("")


    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${props.id}`)
        .then(response => {console.log(response.data); setplanet(response.data); setError(false)})
        .catch(err => {setError(true);} )

    }, [props.id]);
    if (error) { return (<div>
        <h2>These are not the droids you're looking for!</h2>
        <img src="https://i.pinimg.com/originals/bc/80/f2/bc80f2f4671fc690da0a456cfdbcd020.jpg" alt="Obi-Wan Kenobi image" style={{width: '480px', height:'362px'}}></img>
    </div>)} else {
    return (
        <div>
            <h1> {planet.name}</h1>
            <p><span>Climate:</span> {planet.climate}</p>
            <p><span>Terrain:</span> {planet.terrain}</p>
            <p><span>Surface-Water:</span> { planet.surface_water}</p>
            <p><span>Population:</span> {planet.population}</p>
        </div>
        
    )}
}
export default Planet;
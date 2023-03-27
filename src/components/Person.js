import React, { useState, useEffect } from "react";
import axios from 'axios';
const Person = (props) => {
    const [person, setPerson] = useState({})
    const [error, setError] = useState(props.error)

    useEffect( () => {
        axios.get(`https://swapi.dev/api/people/${props.id}`)
        .then(response => {console.log(response.data); setPerson(response.data); setError(false)})
        .catch(err => {setError(true);} )
    }, [props.id]);
    console.log(`This is my ${error}`);
    if (error) { return (<div>
        <h2>These are not the droids you're looking for!</h2>
        <img src="https://gritdaily.com/wp-content/uploads/2021/01/Obi-Wan.png" alt="Obi-Wan Kenobi image" style={{width: '672px', height:'427px'}}></img>
    </div>)} else {
    return (
        <div>
            <h1> {person.name}</h1>
            <h2>Good!</h2>
            <p><span>Height:</span> {person.height}</p>
            <p><span>Hair-Color:</span> {person.hair_color}</p>
            <p><span>Eye-Color:</span> { person.eye_color}</p>
            <p><span>Skin-Color:</span> {person.skin_color}</p>
        </div>
        
    )}
}
export default Person;
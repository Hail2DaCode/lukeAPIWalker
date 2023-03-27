import React, { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';


const LukeForm = (props) => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewId(id);
        {category == "people"?navigate(`/people/${id}`): navigate(`/planets/${id}`)};
        
    }
    return (
        <form onSubmit = { handleSubmit }>
            <label htmlFor="category">Search for:</label>
            <select name="category" id="category" onChange={(e) => { setCategory(e.target.value); console.log("click")}}>
                <option value="" >Please select a category</option>
                <option value = "people"  >people</option>
                <option value = "planets"  >planets</option>
            </select>
            <label htmlFor="id">ID:</label>
            <input type="number" name="id" onChange={(e) => setId(e.target.value) } value={id}></input>
            <button type="submit">Search</button>
        </form>
    )
}
export default LukeForm;
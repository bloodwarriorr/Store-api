import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function DeleteIngrediant() {
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const dellIngrediant = async () => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`https://localhost:44329/api/Ingrediant/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <div> <h1>Delete By Id:</h1>
            <p>Id:</p><input onChange={(e) => setId(e.target.value)}></input>
            <button onClick={() => dellIngrediant()}>Delete Ingrediant</button>
            <br />
            <button onClick={() => navigate("/")}>Back To Main List</button>
        </div>
    )
}

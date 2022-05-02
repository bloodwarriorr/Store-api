import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function DeleteIngrediant() {
    const [storeid, setStoreId] = useState("");
    const navigate = useNavigate();
    const dellStore = async () => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
        };

        fetch(`https://store-api-managment.herokuapp.com/store/${storeid}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    return (
        <div> <h1>Delete By Id:</h1>
            <p>Store Id:</p><input onChange={(e) => setStoreId(e.target.value)}></input>
            <button onClick={() => dellStore()}>Delete Store</button>
            <br />
            <button onClick={() => navigate("/")}>Back To Main List</button>
        </div>
    )
}

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function IngrediantCard() {
  const { state } = useLocation()


  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const navigate = useNavigate();
  const IngrediantFunc = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "Id": id,
      "Name": name,
      "Calories": calories
    });

    var requestOptions = {
      method: state === "add" ? 'POST' : 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://localhost:44329/api/Ingrediant/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }



  return (
    <div>
      <h1>{state === "add" ? "Add Ingrediant" : "Edit Ingrediant"}</h1>
      <p>Id:</p>
      <input onChange={(e) => setId(e.target.value)}></input>
      <p>Name:</p>
      <input onChange={(e) => setName(e.target.value)}></input>
      <p>Calories:</p>
      <input onChange={(e) => setCalories(e.target.value)}></input>
      <br />
      <button onClick={() => IngrediantFunc()}>{state === "add" ? "Add Ingrediant" : "Edit Ingrediant"}</button>
      <br />
      <button onClick={() => navigate("/")}>Back To Main List</button>
    </div>
  );
}
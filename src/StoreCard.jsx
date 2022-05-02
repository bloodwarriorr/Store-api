import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function StoreCard() {
  const { state } = useLocation()


  const [storeId, setStoreId] = useState("");
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");
  const [storeProducts, setStoreProducts] = useState({});
  const navigate = useNavigate();
  const StoreFunc = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "storeId": storeId,
      "storeName": storeName,
      "address": storeAddress,
      "products":storeProducts
    });

    var requestOptions = {
      method: state === "add" ? 'POST' : 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://store-api-managment.herokuapp.com/store/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }



  return (
    <div>
      <h1>{state === "add" ? "Add Store" : "Edit Store"}</h1>
      <p>Store Id:</p>
      <input onChange={(e) => setStoreId(e.target.value)}></input>
      <p>Store Name:</p>
      <input onChange={(e) => setStoreName(e.target.value)}></input>
      <p>Store Address:</p>
      <input onChange={(e) => setStoreAddress(e.target.value)}></input>
      <br />
      <p>Store Products:</p>
      <p>Product Id:</p>
      <input onChange={(e) => setStoreProducts({...storeProducts,prodId:e.target.value})}></input>
      <p>Product Name:</p>
      <input onChange={(e) => setStoreProducts({...storeProducts,name:e.target.value})}></input>
      <p>Product Sale Price:</p>
      <input onChange={(e) => setStoreProducts({...storeProducts,salePrice:e.target.value})}></input>
      <br />
      <button onClick={() => StoreFunc()}>{state === "add" ? "Add Store" : "Edit Store"}</button>
      <br />
      <button onClick={() => navigate("/")}>Back To Main List</button>
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
export default function Main() {

    const [storeData, setStoreData] = useState([])
    const [storeId, setStoreId] = useState("")
    let param = ""



    const navigate = useNavigate()
    useEffect(() => {
        getAllData()
    }, [])
    const getAllData = async (id = null) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let fetch_string = id === null ? "http://localhost:8080/store/" :
            `http://localhost:8080/store/${id}`


        await fetch(fetch_string, requestOptions)
            .then(response => response.text())
            .then(result => { JSON.parse(result) === null || id === "" ? setStoreData([]) : setStoreData(JSON.parse(result)) })
            .catch(error => console.log('error', error));
    }




    const dealWithStore = (param) => {
        console.log(param)
        if (param === "add") {
            navigate('/StoreCard', { state: "add" })
        }
        else if (param === "edit") {
            navigate('/StoreCard', { state: "edit" })
        }
        else {
            navigate('/DeleteStore')
        }


    }




    return (
        < div className="app">
            <p>Stores List</p>
            <button onClick={() => getAllData(storeId)}>Get By ID</button>  <input onChange={e => setStoreId(e.target.value)}></input>
            <br />
            <button onClick={() => getAllData()}>Get All</button>
            <br />
            <button onClick={() => dealWithStore(param = "add")}>Add Store</button>
            <br />
            <button onClick={() => dealWithStore(param = "edit")}>Edit Store</button>
            <br />
            <button onClick={() => dealWithStore(param = "delete")}>Delete By Id</button>

            <div className='list_container'>
                {storeData.length !== undefined && storeData.length > 1 ?
                    storeData.map((store, index) => <Card key={index} StoreData={store} />) : storeData.length !== 0 ?
                        < Card StoreData={storeData[0]} /> : null}
            </div>
        </div >
    )

}
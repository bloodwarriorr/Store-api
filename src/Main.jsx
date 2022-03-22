
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
export default function Main() {

    const [IngrediantData, setIngrediant] = useState([])
    const [id, setId] = useState("")
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
        let fetch_string = id === null ? "https://localhost:44329/api/Ingrediant/" :
            `https://localhost:44329/api/Ingrediant/${id}`


        await fetch(fetch_string, requestOptions)
            .then(response => response.text())
            .then(result => { JSON.parse(result) === null || id === "" ? setIngrediant([]) : setIngrediant(JSON.parse(result)) })
            .catch(error => console.log('error', error));
    }




    const dealWithIngrediant = (param) => {
        console.log(param)
        if (param === "add") {
            navigate('/IngrediantCard', { state: "add" })
        }
        else if (param === "edit") {
            navigate('/IngrediantCard', { state: "edit" })
        }
        else {
            navigate('/DeleteIngrediant')
        }


    }




    return (
        < div className="app">
            <p>Ingrediant List</p>
            <button onClick={() => getAllData(id)}>Get By ID</button>  <input onChange={e => setId(e.target.value)}></input>
            <br />
            <button onClick={() => getAllData()}>Get All</button>
            <br />
            <button onClick={() => dealWithIngrediant(param = "add")}>Add Ingrediant</button>
            <br />
            <button onClick={() => dealWithIngrediant(param = "edit")}>Edit Ingrediant</button>
            <br />
            <button onClick={() => dealWithIngrediant(param = "delete")}>Delete By Id</button>

            <div className='list_container'>
                {IngrediantData.length !== undefined && IngrediantData.length > 1 ?
                    IngrediantData.map((Ingrediant, index) => <Card key={index} IngrediantData={Ingrediant} />) : IngrediantData.length !== 0 ?
                        < Card IngrediantData={IngrediantData} /> : null}
            </div>
        </div >
    )

}
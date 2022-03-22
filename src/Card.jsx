import React from 'react'

export default function Card(props) {

    return (
        <div style={{ border: '1px solid black', marginTop: '20px' }}>
            <p>Id:{props.IngrediantData.id}</p>
            <p>Name:{props.IngrediantData.name}</p>
            <p>Calories:{props.IngrediantData.calories}</p>
        </div>
    )
}
import React from 'react'
import ProductCard from './ProductCard'

export default function Card(props) {
  
    let product=props.StoreData.products.map((prod)=><ProductCard key={prod.prodId} id={prod.prodId} name={prod.name} salePrice={prod.salePrice}/>)
  
    return (
        <div style={{ border: '1px solid black', marginTop: '20px' }}>
            <p>Id:{props.StoreData.storeId}</p>
            <p>Name:{props.StoreData.storeName}</p>
            <p>address:{props.StoreData.address}</p>
            <div>products:{product}</div>
        </div>
    )
}
import React from 'react'

export default function ProductCard(props) {
  return (
    <div>
        <br /><br />
    <p>product id:{props.id}</p>
    <p>product name:{props.name}</p>
    <p>sale price:{props.salePrice}</p>
    </div>
  )
}

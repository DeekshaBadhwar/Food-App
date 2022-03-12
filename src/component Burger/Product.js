import React from 'react'

export default function Product(props) {
    const { product ,onAdd} = props;
    console.log(product,"mainto bad")
    return (
        <div>
      
        <h3>{product.food}</h3>
        <div>₹ {product.price}</div>
        <div>
          <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>
      </div>

  )
}

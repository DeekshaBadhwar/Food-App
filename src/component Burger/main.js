import React from 'react'
import Product from './Product';

export default function Main(props) {
const  { products,onAdd,onRemove }=props;

    console.log(products,"prop")

  return (
  
    <main className="block col-2">
      <h2>Burger King</h2>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} onRemove={onRemove} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  
   
  )
}

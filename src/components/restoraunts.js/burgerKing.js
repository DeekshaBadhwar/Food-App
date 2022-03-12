import React, { useState } from 'react'
import  {Products} from './items'

export default function Burgerking() {
  const [item,setItem]=useState(Products[2])

console.log(item.food,"uyfg")
  return (
    <div>
      <h1>Welcome to {item.restrauntsName}</h1>
      <h2 >{item.food.map(item=>{
       <div key={item.id}>
         {console.log(item.food,"ujn")}
         <h1>{item.food} </h1>
         <h2>{item.price} </h2>
       </div>
      })}  </h2>
    <div>
      <button >Add To Cart</button>
    </div>
  </div>
  )
}

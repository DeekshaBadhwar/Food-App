import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { Button, Input } from 'semantic-ui-react';
import { Products } from './items';

export default function Coffee() {

  const [item,setItem]=useState(Products[2].food)
const addCart=[{
foodName:'',
qantity:1
}]

const [cart,setCart]=useState(addCart)

const increment=()=>{
  setCart({...cart,qantity:cart.qantity + 1})
} 
const decrement=()=>{
  setCart({...cart,qantity:cart.qantity - 1})
}
// const selectedFood

// handle click event of the Remove Button
const handleRemoveClick = index => {
  const carts = [...cart];
  carts.splice(index, 1);
  setCart(carts);
};

// handle click event of the Add Button
const handleAddClick = () => {
  setCart([...cart, { qantity: 1, foodName: "" }]);
};


const onsubmit=(e)=>{
  e.preventDefault();
  const carts=[]
  carts.push(cart)
  console.log(carts,"cart ready")
}
  console.log(cart,"coffe")
  return (
    <div>
      {cart.map((x,i)=>{
       return (
          <>
        <Form.Select value={x.foodName}   onChange={(e)=>{
 
  setCart({...cart,foodName:e.targetvalue } 
    )
}} >

{item.map(items=>(
  <option value={items}>{items}</option>
))}

</Form.Select>
<Button onClick={increment}>+</Button>
<Input value={x.qantity}/>
<Button onClick={decrement}>-</Button>
<Button onClick={onsubmit}>Submit</Button>
        
         <div className="btn-box">
              {cart.length !== 1 && <Button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</Button>}
              {cart.length - 1 === i && <Button onClick={handleAddClick}>Add</Button>}
            </div>
        </>
       )
        
      })} 
      
      </div>
  )
}


import React from 'react'
import { Container } from '@mui/material';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Products } from './items';
import { Button, Input } from 'semantic-ui-react';

export default function Dominos(props) {

const addCart=
  {
   foodName:'',
   quantity:1

}
const [item,setItem]=useState(Products[0].food)
const [price,setPrice] =useState(Products[0].price)
console.log(item,"p")
console.log(props)

const [cart,setCart]=useState([addCart]);
const [counter,setCounter]=useState(addCart)

const increment=()=>{
  setCounter({...counter, quantity: addCart.quantity + 1})
  console.log(counter,"lkjhgfds")
 }

const decrement=()=>{
  setCounter({...counter, quantity: addCart.quantity - 1})
  console.log(addCart.quantity,"l")
  }


  const selectedFood=(e)=>{
    
setCounter({...counter,foodName:e.target.value})
console.log(counter.foodName,"ppp")

  }
 const onsubmit=(e)=>{
   e.preventDefault()
   const item = [];
   item.push(counter)
   console.log(item,"cart ready ")
 }

 
let addFormFields = () => {
  setCart([...cart, { foodName: "", quantity: 1 }])
}

let removeFormFields = (i) => {
  let newcart = [...cart];
  newcart.splice(i, 1);
  setCart(newcart)
}


  return (      
<div style={{color:'MenuText'}}>
  
       <h1>Welcome to the Dominos Delivery !!!!</h1>
       
  {cart.map((element,index)=>(
    <div key={index}>
     <Form.Select onChange={selectedFood} value={counter.foodName || " "} name="foodname"aria-label="Default select example" >
 {item.map((item)=>(
  <option value={item}>{item} </option>
 ))}  
 </Form.Select> <Button  onClick={increment} >+</Button>
 <Input type='number' value={counter.quantity}/>
 <Button onClick={decrement}>-</Button>
     
     {index ? <Button type='button ' onClick={()=>removeFormFields(index)}>Remove</Button>
     : null }
         
     {/* <Link to="/order"  > */}
    
               {/* </Link> */}
   </div>
  ))}   

<div className="button-section">
              <Button className="button add" type="button" onClick={() => addFormFields()}>Add</Button>
              <Button className="button submit" type="submit" onClick={onsubmit}>Submit</Button>
          </div>
</div>
  
  )
}

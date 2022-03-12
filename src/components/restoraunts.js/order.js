import{ React, useState} from 'react'
import { Table } from 'react-bootstrap'
// import Dominos from './Dominos'
// import { useState } from 'react'

export default function Order({quantity,addCart}) {

    const [item,setItem]=useState()


  return (
    <div>
        <Table striped bordered hover variant="dark">
           
       {console.log(quantity,addCart)}
  <thead>
    <tr>
      <th>Food selected</th>
      <th>quantity</th>
    </tr>
  </thead>
  <tbody>
  
        <tr>
          {/* <td></td> */}
          {/* <td>{item.quantity}</td> */}
          <td>{addCart}</td>
        </tr>

          
       
   
    
  </tbody>
</Table>
    </div>
  )
}

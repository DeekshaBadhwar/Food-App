
import React from 'react'
import { Button, Form,Col,Row, InputGroup} from 'react-bootstrap'

export default function Mcd() {




  return (
    <>
     <h1>Welcome to McDcd Delivery!!!!!!!!!!!!!!!</h1>
      
     <Row><Col>   </Col>
    <Col  xs={9}><Form.Select  size="lg"style={{maxWidth:'35%'}} aria-label="Default select example">
  <option>select from this menu</option>
  <option value="vegBurger">VegBurger</option>
  <option value="Fries">Fries</option>
  <option value="largeBurger">Large Burger</option>
  <option value="Smiles">Smiles</option>
  <option value="drinks">drinks</option>
</Form.Select></Col> 
    {/* <Row> */}
      <Col xs lg="8">
        {/* button variant="secondary">+</button> */}
    <input type="number"/>
    {/* <button variant="secondary">-</button> */}
    </Col>
 

<Col xs lg="7"><Button variant="primary">Add</Button></Col>
</Row>
    </>
  )
}

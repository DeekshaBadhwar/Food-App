
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Drop() {

 
  return (
    <div>
      <DropdownButton id="dropdown-item-button" title="Check out your Fav Restasurants">
        
<Dropdown.Item href="/dominos">Dominos</Dropdown.Item> 
<Dropdown.Item href="/burgerking">Burger King</Dropdown.Item>
 <Dropdown.Item href="/coffeeday">Coffee Day</Dropdown.Item>
     </DropdownButton>
    </div>
  )
}
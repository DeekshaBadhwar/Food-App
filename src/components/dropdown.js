import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Products} from './restoraunts.js/items'
import { useState } from 'react';

export default function Drop() {

  const [item,setItem]=useState(Products)
console.log(item)
  return (
    <div>
      <DropdownButton id="dropdown-item-button" title="Check out your Fav Restasurants">
        
        {item.map((element)=>

          <Link to={element.restrauntsName}><Dropdown.Item href={element.restrauntsName}>{element.restrauntsName}</Dropdown.Item></Link>
          
        )}

        {/* <Link to='/burgerking'>  <Dropdown.Item as="button">Burger King</Dropdown.Item></Link>
        <Link to='/mcd'>  <Dropdown.Item as="button">Mc donals</Dropdown.Item></Link>
        <Link to='/pizzahut'><Dropdown.Item as="button">Pizza Hut</Dropdown.Item></Link>
        <Link to='/pizzahood'>  <Dropdown.Item as="button">Pizza Hood</Dropdown.Item></Link>
        <Link to='/domino'><Dropdown.Item as="button">Dominos</Dropdown.Item></Link> */}
      </DropdownButton>
    </div>
  )
}

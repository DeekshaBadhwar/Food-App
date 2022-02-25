import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function Drop() {
  return (
    <div>
      <DropdownButton id="dropdown-item-button" title="Check out your Fav Restasurants">
      <Dropdown.ItemText>List</Dropdown.ItemText>

  <Dropdown.Item as="button" href="">Burger King</Dropdown.Item>
  <Dropdown.Item as="button" href="">Mc donals</Dropdown.Item>
  <Dropdown.Item as="button" href="">Pizza Hut</Dropdown.Item>
  <Dropdown.Item as="button" href="">Pizza Hood</Dropdown.Item>
  <Dropdown.Item as="button" href="">Dominos</Dropdown.Item>
</DropdownButton>
    </div>
  )
}

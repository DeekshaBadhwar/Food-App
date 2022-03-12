import React from 'react';
import Drop from './dropdown';

export default function home() {
  return (
    <div>
      <header className="row block center">
      <div>
        <a href="#/">
          <h1>Food App                </h1>
        </a>
      </div>
      <div>
        <a href="#/cart">Cart </a> 
      </div>
    </header>
      <Drop/>
    
    </div>
  )
}

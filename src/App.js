import React from 'react'
import Domino from './component/Domino'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home'
import Burgerking from './component Burger/BurgerKing';
import Coffeday from './component Coffe Day/coffeeday';

export default function App() {
  return (
    <div>
 <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          {/* <Route path="pizzahut" element={<PizzaHut />} /> */}
          <Route path='dominos' element={<Domino/>}></Route>
          <Route path="burgerking" element={<Burgerking />} />
          
          <Route path="coffeeday" element={<Coffeday />} />
     
      </Routes>
    </BrowserRouter>

    </div>
  )
}

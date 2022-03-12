import logo from './logo.svg';
import './App.css';
import Home from './components/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PizzaHut from './components/restoraunts.js/pizzaHut';
import Dominos from './components/restoraunts.js/Dominos';
import Mcd from './components/restoraunts.js/mcd';
import Coffee from './components/restoraunts.js/coffeeday';
import Burgerking from './components/restoraunts.js/burgerKing';
import Order from './components/restoraunts.js/order';



function App() {
  return (
   <div className='App'> 

   <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route path="pizzahut" element={<PizzaHut />} />
          <Route path='dominos' element={<Dominos/>}></Route>
          <Route path="mcd" element={<Mcd />} />
          <Route path="coffeeday" element={<Coffee />} />
          <Route path="burgerking" element={<Burgerking />} />
          <Route path="order" element={<Order/>}/>
          
          
      
      </Routes>
    </BrowserRouter>
      
        </div>
  );
}

export default App;

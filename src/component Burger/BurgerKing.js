import React,{useState} from 'react'
import { data } from './data'
import Main from './main'
import Header from './Header';
import Cart from './cart';


export default function Burgerking() {

    const products  = data;
    const [cartItems, setCartItems] = useState([]);
    
    const onAdd = (products) => {
      const exist = cartItems.find((x) => x.id === products.id);
      console.log(exist,"plol")
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...products, qty: 1 }]);
      }
    };
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
  return (
    <div className="App">
      <Header ></Header>
    <div className="row">
        <Main products={products} onAdd={onAdd} onRemove={onRemove}/>
        <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Cart>

    </div>
    </div>
  )
}

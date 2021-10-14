import './cart.css';
import { useEffect, useState } from 'react';
import CartItem from '../cart_item/CartItem.js';

export default function Cart(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let count = 0;
    const DATA = props.data;
    for (let prop in DATA) {
      if (DATA[prop] !== 0) {
        const COMPONENT = (
          <CartItem key={count} planet={prop} amount={DATA[prop]} />
        );
        setItems((prevState) => {
          return [...prevState, COMPONENT];
        });
      }
      count++;
    }
  }, [props]);
  return (
    <main id='cart_main'>
      <div>{items}</div>
    </main>
  );
}

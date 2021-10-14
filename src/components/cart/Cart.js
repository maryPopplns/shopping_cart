import './cart.css';
import { useEffect, useState } from 'react';
import CartItem from '../cart_item/CartItem.js';
import { PLANET_IMAGES, PLANET_COSTS } from '../../helpers/planets.js';

export default function Cart(props) {
  const [items, setItems] = useState([]);
  const [displayTotal, setDisplayTotal] = useState(0);

  useEffect(() => {
    const DATA = props.data;
    let total = 0;
    for (let planet in DATA) {
      const AMOUNT = DATA[planet];
      const PRICE = PLANET_COSTS[planet];
      const UNIT_TOTAL = AMOUNT * PRICE;
      total += UNIT_TOTAL;
    }
    setDisplayTotal(total);
  }, [props]);

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
      {displayTotal !== 0 && (
        <div style={{ color: 'white' }}>Total: ${displayTotal}</div>
      )}
    </main>
  );
}

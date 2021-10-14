import { PLANET_IMAGES, PLANET_COSTS } from '../../helpers/planets.js';
import './cartItem.css';

export default function CartItem(props) {
  const PLANET = props.planet;
  const AMOUNT = props.amount;
  console.log(PLANET);
  console.log(AMOUNT);
  return (
    <div className='cart_item_container'>
      <img
        className='cart_planet_img'
        src={PLANET_IMAGES[PLANET]}
        alt={PLANET}
      />
      <div>Cost: {PLANET_COSTS[PLANET] * AMOUNT}</div>
    </div>
  );
}

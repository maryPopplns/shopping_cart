import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { PLANET_IMAGES, PLANET_COSTS } from '../../helpers/planets.js';
import './planetModal.css';

export default function PlanetModal(props) {
  let { planetId } = useParams();
  const [inputValue, setInputValue] = useState(0);

  function show_scroll() {
    document.body.style.overflow = '';
  }
  const CONTAINER_STYLE = {
    position: 'fixed',
    right: '0.5em',
    top: '4em',
    height: '2em',
    width: '2em',
  };
  const ICON_STYLE = {
    fontSize: '3em',
    color: 'white',
  };

  function inputChangeHandler(event) {
    setInputValue(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const PLANET = event.target.getAttribute('planet');
    const INPUT = +event.target.getAttribute('input');
    props.setCart((prevState) => {
      const UPDATED = { ...prevState };
      UPDATED[PLANET] = UPDATED[PLANET] + INPUT;
      return UPDATED;
    });
  }

  return (
    <div id='planet_modal'>
      <Link onClick={show_scroll} to='/shop' style={CONTAINER_STYLE}>
        <i style={ICON_STYLE} className='far fa-arrow-alt-circle-left'></i>
      </Link>
      <div className='modal_title'>{planetId}</div>
      <img
        src={PLANET_IMAGES[planetId]}
        alt={planetId}
        className='planet_img_modal'
      />
      <div className='modal_cost'>${PLANET_COSTS[planetId]}.00</div>
      <form
        onSubmit={submitHandler}
        className='planet_modal_form'
        input={inputValue}
        planet={planetId}
      >
        <input
          min='0'
          value={inputValue}
          type='number'
          className='amount_input'
          onChange={inputChangeHandler}
        />
        <button>add to cart</button>
      </form>
    </div>
  );
}

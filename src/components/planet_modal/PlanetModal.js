import { useParams, Link } from 'react-router-dom';
import { PLANET_IMAGES, PLANET_COSTS } from '../../helpers/planets.js';
import './planetModal.css';

export default function PlanetModal() {
  let { planetId } = useParams();

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
    color: 'black',
  };

  return (
    <div id='planet_modal'>
      <Link onClick={show_scroll} to='/shop' style={CONTAINER_STYLE}>
        <i style={ICON_STYLE} className='far fa-arrow-alt-circle-left'></i>
      </Link>
      <div>{planetId}</div>
      <img
        src={PLANET_IMAGES[planetId]}
        alt={planetId}
        className='planet_img_modal'
      />
      <div>${PLANET_COSTS[planetId]}.00</div>
    </div>
  );
}

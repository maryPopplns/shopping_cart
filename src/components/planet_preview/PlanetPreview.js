import './planetPreview.css';
import { PLANET_IMAGES } from '../../helpers/planets.js';

export default function PlanetPreview(props) {
  const { planet } = props;

  const PLANET_STYLE = {
    fontSize: '2em',
    fontFamily: '"Asap", sans-serif',
    marginTop: '.5em',
  };

  return (
    <div className='planet_container'>
      <h2 style={PLANET_STYLE}>{planet}</h2>
      <img src={PLANET_IMAGES[planet]} alt={planet} className='planet_img' />
    </div>
  );
}

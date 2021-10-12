import './planetPreview.css';
import PLANETS from '../../helpers/planets.js';

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
      <img src={PLANETS[planet]} alt={planet} className='planet_img' />
    </div>
  );
}

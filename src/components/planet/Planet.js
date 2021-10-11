import './planet.css';
import earth from '../../assets/earth.jpg';
import jupiter from '../../assets/jupiter.jpg';
import mars from '../../assets/mars.jpg';
import mercury from '../../assets/mercury.jpg';
import neptune from '../../assets/neptune.jpg';
import saturn from '../../assets/saturn.jpg';
import venus from '../../assets/venus.jpg';
import uranus from '../../assets/uranus.jpg';

export default function Planet(props) {
  const { planet } = props;
  const PLANETS = {
    earth: earth,
    jupiter: jupiter,
    mars: mars,
    mercury: mercury,
    neptune: neptune,
    saturn: saturn,
    venus: venus,
    uranus: uranus,
  };
  const PLANET_PATH = PLANETS[planet];
  return (
    <div className='planet_container'>
      <div>{props.data}</div>
      <img src={PLANET_PATH} alt={planet} className='planet_img' />
    </div>
  );
}

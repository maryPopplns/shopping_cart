import { useEffect, useState } from 'react';
import Planet from '../planet/Planet.js';
import './shop.css';

export default function Shop() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const PLANET_IMAGES = [
      'earth',
      'jupiter',
      'mars',
      'mercury',
      'neptune',
      'saturn',
      'uranus',
      'venus',
    ];
    PLANET_IMAGES.forEach((planet, index) => {
      setPlanets((prevState) => {
        return [...prevState, <Planet key={index} planet={planet} />];
      });
    });
  }, [setPlanets]);

  return <main id='shop_main'>{planets}</main>;
}

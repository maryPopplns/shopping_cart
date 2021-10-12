import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PlanetPreview from '../planet_preview/PlanetPreview.js';
import './shop.css';

export default function Shop() {
  const [planets, setPlanets] = useState([]);
  const { path, url } = useRouteMatch();

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
        return [
          ...prevState,
          <Link to={`${url}/${planet}`}>
            <PlanetPreview key={index} planet={planet} />
          </Link>,
        ];
      });
    });
  }, [setPlanets, url]);

  return (
    <>
      <main id='shop_main'>{planets}</main>
      <Switch>
        <Route path={`${path}/:planetId`}>
          {/* <div></div> */}
          {/* <Topic /> */}
        </Route>
      </Switch>
    </>
  );
}

import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PlanetPreview from '../planet_preview/PlanetPreview.js';
import PlanetModal from '../planet_modal/PlanetModal.js';
import './shop.css';

export default function Shop() {
  const [planets, setPlanets] = useState([]);
  const { path, url } = useRouteMatch();

  function hide_scroll() {
    document.body.style.overflow = 'hidden';
  }

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
          <Link onClick={hide_scroll} key={index} to={`${url}/${planet}`}>
            <PlanetPreview planet={planet} />
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
          <PlanetModal />
        </Route>
      </Switch>
    </>
  );
}

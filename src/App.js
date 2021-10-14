import './App.css';
import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Shop from './components/shop/Shop.js';
import Cart from './components/cart/Cart.js';

function App() {
  const [cart, setCart] = useState([]);
  // will be pushing object with the product name, price, and the amount of units

  function cartHandler(event) {
    event.preventDefault();
    const PLANET = event.target.getAttribute('planet');
    const INPUT = event.target.getAttribute('input');
    console.log(PLANET);
    console.log(INPUT);
  }

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop'>
          <Shop cartHandler={cartHandler} />
        </Route>
        <Route path='/cart'>
          <Cart data={cart} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

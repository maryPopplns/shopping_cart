import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Shop from './components/shop/Shop.js';
import Cart from './components/cart/Cart.js';

function App() {
  const [cart, setCart] = useState({
    Earth: 0,
    Jupiter: 0,
    Mars: 0,
    Mercury: 0,
    Neptune: 0,
    Saturn: 0,
    Uranus: 0,
    Venus: 0,
  });

  return (
    <>
      <Header data={cart} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop'>
          <Shop setCart={setCart} />
        </Route>
        <Route path='/cart'>
          <Cart data={cart} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

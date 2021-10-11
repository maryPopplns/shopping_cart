import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Home from './components/home/Home.js';
import Shop from './components/shop/Shop.js';
import Cart from './components/cart/Cart.js';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;

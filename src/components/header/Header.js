import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(props) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    const DATA = props.data;
    for (let prop in DATA) {
      if (DATA[prop] !== 0) {
        count++;
      }
    }
    setCartCount(count);
  }, [setCartCount, props]);

  return (
    <header>
      <h1 id='nav_bar_title'>Planet Store</h1>
      <nav id='header_nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/cart'>
            <i className='fas fa-shopping-cart'></i>
          </Link>
          <div id='cart_count'>{cartCount}</div>
        </li>
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
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
        </li>
      </nav>
    </header>
  );
}

import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <nav id='header_nav'>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/shop'>Shop</Link>
      </li>
    </nav>
  );
}

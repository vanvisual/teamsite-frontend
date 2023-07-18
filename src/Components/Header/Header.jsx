import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (

    <div id='header'>
      <Link id="headerlogo" to={"/"}>VanVisual</Link>
      <nav>
        <ul className='navbar'>

          <li className='navbar__item'>
            <NavLink to="/contact" className="navbar__item--request">
              Request a design
            </NavLink>
          </li>

          <li className='navbar__item'>
            <NavLink to="/" className="navbar__item--link">
              Home
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink to="/projects/" className="navbar__item--link">
              Our Work
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink to="/about" className="navbar__item--link">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>

  )
}

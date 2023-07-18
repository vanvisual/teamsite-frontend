import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div id='header'> 
      <Link id="headerlogo" to={"/"}>VanVisual</Link>
      <nav>
        <ul className='navbar'>
          <li className='navbar__item'>
            <NavLink to="/" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li className='navbar__item'>
            <NavLink to="/projects/" activeclassname="active">
              Our Work
            </NavLink>
          </li> 
          <li className='navbar__item'>
            <NavLink to="/contact" activeclassname="active">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>


    </div>
  )
}

import './Header.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (

    <div id='header'>
      <Link className="headerlogo" to={"/"}>
        <span className='headerlogo__van'>Van</span><span className='headerlogo__visual'>Visual</span>
      </Link>
      <nav id='navbar'>
        <ul className='navlist'>

          <li className='navlist__item navlist__item--request'>
            <Link to="/contact" className="navlist__item--request">
              Request a design
            </Link>
          </li>

          <li className='navlist__item'>
            <NavLink to="/" className="navlist__item--link">
              Home
            </NavLink>
          </li>
          <li className='navlist__item'>
            <NavLink to="/projects/" className="navlist__item--link">
              Our Work
            </NavLink>
          </li>
          <li className='navlist__item'>
            <NavLink to="/about" className="navlist__item--link">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>

  )
}

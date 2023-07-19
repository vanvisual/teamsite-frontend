import { Link, NavLink } from 'react-router-dom';
import { useToggleClass } from '../../utils/functions';

import './Header.scss';

export default function Header() {
  const [isHamburgerOpen, toggleHamburger] = useToggleClass(false);

  const handleNavLinkClick = () => {
    if (isHamburgerOpen) {
      toggleHamburger();
    }
  };

  return (
    <div id='header'>
      <Link className="headerlogo" to={"/"}>
        <span className='headerlogo__van'>Van</span><span className='headerlogo__visual'>Visual</span>
      </Link>

      {/* Navbar */}
      <nav className={`navbar ${isHamburgerOpen ? 'ham-active' : ''}`}>
        <ul className='navlist'>
          <li className='navlist__item navlist__item--request'>
            <Link to="/contact" className="navlist__item--request" onClick={handleNavLinkClick}>
              Request a design
            </Link>
          </li>
          <li className='navlist__item'>
            <NavLink to="/" className="navlist__item--link" onClick={handleNavLinkClick}>
              Home
            </NavLink>
          </li>
          <li className='navlist__item'>
            <NavLink to="/projects/" className="navlist__item--link" onClick={handleNavLinkClick}>
              Our Work
            </NavLink>
          </li>
          <li className='navlist__item'>
            <NavLink to="/about" className="navlist__item--link" onClick={handleNavLinkClick}>
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger menu */}
      <div className={`hamburger ${isHamburgerOpen ? 'burger-active' : ''}`} onClick={toggleHamburger}>
        <span className="hamburger__bar"></span>
        <span className="hamburger__bar"></span>
        <span className="hamburger__bar"></span>
      </div>
    </div>
  );
}

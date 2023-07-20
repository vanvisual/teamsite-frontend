import React, { useEffect, useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useToggleClass } from '../../utils/functions';
import { animateLetters } from '../../utils/functions';

import './Header.scss';

const Header = () => {
  const [isHamburgerOpen, toggleHamburger, isHamburgerClicked, setIsHamburgerClicked] = useToggleClass(false);
  const [delayedItems, setDelayedItems] = useState([]);
  const delayedItemsTimeoutsRef = useRef([]);

  useEffect(() => {
    if (isHamburgerOpen) {
      const navItems = document.querySelectorAll('.navlist__item');
      const delayTime = 500;

      delayedItemsTimeoutsRef.current = Array.from(navItems).map((item, index) =>
        setTimeout(() => {
          setDelayedItems((prevItems) => [...prevItems, index]);
        }, delayTime * index)
      );
    } else {
      setDelayedItems([]);
    }

    return () => {
      delayedItemsTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [isHamburgerOpen]);

  const handleNavLinkClick = () => {
    if (isHamburgerOpen) {
      toggleHamburger();
      setIsHamburgerClicked(true);
    }
  };

  useEffect(() => {
    animateLetters('.navlist__item--link');
  })

  return (
    <div id='header'>
      <Link className="headerlogo" to={"/"} onClick={handleNavLinkClick}>
        <span className='headerlogo__van'>Van</span><span className='headerlogo__visual'>Visual</span>
      </Link>

      {/* Navbar */}
      <nav className={`navbar ${isHamburgerOpen ? 'active' : ''}`}>
        <ul className='navlist'>
          <li className={`navlist__item navlist__item-1 navlist__item-1`}>
            <Link to="/contact" className="navlist__item--request" onClick={handleNavLinkClick}>
              Request a design
            </Link>
          </li>
          <li className={`navlist__item navlist__item-2 ${delayedItems.includes(1) ? 'delay' : ''}`}>
            <NavLink to="/" className="navlist__item--link" onClick={handleNavLinkClick} >
              Home
            </NavLink>
          </li>
          <li className={`navlist__item ${delayedItems.includes(2) ? 'delay' : ''}`}>
            <NavLink to="/projects/" className="navlist__item--link" onClick={handleNavLinkClick} >
              Our Work
            </NavLink>
          </li>
          <li className={`navlist__item ${delayedItems.includes(3) ? 'delay' : ''}`}>
            <NavLink to="/about" className="navlist__item--link" onClick={handleNavLinkClick} >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Hamburger menu */}
      <div className={`hamburger ${isHamburgerOpen ? 'active' : ''}`} onClick={toggleHamburger}>
        <span className="hamburger__bar hamburger__bar-1"></span>
        <span className="hamburger__bar hamburger__bar-2"></span>
        <span className="hamburger__bar hamburger__bar-3"></span>
      </div>
    </div>
  );
}

export default Header;
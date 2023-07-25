import './Footer.scss';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateLetters } from '../../utils/functions';

const Footer = () => {
    useEffect(() => {
        animateLetters('.footernav__link');
    }, []);

    return (
        <div id='footer'>
            <nav className='footernav'>
                <ul className='footernav__list'>
                    <li className='footernav__item'>
                        <Link to="/projects/" className='footernav__link'>Our Work</Link>
                    </li>
                    <li className='footernav__item'>
                        <Link to="/about" className='footernav__link'>About Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Footer;
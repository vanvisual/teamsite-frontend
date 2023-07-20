import './Footer.scss';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateLetters } from '../../utils/functions';


export default function Footer() {

    useEffect(() => {
        animateLetters('.footlist__item--link');
    })

    return (
        <div id='footer'>

            <nav className='footernav'>

                <ul className='footlist'>

                    <li className='footlist__item'>
                        <Link to="/projects/" className='footlist__item--link' >Our Work
                        </Link>
                    </li>
                    <li className='footlist__item'>
                        <Link to="/about" className='footlist__item--link' >About Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
} 
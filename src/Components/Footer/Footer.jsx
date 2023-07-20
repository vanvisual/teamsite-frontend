import './Footer.scss';
import { Link } from 'react-router-dom';

export default function Footer() {
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
import { Link } from 'react-router-dom';

import './FindHelp.scss';

const FindHelp = () => {
    return (
        <div className="findhelp">
            <h2 className="findhelp__title">Does this sound like something your business needs?</h2>
            <p className="findhelp__description">Let’s find out how we can help you</p>
            <Link to="/contact" className="findhelp__request btn" >
                Request a design
            </Link>


        </div>
    )
}

export default FindHelp

import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
// Components
import HomeHero from '../../Components/HomeHero/HomeHero';

const HomePage = () => {
  useDocumentTitle('Home - VanVisual.com');

  return (
    <div className="homepage">
      <HomeHero />

      <div className='space'>


      </div>
    </div>
  )
};

export default HomePage
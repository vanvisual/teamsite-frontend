import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
// Components
import HomeHero from '../../Components/HomeHero/HomeHero';
import Improvement from '../../Components/Improvement/Improvement';

const HomePage = () => {
  useDocumentTitle('Home - VanVisual.com');

  return (
    <div className="homepage">
      <HomeHero />

      <Improvement />

    </div>
  )
};

export default HomePage
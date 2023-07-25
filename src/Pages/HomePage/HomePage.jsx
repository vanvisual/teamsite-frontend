import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
// Components
import HomeHero from '../../Components/HomeHero/HomeHero';
import Improvement from '../../Components/Improvement/Improvement';
import Approach from '../../Components/Approach/Approach';
import FindHelp from '../../Components/FindHelp/FindHelp';

const HomePage = () => {
  useDocumentTitle('Home - VanVisual.com');

  return (
    <div className="homepage">

      <HomeHero />
      <Improvement />
      <Approach />
      <FindHelp />

    </div>
  )
};

export default HomePage
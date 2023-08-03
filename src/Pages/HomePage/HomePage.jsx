import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
import {motion} from "framer-motion";
// Components
import HomeHero from '../../Components/HomeHero/HomeHero';
import Improvement from '../../Components/Improvement/Improvement';
import Approach from '../../Components/Approach/Approach';
import FindHelp from '../../Components/FindHelp/FindHelp';

const HomePage = () => {
  useDocumentTitle('Home - VanVisual.com');

  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1, transition:{duration: 2}}}
      className="homepage"
    >

      <HomeHero />
      <Improvement />
      <Approach />
      <FindHelp />

    </motion.div>
  )
};

export default HomePage
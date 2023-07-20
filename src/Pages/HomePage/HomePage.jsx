import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
// Components
import Hero from '../../Components/Hero/Hero';

export default function HomePage() {
  useDocumentTitle('Home - VanVisual.com');

  return (
    <div className="homepage">
        <Hero />
    </div>
  );

}
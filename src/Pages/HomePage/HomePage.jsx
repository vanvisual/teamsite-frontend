import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';

export default function HomePage() {
  useDocumentTitle('Home - VanVisual.com');

  return (
    <div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam possimus eius iusto illo, laudantium voluptate incidunt assumenda voluptatum necessitatibus asperiores exercitationem, error vero accusantium quaerat dolore iure doloribus et tempore?</p>
    </div>
  );

}
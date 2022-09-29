// == Import
import { useSelector } from 'react-redux';
import Page from './Page';
// Style
import './styles.scss';

// == Component
/* eslint-disable max-len */
function Pages() {
  const pages = useSelector((state) => (state.stories.stories.pages));
  console.log(pages);
  return (
    <div className="container">
      <div className="page-list">
        <p className="page-title">C'est Histoire d'un Yokaï pas content qui trouvait pas comment dynamiser son endpoint</p>
        <div className="page-list__list">
          <Page {...pages} />
          <div className="scrollbar" />
        </div>
      </div>
    </div>

  );
}

export default Pages;

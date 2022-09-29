// == Import

import Page from './Page';
// Style
import './styles.scss';

// == Component
/* eslint-disable max-len */
function Pages() {
  return (
    <div className="container">
      <div className="page-list">
        <p className="page-title">C'est Histoire d'un Yokaï pas content qui trouvait pas comment dynamiser son endpoint</p>
        <div className="page-list__list">
          <Page />
          <Page />
          <div className="scrollbar" />
        </div>
      </div>
    </div>

  );
}

export default Pages;

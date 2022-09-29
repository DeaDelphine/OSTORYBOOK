import './styles.scss';
import Page from './Page';

/* eslint-disable max-len */
function Pages() {
  return (
    <div className="container">
      <div className="page-list">
        <p className="page-title">C'est l'histoire de </p>
        <Page />
        <div className="page-list__list">
          <div className="scrollbar" />
        </div>
      </div>
    </div>

  );
}

export default Pages;

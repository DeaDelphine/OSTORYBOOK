import PropTypes from 'prop-types';

import './styles.scss';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

/* eslint-disable max-len */
function Page({
  id, title, content, Image,
}) {
  return (
    <div>

      <div className="page page-container" key={id}>
        <img className="page page-container__img" src={Image} alt="story-img" />
        <h2 className="page page-container__title">{title}</h2>
        <p className="page page-container__excerpt">{content}</p>

        <Link to="/histoire">
          <Button className="story story-container__button">Aller à la page XX </Button>
          <Button className="story story-container__button">Aller à la page XX </Button>
        </Link>
      </div>
    </div>
  );
}

Page.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
};

export default Page;

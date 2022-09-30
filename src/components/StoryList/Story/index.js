/* eslint-disable react/button-has-type */
/* eslint-disable max-len */

// == Import
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPages } from 'src/actions/pages';

import './styles.scss';

// == Composant
function Story({
  id, image, title, content, startPage,
}) {
  const dispatch = useDispatch();
  return (
    <div>

      <div className="story story-container" key={id}>
        <img className="story story-container__img" src={image} alt="story-img" />
        <h2 className="story story-container__title">{title}</h2>
        <p className="story story-container__excerpt">{content}</p>

        <Link to="/histoire">
          <button
            className="story story-container__button"
            onClick={(event) => {
              dispatch(fetchPages(id, startPage));
            }}
          >Commencer
          </button>
        </Link>
      </div>
    </div>
  );
}

Story.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  startPage: PropTypes.number.isRequired,
};

// == Export
export default Story;

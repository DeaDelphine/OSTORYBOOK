/* eslint-disable react/button-has-type */
/* eslint-disable max-len */

// == Import
import PropTypes from 'prop-types';
import storyIMG from 'src/assets/images/logo.png';

import './styles.scss';

// == Composant
function Story({
  id, image, title, content,
}) {
  return (
    <div>

      <div className="story story-container" key={id}>
        <img className="story story-container__img" src={image} alt="story-img" />
        <h2 className="story story-container__title">{title}</h2>
        <p className="story story-container__excerpt">{content}</p>
        <button className="story story-container__button">Commence </button>
      </div>
    </div>
  );
}

// Story.propTypes = {
//       id: PropTypes.number.isRequired
//       title: PropTypes.string.isRequired
//       content: PropTypes.string.isRequired
//       image: PropTypes.string.isRequired
//     };

// == Export
export default Story;

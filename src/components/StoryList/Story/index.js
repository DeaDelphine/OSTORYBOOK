/* eslint-disable max-len */

// == Import
import PropTypes from 'prop-types';
import storyIMG from 'src/assets/images/logo.png';

import './styles.scss';

// == Composant
function Story({
  title,
}) {
  return (
    <div className="story story-container">
      <img className="story story-container__img" src={storyIMG} alt="story-img" />
      <h2 className="story story-container__title">{title}</h2>
      <p className="story story-container__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolorem consectetur, deleniti est nam aliquid facere accusantium quasi odit culpa repudiandae rem sapiente at, laudantium eaque natus distinctio, debitis in.</p>
      <button className="story story-container__button" type="button">Commencer</button>
    </div>
  );
}

Story.propTypes = {
  title: PropTypes.string.isRequired,
};
// == Export
export default Story;

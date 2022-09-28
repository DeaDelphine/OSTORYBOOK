/* eslint-disable max-len */

// == Import
import PropTypes from 'prop-types';
import storyIMG from 'src/assets/images/logo.png';

import './styles.scss';

// == Composant
const Story = ({ stories }) => (
  
  <div>
    {stories.map((story) => (
      <><div className="story story-container" key={story.id}>
        <img className="story story-container__img" src={story.image} alt="story-img" />
        <h2 className="story story-container__title">{story.title}</h2>
        <p className="story story-container__excerpt">{story.content}</p>
      </div><button className="story story-container__button">Commencer</button></>
    ))} 
  </div>
);

Story.propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Story;

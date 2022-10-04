// == Import
import { useSelector } from 'react-redux';

import Story from './Story';

// Style
import './styles.scss';

// == Component

function StoryList() {
  const stories = useSelector((state) => state.stories.stories);

  return (
    <div className="container">
      <div className="story-list">
        <p className="story-subtitle">Veuillez choisir une histoire</p>
        <div className="story-list__list">
          <div className="scrollbar">
            {stories.map((story) => (
              <Story {...story} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// == Export
export default StoryList;

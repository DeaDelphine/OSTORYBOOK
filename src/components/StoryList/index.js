// == Import
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Story from './Story';

// Style
import './styles.scss';

// == Component
function StoryList() {
  // const { slug } = useParams();

  const title = useSelector((state) => state.stories.story.title);

  // if (!storylist) {
  //   return <Navigate to="/error" replace />;
  // }
  return (
    <div className="history history-list">
      <div className="story">
        <p>Veuillez choisir une histoire</p>
        <Story
          name={title}

        />
      </div>
    </div>
  );
}

// == Export
export default StoryList;

// == Import
import { useSelector } from 'react-redux';

import Story from './Story';

// Style
import './styles.scss';

// == Component

function StoryList() {
  const stories = useSelector((state) => state.stories.stories);
  // const { slug } = useParams();
  // if (!storylist) {
  //   return <Navigate to="/error" replace />;
  // }
  return (
    <div className="history history-list">
      <div className="story">
        <p className="story story-subtitle">Veuillez choisir une histoire</p>
        {stories.map((story) => (
          <Story {...story} />
        ))}
      </div>
    </div>
  );
}

// == Export
export default StoryList;
